import Elysia from "elysia";
import { CreateUserController } from "./commands/create-user/create-user.controller";

export const UserRoute = new Elysia({ name: "user", prefix: "/user" }).use(
  CreateUserController,
);
