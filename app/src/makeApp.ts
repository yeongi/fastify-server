import fastifyAutoload from "@fastify/autoload";
import fastify from "fastify";

export function makeApp() {
  const app = fastify();

  app.register(fastifyAutoload, {});

  app.get("/healthz", async () => {
    return {
      ok: true,
    };
  });

  return app;
}
