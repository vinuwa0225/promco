"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedWidget6 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var helpers_1 = require("../../../helpers");
var _utils_1 = require("../../../assets/ts/_utils");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var MixedWidget6 = function (_a) {
    var className = _a.className, chartHeight = _a.chartHeight, chartColor = _a.chartColor;
    var chartRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!chartRef.current) {
            return;
        }
        var chart = new apexcharts_1.default(chartRef.current, chartOptions(chartHeight, chartColor));
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
        react_1.default.createElement("div", { className: 'card-header border-0 py-5' },
            react_1.default.createElement("h3", { className: 'card-title align-items-start flex-column' },
                react_1.default.createElement("span", { className: 'card-label fw-bolder fs-3 mb-1' }, "Sales Overview"),
                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Recent sales statistics")),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-primary btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-2' })),
                react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
        react_1.default.createElement("div", { className: 'card-body p-0 d-flex flex-column' },
            react_1.default.createElement("div", { className: 'card-p pt-5 bg-white flex-grow-1' },
                react_1.default.createElement("div", { className: 'row g-0' },
                    react_1.default.createElement("div", { className: 'col mr-8' },
                        react_1.default.createElement("div", { className: 'fs-7 text-muted fw-bold' }, "Average Sale"),
                        react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                            react_1.default.createElement("div", { className: 'fs-4 fw-bolder' }, "$650"),
                            react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr066.svg', className: 'svg-icon-5 svg-icon-success ms-1' }))),
                    react_1.default.createElement("div", { className: 'col' },
                        react_1.default.createElement("div", { className: 'fs-7 text-muted fw-bold' }, "Commission"),
                        react_1.default.createElement("div", { className: 'fs-4 fw-bolder' }, "$233,600"))),
                react_1.default.createElement("div", { className: 'row g-0 mt-8' },
                    react_1.default.createElement("div", { className: 'col mr-8' },
                        react_1.default.createElement("div", { className: 'fs-7 text-muted fw-bold' }, "Annual Taxes 2019"),
                        react_1.default.createElement("div", { className: 'fs-4 fw-bolder' }, "$29,004")),
                    react_1.default.createElement("div", { className: 'col' },
                        react_1.default.createElement("div", { className: 'fs-7 text-muted fw-bold' }, "Annual Income"),
                        react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                            react_1.default.createElement("div", { className: 'fs-4 fw-bolder' }, "$1,480,00"),
                            react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr065.svg', className: 'svg-icon-5 svg-icon-danger ms-1' }))))),
            react_1.default.createElement("div", { ref: chartRef, className: 'mixed-widget-3-chart card-rounded-bottom' }))));
};
exports.MixedWidget6 = MixedWidget6;
var chartOptions = function (chartHeight, chartColor) {
    var labelColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-800');
    var strokeColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-300');
    var baseColor = (0, _utils_1.getCSSVariableValue)('--bs-' + chartColor);
    var lightColor = (0, _utils_1.getCSSVariableValue)('--bs-light-' + chartColor);
    return {
        series: [
            {
                name: 'Net Profit',
                data: [30, 25, 45, 30, 55, 55],
            },
        ],
        chart: {
            fontFamily: 'inherit',
            type: 'area',
            height: chartHeight,
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
            width: 3,
            colors: [baseColor],
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
                enabled: false,
            },
        },
        yaxis: {
            min: 0,
            max: 60,
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
        colors: [lightColor],
        markers: {
            colors: [lightColor],
            strokeColors: [baseColor],
            strokeWidth: 3,
        },
    };
};
