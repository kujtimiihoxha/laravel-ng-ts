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
