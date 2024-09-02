import { ICommand } from "elysia-cqrs";

interface ICreateUserCommand {
  name: string;
  age: number;
}

export class CreateUserCommand extends ICommand {
  constructor(public props: ICreateUserCommand) {
    super();
  }
}
