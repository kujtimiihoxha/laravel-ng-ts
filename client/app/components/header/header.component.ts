module App.Components.Header {
    import IAuthService = Core.Services.IAuthService;
    @Component({
            selector: "header",
            templateUrl: "./views/components/header/header.template.html"
        }
    )
    @Inject("App.Core.Services.AuthService", "$state")
    class HeaderComponent {
        private user: any;
        constructor(private authService: IAuthService, private $state: any) {
            this.user = authService.getCurrentUser();
        }
        private logout() {
            this.authService.logout().then(() => {
                this.$state.go("auth.login");
            });
        }
    }
}
