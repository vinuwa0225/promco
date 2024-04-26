"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsWidget3 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var _utils_1 = require("../../../assets/ts/_utils");
var StatisticsWidget3 = function (_a) {
    var className = _a.className, title = _a.title, description = _a.description, change = _a.change, color = _a.color;
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chartRef]);
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: 'card-body d-flex flex-column p-0' },
            react_1.default.createElement("div", { className: 'd-flex flex-stack flex-grow-1 card-p' },
                react_1.default.createElement("div", { className: 'd-flex flex-column me-2' },
                    react_1.default.createElement("a", { href: '#', className: 'text-dark text-hover-primary fw-bolder fs-3' }, title),
                    react_1.default.createElement("span", { className: 'text-muted fw-bold mt-1', dangerouslySetInnerHTML: { __html: description } })),
                react_1.default.createElement("span", { className: 'symbol symbol-50px' },
                    react_1.default.createElement("span", { className: "symbol-label fs-5 fw-bolder bg-light-".concat(color, " text-").concat(color) }, change))),
            react_1.default.createElement("div", { ref: chartRef, className: 'statistics-widget-3-chart card-rounded-bottom', style: { height: '150px' } }))));
};
exports.StatisticsWidget3 = StatisticsWidget3;
function getChartOptions(height, labelColor, baseColor, lightColor) {
    var options = {
        series: [
            {
                name: 'Net Profit',
                data: [30, 45, 32, 70, 40],
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
        },
        colors: [lightColor],
        markers: {
            colors: [lightColor],
            strokeColors: [baseColor],
            strokeWidth: 3,
        },
    };
    return options;
}
