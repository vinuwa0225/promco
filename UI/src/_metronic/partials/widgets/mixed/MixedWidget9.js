"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedWidget9 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var helpers_1 = require("../../../helpers");
var _utils_1 = require("../../../assets/ts/_utils");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var MixedWidget9 = function (_a) {
    var className = _a.className, chartColor = _a.chartColor, chartHeight = _a.chartHeight;
    var chartRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!chartRef.current) {
            return;
        }
        var chart = new apexcharts_1.default(chartRef.current, chartOptions(chartColor, chartHeight));
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
                react_1.default.createElement("span", { className: 'card-label fw-bolder fs-3 mb-1' }, "Sales Statistics"),
                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Recent sales statistics")),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-primary btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-2' })),
                react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
        react_1.default.createElement("div", { className: 'card-body p-0 d-flex flex-column' },
            react_1.default.createElement("div", { className: 'card-px pt-5 pb-10 flex-grow-1' },
                react_1.default.createElement("div", { className: 'row g-0 mt-5 mb-10' },
                    react_1.default.createElement("div", { className: 'col' },
                        react_1.default.createElement("div", { className: 'd-flex align-items-center me-2' },
                            react_1.default.createElement("div", { className: 'symbol symbol-50px me-3' },
                                react_1.default.createElement("div", { className: 'symbol-label bg-light-info' },
                                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/art/art007.svg', className: 'svg-icon-1 svg-icon-info' }))),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("div", { className: 'fs-4 text-dark fw-bolder' }, "$2,034"),
                                react_1.default.createElement("div", { className: 'fs-7 text-muted fw-bold' }, "Author Sales")))),
                    react_1.default.createElement("div", { className: 'col' },
                        react_1.default.createElement("div", { className: 'd-flex align-items-center me-2' },
                            react_1.default.createElement("div", { className: 'symbol symbol-50px me-3' },
                                react_1.default.createElement("div", { className: 'symbol-label bg-light-danger' },
                                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/abstract/abs027.svg', className: 'svg-icon-1 svg-icon-danger' }))),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("div", { className: 'fs-4 text-dark fw-bolder' }, "$706"),
                                react_1.default.createElement("div", { className: 'fs-7 text-muted fw-bold' }, "Commision"))))),
                react_1.default.createElement("div", { className: 'row g-0' },
                    react_1.default.createElement("div", { className: 'col' },
                        react_1.default.createElement("div", { className: 'd-flex align-items-center me-2' },
                            react_1.default.createElement("div", { className: 'symbol symbol-50px me-3' },
                                react_1.default.createElement("div", { className: 'symbol-label bg-light-success' },
                                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/ecommerce/ecm002.svg', className: 'svg-icon-1 svg-icon-success' }))),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("div", { className: 'fs-4 text-dark fw-bolder' }, "$49"),
                                react_1.default.createElement("div", { className: 'fs-7 text-muted fw-bold' }, "Average Bid")))),
                    react_1.default.createElement("div", { className: 'col' },
                        react_1.default.createElement("div", { className: 'd-flex align-items-center me-2' },
                            react_1.default.createElement("div", { className: 'symbol symbol-50px me-3' },
                                react_1.default.createElement("div", { className: 'symbol-label bg-light-primary' },
                                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/ecommerce/ecm010.svg', className: 'svg-icon-1 svg-icon-primary' }))),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("div", { className: 'fs-4 text-dark fw-bolder' }, "$5.8M"),
                                react_1.default.createElement("div", { className: 'fs-7 text-muted fw-bold' }, "All Time Sales")))))),
            react_1.default.createElement("div", { ref: chartRef, className: 'mixed-widget-6-chart card-rounded-bottom' }))));
};
exports.MixedWidget9 = MixedWidget9;
var chartOptions = function (chartColor, chartHeight) {
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
