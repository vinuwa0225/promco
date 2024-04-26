"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartsWidget7 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var _utils_1 = require("../../../assets/ts/_utils");
var ChartsWidget7 = function (_a) {
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
                react_1.default.createElement("span", { className: 'card-label fw-bolder fs-3 mb-1' }, "Recent Users"),
                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "More than 500 new users")),
            react_1.default.createElement("div", { className: 'card-toolbar', "data-kt-buttons": 'true' },
                react_1.default.createElement("a", { className: 'btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1', id: 'kt_charts_widget_7_year_btn' }, "Year"),
                react_1.default.createElement("a", { className: 'btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1', id: 'kt_charts_widget_7_month_btn' }, "Month"),
                react_1.default.createElement("a", { className: 'btn btn-sm btn-color-muted btn-active btn-active-primary px-4', id: 'kt_charts_widget_7_week_btn' }, "Week"))),
        react_1.default.createElement("div", { className: 'card-body' },
            react_1.default.createElement("div", { ref: chartRef, id: 'kt_charts_widget_7_chart', style: { height: '350px' }, className: 'card-rounded-bottom' }))));
};
exports.ChartsWidget7 = ChartsWidget7;
function getChartOptions(height) {
    var labelColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-500');
    var borderColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-200');
    var strokeColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-300');
    var color1 = (0, _utils_1.getCSSVariableValue)('--bs-warning');
    var color1Light = (0, _utils_1.getCSSVariableValue)('--bs-light-warning');
    var color2 = (0, _utils_1.getCSSVariableValue)('--bs-success');
    var color2Light = (0, _utils_1.getCSSVariableValue)('--bs-light-success');
    var color3 = (0, _utils_1.getCSSVariableValue)('--bs-primary');
    var color3Light = (0, _utils_1.getCSSVariableValue)('--bs-light-primary');
    return {
        series: [
            {
                name: 'Net Profit',
                data: [30, 30, 50, 50, 35, 35],
            },
            {
                name: 'Revenue',
                data: [55, 20, 20, 20, 70, 70],
            },
            {
                name: 'Expenses',
                data: [60, 60, 40, 40, 30, 30],
            },
        ],
        chart: {
            fontFamily: 'inherit',
            type: 'area',
            height: height,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {},
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: 'solid',
            opacity: 1,
        },
        stroke: {
            curve: 'smooth',
            show: true,
            width: 2,
            colors: [color1, 'transparent', 'transparent'],
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
                show: false,
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
            crosshairs: {
                show: false,
                position: 'front',
                stroke: {
                    color: strokeColor,
                    width: 1,
                    dashArray: 3,
                },
            },
            tooltip: {
                enabled: true,
                formatter: undefined,
                offsetY: 0,
                style: {
                    fontSize: '12px',
                },
            },
        },
        yaxis: {
            labels: {
                show: false,
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
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
        colors: [color1, color2, color3],
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        markers: {
            colors: [color1Light, color2Light, color3Light],
            strokeColors: [color1, color2, color3],
            strokeWidth: 3,
        },
    };
}
