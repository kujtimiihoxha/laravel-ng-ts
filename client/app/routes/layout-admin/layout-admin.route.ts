module App.Routes.LayoutAdmin {
    import ISettingsResource = App.Resources.ISettingsResource;
    import ISettingsModel = App.Models.ISettingsModel;
    @RouteConfig("admin", {
        abstract: true,
        templateUrl: "./views/routes/layout-admin/layout-admin.template.html",
        resolve: {
            init: ['App.Resources.SettingsResource', 'App.Models.SettingsModel',
                ( SettingsResource : ISettingsResource, SettingsModel: ISettingsModel) => Promise.all([SettingsResource.getSettingsByName("menu").then(data => SettingsModel.setItem(data))])]
        }
    })
    @Inject("App.Core.Services.AuthService")
    class LayoutApp {}
}
