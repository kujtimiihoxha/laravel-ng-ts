module App.Routes.LayoutPublic.Contribute {
    import AccessLevels = App.Core.Constants.AccessLevels;
    @RouteConfig("public.contribute", {
            url: "/contribute",
            data: {
                access: AccessLevels.public
            },
            templateUrl: "./views/routes/layout-public/contribute/contribute.template.html"
        }
    )
    @Inject("$log")
    class Contribute {
        constructor($log: ng.ILogService) {
            $log.info("You have reached 'public.contribute'.");
        }
    }
}
