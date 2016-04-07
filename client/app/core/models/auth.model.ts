module App.Core.Models {
    export module AuthModel {
        export interface ILoginModel {
            email: string;
            password: string;
        }
        export interface IRegisterModel {
            name: string;
            role: string;
            email: string;
            password: string;
        }
    }
}
