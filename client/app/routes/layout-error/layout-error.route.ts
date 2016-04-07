/// <reference path="../../core/constants/constants.ts" />

module App.Routes.LayoutError {
    import AccessLevels = Core.Constants.AccessLevels;
    @RouteConfig("403", {
        url: "/403",
        templateUrl: "./views/routes/layout-error/403.html",
        data: {
            access: AccessLevels.public
        }
    })
    @RouteConfig("404", {
        url: "/404",
        templateUrl: "./views/routes/layout-error/404.html",
        data: {
            access: AccessLevels.public
        }
    })
    @RouteConfig("500", {
        url: "/500",
        templateUrl: "./views/routes/layout-error/500.html",
        data: {
            access: AccessLevels.public
        }
    })
    class Error {}
}
