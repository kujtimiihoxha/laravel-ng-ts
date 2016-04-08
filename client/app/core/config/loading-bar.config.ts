module App.Core.Configs {
   class  LoadingBarConfig {
       @Config()
       @Inject("cfpLoadingBarProvider")
       private static config(cfpLoadingBarProvider: any) {
            cfpLoadingBarProvider.includeSpinner = false;
        }
    }
}
