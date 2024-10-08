import Elysia, { t } from "elysia";
import { CreateUserCommand } from "./create-user.command";
import { cqrs } from "elysia-cqrs";
import { CreateUserHandler } from "./create-user.handler";

export const CreateUserController = new Elysia().use(cqrs({})).post(
  "/",
  ({ body, commandMediator }) => {
    commandMediator.register(CreateUserCommand, new CreateUserHandler());
    return commandMediator.send(new CreateUserCommand(body));
  },
  {
    body: t.Object({
      name: t.String(),
      age: t.Number(),
    }),
  },
);
