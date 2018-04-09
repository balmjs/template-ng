// Documentation - http://balmjs.com/docs/en/configuration/toc.html
// 中文文档 - http://balmjs.com/docs/zh-cn/configuration/toc.html
var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
  server: {
    open: true,
    proxyContext: '/api',
    proxyOptions: {
      target: 'http://your.project.dev',
      changeOrigin: true
    }
  },
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts',
      img: 'images'
    }
  },
  styles: {
    ext: 'css', // PostCSS
    autoprefixer: ['> 1%', 'last 2 versions', 'not ie < 9']
  },
  scripts: {
    entry: {
      polyfill: [
        'core-js',
        'zone.js'
      ],
      ng: [
        '@angular'
      ],
      main: './app/scripts/main.ts' // Entry js file
    },
    loaders: [
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader']
      }
    ],
    extensions: ['.ts'],
    plugins: [
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /\@angular(\\|\/)core(\\|\/)/,
        helpers.root('app') // location of your src
      )
    ]
  },
  extras: {
    excludes: ['tsconfig.app.json']
  },
  cache: true,
  assets: {
    root: 'assets', // Replace 'assets' to your remote project root
    publicPath: 'public'
  }
  // More Config
};
