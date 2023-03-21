import Koa from "koa";
import bodyParser from "koa-bodyparser";
import koaStatic from "koa-static";
import cors from "@koa/cors";
import authRouter from "./routes/auth.mjs";
import baseRouter from "./routes/basic.mjs";

const app = new Koa();

app.use(koaStatic("public"));
app.use(bodyParser());
app.use(cors());

app.use(baseRouter.routes());
app.use(authRouter.routes());
app.use(authRouter.allowedMethods());
app.use(baseRouter.allowedMethods());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
