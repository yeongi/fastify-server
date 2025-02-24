import fastify from "fastify";
import "dotenv-safe/config.js";

export function makeApp() {
  const app = fastify();

  app.get("/", async () => {
    return {
      data: "ok",
    };
  });

  app.get("/healthz", async () => {
    return {
      ok: true,
    };
  });

  return app;
}
