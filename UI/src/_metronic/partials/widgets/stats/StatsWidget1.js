"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsWidget1 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var chart_js_1 = require("chart.js");
var _utils_1 = require("../../../assets/ts/_utils");
var helpers_1 = require("../../../helpers");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var StatsWidget1 = function (_a) {
    var className = _a.className, _b = _a.innerPadding, innerPadding = _b === void 0 ? '' : _b;
    (0, react_1.useEffect)(function () {
        var element = document.getElementById('kt_stats_widget_1_chart');
        if (!element) {
            return;
        }
        var options = getChartOptions();
        var ctx = element.getContext('2d');
        var myDoughnut;
        if (ctx) {
            myDoughnut = new chart_js_1.Chart(ctx, options);
        }
        return function cleanUp() {
            if (myDoughnut) {
                myDoughnut.destroy();
            }
        };
    }, []);
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: "card-header align-items-center border-0 mt-5 ".concat(innerPadding) },
            react_1.default.createElement("h3", { className: 'card-title align-items-start flex-column' },
                react_1.default.createElement("span", { className: 'fw-bolder text-dark fs-3' }, "Sales Share"),
                react_1.default.createElement("span", { className: 'text-muted mt-2 fw-bold fs-6' }, "890,344 Sales")),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-primary btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-1' })),
                react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
        react_1.default.createElement("div", { className: 'card-body pt-12' },
            react_1.default.createElement("div", { className: 'd-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px', style: {
                    backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/svg/illustrations/bg-1.svg'), "')"),
                } },
                react_1.default.createElement("div", { className: 'fw-bolder fs-1 text-gray-800 position-absolute' }, "8,345"),
                react_1.default.createElement("canvas", { id: 'kt_stats_widget_1_chart' })),
            react_1.default.createElement("div", { className: 'd-flex justify-content-around pt-18' },
                react_1.default.createElement("div", { className: '' },
                    react_1.default.createElement("span", { className: 'fw-bolder text-gray-800' }, "48% SNT"),
                    react_1.default.createElement("span", { className: 'bg-info w-25px h-5px d-block rounded mt-1' })),
                react_1.default.createElement("div", { className: '' },
                    react_1.default.createElement("span", { className: 'fw-bolder text-gray-800' }, "20% REX"),
                    react_1.default.createElement("span", { className: 'bg-primary w-25px h-5px d-block rounded mt-1' })),
                react_1.default.createElement("div", { className: '' },
                    react_1.default.createElement("span", { className: 'fw-bolder text-gray-800' }, "32% SAP"),
                    react_1.default.createElement("span", { className: 'bg-warning w-25px h-5px d-block rounded mt-1' }))))));
};
exports.StatsWidget1 = StatsWidget1;
function getChartOptions() {
    var tooltipBgColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-200');
    var tooltipColor = (0, _utils_1.getCSSVariableValue)('--bs-gray-800');
    var color1 = (0, _utils_1.getCSSVariableValue)('--bs-success');
    var color2 = (0, _utils_1.getCSSVariableValue)('--bs-warning');
    var color3 = (0, _utils_1.getCSSVariableValue)('--bs-primary');
    var options = {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [30, 40, 25],
                    backgroundColor: [color1, color2, color3],
                },
            ],
            labels: ['Angular', 'CSS', 'HTML'],
        },
        options: {
            cutoutPercentage: 75,
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Technology',
            },
            animation: {
                /* @ts-ignore */
                animateScale: true,
                animateRotate: true,
            },
            tooltips: {
                enabled: true,
                intersect: false,
                mode: 'nearest',
                bodySpacing: 5,
                yPadding: 10,
                xPadding: 10,
                caretPadding: 0,
                displayColors: false,
                backgroundColor: tooltipBgColor,
                bodyFontColor: tooltipColor,
                cornerRadius: 4,
                footerSpacing: 0,
                titleSpacing: 0,
            },
        },
    };
    return options;
}
// function randomScalingFactor() {
//   return Math.round(Math.random() * 100);
// }
