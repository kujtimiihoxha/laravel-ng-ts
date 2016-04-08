module App {
    "use strict";
    import IStateProvider = angular.ui.IStateProvider;
    export function Run(): any {
        "use strict";
        return (target: any) => {
            angular.module("app.run").run(target.run);
        };
    }

    export function Config(): any {
        "use strict";
        return (target: any) => {
            angular.module("app.config").config(target.config);
        };
    }

    export function Constant(constantName: string): any {
        "use strict";
        return (target: any) => {
            angular.module("app.constants").constant(constantName, target.constant());
        };
    }
    export interface IServiceOptions {
        /**
         * The name of the service
         */
        serviceName: string;
    }
    export function Service(options: IServiceOptions): any {
        "use strict";
        return (target: any) => {
            if (!options.serviceName) {
                throw new Error("@Service() must contains serviceName property!");
            }
            angular.module("app.services").service(options.serviceName, target);
        };
    }
    export interface IFilterOptions {
        filterName: string
    }
    export  function Filter(filter: IFilterOptions): any {
        "use strict";
        return (target: any) => {
            if (!filter.filterName) {
                throw new Error("@Filter() must contains filterName property!");
            }
            angular.module("app.filters").filter(filter.filterName, target);
        };
    }

    export function Inject(...dependencies: any[]): any {
        "use strict";
        return (target: any, descriptor: any) => {
            // if it"s true then we injecting dependencies into function and not Class constructor
            if (descriptor) {
                const fn = target[descriptor];
                fn.$inject = dependencies;
            } else {
                target.$inject = dependencies;
            }
        };
    }
    export interface IComponentOptions extends angular.IComponentOptions {
        /**
         * The html5 tag of the component
         */
        selector: string;
    }
    export function Component(component: IComponentOptions): any {
        "use strict";
        return (target: any) => {
            const selector = dashCaseToCamelCase(component.selector);
            if (!component.template && !component.templateUrl) {
                throw new Error("@Component() must contains template or templateUrl property!");
            }
            if (component.template && component.templateUrl) {
                throw new Error("@Component() mus have only template or templateUrl not both!");
            }
            if (component.template) {
                const opt = {
                    template: component.template,
                    controller: target,
                    controllerAs: "vm",
                    bindings: component.bindings,
                    transclude: component.transclude,
                };
                angular.extend(opt, component);
                angular.module("app.components").component(selector, opt);
            }
            if (component.templateUrl) {
                const opt = {
                    templateUrl: component.templateUrl,
                    controller: target,
                    controllerAs: "vm",
                    bindings: component.bindings,
                    transclude: component.transclude,
            };
                angular.extend(opt, component);
                angular.module("app.components").component(selector, opt);
            }
        };
    }
    export interface IDirectiveOptions extends angular.IDirective {
        /**
         * The tag or attribute name of the directive.
         */
        selector: string;
    }
    export function Directive(options: IDirectiveOptions): any {
        "use strict";
        return (target: any) => {

            const selector = dashCaseToCamelCase(options.selector);
            if (!options.template && !options.templateUrl) {
                throw new Error("@Directive() must contains template or templateUrl property!");
            }
            if (options.template && options.templateUrl) {
                throw new Error("@Directive() mus have only template or templateUrl not both!");
            }
            if (options.template) {
                //noinspection JSDeprecatedSymbols
                const opt = {
                    template: options.template,
                    controller: target,
                    controllerAs: "vm2",
                    scope: options.scope,
                    bindToController: options.bindToController,
                    transclude: options.transclude,
                    link: target.link
                };
                angular.extend(opt, options);
                angular.module("app.directives").directive(selector, () => opt );
            }
            console.log(target.link);
            if (options.templateUrl) {
                //noinspection JSDeprecatedSymbols
                const opt = {
                    templateUrl: options.templateUrl,
                    controller: target,
                    controllerAs: "vm2",
                    scope: options.scope,
                    bindToController: options.bindToController,
                    transclude: options.transclude,
                    link: target.link
                };
                angular.extend(opt, options);
                angular.module("app.directives").directive(selector, () => opt);
            }

        };
    }

    export  function RouteConfig(stateName: any, options: any): any {
        "use strict";
        return (target: any) => {
            angular.module("app.config").config(["$stateProvider", ($stateProvider: IStateProvider) => {
                options.controller = target;
                options.controllerAs = "vm";
                $stateProvider.state(stateName, options);
            }]);
        };
    }
    export function Describe(options: any): any {
        "use strict";
        return (target: any) => {
            const opt = {
                name: options.name,
                module: "app",
                tests: target.tests
            };
            angular.extend(opt, options);
            ngDescribe(opt);
        }
    }
    function dashCaseToCamelCase(string: any) {
        "use strict";
        return string.replace( /-([a-z])/ig, (all: any, letter: any) => letter.toUpperCase());
    }
}

