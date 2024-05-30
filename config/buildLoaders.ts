import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

const scssLoader = {
  test: /\.s[ac]ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: process.env.NODE_ENV === 'development',
        importLoaders: 1,
      },
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: process.env.NODE_ENV === 'development',
      },
    },
  ],
};

const tsLoader = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  return [scssLoader, tsLoader];
}
