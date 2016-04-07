module App.Core.Models {
    export interface ITokenModel {
        get(): string;
        getCurrentUser(): any;
    }

    @Service({
        serviceName: "App.Core.Models.TokenModel"
    })
    @Inject("$auth")
    class TokenModel implements ITokenModel {
        constructor(private $auth: any) {}
        get(): string {
            return this.$auth.getToken();
        }

        getCurrentUser(): any {
            return this.$auth.getPayload();
        }
    }
}
