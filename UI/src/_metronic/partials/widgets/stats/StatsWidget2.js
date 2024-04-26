"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsWidget2 = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var helpers_1 = require("../../../helpers");
var Dropdown2_1 = require("../../content/dropdown/Dropdown2");
var _utils_1 = require("../../../assets/ts/_utils");
var StatsWidget2 = function (_a) {
    var className = _a.className, _b = _a.innerPadding, innerPadding = _b === void 0 ? '' : _b;
    var _c = (0, react_1.useState)('#tab1'), activeTab = _c[0], setActiveTab = _c[1];
    var _d = (0, react_1.useState)(), activeChart = _d[0], setActiveChart = _d[1];
    (0, react_1.useEffect)(function () {
        setTab(1);
        return function cleanUp() {
            if (activeChart) {
                activeChart.destroy();
            }
        };
    }, []);
    var setTab = function (tabNumber) {
        setActiveTab("#tab".concat(tabNumber));
        if (activeChart) {
            activeChart.destroy();
        }
        var element = document.querySelector("#tab".concat(tabNumber, "_chart"));
        if (!element) {
            return;
        }
        var height = parseInt(getCss(element, 'height'));
        var chart = new apexcharts_1.default(element, getChartOptions(tabNumber, height));
        chart.render();
        setActiveChart(chart);
    };
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: 'card-header align-items-center border-0 mt-5' },
            react_1.default.createElement("h3", { className: 'card-title align-items-start flex-column' },
                react_1.default.createElement("span", { className: 'fw-bolder text-dark fs-3' }, "Milestones"),
                react_1.default.createElement("span", { className: 'text-muted mt-2 fw-bold fs-6' }, "890,344 Sales")),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-primary btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-1', path: '/media/icons/duotune/general/gen024.svg' })),
                react_1.default.createElement(Dropdown2_1.Dropdown2, null))),
        react_1.default.createElement("div", { className: 'card-body pt-0' },
            react_1.default.createElement("div", { className: 'd-flex flex-wrap flex-xxl-nowrap justify-content-center justify-content-md-start pt-4' },
                react_1.default.createElement("div", { className: 'me-sm-10 me-0' },
                    react_1.default.createElement("ul", { className: 'nav flex-column nav-pills nav-pills-custom' },
                        react_1.default.createElement("li", { className: 'nav-item mb-3' },
                            react_1.default.createElement("a", { onClick: function () { return setTab(1); }, className: "nav-link w-225px h-70px ".concat(activeTab === '#tab1' ? 'active btn-active-light' : '', " fw-bolder me-2"), id: 'tab1' },
                                react_1.default.createElement("div", { className: 'nav-icon me-3' },
                                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/gray/aven.svg'), className: 'default' }),
                                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/colored/aven.svg'), className: 'active' })),
                                react_1.default.createElement("div", { className: 'ps-1' },
                                    react_1.default.createElement("span", { className: 'nav-text text-gray-600 fw-bolder fs-6' }, "Man&Flower SaaS"),
                                    react_1.default.createElement("span", { className: 'text-muted fw-bold d-block pt-1' }, "HR Solutions")))),
                        react_1.default.createElement("li", { className: 'nav-item mb-3' },
                            react_1.default.createElement("a", { id: 'tab2', className: "nav-link w-225px h-70px ".concat(activeTab === '#tab2' ? 'active btn-active-light' : '', " fw-bolder me-2"), onClick: function () { return setTab(2); } },
                                react_1.default.createElement("div", { className: 'nav-icon me-3' },
                                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/gray/tower.svg'), className: 'default' }),
                                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/colored/tower.svg'), className: 'active' })),
                                react_1.default.createElement("div", { className: 'ps-1' },
                                    react_1.default.createElement("span", { className: 'nav-text text-gray-600 fw-bolder fs-6' }, "Building Studio"),
                                    react_1.default.createElement("span", { className: 'text-muted fw-bold d-block pt-1' }, "HR Solutions")))),
                        react_1.default.createElement("li", { className: 'nav-item mb-3' },
                            react_1.default.createElement("a", { id: 'tab3', className: "nav-link w-225px h-70px ".concat(activeTab === '#tab3' ? 'active btn-active-light' : '', " fw-bolder me-2"), onClick: function () { return setTab(3); } },
                                react_1.default.createElement("div", { className: 'nav-icon me-3' },
                                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/gray/fox-hub-2.svg'), className: 'default' }),
                                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/colored/fox-hub-2.svg'), className: 'active' })),
                                react_1.default.createElement("div", { className: 'ps-1' },
                                    react_1.default.createElement("span", { className: 'nav-text text-gray-600 fw-bolder fs-6' }, "Foxy Solutions"),
                                    react_1.default.createElement("span", { className: 'text-muted fw-bold d-block pt-1' }, "HR Solutions")))),
                        react_1.default.createElement("li", { className: 'nav-item mb-5' },
                            react_1.default.createElement("a", { id: 'tab4', className: "nav-link w-225px h-70px ".concat(activeTab === '#tab4' ? 'active btn-active-light' : '', " fw-bolder me-2"), onClick: function () { return setTab(4); } },
                                react_1.default.createElement("div", { className: 'nav-icon me-3' },
                                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/gray/kanba.svg'), className: 'default' }),
                                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/colored/kanba.svg'), className: 'active' })),
                                react_1.default.createElement("div", { className: 'ps-1' },
                                    react_1.default.createElement("span", { className: 'nav-text text-gray-600 fw-bolder fs-6' }, "MyStreams"),
                                    react_1.default.createElement("span", { className: 'text-muted fw-bold d-block pt-1' }, "HR Solutions")))))),
                react_1.default.createElement("div", { className: 'tab-content flex-grow-1' // style={{ paddingLeft: "0.23rem !important" }}
                 },
                    react_1.default.createElement("div", { className: "tab-pane fade ".concat(activeTab === '#tab1' ? 'show active' : ''), id: 'tab1_content' },
                        react_1.default.createElement("div", { className: 'd-flex justify-content-center mb-10' },
                            react_1.default.createElement("div", { className: 'px-10' },
                                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Sale"),
                                react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-3 d-block' }, "$650")),
                            react_1.default.createElement("div", { className: 'px-10' },
                                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Commission"),
                                react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-3 d-block' }, "$2,040")),
                            react_1.default.createElement("div", { className: 'px-10' },
                                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Refers"),
                                react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-3 d-block' }, "8,926"))),
                        react_1.default.createElement("div", { id: 'tab1_chart', style: { height: '250px' } })),
                    react_1.default.createElement("div", { className: "tab-pane fade ".concat(activeTab === '#tab2' ? 'show active' : ''), id: 'tab2_content' },
                        react_1.default.createElement("div", { className: 'd-flex justify-content-center mb-10' },
                            react_1.default.createElement("div", { className: 'px-10' },
                                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Sale"),
                                react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-3 d-block' }, "$1250")),
                            react_1.default.createElement("div", { className: 'px-10' },
                                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Commission"),
                                react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-3 d-block' }, "$5,000")),
                            react_1.default.createElement("div", { className: 'px-10' },
                                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Refers"),
                                react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-3 d-block' }, "4,926"))),
                        react_1.default.createElement("div", { id: 'tab2_chart', style: { height: '250px' } })),
                    react_1.default.createElement("div", { className: "tab-pane fade ".concat(activeTab === '#tab3' ? 'show active' : ''), id: 'tab3_content' },
                        react_1.default.createElement("div", { className: 'd-flex justify-content-center mb-10' },
                            react_1.default.createElement("div", { className: 'px-10' },
                                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Sale"),
                                react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-3 d-block' }, "$350")),
                            react_1.default.createElement("div", { className: 'px-10' },
                                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Comission"),
                                react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-3 d-block' }, "$1,200")),
                            react_1.default.createElement("div", { className: 'px-10' },
                                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Refers"),
                                react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-3 d-block' }, "5,500"))),
                        react_1.default.createElement("div", { id: 'tab3_chart', style: { height: '250px' } })),
                    react_1.default.createElement("div", { className: "tab-pane fade ".concat(activeTab === '#tab4' ? 'show active' : ''), id: 'tab4_content' },
                        react_1.default.createElement("div", { className: 'd-flex justify-content-center mb-10' },
                            react_1.default.createElement("div", { className: 'px-10' },
                                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Sale"),
                                react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-3 d-block' }, "$450")),
                            react_1.default.createElement("div", { className: 'px-10' },
                                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Comission"),
                                react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-3 d-block' }, "$6,500")),
                            react_1.default.createElement("div", { className: 'px-10' },
                                react_1.default.createElement("span", { className: 'text-muted fw-bold fs-7' }, "Refers"),
                                react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-3 d-block' }, "500"))),
                        react_1.default.createElement("div", { id: 'tab4_chart', style: { height: '250px' } })))))));
};
exports.StatsWidget2 = StatsWidget2;
function getChartOptions(tabNumber, height) {
    return {
        series: [
            {
                name: 'Net Profit',
                data: data1[tabNumber - 1],
            },
            {
                name: 'Revenue',
                data: data2[tabNumber - 1],
            },
        ],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: height,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
                /* @ts-ignore */
                endingShape: 'rounded',
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
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: (0, _utils_1.getCSSVariableValue)('--bs-gray-700'),
                    fontSize: '12px',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: (0, _utils_1.getCSSVariableValue)('--bs-gray-700'),
                    fontSize: '12px',
                },
            },
        },
        fill: {
            opacity: 1,
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
                    return "$".concat(val, " thousands");
                },
            },
        },
        colors: [(0, _utils_1.getCSSVariableValue)('--bs-primary'), (0, _utils_1.getCSSVariableValue)('--bs-light-primary')],
        grid: {
            borderColor: (0, _utils_1.getCSSVariableValue)('--bs-gray-200'),
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
    };
}
var data1 = [
    [44, 55, 57, 56, 61, 58],
    [35, 60, 35, 50, 45, 30],
    [25, 40, 45, 50, 40, 60],
    [50, 35, 45, 55, 30, 40],
];
var data2 = [
    [76, 85, 101, 98, 87, 105],
    [65, 80, 50, 80, 75, 105],
    [76, 85, 101, 98, 87, 105],
    [76, 85, 101, 98, 87, 105],
];
function getCss(el, styleProp) {
    var defaultView = (el.ownerDocument || document).defaultView;
    if (!defaultView) {
        return '';
    }
    // sanitize property name to css notation
    // (hyphen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
}
