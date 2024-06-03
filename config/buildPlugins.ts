import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, DefinePlugin, ProgressPlugin } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({
  mode,
  paths,
  analyzer,
  platform,
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
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform), 
    })
  ];

  if (isDev) {
    plugins.push(new ProgressPlugin());
  }
  if (isProd) {
    analyzer && plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
