import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "my-portfolio"; // リポジトリ名をここに記入

const nextConfig: NextConfig = {
  // 1. 静的書き出し（output: 'export'）の設定
  output: "export",

  // 2. 本番環境（GitHub Pages）でのディレクトリパスの調整
  // リポジトリ名が URL に含まれる場合に必要
  basePath: isProd ? `/${repoName}` : "",

  // 画像のパスなどを basePath に合わせる設定
  assetPrefix: isProd ? `/${repoName}/` : "",

  // 3. 画像最適化機能のオフ（静的書き出しではNext.jsのサーバー機能が使えないため）
  images: {
    unoptimized: true,
  },

  // その他、必要に応じて
  trailingSlash: true, // URLの末尾に / を付ける（GitHub Pagesとの相性が良い）
};

export default nextConfig;
