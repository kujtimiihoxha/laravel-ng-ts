module App.Components.PieChart {
    @Component({
            selector: "pie-chart",
            templateUrl: "./views/components/pie-chart/pie-chart.template.html",
            bindings: {
                'chartModel': "<"
            }
        }
    )
    @Inject("$element")
    class PieChartComponent {
        private chartModel: any;
        pannelOptions: any = {
            panelHeading: "Pie Chart"
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
                var doctx = document.getElementById(this.chartModel.id)["getContext"]("2d");
                new Chart(doctx).Pie(this.doughnutData, { responsive: true });
            });

        }
    }

}
