const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";
const isDev = mode === "development";

module.exports = {
  entry: {
    app: ["document-register-element", "whatwg-fetch", "./src/main.js"],
  },
  resolve: {
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: isDev ? "[name].js" : "static/[name].[chunkhash].js",
    chunkFilename: isDev
      ? "[name].[id].js"
      : "static/[name].[id].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        include: [
          path.resolve(__dirname, "src/"),
          path.resolve(__dirname, "node_modules/svelte/")
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    ie: 11
                  },
                  useBuiltIns: "usage",
                  corejs: 3
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.(html|svelte)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      ie: 11
                    },
                    useBuiltIns: "usage",
                    corejs: 3
                  }
                ]
              ]
            }
          },
          {
            loader: "svelte-loader",
            options: {
              dev: isDev,
              emitCss: true,
              hotReload: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(js|svelte|html)$/,
        loader: "eslint-loader",
        enforce: "pre",
        exclude: /node_modules/,
        include: [__dirname + "/src"],
        options: {
          formatter: require("eslint-friendly-formatter"),
          emitWarning: true
        }
      }
    ]
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDev ? "[name].css" : "static/[name].[chunkhash].css"
    }),
    new HtmlWebPackPlugin({
      //hash: true,
      chunks: ["app"],
      filename: "index.html"
    })
  ],
  devtool: prod ? false : "source-map",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        secure: false
      }
    }
  }
};
