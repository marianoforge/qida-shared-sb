import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { defineConfig } from "rollup";
import pkg from "./package.json" assert { type: "json" };

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    postcss({
      extensions: [".css"],
      minimize: true,
      extract: "dist/styles.css",
      modules: true,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: ["**/*.stories.tsx", "**/*.test.ts", "**/*.test.tsx"],
      useTsconfigDeclarationDir: true,
    }),
  ],
  external: ["react", "react-dom"],
});
