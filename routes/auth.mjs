import Router from "koa-router";
import prisma from "../prisma/client.mjs";
import bcrypt from "bcryptjs";

const authRouter = new Router();

authRouter.post("/api/register", async (ctx, next) => {
  console.log(ctx.request.body);
  const { email, password, firstName, lastName } = ctx.request.body;
  //gen salt
  const salt = bcrypt.genSaltSync(10);
  // // Hash the password before storing it in the database

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    //check if the user exists
    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userExists) {
      ctx.status = 400;
      ctx.body = { message: "User already exists" };
      return;
    }
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: `${firstName} ${lastName}`,
      },
    });
    ctx.status = 201;
    ctx.body = { message: "User created successfully", user };
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = { message: "Error creating user" };
  }
});

export default authRouter;
