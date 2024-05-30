import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

const scssLoader = {
  test: /\.s[ac]ss$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  // use: ["style-loader", "css-loader", "sass-loader"],
};
const tsLoader = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  return [scssLoader, tsLoader];
}
