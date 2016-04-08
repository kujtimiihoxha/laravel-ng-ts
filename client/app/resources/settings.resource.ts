///<reference path="../core/resource/base.resource.ts"/>
module App.Resources {
    import IBaseResource = App.Core.Resources.IBaseResource;
    import BaseResource = App.Core.Resources.BaseResource;
    export interface ISettingsResource extends IBaseResource{
        //resource specific stuff
        getSettingsByName(name: string): restangular.IPromise<any>;
    }
    @Service({
        serviceName: "App.Resources.SettingsResource"
    })
    @Inject("App.Core.Services.ApiService")
    class SettingsResource extends BaseResource implements ISettingsResource{
        constructor(apiService: restangular.IService){
            super(apiService,'settings')
        }
        getSettingsByName(name: string): restangular.IPromise<any> {
            return this.apiService.one(this.route,name).get('');
        }
    }
}
