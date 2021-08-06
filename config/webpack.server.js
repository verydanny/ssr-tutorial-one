const path = require('path')
const process = require('process')
const webpackNodeExternals = require('webpack-node-externals')

const sharedConfig = require('./webpack.shared')
const clientPort = 8080

const serverConfig = sharedConfig({
  entry: {
    server: './src/server/index.tsx',
  },
  output: {
    path: path.resolve(process.cwd(), 'dist/server'),
    filename: 'index.js',
  },
  server: true,
  merge: {
    target: 'node',
    externals: [webpackNodeExternals()],
    devServer: {
      port: clientPort,
      liveReload: true
    }
  }
})

module.exports = serverConfig
