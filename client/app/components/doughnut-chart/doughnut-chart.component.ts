module App.Components.DoughnutChart {
    @Component({
        selector: "doughnut-chart",
        templateUrl: "./views/components/doughnut-chart/doughnut-chart.template.html",
            bindings: {
                'chartModel': "<"
            }
        }
    )
    @Inject("$element")
    class DoughnutChartComponent {
        private chartModel: any;
        pannelOptions: any = {
            panelHeading: "Doughnut chart"
        };
        doughnutData: any = [
            {
                value: 300,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }
        ];

        constructor($element: any) {
            console.log(this.chartModel);
            angular.extend(this, this.chartModel);
            $element.ready(() => {
                var ctx = document.getElementById(this.chartModel.id)["getContext"]("2d");
                new Chart(ctx).Doughnut(this.doughnutData, { responsive: true });
            });

        }
    }

}
