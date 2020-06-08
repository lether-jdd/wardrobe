const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[id].js',
  },
  module: {
    rules: [
      {
        test: /\.jpg$/, use: [
          {
            loader: "file-loader",
            options: {
              name: './assets/[name]-[hash:12].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/, use: [
          {
            loader: "style-loader"
          },
          { loader: "css-modules-typescript-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            }
          }
        ]
      },
      { test: /\.png$/, use: ["url-loader?mimetype=image/png"] },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: false,
            attributes: {
            }
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.bundle\.jsx$/,
        use: [{
          loader: 'bundle-loader',
          options: {
            name: 'my-chunk',
            lazy: true
          }
        }]
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
    ]
  },
  devServer:{
    // disableHostCheck: true,
    // contentBase: path.resolve(__dirname, 'build'),
    // compress: true, //gzip压缩
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      titel: 'react app',
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
};