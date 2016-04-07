module App.Core.Services {
    import IService = restangular.IService;
    @Service({
        serviceName: "App.Core.Services.ApiService"
    })
    @Inject("Restangular", "$window", "$log")
    class ApiService {
        constructor(restangular: IService, $window: any, $log: ng.ILogService) {
            const headers = {
                "Content-Type": "application/json",
                "Accept": "application/x.laravel.v1+json"
            };
            return restangular.withConfig((restangularConfigurer: any) => {
                restangularConfigurer
                    .setBaseUrl("/api/")
                    .setDefaultHeaders(headers)
                    .setErrorInterceptor((response: restangular.IResponse) => {
                        if (response.status === 422) {
                            for (let error in response.data.errors) {
                                if (response.data.errors.hasOwnProperty(error)) {
                                    $log.error(response.data.errors[error][0]);
                                }
                            }
                        }
                    })
                    .addFullRequestInterceptor(function(element: any, operation: any, what: any, url: any, hdrs: any) {
                        let token = $window.localStorage["satellizer_token"];
                        if (token) {
                            hdrs.Authorization = "Bearer " + token;
                        }
                    });
            });
        }
    }
}
