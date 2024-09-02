import Elysia, { t } from "elysia";
import { cqrs } from "elysia-cqrs";
import { GetProductsQuery } from "./get-products.query";
import { GetProductsHandler } from "./get-products.handler";

export const GetProductsController = new Elysia().use(cqrs({})).get(
  "/",
  ({ query, queryMediator }) => {
    queryMediator.register(GetProductsQuery, new GetProductsHandler());
    return queryMediator.send(new GetProductsQuery(query));
  },
  {
    query: t.Object({
      page: t.Number({ default: 1 }),
    }),
    transform({ query }) {
      const page = +query.page;

      if (!Number.isNaN(page)) query.page = page;
    },
  },
);
