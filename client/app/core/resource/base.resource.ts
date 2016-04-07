/// <reference path="../models/base.model.ts" />
module App.Core.Resources {
    import IPromise = restangular.IPromise;
    import IService = restangular.IService;
    import IElement = restangular.IElement;
    import ICollectionPromise = restangular.ICollectionPromise;
    export interface IBaseResource {
        get(id: any, params: {}): IPromise<any>;
        getList(params: {}): ICollectionPromise<any>;
        create(newResource: any): IPromise<any>;
        update(updatedResource: any): IPromise<any>;
        delete(id: any): IPromise<any>;
    }
    export class BaseResource implements IBaseResource {
        constructor(protected apiService: IService, protected route: string) {}
        get(id: any, params: {}): restangular.IPromise<any> {
            return this.apiService.one(this.route, id).get(params);
        }

        getList(params: {}): restangular.ICollectionPromise<any> {
            return this.apiService.all(this.route).getList(params);
        }

        create(newResource: any): restangular.IPromise<any> {
            return this.apiService.all(this.route).post(newResource);
        }

        update(updatedResource: IElement): restangular.IPromise<any> {
            return updatedResource.put();
        }

        delete(deletedResource: IElement): restangular.IPromise<any> {
            return deletedResource.remove();
        }
    }
}
