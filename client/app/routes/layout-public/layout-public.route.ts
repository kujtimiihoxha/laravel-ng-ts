module App.Routes.LayoutPublic {
    import AccessLevels = App.Core.Constants.AccessLevels;
    import Service = App.Core.Services.IAuthService;

    @RouteConfig("public", {
            abstract:true,
            templateUrl: "./views/routes/layout-public/layout-public.template.html"
        }
    )
    @Inject("$auth","App.Core.Services.AuthService")
    class LayoutAuth {
        constructor($auth: any, authService: Service) {
           // authService.register({
           //     email: "abc@gmail.com",
           //     password: "kujtim@12345",
           //     name: "Kujtim Hoxha",
           //     role: "admin"
           // });
        }
    }
}
