module App.Components.ContentWraper {
    @Component({
        selector: "panel",
        templateUrl: "./views/components/panel/panel.template.html",
        bindings: {
            'panelModel': "<"
        },
        transclude: {
            "head": "?panelHead",
            "body": "panelBody",
            "footer": "?panelFooter"
        }
    })
    class PanelComponent {
        private panelModel: any;
        constructor() {
            angular.extend(this, this.panelModel);
        }
    }
}
