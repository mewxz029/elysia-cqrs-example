import Elysia from "elysia";
import { UserRoute } from "./module/user/user.route";
import { ProductRoute } from "./module/product/product.route";

export const appRoute = new Elysia({ name: "app-route", prefix: "/v1" })
  .use(UserRoute)
  .use(ProductRoute);
