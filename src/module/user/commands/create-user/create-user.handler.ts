import { ICommandHandler } from "elysia-cqrs";
import { CreateUserCommand } from "./create-user.command";

export class CreateUserHandler
  implements ICommandHandler<CreateUserCommand, string>
{
  execute(command: CreateUserCommand) {
    const { props } = command;
    return `New user with name ${props.name} age ${props.age} was created!`;
  }
}
