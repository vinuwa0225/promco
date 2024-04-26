"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedWidget10 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var _utils_1 = require("../../../assets/ts/_utils");
var MixedWidget10 = function (_a) {
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
        react_1.default.createElement("div", { className: 'card-body d-flex flex-column p-0' },
            react_1.default.createElement("div", { className: 'flex-grow-1 card-p pb-0' },
                react_1.default.createElement("div", { className: 'd-flex flex-stack flex-wrap' },
                    react_1.default.createElement("div", { className: 'me-2' },
                        react_1.default.createElement("a", { href: '#', className: 'text-dark text-hover-primary fw-bolder fs-3' }, "Generate Reports"),
                        react_1.default.createElement("div", { className: 'text-muted fs-7 fw-bold' }, "Incident reports")),
                    react_1.default.createElement("div", { className: "fw-bolder fs-3 text-".concat(chartColor) }, "500"))),
            react_1.default.createElement("div", { ref: chartRef, className: 'mixed-widget-7-chart card-rounded-bottom' }))));
};
exports.MixedWidget10 = MixedWidget10;
var chartOptions = function (chartColor, chartHeight) {
    var labelColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-800');
    var strokeColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-300');
    var baseColor = (0, _utils_1.getCSSVariableValue)('--bs-' + chartColor);
    var lightColor = (0, _utils_1.getCSSVariableValue)('--bs-light-' + chartColor);
    return {
        series: [
            {
                name: 'Net Profit',
                data: [15, 25, 15, 40, 20, 50],
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
