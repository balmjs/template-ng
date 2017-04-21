module.exports = {
  proxyTable: {
    '/api': {
      target: 'http://your.project.dev',
      changeOrigin: true
    }
  },
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
    main: './app/scripts/main.ts' // entry js file
  },
  vendors: ['polyfill', 'angular'],
  assets: {
    root: 'assets', // replace 'assets' to your remote project root
    publicPath: 'public'
  },
  publish: {
    'index.html': {
      target: 'views', // replace 'views' to your remote project views path
      option: {
        basename: 'index',
        extname: '.php'
      }
    }
  }
};
