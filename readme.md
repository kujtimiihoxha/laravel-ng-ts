# Laravel Angular Typescript starter.
This project is an attempt to make a good starting point for developers who want to use Angular 1.5 ang Laravel 5.2.   
Since Angular 2 is coming in the near future this project is aiming to make the transition to Angular 2 a bit easier with
typescript integration and custom ```decorators``` that use a similar syntax that Angular 2 is using.   
An example of the custom decorators is the ```@Component()``` decorator that is used to create a new angular component similar to Angular 2 components.

```typescript
module App.Components.MainSideBar {
    import ISettingsModel = App.Models.ISettingsModel;
    export interface IMenuItem {
        title: string,
        icon: string,
        state: string,
        children : IMenuItem[]
    }
    @Component({
            selector: "main-sidebar",
            templateUrl: "./views/components/main-sidebar/main-sidebar.template.html"
        }
    )
    @Inject("App.Models.SettingsModel")
    class MainSideBarComponent {
        private menuItems: IMenuItem[];
        constructor(SettingsModel: ISettingsModel) {
            this.menuItems = JSON.parse(SettingsModel.values).items;
        }
    }
}
```

This example shows how you can easily create and register components using ```@Component``` decorator.
Also you can notice the ```@Inject``` decorator that is used to inject injectable factory methods or constructor functions.
### Supported decorators 
-  ```@Component``` 
-  ```@Service```
-  ```@Config```
-  ```@Constant```
-  ```@Filter```
-  ```@RouteConfig```
-  ```@Inject```
-  ```@Run```
-  ```@Directive```
-  ```@Describe```

#### @Component
The component decorator accepts an object with the type of ```App.Decorators.IComponentOptions``` that extends ```angular.IComponentOptions```
the only additional field that is added is the ```selector``` field.

**IComponentOptions**

``` typescript
 /**
     * Component definition object (a simplified directive definition object)
     */
    interface IComponentOptions {
        /**
         * The html5 tag of the component
         */
        selector: string
        /**
         * Controller constructor function that should be associated with newly created scope or the name of a registered
         * controller if passed as a string. Empty function by default.
         * Use the array form to define dependencies (necessary if strictDi is enabled and you require dependency injection)
         */
        controller?: string | Function | (string | Function)[];
        /**
         * An identifier name for a reference to the controller. If present, the controller will be published to scope under
         * the controllerAs name. If not present, this will default to be the same as the component name.
         * @default "$ctrl"
         */
        controllerAs?: string;
        /**
         * html template as a string or a function that returns an html template as a string which should be used as the
         * contents of this component. Empty string by default.
         * If template is a function, then it is injected with the following locals:
         * $element - Current element
         * $attrs - Current attributes object for the element
         * Use the array form to define dependencies (necessary if strictDi is enabled and you require dependency injection)
         */
        template?: string | Function | (string | Function)[];
        /**
         * path or function that returns a path to an html template that should be used as the contents of this component.
         * If templateUrl is a function, then it is injected with the following locals:
         * $element - Current element
         * $attrs - Current attributes object for the element
         * Use the array form to define dependencies (necessary if strictDi is enabled and you require dependency injection)
         */
        templateUrl?: string | Function | (string | Function)[];
        /**
         * Define DOM attribute binding to component properties. Component properties are always bound to the component
         * controller and not to the scope.
         */
        bindings?: {[binding: string]: string};
        /**
         * Whether transclusion is enabled. Enabled by default.
         */
        transclude?: boolean | string | {[slot: string]: string};
        require?: string | string[] | {[controller: string]: string};
    }
```

**THIS PROJECT IS STILL ON THE DEVELOPMENT STAGE!!!**
## Installation
``` bash
npm install -g yo
npm install -g generator-laravel-ng-ts
 ```
## Create the project 
```bash
mkdir my-project
cd my-project
yo laravel-ng-ts
```

```laravel-ng-ts``` project repository can be found at [kujtimiihoxha/laravel-ng-ts](https://github.com/kujtimiihoxha/laravel-ng-ts)
## Using laravel-ng-ts generators
- To se how you can use the generator to auto-generate components, routes, etc. look at
 [kujtimiihoxha/generator-laravel-ng-ts](https://github.com/kujtimiihoxha/generator-laravel-ng-ts).

## Running the app
Open two terminal windows and navigate to the folder where you 
project is saved , than in one terminal window run:
```bash
gulp && gulp watch
```
and the other : 
```bash
php artisan serve
```

after both tasks are running go to 
```
http://localhost:8000
```
## Folder Structure 

#### Backend

- The backend folder structure is the same as the standard laravel folder structure.

#### Frontend

- All the frontend files are in the  ```client/``` , ```gulp``` and ```theme``` folders.

##### Client folder :

```
client/
    |- app/                                      --> source code folder
    |   |- components/                              --> angular components
    |   |- core/                                    --> core files(config,run,core-services etc.)
    |   |   |- config/                                  --> core configurations folder
    |   |   |   |- core.config.ts                           --> some necessary configurations
    |   |   |   |- loading-bar.config.ts                    --> loading bar configurations
    |   |   |   |- satellizer.config.ts                     --> satellizer cofigurations
    |   |   |- constants/                               --> core constants folder
    |   |   |   |- core.constant.ts                         --> some necessary configurations
    |   |   |- models/                                  --> core models folder
    |   |   |   |- auth.model.ts                            --> login and register user models
    |   |   |   |- base.model.ts                            --> base model that all resource models inherit
    |   |   |- resources/                               --> core resources folder
    |   |   |   |- base.resource.ts                         --> base resource that all resources inherit
    |   |   |- run/                                     --> core run configurations folder
    |   |   |   |- core.run.ts                         --> base resource that all resources inherit
    |   |   |- services/                                --> core services
    |   |   |   |- api.service.ts                         --> setup restangular api to work with jwt and our api
    |   |   |   |- auth.service.ts                        --> authentication service to handle user session, login, logout, register
    |   |- models/                                  --> models used by the resources to get objects from the api
    |   |- resources/                               --> resources to comunicate with the api
    |   |- routes/                                  --> app routes
    |   |- services/                                --> app services
    |   |- app.decorators.ts                        --> app decorators
    |   |- app.main.ts                              --> app main file
    |- fonts/                                    -->fonts
    |- images/                                   -->images
```

## Credits
- Laravel angular material starter - [jadjoubran/laravel5-angular-material-starter](https://github.com/jadjoubran/laravel5-angular-material-starter)
- Employee Scheduling UI - [martinmicunda/employee-scheduling-ui](https://github.com/martinmicunda/employee-scheduling-ui)

## Licence
MIT © [Kujtim Hoxha](kujtimhoxha.com)
