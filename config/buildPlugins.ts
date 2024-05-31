import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, ProgressPlugin } from "webpack";
import { BuildOptions } from "./types/types";

export function buildPlugins({
  mode,
  paths,
}: BuildOptions): Configuration["plugins"] {
  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? "css/[name].[contenthash:8].css" : "css/[name].[contenthash:8].css",
      chunkFilename: isDev ? "css/[id].[contenthash:8].css" : "css/[id].[contenthash:8].css",
    }),
  ];

  if (isDev) {
    plugins.push(new ProgressPlugin());
  }

  return plugins;
}
