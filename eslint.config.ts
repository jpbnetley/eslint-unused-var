// eslint.config.js
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import typescriptEslint from 'typescript-eslint';

export default defineConfig(
  { files: ["**/*.ts"] },
  js.configs.recommended,
  typescriptEslint.configs.recommended,
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
);
