"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartsWidget5 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var _utils_1 = require("../../../assets/ts/_utils");
var ChartsWidget5 = function (_a) {
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
                react_1.default.createElement("span", { className: 'card-label fw-bolder fs-3 mb-1' }, "Recent Customers"),
                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "More than 500 new customers")),
            react_1.default.createElement("div", { className: 'card-toolbar', "data-kt-buttons": 'true' },
                react_1.default.createElement("a", { className: 'btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1', id: 'kt_charts_widget_5_year_btn' }, "Year"),
                react_1.default.createElement("a", { className: 'btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1', id: 'kt_charts_widget_5_month_btn' }, "Month"),
                react_1.default.createElement("a", { className: 'btn btn-sm btn-color-muted btn-active btn-active-primary px-4', id: 'kt_charts_widget_5_week_btn' }, "Week"))),
        react_1.default.createElement("div", { className: 'card-body' },
            react_1.default.createElement("div", { ref: chartRef, id: 'kt_charts_widget_5_chart', style: { height: '350px' } }))));
};
exports.ChartsWidget5 = ChartsWidget5;
function getChartOptions(height) {
    var labelColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-500');
    var borderColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-200');
    var baseColor = (0, _utils_1.getCSSVariableValue)('--bs-primary');
    var secondaryColor = (0, _utils_1.getCSSVariableValue)('--bs-info');
    return {
        series: [
            {
                name: 'Net Profit',
                data: [40, 50, 65, 70, 50, 30],
            },
            {
                name: 'Revenue',
                data: [-30, -40, -55, -60, -40, -20],
            },
        ],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            stacked: true,
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '12%',
                borderRadius: 5,
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
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
            min: -80,
            max: 80,
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
        colors: [baseColor, secondaryColor],
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
    };
}
