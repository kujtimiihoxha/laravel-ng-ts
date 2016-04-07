module App.Routes.LayoutPublic.About {
    import AccessLevels = App.Core.Constants.AccessLevels;
    @RouteConfig("public.about", {
            url: "/about",
            data: {
                access: AccessLevels.public
            },
            templateUrl: "./views/routes/layout-public/about/about.template.html"
        }
    )
    @Inject("$log")
    class About {
        constructor($log: ng.ILogService) {
            $log.info("You have reached 'public.about'.");
        }
    }
}
