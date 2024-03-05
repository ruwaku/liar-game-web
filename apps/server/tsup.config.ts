import { Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],
  splitting: false,
  clean: true,
  ...options,
}));
