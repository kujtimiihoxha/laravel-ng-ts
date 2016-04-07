module App.Core.Config {
    class SatellizerConfig {
        @App.Config()
        @Inject("$authProvider")
        private static config($authProvider: any) {
            $authProvider.httpInterceptor = () => true;
            $authProvider.loginUrl = "/api/auth/login";
            $authProvider.signupUrl = "/api/auth/register";
            $authProvider.tokenRoot = "data"; //compensates success response macro
        }
    }
}
