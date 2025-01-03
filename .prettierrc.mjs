/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports", // importを自動的にソート
    "prettier-plugin-tailwindcss", // TailwindCSSのクラス名を最適化
  ],
  // TailwindCSSのファイルをPrettierに認識させる
  tailwindFunctions: ["cn", "cva"],
  importOrder: [
    "<TYPES>",
    "^(react/(.*)$)|^(react$)|^(react-native(.*)$)",
    "^(next/(.*)$)|^(next$)",
    "^(expo(.*)$)|^(expo$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "<TYPES>^@acme",
    "^@acme/(.*)$",
    "",
    "<TYPES>^[.|..|~]",
    "^~/",
    "^[../]",
    "^[./]",
  ],
  // import 文の解析に使用される追加のパーサープラグインを指定
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  // 使用するTSのバージョンを指定
  importOrderTypeScriptVersion: "5.0.0",
  // アロー関数のパラメータをカッコで囲む
  arrowParens: "always",
  // 1行につき80文字まで
  printWidth: 80,
  singleQuote: false,
  // セミコロンは付けよう
  semi: true,
  // 末尾にカンマをつけよう
  trailingComma: "all",
  tabWidth: 2,
  // Markdownの文章が長い場合は折り返し
  proseWrap: "always",
};

export default config;
