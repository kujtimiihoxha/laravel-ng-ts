module App.Routes.LayoutAdmin.Home {
    import AccessLevels = App.Core.Constants.AccessLevels;

    @RouteConfig("admin.dashboard", {
        url: "/dashboard",
        data: {
            access: AccessLevels.admin
        },
        templateUrl: "./views/routes/layout-admin/dashboard/dashboard.html"
    })
    class Home {
        private usr: {};
        panels: any[];
        lineChart: any;
        pieChart: any;
        doughnutChart: any;
        constructor() {
            this.addMockPanels();
            this.addMockLineChart();
            this.addMockPieChar();
            this.addMockdoughnutChar();
        }

        addMockPanels(): void {
            this.panels = [];
            this.panels.push({
                title: "NEW USERS",
                value: 26,
                bodyClass: "text-light bk-primary",
                link: "#",
                linkText: "Full Details Hello"
            });
            this.panels.push({
                title: "SUPPORT TICKETS",
                value: 8,
                bodyClass: "text-light bk-success",
                link: "#",
                linkText: "See All"
            });
            this.panels.push({
                title: "NEW ORDERS",
                value: 58,
                bodyClass: "text-light bk-info",
                link: "#",
                linkText: "See All"
            });
            this.panels.push({
                title: "NEW COMMENTS",
                value: 18,
                bodyClass: "text-light bk-warning",
                link: "#",
                linkText: "See All"
            });
        }

        addMockLineChart() {
            this.lineChart = {
                id: "lineChartExample",
                height: 310,
                width: 600
            };
        }

        addMockPieChar() {
            this.pieChart = {
                id: "pieCharExample",
                height: 1200,
                width: 900
            };
        }

        addMockdoughnutChar() {
            this.doughnutChart = {
                id: "doughnutCharExample",
                height: 1200,
                width: 900
            }
        }
    }
}
