import path from "path";
import { Configuration } from "webpack";
import { readdirSync } from "fs";
import HtmlWebpackPlugin from "html-webpack-plugin";

const entryPoints: Record<string, string> = {};
const htmlPlugins: HtmlWebpackPlugin[] = [];

const folders = readdirSync(path.resolve(__dirname, "src"));

folders.forEach((folder) => {
  const folderName = folder.toLowerCase();

  entryPoints[folderName] = `./src/${folderName}/${folderName}.tsx`;

  htmlPlugins.push(
    new HtmlWebpackPlugin({
      filename: `${folderName}.html`,
      template: `./src/${folderName}/${folderName}.html`,
      chunks: [folderName],
    })
  );
});

const config: Configuration = {
  entry: entryPoints,
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [...htmlPlugins],
  // ...other webpack configuration...
};

export default config;
