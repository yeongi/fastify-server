import fp from "fastify-plugin";

export default fp(
  async (app) => {
    console.log("cors plugin 장착 !!");
    // await app.register(fastifyCors, {});
  },
  {
    name: "app.cors",
  },
);
