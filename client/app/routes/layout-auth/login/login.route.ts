module App.Routes.LayoutAuth.Login {
    import AccessLevels = Core.Constants.AccessLevels;
    @RouteConfig("auth.login", {
            url: "/auth/login",
            data: {
                access: AccessLevels.public
            },
            templateUrl: "./views/routes/layout-auth/login/login.template.html"
        }
    )
    class LayoutAuth {}
}
