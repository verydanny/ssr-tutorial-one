const path = require('path')
const process = require('process')
const sharedConfig = require('./webpack.shared')

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isProd = mode === 'production'
const clientPort = 8080

const splitChunks = {
  chunks: 'all',
  cacheGroups: {
    preact: /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
  }
}

const clientConfig = sharedConfig({
  entry: {
    render: './src/client/render.tsx',
    hydrate: './src/client/hydrate.tsx',
  },
  profile: process.env.STATS === 'true',
  output: {
    path: path.resolve(process.cwd(), 'dist/client'),
    filename: '[name].js',
    publicPath: `http://localhost:${clientPort}`,
  },
  server: false,
  merge: {
    target: 'web',
    devServer: {
      port: clientPort,
      liveReload: true,
      contentBase: path.resolve(process.cwd(), 'public')
    },
    ...(isProd ? {
      optimization: {
        splitChunks,
      }
    } : {})
  }
})

module.exports = clientConfig
