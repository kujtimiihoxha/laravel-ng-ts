module App.Components.LineChart {
    @Component({
            selector: "line-chart",
            templateUrl: "./views/components/line-chart/line-chart.template.html",
            bindings: {
                'chartModel': "<"
            }
        }
    )
    @Inject("$element")
    class LineChartComponent {
        private chartModel: any;
        pannelOptions: any = {
            panelHeading: "SalesReport"
        };
        private  swirlData:any = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]};

        constructor($element: any) {
            console.log(this.chartModel);
            angular.extend(this, this.chartModel);
            $element.ready(() => {
                var ctx = document.getElementById(this.chartModel.id)["getContext"]("2d");
                new Chart(ctx).Line(this.swirlData, {
                    responsive: true,
                    scaleShowVerticalLines: false,
                    scaleBeginAtZero: true,
                    multiTooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>"
                });
            });

        }
    }

}
