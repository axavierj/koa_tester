import Koa from "koa";
import send from "koa-send";
import koaStatic from "koa-static";
import baseRouter from "./routes/basic.mjs";

const app = new Koa();

app.use(koaStatic("public"));

app.use(async (ctx, next) => {
  if (ctx.path.startsWith("/api/")) {
    return next();
  }
  await send(ctx, "client/index.html");
});

app.use(baseRouter.routes());
app.use(baseRouter.allowedMethods());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
