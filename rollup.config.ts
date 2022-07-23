import { defineConfig } from "rollup";
import run from "@rollup/plugin-run";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild'

const dev = process.env.NODE_ENV !== "production";

export default defineConfig({
  input: "src/main.ts",
  output: {
    file: "dist/main.js",
    format: "esm",
  },
  plugins: [
    esbuild({}),
    nodeResolve({}),
    dev && run({
      args: ["-r", "dotenv/config"],
    }),
  ],
});
