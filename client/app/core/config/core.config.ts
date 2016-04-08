module App.Core.Configs {
    "use strict";
    import IUrlRouterProvider = angular.ui.IUrlRouterProvider;
    import ILocationProvider = angular.ILocationProvider;
    class  CoreConfig {
        @Config()
        @Inject("$provide", "$locationProvider", "$urlRouterProvider",
            "$localStorageProvider")
        private static config($provide: any, $locationProvider: ILocationProvider ,
        $urlRouterProvider: IUrlRouterProvider, $localStorageProvider: any) {
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
