module App.Core.Runs {
    "use strict";
    import IAuthService = App.Core.Services.IAuthService;
    import AccessLevels = App.Core.Constants.AccessLevels;
    class  CoreRun {
        @Run()
        @Inject( "$rootScope", "$state", "App.Core.Services.AuthService")
        private static run($rootScope: any, $state: any, authenticationService: IAuthService) {
            $rootScope.currentUser = authenticationService.getCurrentUser();
            $rootScope.AccessLevels = AccessLevels;
            $rootScope.$on("$stateChangeStart", (event: any, toState: any) => {
                if (!("data" in toState) || !("access" in toState.data)) {
                    event.preventDefault();
                    $state.go("403");
                } else if (!authenticationService.isAuthorized(toState.data.access) && toState.name !== "auth.login") {
                    event.preventDefault();
                      if (authenticationService.isAuthenticated()) {
                        $state.go("403");
                    } else {
                        $state.go("auth.login");
                    }
                } else if (authenticationService.isAuthenticated() && toState.url === "/") {
                    event.preventDefault();
                    $state.go("admin.dashboard");
                }
            });
        }
    }
}
