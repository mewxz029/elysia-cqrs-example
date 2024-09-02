import { IQuery } from "elysia-cqrs";

interface IGetProductsQuery {
  page?: number;
}

export class GetProductsQuery extends IQuery {
  constructor(public props: IGetProductsQuery) {
    super();
  }
}
