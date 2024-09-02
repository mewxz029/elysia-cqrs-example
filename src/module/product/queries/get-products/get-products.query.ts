import { IQuery } from "elysia-cqrs";

interface IGetProductQuery {
  page?: number;
}

export class GetProductsQuery extends IQuery {
  constructor(public props: IGetProductQuery) {
    super();
  }
}
