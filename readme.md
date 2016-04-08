# Laravel Angular Typescript starter.
This project is an attempt to make a good starting point for developers who want to use Angular 1.5 and Laravel 5.2.   
Since Angular 2 is coming in the near future this project is aiming to make the transition to Angular 2 a bit easier with
typescript integration and custom ```decorators``` that use a similar syntax that Angular 2 is using.   
Besides typescript and decorators this project is setup to automatically handle the views and store them in the ```$templateCashe``` of the angular app,Depending on the 
folder placement of the view it will be stored in the same path in the ```$templateCashe``` with the ```./views/``` prepended.   
The project uses ```SASS``` for styling the views, it is configured to automatically compile ```.scss``` files and store the concatenated output in ```public/css/app.css```  

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
            })
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
## Prepare the app
Change the ```.env``` file and add your database credentials.
Run: 
```
php artisan migrate
php artisan db:seed
```

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

login to dashboard 
```
go to  http://localhost:8000/#/auth/login

email: abc@gmail.com
pass: abc@12345
```
### Supported decorators 
-  ```@Component```  - to generate components use ```laravel-ng-ts:component [component-name]```
-  ```@Service```    - to generate services use ```laravel-ng-ts:service [service-name]```
-  ```@Config```     - to generate a config function use ```laravel-ng-ts:config [config-name]```
-  ```@Constant```   - to generate a constant use ```laravel-ng-ts:constant [constant-name]```
-  ```@Filter```     - to generate a filter function use ```laravel-ng-ts:filter [filter-name]```
-  ```@RouteConfig``` - to generate a route use ```laravel-ng-ts:route [state] [route-url] [route-name] [path](optional)```
-  ```@Inject```
-  ```@Run```         - to generate a run function use ```laravel-ng-ts:filter [run-name]```
-  ```@Directive```   - to generate a filter function use ```laravel-ng-ts:directive [filter-name]```
-  ```@Describe```    - to generate a filter function use ```laravel-ng-ts:describe [describe-name]```

To find out more about the generators see   [kujtimiihoxha/generator-laravel-ng-ts](https://github.com/kujtimiihoxha/generator-laravel-ng-ts).
## @Component()
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
## @RouteConfig()
The RouteConfig decorator makes it very easy register routes and route corresponding controllers it uses ```ui-router``` 
and all the options that ```ui-router``` provides. RouteConfig automatically registers the target(class) of the decorator as the route controller. 
Routes also are configured to support user access levels.   
Example: 
```typescript
module App.Routes.LayoutAdmin.Home {
    import AccessLevels = App.Core.Constants.AccessLevels;

    @RouteConfig("admin.dashboard", {
        url: "/dashboard",
        data: {
            access: AccessLevels.admin
        },
        templateUrl: "./views/routes/layout-admin/dashboard/dashboard.html"
    })
    class Home {
        private usr: {};
        panels: any[];
        lineChart: any;
        pieChart: any;
        doughnutChart: any;
        constructor() {
            this.addMockPanels();
            this.addMockLineChart();
            this.addMockPieChar();
            this.addMockdoughnutChar();
        }

        addMockPanels(): void {
            this.panels = [];
            this.panels.push({
                title: "NEW USERS",
                value: 26,
                bodyClass: "text-light bk-primary",
                link: "#",
                linkText: "Full Details Hello"
            });
            this.panels.push({
                title: "SUPPORT TICKETS",
                value: 8,
                bodyClass: "text-light bk-success",
                link: "#",
                linkText: "See All"
            });
            this.panels.push({
                title: "NEW ORDERS",
                value: 58,
                bodyClass: "text-light bk-info",
                link: "#",
                linkText: "See All"
            });
            this.panels.push({
                title: "NEW COMMENTS",
                value: 18,
                bodyClass: "text-light bk-warning",
                link: "#",
                linkText: "See All"
            });
        }

        addMockLineChart() {
            this.lineChart = {
                id: "lineChartExample",
                height: 310,
                width: 600
            };
        }

        addMockPieChar() {
            this.pieChart = {
                id: "pieCharExample",
                height: 1200,
                width: 900
            };
        }

        addMockdoughnutChar() {
            this.doughnutChart = {
                id: "doughnutCharExample",
                height: 1200,
                width: 900
            }
        }
    }
}

```
## @Service()
The service decorator is used to register a service to the app. It accepts an object the type of ```App.Decorators.IServiceOptions```  with the name of the service.

**IServiceOptions**
```typescript
 interface IServiceOptions {
        /**
         * The name of the service
         */
        serviceName: string;
    }
```

Example:
```typescript
module App.Core.Services {
    import IPromise = restangular.IPromise;
    import IAuthModule = App.Core.Models.AuthModel;
    import UserRoles = App.Core.Constants.UserRoles;

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
    @Inject("$auth", "$localStorage")
    class AuthService implements IAuthService {
        constructor(private $auth: any, private $localStorage: any) {}
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
            return !!this.$auth.getToken();
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
```
##@Config()
The config decorator is used to register a function that will be executed in the config stage of the angular app;
Example:
```typescript
module App.Core.Configs {
    "use strict";
    import IUrlRouterProvider = angular.ui.IUrlRouterProvider;
    import ILocationProvider = angular.ILocationProvider;
    class  CoreConfig {
        @Config()
        @Inject("$provide", "$locationProvider",  "$urlRouterProvider","$localStorageProvider")
        private static config($provide: any, $locationProvider: ILocationProvider , $urlRouterProvider: IUrlRouterProvider, $localStorageProvider: any) {
            $provide.decorator("$uiViewScroll", ["$delegate", "$window", ($delegate: any, $window: any) => () => {
                $window.scrollTo(0, 0);
            }]);
            $urlRouterProvider.otherwise("/");
            if (angular.isUndefined($localStorageProvider["user"])) {
                $localStorageProvider["user"] = null;
            }
        }
    }
}
```
##@Run()
The run decorator is used to register a function that will be executed in the run stage of the angular app;
Example:
```typescript
module App.Core.Runs {
    "use strict";
    import IAuthService = App.Core.Services.IAuthService;
    import AccessLevels = App.Core.Constants.AccessLevels;
    class  CoreRun {
        @Run()
        @Inject( "$rootScope", "$state", "App.Core.Services.AuthService")
        private static run($rootScope: any, $state: any, authenticationService: IAuthService) {
            $rootScope.currentUser = authenticationService.getCurrentUser();
            $rootScope.AccessLevels = AccessLevels;
            $rootScope.$on("$stateChangeStart", (event: any, toState: any) => {
                if (!("data" in toState) || !("access" in toState.data)) {
                    event.preventDefault();
                    $state.go("403");
                } else if (!authenticationService.isAuthorized(toState.data.access) && toState.name !== "auth.login") {
                    event.preventDefault();
                      if (authenticationService.isAuthenticated()) {
                        $state.go("403");
                    } else {
                        $state.go("auth.login");
                    }
                } else if (authenticationService.isAuthenticated() && toState.url === "/") {
                    event.preventDefault();
                    $state.go("admin.dashboard");
                }
            });
        }
    }
}
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
