import path from "path";
import webpack from "webpack";

import { buildWebpack } from "./config/buildWebpack";
import { BuildMode, BuildPaths, BuildPlatform } from "./config/types/types";

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === "development";
  const outputDir = isDev ? "build" : "dist";

  const paths: BuildPaths = {
    public: path.resolve(__dirname, "public"),
    output: path.resolve(__dirname, outputDir),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop"
  });
  return config;
};
