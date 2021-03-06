module App.Core.Models {
    import IBaseResource = App.Core.Resources.IBaseResource;
    import IPromise = restangular.IPromise;
    import ICollectionPromise = restangular.ICollectionPromise;
    export interface IBaseModel<T> {
        initItem(id: any, params: {}): any;
        initCollection(params: {}): angular.IPromise<T[]>;
        getItemById(id: any): T;
        setItem(item: T): void;
        getCollection(): T[];
        setCollection(collection: T[]): void;
        save(item: T): any;
        delete(item: T): any;
    }
    export class BaseModel<T> implements IBaseModel<T> {
        private collection: T[];
        private resourceIn:IBaseResource;
        constructor(resource: IBaseResource) {
            this.resourceIn = resource;
        }
        initItem(id: any, params: {}): any {
            if (id) {
                return this.resourceIn.get(id, params).then((item: T): IPromise<T> | T => angular.extend(this,item));
            } else {
                // this.item = Type;
                /*
                 return and resolve helper promise to assure
                 consistent API of method so that we can always
                 use .then() method when calling initItem
                 */
                return Promise.resolve();
            }
        }
        initCollection(params: {}): angular.IPromise<T[]> {
            return this.resourceIn.getList(params)
                .then((collection: T[]): ICollectionPromise<T> | T[]  => this.collection = collection);
        }
        getItemById(id: any): T {
            return this.collection.find(item => item["id"] === id);
        }
        
        setItem(item: T): void {
            angular.extend(this,item)
        }

        getCollection(): T[] {
            return this.collection;
        }

        setCollection(collection: T[]): void {
            this.collection = collection;
        }

        save(item: T): any {
            // update existing item if model contains id
            if (this["id"]) {
                return this
                    .resourceIn
                    .update(item)
                    .then((itemRespond) => {
                    for (let i = 0; i < this.collection.length; i++) {
                        if (this.collection[i]["id"] === this["id"]) {
                            Object.assign(this.collection[i], item);
                        }
                    }
                });
            } else {
                return this.resourceIn.create(item).then(itemRespond => {
                    this.collection.push(itemRespond);
                });
            }
        }

        delete(item: T): any {
            return this.resourceIn.delete(this["id"]).then(() => {
                this.collection.splice(this.collection.indexOf(item), 1);
            });
        }
    }
}
