import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import unicorn from "eslint-plugin-unicorn";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.jsの推奨設定
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": typescript,   // TSのESLintルール
      "unicorn": unicorn,                 // JSルール
      "import": importPlugin,             // export/importに関するルール
    },
    languageOptions: {
      parser: typescriptParser, // TSのコード解析パーサー
      parserOptions: {
        // 型情報を取得する
        project: true,
      },
    },
    rules: {
      ...(typescript.configs?.["recommended-type-checked"]?.rules ?? {}),
      ...(typescript.configs?.["stylistic-type-checked"]?.rules ?? {}),
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"], // interfaceではなくtypeを使用
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // 未使用変数を警告するが、「_」で始まる引数は無視する
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        // Promiseの誤用を防ぐ
        "error",
        {
          checksVoidReturn: { attributes: false },
        },
      ],
      // ファイル名はハイフンで区切るケバブケースにする
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
        },
      ],
      "func-style": ["error", "declaration", { allowArrowFunctions: false }],
      "prefer-arrow-callback": ["error", { allowNamedFunctions: false }],     // arrow functionを推奨
      "import/no-default-export": "error", // デフォルトエクスポートを禁止する
    },
  },
  {
    files: [
      "**/page.tsx",
      "**/layout.tsx",
      "next.config.ts",
      "postcss.config.mjs",
      "tailwind.config.ts",
    ],
    rules: {
      "import/no-default-export": "off",        // これらのファイルではデフォルトエクスポートを許可
      "import/prefer-default-export": "error",  // デフォルトエクスポート推奨
    },
  },
  {
    ignores: ["src/components/ui/*", "*.md"]
  }
];

export default eslintConfig;