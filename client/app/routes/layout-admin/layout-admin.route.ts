module App.Routes.LayoutAdmin {
    @RouteConfig("admin", {
        abstract: true,
        templateUrl: "./views/routes/layout-admin/layout-admin.template.html"
    })
    @Inject("App.Core.Services.AuthService")
    class LayoutApp {}
}
