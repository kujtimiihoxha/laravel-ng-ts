module.exports = function(config) {
    config.set({

        basePath: "",
        frameworks: ["jasmine"],
        files: [
            "public/js/vendor.js",
            "node_modules/angular-mocks/angular-mocks.js",
            "node_modules/ng-describe/dist/ng-describe.js",
            "public/js/templates.js",
            "public/js/app.js",
            "tests/angular/**/*.spec.ts"
        ],
        browsers: ["PhantomJS"],

        exclude: [],

        preprocessors: {
            "client/app/app.decorators.ts":  ["typescript"],
            'tests/angular/**/*.spec.ts': ["typescript"]
        },

        typescriptPreprocessor: {
            // options passed to the typescript compiler
            options: {
                noImplicitAny: true,
                suppressImplicitAnyIndexErrors: true,
                experimentalDecorators: true
            },
            // extra typing definitions to pass to the compiler (globs allowed)
            typings: [
                "typings/main.d.ts",
                "client/app/app.decorators.ts",
                "tests/angular/app.d.ts"
            ],
            // transforming the filenames
            transformPath: function(path) {
                return path.replace(/\.ts$/, ".js");
            }
        },

        plugins : [
            "karma-jasmine",
            "karma-phantomjs-launcher",
            "karma-typescript-preprocessor"
        ]

        // define reporters, port, logLevel, browsers etc.
    });
};

