import type { Route } from "./+types/home";

export function loader({ context }: Route.LoaderArgs) {
  console.log("123123", context.app.env.COOKEI_SECRET);
}

export default function Home() {
  return <div>My First ServerSideRender App with react-router & fastify</div>;
}
