import { defineConfig } from "rollup";
import run from "@rollup/plugin-run";
import resolve from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import pkg from "./package.json";

const dev = process.env.NODE_ENV !== "production";

export default defineConfig({
  input: "src/main.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" }
  ],
  plugins: [
    esbuild({}),
    resolve({
      extensions: [".ts", ".js"],
    }),
    dev &&
      run({
        args: ["-r", "dotenv/config"],
      }),
  ],
});
