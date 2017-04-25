module.exports = function(config) {
    config.set({
        basePath: '',

        browsers: ['PhantomJS'],

        frameworks: ['jasmine'],

        // preprocessors: {
        //     'index.js': ['coverage']
        //     // 'index.js': ['webpack', 'coverage']
        // },

        files: [
            // 'index.js',
            'index.spec.js'
        ],

        reporters: ['progress', 'coverage'],

        coverageReporter: {
            reporters: [
                {type: 'text-summary'},
                {type: 'html'},
                {type: 'lcov', subdir: 'lcov'}
            ]
        },

        //start new
        preprocessors: {
            'index.spec.js': ['webpack']
        },

        webpack: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    }
                ]
            }
        }
        //end new

    });
}