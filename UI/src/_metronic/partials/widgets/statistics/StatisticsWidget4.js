"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsWidget4 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var apexcharts_1 = require("apexcharts");
var _utils_1 = require("../../../assets/ts/_utils");
var clsx_1 = require("clsx");
var StatisticsWidget4 = function (_a) {
    var className = _a.className, svgIcon = _a.svgIcon, color = _a.color, change = _a.change, description = _a.description;
    var chartRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!chartRef.current) {
            return;
        }
        var height = parseInt((0, _utils_1.getCSS)(chartRef.current, 'height'));
        var labelColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-800');
        var baseColor = (0, _utils_1.getCSSVariableValue)('--bs-' + color);
        var lightColor = (0, _utils_1.getCSSVariableValue)('--bs-light-' + color);
        var chart = new apexcharts_1.default(chartRef.current, getChartOptions(height, labelColor, baseColor, lightColor));
        if (chart) {
            chart.render();
        }
        return function () {
            if (chart) {
                chart.destroy();
            }
        };
    }, [chartRef, color]);
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: 'card-body p-0' },
            react_1.default.createElement("div", { className: 'd-flex flex-stack card-p flex-grow-1' },
                react_1.default.createElement("span", { className: (0, clsx_1.default)('symbol symbol-50px', "symbol-light-".concat(color), 'me-2') },
                    react_1.default.createElement("span", { className: 'symbol-label' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: svgIcon, className: "svg-icon-2x svg-icon-".concat(color) }))),
                react_1.default.createElement("div", { className: 'd-flex flex-column text-end' },
                    react_1.default.createElement("span", { className: 'text-dark fw-bolder fs-2' }, change),
                    react_1.default.createElement("span", { className: 'text-muted fw-bold mt-1' }, description))),
            react_1.default.createElement("div", { ref: chartRef, className: 'statistics-widget-4-chart card-rounded-bottom', style: { height: '150px' } }))));
};
exports.StatisticsWidget4 = StatisticsWidget4;
function getChartOptions(height, labelColor, baseColor, lightColor) {
    return {
        series: [
            {
                name: 'Net Profit',
                data: [40, 40, 30, 30, 35, 35, 50],
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
            width: 3,
            colors: [baseColor],
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
                    color: '#E4E6EF',
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
}
