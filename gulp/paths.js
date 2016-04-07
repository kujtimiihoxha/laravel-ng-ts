"use strict";

const paths = {
    gulpfile: ["gulpfile.js", "gulp/**/*.js"],


    typings: "typings",

    typescriptReferences: "typings/app.d.ts",

    assets: [
        "public/js/vendor.js",
        "public/css/vendor.css",
        "public/js/app.js",
        "public/css/app.css",
        "public/js/templates.js"
    ],
    karmaJsDir: [
        "public/js/vendor.js",
        "node_modules/angular-mocks/angular-mocks.js",
        "node_modules/ng-describe/dist/ng-describe.js",
        "public/js/templates.js",
        "public/js/app.js",
        "tests/angular/**/*.spec.ts"
    ],
    app: {
        basePath: "client/",
        fonts: "client/fonts/**/*.{eot,svg,ttf,woff,woff2}",
        styles: "client/**/*.+(scss)",
        images: "client/images/**/*.{png,gif,jpg,jpeg}",
        config: {
            basePath: "client/app/core/config/",
            conditions: "client/app/core/config/env.conditions.js"
        },
        typescript: "client/",
        html: "client/",
        templates: "client/app/**/*.+(html)",
        json: "client/app/**/*.json"
    },

    test: {
        basePath: "tests/angular",
        config: {
            karma: "karma.conf.js"
        },
        mock: "client/app/**/*.mock.js",
        unit: "client/app/**/*.spec.js",
    },

    build: {
        basePath: "public/",
        public: {
            basePath: "public/",
            fonts: "public/fonts/",
            images: "public/images/",
            styles: "public/css/",
            scripts: "public/js/"
        }
    }
};

export default paths;