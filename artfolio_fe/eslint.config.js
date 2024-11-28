import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    root: true,
    files: ["/*.{js,mjs,cjs,ts,jsx,tsx}"], // 적용할 파일들
    languageOptions: {
      globals: globals.browser, // 전역 변수 설정
    },
    extends: [
      "airbnb-base",
      "airbnb-typescript/base",
      "prettier",
      pluginJs.configs.recommended, // 기본 JS 설정
      ...tseslint.configs.recommended, // TypeScript 설정
      pluginReact.configs.recommended, // React 기본 설정
    ],
    plugins: [
      "@typescript-eslint",
      "react", 
      "prettier"
    ],
    rules: {
      "prettier/prettier": ["error", { "semi": false }], // Prettier 규칙을 직접 설정
    },
  },
];