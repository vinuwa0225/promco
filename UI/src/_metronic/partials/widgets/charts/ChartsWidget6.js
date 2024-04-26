"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartsWidget6 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var _utils_1 = require("../../../assets/ts/_utils");
var ChartsWidget6 = function (_a) {
    var className = _a.className;
    var chartRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!chartRef.current) {
            return;
        }
        var height = parseInt((0, _utils_1.getCSS)(chartRef.current, 'height'));
        var chart = new apexcharts_1.default(chartRef.current, getChartOptions(height));
        if (chart) {
            chart.render();
        }
        return function () {
            if (chart) {
                chart.destroy();
            }
        };
    }, [chartRef]);
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: 'card-header border-0 pt-5' },
            react_1.default.createElement("h3", { className: 'card-title align-items-start flex-column' },
                react_1.default.createElement("span", { className: 'card-label fw-bolder fs-3 mb-1' }, "Recent Orders"),
                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "More than 500+ new orders")),
            react_1.default.createElement("div", { className: 'card-toolbar', "data-kt-buttons": 'true' },
                react_1.default.createElement("a", { className: 'btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1', id: 'kt_charts_widget_6_sales_btn' }, "Sales"),
                react_1.default.createElement("a", { className: 'btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1', id: 'kt_charts_widget_6_expenses_btn' }, "Expenses"))),
        react_1.default.createElement("div", { className: 'card-body' },
            react_1.default.createElement("div", { ref: chartRef, id: 'kt_charts_widget_6_chart', style: { height: '350px' } }))));
};
exports.ChartsWidget6 = ChartsWidget6;
function getChartOptions(height) {
    var labelColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-500');
    var borderColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-200');
    var baseColor = (0, _utils_1.getCSSVariableValue)('--bs-primary');
    var baseLightColor = (0, _utils_1.getCSSVariableValue)('--bs-light-primary');
    var secondaryColor = (0, _utils_1.getCSSVariableValue)('--bs-info');
    return {
        series: [
            {
                name: 'Net Profit',
                type: 'bar',
                data: [40, 50, 65, 70, 50, 30],
            },
            {
                name: 'Revenue',
                type: 'bar',
                data: [20, 20, 25, 30, 30, 20],
            },
            {
                name: 'Expenses',
                type: 'area',
                data: [50, 80, 60, 90, 50, 70],
            },
        ],
        chart: {
            fontFamily: 'inherit',
            stacked: true,
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 5,
                columnWidth: '12%',
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
        },
        yaxis: {
            max: 120,
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
        },
        fill: {
            opacity: 1,
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                },
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                },
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0,
                },
            },
        },
        tooltip: {
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: function (val) {
                    return '$' + val + ' thousands';
                },
            },
        },
        colors: [baseColor, secondaryColor, baseLightColor],
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
    };
}
