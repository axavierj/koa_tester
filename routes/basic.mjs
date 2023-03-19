import Router from "koa-router";
const baseRouter = new Router();

baseRouter.get("/api/users", async (ctx, next) => {
  // handle API request here
  ctx.body = { message: "Hello world" };
});

export default baseRouter;
