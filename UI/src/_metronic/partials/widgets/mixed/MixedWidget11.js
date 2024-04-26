"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedWidget11 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var _utils_1 = require("../../../assets/ts/_utils");
var MixedWidget11 = function (_a) {
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
        react_1.default.createElement("div", { className: 'card-body p-0 d-flex justify-content-between flex-column overflow-hidden' },
            react_1.default.createElement("div", { className: 'd-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3' },
                react_1.default.createElement("div", { className: 'me-2' },
                    react_1.default.createElement("span", { className: 'fw-bolder text-gray-800 d-block fs-3' }, "Monitor"),
                    react_1.default.createElement("span", { className: 'text-gray-400 fw-bold' }, "Oct 8 - Oct 26 2021")),
                react_1.default.createElement("div", { className: "fw-bolder fs-3 text-".concat(chartColor) }, "15,300")),
            react_1.default.createElement("div", { ref: chartRef, className: 'mixed-widget-10-chart' }))));
};
exports.MixedWidget11 = MixedWidget11;
var chartOptions = function (chartColor, chartHeight) {
    var labelColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-500');
    var borderColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-200');
    var secondaryColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-300');
    var baseColor = (0, _utils_1.getCSSVariableValue)('--bs-' + chartColor);
    return {
        series: [
            {
                name: 'Net Profit',
                data: [50, 60, 70, 80, 60, 50, 70, 60],
            },
            {
                name: 'Revenue',
                data: [50, 60, 70, 80, 60, 50, 70, 60],
            },
        ],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: chartHeight,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
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
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
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
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
        },
        fill: {
            type: 'solid',
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
                    return '$' + val + ' revenue';
                },
            },
        },
        colors: [baseColor, secondaryColor],
        grid: {
            padding: {
                top: 10,
            },
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
    };
};
