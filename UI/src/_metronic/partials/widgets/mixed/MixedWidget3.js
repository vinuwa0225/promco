"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedWidget3 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var helpers_1 = require("../../../helpers");
var _utils_1 = require("../../../assets/ts/_utils");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var clsx_1 = require("clsx");
var MixedWidget3 = function (_a) {
    var className = _a.className, chartColor = _a.chartColor, chartHeight = _a.chartHeight;
    var chartRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!chartRef.current) {
            return;
        }
        var chart = new apexcharts_1.default(chartRef.current, chartOptions(chartHeight));
        if (chart) {
            chart.render();
        }
        return function () {
            if (chart) {
                chart.destroy();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chartRef]);
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: "card-header border-0 bg-".concat(chartColor, " py-5") },
            react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white' }, "Sales Progress"),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: (0, clsx_1.default)('btn btn-sm btn-icon btn-color-white btn-active-white', "btn-active-color-".concat(chartColor), 'border-0 me-n3'), "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-2' })),
                react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
        react_1.default.createElement("div", { className: 'card-body p-0' },
            react_1.default.createElement("div", { ref: chartRef, className: "mixed-widget-12-chart card-rounded-bottom bg-".concat(chartColor) }),
            react_1.default.createElement("div", { className: 'card-rounded bg-white mt-n10 position-relative card-px py-15' },
                react_1.default.createElement("div", { className: 'row g-0 mb-7' },
                    react_1.default.createElement("div", { className: 'col mx-5' },
                        react_1.default.createElement("div", { className: 'fs-6 text-gray-400' }, "Avarage Sale"),
                        react_1.default.createElement("div", { className: 'fs-2 fw-bolder text-gray-800' }, "$650")),
                    react_1.default.createElement("div", { className: 'col mx-5' },
                        react_1.default.createElement("div", { className: 'fs-6 text-gray-400' }, "Comissions"),
                        react_1.default.createElement("div", { className: 'fs-2 fw-bolder text-gray-800' }, "$29,500"))),
                react_1.default.createElement("div", { className: 'row g-0' },
                    react_1.default.createElement("div", { className: 'col mx-5' },
                        react_1.default.createElement("div", { className: 'fs-6 text-gray-400' }, "Revenue"),
                        react_1.default.createElement("div", { className: 'fs-2 fw-bolder text-gray-800' }, "$55,000")),
                    react_1.default.createElement("div", { className: 'col mx-5' },
                        react_1.default.createElement("div", { className: 'fs-6 text-gray-400' }, "Expenses"),
                        react_1.default.createElement("div", { className: 'fs-2 fw-bolder text-gray-800' }, "$1,130,600")))))));
};
exports.MixedWidget3 = MixedWidget3;
var chartOptions = function (chartHeight) {
    var labelColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-500');
    var borderColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-200');
    return {
        series: [
            {
                name: 'Net Profit',
                data: [35, 65, 75, 55, 45, 60, 55],
            },
            {
                name: 'Revenue',
                data: [40, 70, 80, 60, 50, 65, 60],
            },
        ],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: chartHeight,
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
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
            width: 1,
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
            min: 0,
            max: 100,
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
        },
        fill: {
            type: ['solid', 'solid'],
            opacity: [0.25, 1],
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
            marker: {
                show: false,
            },
        },
        colors: ['#ffffff', '#ffffff'],
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                left: 20,
                right: 20,
            },
        },
    };
};
