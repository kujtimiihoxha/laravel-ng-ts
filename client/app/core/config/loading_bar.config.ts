module App.Core.Config {
   class  LoadingBarConfig {
       @App.Config()
       @Inject("cfpLoadingBarProvider")
       private static config(cfpLoadingBarProvider: any) {
            cfpLoadingBarProvider.includeSpinner = false;
        }
    }
}
