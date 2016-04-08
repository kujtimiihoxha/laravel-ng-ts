module App.Components.Header {
    import IAuthService = App.Core.Services.IAuthService
    import ISettingsModel = App.Models.ISettingsModel;
    @Component({
            selector: "header",
            templateUrl: "./views/components/header/header.template.html"
        }
    )
    @Inject("App.Core.Services.AuthService", "App.Models.SettingsModel", "$state")
    class HeaderComponent {
        private user: any;
        constructor(private authService: IAuthService,private $state: any) {
            this.user = authService.getCurrentUser();
        }
        private logout() {
            this.authService.logout().then(() => {
                this.$state.go("auth.login");
            });
        }
    }
}
