const DashboardPlugin = require('webpack-dashboard/plugin')
const Dashboard = require('webpack-dashboard')
const dashboard = new Dashboard()

module.exports= {
  entry: "./index.js",
  output: {
    filename: "./dist/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ],
  },
  devServer: {
    contentBase: './',
    compress: true,
    quiet: true,
    open: true,
    inline: true,
    port: 9001
  },
  plugins: [
    new DashboardPlugin({
      port: 9001,
      handler : dashboard.setData
    })
  ]
}