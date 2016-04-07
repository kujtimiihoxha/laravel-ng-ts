module App.Routes.LayoutPublic {
    import AccessLevels = Core.Constants.AccessLevels;
    import Service = Core.Services.IAuthService;

    @RouteConfig("public", {
            url: "/",
            data: {
                access: AccessLevels.public
            },
            templateUrl: "./views/routes/layout-public/layout-public.template.html"
        }
    )
    @Inject("$auth","App.Core.Services.AuthService")
    class LayoutAuth {
        constructor($auth: any, authService: Service) {
//            authService.register({
//                email: "abc@gmail.com",
//                password: "kujtim@12345",
//                name: "Kujtim Hoxha",
//                role: "admin"
//            });
        }
    }
}
