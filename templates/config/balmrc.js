var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
  server: {
    open: true,
    proxyTable: {
      '/api': {
        target: 'http://your.project.dev',
        changeOrigin: true
      }
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
    autoprefixer: [
      '> 1%',
      'last 2 versions',
      'not ie <= 8'
    ]
  },
  scripts: {
    entry: {
      polyfill: [
        'core-js/es6/reflect',
        'core-js/es7/reflect',
        'zone.js/dist/zone'
      ],
      angular: [
        '@angular/core',
        '@angular/platform-browser-dynamic',
        '@angular/platform-browser',
        '@angular/forms',
        '@angular/http'
      ],
      main: './app/scripts/main.ts' // Entry js file
    },
    loaders: [{
      test: /\.ts$/,
      use: [
        'ts-loader',
        'angular2-template-loader'
      ]
    }],
    extensions: ['.ts'],
    plugins: [
      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
        /@angular\b.*\b(bundles|linker)/,
        helpers.root('./app')
      )
    ]
  },
  cache: true,
  assets: {
    root: 'assets', // Replace 'assets' to your remote project root
    publicPath: 'public'
  }
  // More Config
  // https://github.com/balmjs/balm/blob/master/docs/configuration.md
};
