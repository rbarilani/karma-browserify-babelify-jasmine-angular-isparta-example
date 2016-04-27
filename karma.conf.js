module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'browserify'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'spec/window-angular.js', // required by angular-mocks that expects window.angular
      'spec/**/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'spec/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [require('browserify-istanbul')({
        instrumenter: require('isparta'),
        ignore: ['**/spec/**']
      }), 'babelify']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'text-summary'},
        { type: 'cobertura'},
        { type: 'lcov' }, 
        { type: 'html'},
      ]
    },    
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
