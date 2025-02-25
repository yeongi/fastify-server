import fastifyGracefulShutDown from "fastify-graceful-shutdown";
import fp from "fastify-plugin";

export default fp(
  async (app) => {
    await app.register(fastifyGracefulShutDown);
    app.log.info("gracefulShutdown plugin 장착 !!");
  },
  {
    name: "app.gracefulShutDown",
  },
);
