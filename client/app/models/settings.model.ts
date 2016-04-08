///<reference path="../core/models/base.model.ts"/>
module App.Models {
    import IBaseModel = App.Core.Models.IBaseModel;
    import BaseModel = App.Core.Models.BaseModel;
    import IBaseResource = App.Core.Resources.IBaseResource;
    import ISettingsResource = App.Resources.ISettingsResource;
    import IMenuItem = App.Components.MainSideBar.IMenuItem;
    export interface ISettingsModel extends IBaseModel<ISettingsModel>{
        id:number;
        name:string;
        values:any;
        created_at: any;
        updated_at: any;
        //Put your model specific fields and functions here
    }
    @Service({
        serviceName:"App.Models.SettingsModel"
    })
    @Inject("App.Resources.SettingsResource")
    class SettingsModel  extends BaseModel<SettingsModel> implements ISettingsModel{
        id:number;
        name:string;
        values:any;
        created_at: any;
        updated_at: any;
        //Put your model specific fields and functions implementation here
        constructor(private resource: ISettingsResource){
            super(resource);
        }
    }
}
