import { Hono } from "hono";
import { validator } from "hono/validator";
import { renderer } from "./renderer";
// import { tbValidator } from "@hono/typebox-validator";
import { zValidator } from "@hono/zod-validator";
import { insertTodoSchema } from "./typebox";

const app = new Hono();

app.get("*", renderer);

app
  .get("/", (c) => {
    return c.render(
      <>
        <h1>Hello!</h1>
        <input name="content" type="text" />
        <button hx-post="/add" hx-include='[name="content"]' hx-swap="none">
          add
        </button>
      </>
    );
  })
  .post("/add", zValidator("form", insertTodoSchema), async (c) => {
    const parseBody = await c.req.parseBody();
    const content = parseBody["content"];
    console.log(content);
    return c.json("200");
  });

export default app;
