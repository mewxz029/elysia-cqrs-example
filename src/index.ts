import { Elysia } from "elysia";
import { appRoute } from "./app.route";
import securityPlugin from "./plugins/cors";

export const app = new Elysia();

app
  .use(securityPlugin)
  .use(appRoute)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

app
  .handle(
    new Request("http://localhost:3000/v1/user", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name: "Test", age: 25 }),
    }),
  )
  .then((x) => x.text())
  .then(console.log);

app
  .handle(new Request("http://localhost:3000/v1/product"))
  .then((x) => x.text())
  .then(console.log);
