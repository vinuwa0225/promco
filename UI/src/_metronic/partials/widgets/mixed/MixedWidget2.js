"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedWidget2 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var helpers_1 = require("../../../helpers");
var _utils_1 = require("../../../assets/ts/_utils");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var MixedWidget2 = function (_a) {
    var className = _a.className, chartColor = _a.chartColor, chartHeight = _a.chartHeight, strokeColor = _a.strokeColor;
    var chartRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!chartRef.current) {
            return;
        }
        var chart = new apexcharts_1.default(chartRef.current, chartOptions(chartHeight, chartColor, strokeColor));
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
        react_1.default.createElement("div", { className: "card-header border-0 py-5 bg-".concat(chartColor) },
            react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white' }, "Statistics"),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color- border-0 me-n3', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-2' })),
                react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
        react_1.default.createElement("div", { className: 'card-body p-0' },
            react_1.default.createElement("div", { ref: chartRef, className: "mixed-widget-2-chart card-rounded-bottom bg-".concat(chartColor) }),
            react_1.default.createElement("div", { className: 'card-p mt-n20 position-relative' },
                react_1.default.createElement("div", { className: 'row g-0' },
                    react_1.default.createElement("div", { className: 'col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen032.svg', className: 'svg-icon-3x svg-icon-warning d-block my-2' }),
                        react_1.default.createElement("a", { href: '#', className: 'text-warning fw-bold fs-6' }, "Weekly Issues")),
                    react_1.default.createElement("div", { className: 'col bg-light-primary px-6 py-8 rounded-2 mb-7' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr075.svg', className: 'svg-icon-3x svg-icon-primary d-block my-2' }),
                        react_1.default.createElement("a", { href: '#', className: 'text-primary fw-bold fs-6' }, "New Users"))),
                react_1.default.createElement("div", { className: 'row g-0' },
                    react_1.default.createElement("div", { className: 'col bg-light-danger px-6 py-8 rounded-2 me-7' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/abstract/abs027.svg', className: 'svg-icon-3x svg-icon-danger d-block my-2' }),
                        react_1.default.createElement("a", { href: '#', className: 'text-danger fw-bold fs-6 mt-2' }, "Machines")),
                    react_1.default.createElement("div", { className: 'col bg-light-success px-6 py-8 rounded-2' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/communication/com010.svg', className: 'svg-icon-3x svg-icon-success d-block my-2' }),
                        react_1.default.createElement("a", { href: '#', className: 'text-success fw-bold fs-6 mt-2' }, "Incident Reports")))))));
};
exports.MixedWidget2 = MixedWidget2;
var chartOptions = function (chartHeight, chartColor, strokeColor) {
    var labelColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-500');
    var borderColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-200');
    var color = (0, _utils_1.getCSSVariableValue)('--bs-' + chartColor);
    return {
        series: [
            {
                name: 'Net Profit',
                data: [30, 45, 32, 70, 40, 40, 40],
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
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 3,
                color: strokeColor,
                opacity: 0.5,
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
            opacity: 0,
        },
        stroke: {
            curve: 'smooth',
            show: true,
            width: 3,
            colors: [strokeColor],
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
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
                    color: borderColor,
                    width: 1,
                    dashArray: 3,
                },
            },
        },
        yaxis: {
            min: 0,
            max: 80,
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
            marker: {
                show: false,
            },
        },
        colors: ['transparent'],
        markers: {
            colors: [color],
            strokeColors: [strokeColor],
            strokeWidth: 3,
        },
    };
};
