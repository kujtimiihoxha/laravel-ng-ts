module App.Core.Services {
    import IPromise = restangular.IPromise;
    import IAuthModule = Core.Models.AuthModel;
    import ITokenModel = Core.Models.ITokenModel;
    import UserRoles = Core.Constants.UserRoles;

    export interface IAuthService {
        login(user: IAuthModule.ILoginModel): IPromise<any>;
        register(user: IAuthModule.IRegisterModel): IPromise<any>;
        logout(): IPromise<any>;
        isAuthenticated(): boolean
        isAuthorized(access: UserRoles[]): boolean;
        getCurrentUser(): any;
    }
    @Service({
        serviceName: "App.Core.Services.AuthService"
    })
    @Inject("$auth", "App.Core.Models.TokenModel","$localStorage")
    class AuthService implements IAuthService {
        constructor(private $auth: any, private tokenModel: ITokenModel, private $localStorage: any) {}
        login(user: IAuthModule.ILoginModel): IPromise<any> {
            const storage = this.$localStorage;
            return this.$auth.login(user).then((response: any) => {
                storage["user"] = response.data.data.user;
            });
        }
        register(user: IAuthModule.IRegisterModel): IPromise<any> {
            return this.$auth.signup(user);
        }
        logout(): IPromise<any> {
            const storage = this.$localStorage;
            return this.$auth.logout().then(() => {
                storage["user"] = null;
            });
        }
        isAuthenticated(): boolean {
            return !!this.tokenModel.get();
        }
        getCurrentUser(): any {
            if (this.$localStorage["user"] == null) {
                return { role: Core.Constants.UserRoles.Guest }
            } else {
                return this.$localStorage["user"];
            }
        }
        isAuthorized(access: UserRoles[]): boolean {
            if (access.indexOf(UserRoles.Guest) !== -1) {
                return true;
            }
            return (this.isAuthenticated() && access.indexOf(this.getCurrentUser().role) !== -1);
        }
    }
}
