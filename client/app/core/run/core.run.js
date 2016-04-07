var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var App;
(function (App) {
    var Core;
    (function (Core) {
        var Run;
        (function (Run) {
            "use strict";
            var AccessLevels = Core.Constants.AccessLevels;
            var CoreRun = (function () {
                function CoreRun() {
                }
                CoreRun.run = function ($rootScope, $state, authenticationService) {
                    $rootScope.currentUser = authenticationService.getCurrentUser();
                    $rootScope.AccessLevels = AccessLevels;
                    $rootScope.$on("$stateChangeStart", function (event, toState) {
                        if (!("data" in toState) || !("access" in toState.data)) {
                            event.preventDefault();
                            $state.go("403");
                        }
                        else if (!authenticationService.isAuthorized(toState.data.access) && toState.name !== "auth.login") {
                            event.preventDefault();
                            if (authenticationService.isAuthenticated()) {
                                $state.go("403");
                            }
                            else {
                                $state.go("auth.login");
                            }
                        }
                        else if (authenticationService.isAuthenticated() && toState.url === "/") {
                            event.preventDefault();
                            $state.go("admin.dashboard");
                        }
                    });
                };
                __decorate([
                    App.Run(),
                    App.Inject("$rootScope", "$state", "App.Core.Services.AuthService"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object, Object, Object]), 
                    __metadata('design:returntype', void 0)
                ], CoreRun, "run", null);
                return CoreRun;
            }());
        })(Run = Core.Run || (Core.Run = {}));
    })(Core = App.Core || (App.Core = {}));
})(App || (App = {}));
