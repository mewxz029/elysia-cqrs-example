import Elysia from "elysia";
import { GetProductsController } from "./queries/get-products/get-products.controller";

export const ProductRoute = new Elysia({
  name: "product-route",
  prefix: "/product",
}).use(GetProductsController);
