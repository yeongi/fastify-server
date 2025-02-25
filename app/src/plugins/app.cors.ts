import fastifyCors from "@fastify/cors";
import fp from "fastify-plugin";

export default fp(
  async (app) => {
    console.log("cors plugin 장착 !!");
    await app.register(fastifyCors, {
      preflightContinue: true,
    });
  },
  {
    name: "app.cors",
  },
);
