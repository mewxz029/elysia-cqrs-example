import { IQueryHandler } from "elysia-cqrs";
import { GetProductsQuery } from "./get-products.query";

export class GetProductsHandler
  implements IQueryHandler<GetProductsQuery, string>
{
  execute(query: GetProductsQuery): string {
    const { props } = query;
    return "get product page " + props?.page;
  }
}
