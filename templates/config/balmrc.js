/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');

// Documentation - http://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
module.exports = {
  server: {
    // proxyConfig: {
    //   context: '/api',
    //   options: {
    //     target: 'http://your.project.dev', // Target host
    //     changeOrigin: true // Needed for virtual hosted sites
    //   }
    // }
  },
  roots: {
    source: 'app'
  },
  styles: {
    ext: 'css' // PostCSS
  },
  scripts: {
    entry: {
      polyfill: ['core-js', 'zone.js'],
      ng: ['@angular'],
      main: './app/scripts/main.ts' // Entry js file
    },
    defaultLoaders: {
      html: false,
      css: false
    },
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader',
        options: {
          esModule: false
        }
      }
    ],
    urlLoaderOptions: {
      esModule: false
    },
    alias: {
      '@': path.resolve(__dirname, '..', 'app', 'scripts')
    },
    plugins: [
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /\@angular(\\|\/)core(\\|\/)/,
        helpers.root('app') // location of your src
      )
    ],
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      warningsFilter: /System.import/
    }
  },
  assets: {
    root: 'assets', // Replace 'assets' to your remote project root
    mainDir: 'public',
    cache: true
  }
  // More Config
};
