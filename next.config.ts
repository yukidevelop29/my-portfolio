import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // 本番環境のみパスを付与し、開発環境(npm run dev)では空にする
  basePath: isProd ? "/my-portfolio" : "",
  assetPrefix: isProd ? "/my-portfolio" : "",
  images: {
    unoptimized: true,
  },
  // 静的書き出し時にURLの末尾にスラッシュを付けてディレクトリ構造を安定させる
  trailingSlash: true,
};

export default nextConfig;
