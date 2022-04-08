// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf'),
    path = require('path');

module.exports = function (config) {
    config.set({
        // to run in additional browsers:
        // 1. install corresponding karma launcher
        //    http://karma-runner.github.io/0.13/config/browsers.html
        // 2. add it to the `browsers` array below.
        browsers: ['PhantomJS', 'Chrome', 'Chrome_without_security'],
        frameworks: ['jasmine'],
        reporters: ['spec', 'coverage'],
        files: ['./index.js'],
        webpack: webpackConfig,

        preprocessors: {
            './index.js': ['webpack', 'sourcemap']
        },

        webpackMiddleware: {
            noInfo: true
        },

        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' }
            ]
        },

        customLaunchers: {
            Chrome_without_security: {
                base: 'Chrome',
                flags: ['--disable-web-security'],
                chromeDataDir: path.resolve(__dirname, '.chrome')
            },
            Chrome_with_debugging: {
                base: 'Chrome',
                chromeDataDir: path.resolve(__dirname, '.chrome')
            }
        }
    })
}
