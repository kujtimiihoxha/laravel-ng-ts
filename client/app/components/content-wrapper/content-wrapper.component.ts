module App.Components.ContentWraper {
    @Component({
            selector: "content-wrapper",
            template: `<div ui-view></div>`
        }
    )
    @Inject("$element")
    class ContentWraperComponent {
        constructor($element: ng.IRootElementService) {
            $element.addClass("content-wrapper");
        }
    }
}
