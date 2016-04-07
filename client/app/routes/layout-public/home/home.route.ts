module App.Routes.LayoutPublic.Home {
    import AccessLevels = App.Core.Constants.AccessLevels;
    @RouteConfig("public.home", {
            url: "/",
            data: {
                access: AccessLevels.public
            },
            templateUrl: "./views/routes/layout-public/home/home.template.html"
        }
    )
    @Inject("$log")
    class Home {
        constructor($log: ng.ILogService) {
            $log.info("You have reached 'public.home'.");
        }
    }
}
