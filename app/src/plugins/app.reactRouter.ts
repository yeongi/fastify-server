import { reactRouterFastify } from "@mcansh/remix-fastify/react-router";
import type {
  FastifyInstance,
  FastifyRequest,
  RawServerBase,
  RouteGenericInterface,
} from "fastify";
import fp from "fastify-plugin";

declare module "react-router" {
  interface AppLoadContext {
    app: FastifyInstance;
    req: FastifyRequest<RouteGenericInterface, RawServerBase>;
  }
}

export default fp(
  async (app) => {
    await app.register(reactRouterFastify, {
      buildDirectory: "dist/web",
      getLoadContext(req) {
        // fastigy에서 reaect-router에게 넘겨줄 수 있는 context를 주입 시킬 수 있음.
        // loader의 Context에서 사용가능
        return {
          app,
          req,
        };
      },
    });
  },
  {
    name: "react-router-fastify",
    dependencies: ["app.cors", "app.env", "app.gracefulShutDown"],
  },
);
