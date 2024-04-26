"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedWidget7 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var helpers_1 = require("../../../helpers");
var _utils_1 = require("../../../assets/ts/_utils");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var MixedWidget7 = function (_a) {
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
                react_1.default.createElement("span", { className: 'card-label fw-bolder fs-3 mb-1' }, "Action Needed"),
                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Complete your profile setup")),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-primary btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-2' })),
                react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
        react_1.default.createElement("div", { className: 'card-body d-flex flex-column' },
            react_1.default.createElement("div", { className: 'flex-grow-1' },
                react_1.default.createElement("div", { ref: chartRef, className: 'mixed-widget-4-chart' })),
            react_1.default.createElement("div", { className: 'pt-5' },
                react_1.default.createElement("p", { className: 'text-center fs-6 pb-5 ' },
                    react_1.default.createElement("span", { className: 'badge badge-light-danger fs-8' }, "Notes:"),
                    "\u00A0 Current sprint requires stakeholders",
                    react_1.default.createElement("br", null),
                    "to approve newly amended policies"),
                react_1.default.createElement("a", { href: '#', className: "btn btn-".concat(chartColor, " w-100 py-3") }, "Take Action")))));
};
exports.MixedWidget7 = MixedWidget7;
var chartOptions = function (chartColor, chartHeight) {
    var baseColor = (0, _utils_1.getCSSVariableValue)('--bs-' + chartColor);
    var lightColor = (0, _utils_1.getCSSVariableValue)('--bs-light-' + chartColor);
    var labelColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-700');
    return {
        series: [74],
        chart: {
            fontFamily: 'inherit',
            height: chartHeight,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '65%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        fontWeight: '700',
                    },
                    value: {
                        color: labelColor,
                        fontSize: '30px',
                        fontWeight: '700',
                        offsetY: 12,
                        show: true,
                        formatter: function (val) {
                            return val + '%';
                        },
                    },
                },
                track: {
                    background: lightColor,
                    strokeWidth: '100%',
                },
            },
        },
        colors: [baseColor],
        stroke: {
            lineCap: 'round',
        },
        labels: ['Progress'],
    };
};
