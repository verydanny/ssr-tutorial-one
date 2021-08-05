const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isProd = mode === 'production'

module.exports = (options) => ({
  mode,
  devtool: isProd ? 'source-map' : 'inline-source-map',
  entry: options.entry,
  output: options.output,
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: options.server ? 'tsconfig.server.json' : 'tsconfig.json',
        },
      },
    ],
  },
  ...options.merge,
})
