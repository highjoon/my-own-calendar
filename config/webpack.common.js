const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: `${path.resolve(__dirname, "../src")}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: { browsers: ["IE 10"] },
                    debug: isDevelopment,
                    modules: false,
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              env: {
                development: {
                  plugins: ["babel-plugin-styled-components"],
                },
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${path.resolve(__dirname, "../public")}/index.html` }),
    new webpack.ProvidePlugin({ React: "react" }),
    new webpack.DefinePlugin({ "process.env": JSON.stringify(process.env) }),
    new BundleAnalyzerPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/"),
      "@api": path.resolve(__dirname, "../src/api"),
      "@components": path.resolve(__dirname, "../src/components/"),
      "@constants": path.resolve(__dirname, "../src/constants/"),
      "@hooks": path.resolve(__dirname, "../src/hooks/"),
      "@layout": path.resolve(__dirname, "../src/layout/"),
      "@modules": path.resolve(__dirname, "../src/modules/"),
      "@styles": path.resolve(__dirname, "../src/styles/"),
      "@typings": path.resolve(__dirname, "../src/typings/"),
      "@utils": path.resolve(__dirname, "../src/utils/"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};
