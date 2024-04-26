"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedWidget8 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var helpers_1 = require("../../../helpers");
var _utils_1 = require("../../../assets/ts/_utils");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var MixedWidget8 = function (_a) {
    var className = _a.className, chartColor = _a.chartColor, chartHeight = _a.chartHeight;
    var chartRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!chartRef.current) {
            return;
        }
        var chart1 = new apexcharts_1.default(chartRef.current, chart1Options(chartColor, chartHeight));
        if (chart1) {
            chart1.render();
        }
        return function () {
            if (chart1) {
                chart1.destroy();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chartRef]);
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: 'card-header border-0 py-5' },
            react_1.default.createElement("h3", { className: 'card-title align-items-start flex-column' },
                react_1.default.createElement("span", { className: 'card-label fw-bolder fs-3 mb-1' }, "Trends"),
                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Latest trends")),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-primary btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-2' })),
                react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
        react_1.default.createElement("div", { className: 'card-body d-flex flex-column' },
            react_1.default.createElement("div", { ref: chartRef, className: 'mixed-widget-5-chart card-rounded-top' }),
            react_1.default.createElement("div", { className: 'mt-5' },
                react_1.default.createElement("div", { className: 'd-flex flex-stack mb-5' },
                    react_1.default.createElement("div", { className: 'd-flex align-items-center me-2' },
                        react_1.default.createElement("div", { className: 'symbol symbol-50px me-3' },
                            react_1.default.createElement("div", { className: 'symbol-label bg-light' },
                                react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/svg/brand-logos/plurk.svg'), alt: '', className: 'h-50' }))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("a", { href: '#', className: 'fs-6 text-gray-800 text-hover-primary fw-bolder' }, "Top Authors"),
                            react_1.default.createElement("div", { className: 'fs-7 text-muted fw-bold mt-1' }, "Ricky Hunt, Sandra Trepp"))),
                    react_1.default.createElement("div", { className: 'badge badge-light fw-bold py-4 px-3' }, "+82$")),
                react_1.default.createElement("div", { className: 'd-flex flex-stack mb-5' },
                    react_1.default.createElement("div", { className: 'd-flex align-items-center me-2' },
                        react_1.default.createElement("div", { className: 'symbol symbol-50px me-3' },
                            react_1.default.createElement("div", { className: 'symbol-label bg-light' },
                                react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/svg/brand-logos/figma-1.svg'), alt: '', className: 'h-50' }))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("a", { href: '#', className: 'fs-6 text-gray-800 text-hover-primary fw-bolder' }, "Top Sales"),
                            react_1.default.createElement("div", { className: 'fs-7 text-muted fw-bold mt-1' }, "PitStop Emails"))),
                    react_1.default.createElement("div", { className: 'badge badge-light fw-bold py-4 px-3' }, "+82$")),
                react_1.default.createElement("div", { className: 'd-flex flex-stack' },
                    react_1.default.createElement("div", { className: 'd-flex align-items-center me-2' },
                        react_1.default.createElement("div", { className: 'symbol symbol-50px me-3' },
                            react_1.default.createElement("div", { className: 'symbol-label bg-light' },
                                react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/svg/brand-logos/vimeo.svg'), alt: '', className: 'h-50' }))),
                        react_1.default.createElement("div", { className: 'py-1' },
                            react_1.default.createElement("a", { href: '#', className: 'fs-6 text-gray-800 text-hover-primary fw-bolder' }, "Top Engagement"),
                            react_1.default.createElement("div", { className: 'fs-7 text-muted fw-bold mt-1' }, "KT.com"))),
                    react_1.default.createElement("div", { className: 'badge badge-light fw-bold py-4 px-3' }, "+82$"))))));
};
exports.MixedWidget8 = MixedWidget8;
var chart1Options = function (chartColor, chartHeight) {
    var labelColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-800');
    var strokeColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-300');
    var baseColor = (0, _utils_1.getCSSVariableValue)('--bs-' + chartColor);
    var lightColor = (0, _utils_1.getCSSVariableValue)('--bs-light-' + chartColor);
    return {
        series: [
            {
                name: 'Net Profit',
                data: [30, 30, 60, 25, 25, 40],
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
            type: 'gradient',
            opacity: 1,
            gradient: {
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 0.375,
                stops: [25, 50, 100],
            },
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
            max: 65,
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
