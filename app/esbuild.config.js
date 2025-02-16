import { pnpPlugin } from "@yarnpkg/esbuild-plugin-pnp";
import { build } from "esbuild";

build({
  plugins: [pnpPlugin()],
  entryPoints: ["./src/**/*.ts"],
  outdir: "dist",
  target: "node20",
  bundle: false,
  minify: false,
  sourcemap: false,
  format: "esm",
});
