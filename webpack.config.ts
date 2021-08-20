import * as path from 'path'
import * as webpack from 'webpack'

const webpackDevServer = {
  static: {
    directory: path.join(__dirname, 'public'),
  },
  compress: true,
  port: 9000,
}

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'app.js',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
    ],
  },
};

export default {
  ...config,
  devServer: webpackDevServer
}
