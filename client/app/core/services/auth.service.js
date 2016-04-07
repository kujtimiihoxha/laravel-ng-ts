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
        var Services;
        (function (Services) {
            var UserRoles = Core.Constants.UserRoles;
            var AuthService = (function () {
                function AuthService($auth, tokenModel, $localStorage) {
                    this.$auth = $auth;
                    this.tokenModel = tokenModel;
                    this.$localStorage = $localStorage;
                }
                AuthService.prototype.login = function (user) {
                    var storage = this.$localStorage;
                    return this.$auth.login(user).then(function (response) {
                        storage["user"] = response.data.data.user;
                    });
                };
                AuthService.prototype.register = function (user) {
                    return this.$auth.signup(user);
                };
                AuthService.prototype.logout = function () {
                    var storage = this.$localStorage;
                    return this.$auth.logout().then(function () {
                        storage["user"] = null;
                    });
                };
                AuthService.prototype.isAuthenticated = function () {
                    return !!this.tokenModel.get();
                };
                AuthService.prototype.getCurrentUser = function () {
                    if (this.$localStorage["user"] == null) {
                        return { role: Core.Constants.UserRoles.Guest };
                    }
                    else {
                        return this.$localStorage["user"];
                    }
                };
                AuthService.prototype.isAuthorized = function (access) {
                    if (access.indexOf(UserRoles.Guest) !== -1) {
                        return true;
                    }
                    return (this.isAuthenticated() && access.indexOf(this.getCurrentUser().role) !== -1);
                };
                AuthService = __decorate([
                    App.Service({
                        serviceName: "App.Core.Services.AuthService"
                    }),
                    App.Inject("$auth", "App.Core.Models.TokenModel", "$localStorage"), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], AuthService);
                return AuthService;
            }());
        })(Services = Core.Services || (Core.Services = {}));
    })(Core = App.Core || (App.Core = {}));
})(App || (App = {}));
