import bearer from "@elysiajs/bearer";
import jwt from "@elysiajs/jwt";
import Elysia from "elysia";

export const adminAuthPlugin = (app: Elysia) =>
  app
    .use(bearer())
    .use(
      jwt({
        name: "adminJwt",
        secret: "MYJWT1234",
      }),
    )
    .derive(async ({ bearer, adminJwt }) => {
      if (!bearer) {
        throw new Error("Unauthorized");
      }
      const user = await adminJwt.verify(bearer);

      return {
        user,
      };
    });
