import "hono";
import { jsxRenderer } from "hono/jsx-renderer";

declare module "hono" {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: { title?: string }): Response;
  }
}

export const renderer = jsxRenderer(
  ({ children, title }) => {
    return (
      <html>
        <head>
          <link href="/static/style.css" rel="stylesheet" />
          <title>{title}</title>
          <script src="https://unpkg.com/htmx.org@1.9.8"></script>
        </head>
        <body>{children}</body>
      </html>
    );
  },
  {
    docType: true,
  }
);
