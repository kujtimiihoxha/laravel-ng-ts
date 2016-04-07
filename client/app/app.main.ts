module App {
    angular
        .module("app", [
            "app.core",
            "app.run",
            "app.constants",
            "app.filters",
            "app.services",
            "app.directives",
            "app.components",
            "app.routes",
            "app.config",
            "app.templates"
        ]);
    angular.module("app.routes", []);
    angular.module("app.filters", []);
    angular.module("app.services", []);
    angular.module("app.directives", []);
    angular.module("app.config", []);
    angular.module("app.run", []);
    angular.module("app.constants", []);
    angular.module("app.components", []);
    angular.module("app.core", [
        "ui.router",
        "ngStorage",
        "restangular",
        "satellizer",
        "angular-loading-bar",
        "ui.bootstrap",
        "ngCookies"
    ]);
}
