module App.Components.LoginForm {
    import ILoginModel = Core.Models.AuthModel.ILoginModel;
    import IAuthService = Core.Services.IAuthService;
    @Component({
            selector: "login-form",
            templateUrl: "./views/components/login-form/login-form.template.html"
        }
    )
    @Inject("App.Core.Services.AuthService", "$state")
    class LoginFormComponent {
        private user: ILoginModel;
        constructor(private authService: IAuthService, private $state: any) {}
        private login() {
            this.authService.login(this.user).then(() => {
                this.$state.go("admin.dashboard");
            });
        }
    }
}
