import fastifyAutoload from "@fastify/autoload";
import fastify from "fastify";
import path from "node:path";

export function makeApp() {
  const app = fastify({
    logger: true,
  });

  app.register(fastifyAutoload, {
    dir: path.resolve("./dist/plugins"),
  });

  app.get("/healthz", async () => {
    return {
      ok: true,
    };
  });

  return app;
}

console.log("makeApp.ts is loaded");
