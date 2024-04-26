"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarGeneral = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
var clsx_1 = require("clsx");
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var helpers_1 = require("../../../helpers");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var chartsData = [
    {
        tabId: 0,
        selector: '#kt_sidebar_tab_1_chart',
        values: [40, 30, 25, 40, 50, 30],
    },
    {
        tabId: 1,
        selector: '#kt_sidebar_tab_2_chart',
        values: [30, 30, 25, 45, 30, 40],
    },
    {
        tabId: 2,
        selector: '#kt_sidebar_tab_3_chart',
        values: [25, 30, 40, 30, 35, 30],
    },
    {
        tabId: 3,
        selector: '#kt_sidebar_tab_4_chart',
        values: [25, 30, 35, 40, 50, 30],
    },
    {
        tabId: 4,
        selector: '#kt_sidebar_tab_5_chart',
        values: [40, 20, 50, 50, 55, 45],
    },
];
function SidebarGeneral() {
    var _a = (0, react_1.useState)(2), activeTab = _a[0], setActiveTab = _a[1];
    var _b = (0, react_1.useState)(), activeChart = _b[0], setActiveChart = _b[1];
    var setTab = function (tabId) {
        setActiveTab(tabId);
    };
    var activateChart = function (tabId) {
        var chartData = chartsData[tabId];
        if (!chartData) {
            return;
        }
        setTimeout(function () {
            var element = document.querySelector(chartData.selector);
            if (!element) {
                return;
            }
            if (activeChart) {
                activeChart.destroy();
            }
            var height = parseInt(getCss(element, 'height'));
            var options = {
                series: [
                    {
                        name: 'Profit',
                        data: chartData.values,
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
                        columnWidth: ['30%'],
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
                    crosshairs: {
                        show: false,
                    },
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        style: {
                            colors: '#823FD9',
                            fontSize: '12px',
                        },
                    },
                },
                yaxis: {
                    crosshairs: {
                        show: false,
                    },
                    labels: {
                        style: {
                            colors: '#823FD9',
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
                fill: {
                    opacity: 1,
                },
                tooltip: {
                    style: {
                        fontSize: '12px',
                    },
                    y: {
                        formatter: function (val) {
                            return '$' + val + 'k';
                        },
                    },
                },
                colors: ['#661DC5'],
                grid: {
                    borderColor: '#661DC5',
                    strokeDashArray: 4,
                    yaxis: {
                        lines: {
                            show: true,
                        },
                    },
                },
            };
            var chart = new apexcharts_1.default(element, options);
            chart.render();
            setActiveChart(chart);
        }, 0);
    };
    (0, react_1.useEffect)(function () {
        setTab(2);
        activateChart(2);
        return function cleanup() {
            if (activeChart) {
                activeChart.destroy();
            }
        };
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { className: 'sidebar-nav nav nav-tabs pt-15 pb-5 px-5', id: 'kt_sidebar_tabs', role: 'tablist' },
            react_1.default.createElement("li", { className: 'nav-item' },
                react_1.default.createElement("a", { onClick: function () {
                        setTab(0);
                        activateChart(0);
                    }, className: (0, clsx_1.default)('nav-link', { active: activeTab === 0 }), id: 'kt_sidebar_tab_1' },
                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/purple/aven.svg'), className: 'default' }),
                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/colored/aven.svg'), className: 'active' }))),
            react_1.default.createElement("li", { className: 'nav-item' },
                react_1.default.createElement("a", { onClick: function () {
                        setTab(1);
                        activateChart(1);
                    }, className: (0, clsx_1.default)('nav-link', { active: activeTab === 1 }), id: 'kt_sidebar_tab_2' },
                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/purple/kanba.svg'), className: 'default' }),
                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/colored/kanba.svg'), className: 'active' }))),
            react_1.default.createElement("li", { className: 'nav-item' },
                react_1.default.createElement("a", { onClick: function () {
                        setTab(2);
                        activateChart(2);
                    }, className: (0, clsx_1.default)('nav-link', { active: activeTab === 2 }), id: 'kt_sidebar_tab_3' },
                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/purple/fox-hub-2.svg'), className: 'default' }),
                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/colored/fox-hub-2.svg'), className: 'active' }))),
            react_1.default.createElement("li", { className: 'nav-item' },
                react_1.default.createElement("a", { onClick: function () {
                        setTab(3);
                        activateChart(3);
                    }, className: (0, clsx_1.default)('nav-link', { active: activeTab === 3 }), id: 'kt_sidebar_tab_4' },
                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/purple/tower.svg'), className: 'default' }),
                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/colored/tower.svg'), className: 'active' }))),
            react_1.default.createElement("li", { className: 'nav-item' },
                react_1.default.createElement("a", { onClick: function () {
                        setTab(4);
                        activateChart(4);
                    }, className: (0, clsx_1.default)('nav-link', { active: activeTab === 4 }), id: 'kt_sidebar_tab_5' },
                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/purple/treva.svg'), className: 'default' }),
                    react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/logo/colored/treva.svg'), className: 'active' })))),
        react_1.default.createElement("div", { id: 'kt_sidebar_content', className: 'py-10 px-5 px-lg-5' },
            react_1.default.createElement("div", { className: 'hover-scroll-y me-lg-n2 pe-lg-2', "data-kt-scroll": 'true', "data-kt-scroll-height": 'auto', "data-kt-scroll-offset": '10px', "data-kt-scroll-dependencies": '#kt_sidebar_tabs, #kt_sidebar_footer', "data-kt-scroll-wrappers": '#kt_sidebar_content' },
                react_1.default.createElement("div", { className: 'tab-content' },
                    react_1.default.createElement("div", { className: (0, clsx_1.default)('tab-pane', { active: activeTab === 0 }), id: 'kt_sidebar_tab_pane_1', role: 'tabpanel' },
                        react_1.default.createElement("div", { className: 'card card-custom bg-transparent' },
                            react_1.default.createElement("div", { className: 'card-header align-items-center border-0' },
                                react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white fs-3' }, "Aven Sales"),
                                react_1.default.createElement("div", { className: 'card-toolbar' },
                                    react_1.default.createElement("button", { type: 'button', className: 'btn btn-md btn-icon btn-icon-white btn-info', "data-kt-menu-trigger": 'click', "data-kt-menu-overflow": 'true', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-1' })),
                                    react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
                            react_1.default.createElement("div", { className: 'card-body px-3 py-0' },
                                react_1.default.createElement("div", { id: 'kt_sidebar_tab_1_chart', className: 'apexcharts-bar-hover-danger', style: { height: '250px' } }))),
                        react_1.default.createElement("div", { className: 'card card-custom bg-transparent' },
                            react_1.default.createElement("div", { className: 'card-header align-items-center border-0' },
                                react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white fs-3' }, "Tasks Overview"),
                                react_1.default.createElement("div", { className: 'card-toolbar' },
                                    react_1.default.createElement("button", { type: 'button', className: 'btn btn-md btn-icon btn-icon-white btn-info', "data-kt-menu-trigger": 'click', "data-kt-menu-overflow": 'true', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-1' })),
                                    react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
                            react_1.default.createElement("div", { className: 'card-body pt-0' },
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-1.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Sunspots"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Mark, Rowling, Esther"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-2.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Ocean Drive"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Study the highway types"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-3.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Soar, Eco"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "HTML, CSS. jQuery"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-5.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Cup & Green"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fs-7 fw-bold my-1' }, "ASP.NET Developer"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-6.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Bose QC 35 II"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fs-7 fw-bold my-1' }, "Study the highway types")))))),
                    react_1.default.createElement("div", { className: (0, clsx_1.default)('tab-pane', { active: activeTab === 1 }), id: 'kt_sidebar_tab_pane_2', role: 'tabpanel' },
                        react_1.default.createElement("div", { className: 'card card-custom bg-transparent' },
                            react_1.default.createElement("div", { className: 'card-header align-items-center border-0' },
                                react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white fs-3' }, "Kanba Sales"),
                                react_1.default.createElement("div", { className: 'card-toolbar' },
                                    react_1.default.createElement("button", { type: 'button', className: 'btn btn-md btn-icon btn-icon-white btn-info', "data-kt-menu-trigger": 'click', "data-kt-menu-overflow": 'true', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-1' })),
                                    react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
                            react_1.default.createElement("div", { className: 'card-body px-3 py-0' },
                                react_1.default.createElement("div", { id: 'kt_sidebar_tab_2_chart', className: 'apexcharts-bar-hover-danger', style: { height: '250px' } }))),
                        react_1.default.createElement("div", { className: 'card card-custom bg-transparent' },
                            react_1.default.createElement("div", { className: 'card-header align-items-center border-0' },
                                react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white fs-3' }, "Kanba Products"),
                                react_1.default.createElement("div", { className: 'card-toolbar' },
                                    react_1.default.createElement("button", { type: 'button', className: 'btn btn-md btn-icon btn-icon-white btn-info', "data-kt-menu-trigger": 'click', "data-kt-menu-overflow": 'true', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-1' })),
                                    react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
                            react_1.default.createElement("div", { className: 'card-body pt-0' },
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-7.jpg'), alt: '', className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "BP Industries"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Successful Fellas"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-8.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Automatica"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Successful Fellas"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-9.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Python Inc."),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Most Successful"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-19.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Cup & Green"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fs-7 fw-bold my-1' }, "ASP.NET Developer"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-6.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Active Customers"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fs-7 fw-bold my-1' }, "Best Customers")))))),
                    react_1.default.createElement("div", { className: (0, clsx_1.default)('tab-pane', { active: activeTab === 2 }), id: 'kt_sidebar_tab_pane_3', role: 'tabpanel' },
                        react_1.default.createElement("div", { className: 'card card-custom bg-transparent' },
                            react_1.default.createElement("div", { className: 'card-header align-items-center border-0' },
                                react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white fs-3' }, "Fox Sales"),
                                react_1.default.createElement("div", { className: 'card-toolbar' },
                                    react_1.default.createElement("button", { type: 'button', className: 'btn btn-md btn-icon btn-icon-white btn-info', "data-kt-menu-trigger": 'click', "data-kt-menu-overflow": 'true', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-1' })),
                                    react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
                            react_1.default.createElement("div", { className: 'card-body px-3 py-0' },
                                react_1.default.createElement("div", { id: 'kt_sidebar_tab_3_chart', className: 'apexcharts-bar-hover-danger', style: { height: '250px' } }))),
                        react_1.default.createElement("div", { className: 'card card-custom bg-transparent' },
                            react_1.default.createElement("div", { className: 'card-header align-items-center border-0' },
                                react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white fs-3' }, "Fox Bestsellers"),
                                react_1.default.createElement("div", { className: 'card-toolbar' },
                                    react_1.default.createElement("button", { type: 'button', className: 'btn btn-md btn-icon btn-icon-white btn-info', "data-kt-menu-trigger": 'click', "data-kt-menu-overflow": 'true', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-1' })),
                                    react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
                            react_1.default.createElement("div", { className: 'card-body pt-0' },
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-17.jpg'), alt: '', className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Blue Donut"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Study the highway types"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-10.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Lovely Hearts"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Study the highway types"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-1.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Hands & Yellow"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Study the highway types"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-9.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Cup & Green"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fs-7 fw-bold my-1' }, "Study the highway types"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-4.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Bose QC 35 II"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fs-7 fw-bold my-1' }, "Study the highway types")))))),
                    react_1.default.createElement("div", { className: (0, clsx_1.default)('tab-pane', { active: activeTab === 3 }), id: 'kt_sidebar_tab_pane_4', role: 'tabpanel' },
                        react_1.default.createElement("div", { className: 'card card-custom bg-transparent' },
                            react_1.default.createElement("div", { className: 'card-header align-items-center border-0' },
                                react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white fs-3' }, "Tower Sales"),
                                react_1.default.createElement("div", { className: 'card-toolbar' },
                                    react_1.default.createElement("button", { type: 'button', className: 'btn btn-md btn-icon btn-icon-white btn-info', "data-kt-menu-trigger": 'click', "data-kt-menu-overflow": 'true', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-1' })),
                                    react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
                            react_1.default.createElement("div", { className: 'card-body px-3 py-0' },
                                react_1.default.createElement("div", { id: 'kt_sidebar_tab_4_chart', className: 'apexcharts-bar-hover-danger', style: { height: '250px' } }))),
                        react_1.default.createElement("div", { className: 'card card-custom bg-transparent' },
                            react_1.default.createElement("div", { className: 'card-header align-items-center border-0' },
                                react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white fs-3' }, "Tower Latest Products"),
                                react_1.default.createElement("div", { className: 'card-toolbar' },
                                    react_1.default.createElement("button", { type: 'button', className: 'btn btn-md btn-icon btn-icon-white btn-info', "data-kt-menu-trigger": 'click', "data-kt-menu-overflow": 'true', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-1' })),
                                    react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
                            react_1.default.createElement("div", { className: 'card-body pt-0' },
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-8.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Automatica"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Successful Fellas"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-11.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "BP Industries"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Successful Fellas"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-19.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Cup & Green"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fs-7 fw-bold my-1' }, "ASP.NET Developer"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-9.jpg'), alt: '', className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Python Inc."),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Most Successful"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-6.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Active Customers"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fs-7 fw-bold my-1' }, "Best Customers")))))),
                    react_1.default.createElement("div", { className: (0, clsx_1.default)('tab-pane', { active: activeTab === 4 }), id: 'kt_sidebar_tab_pane_5', role: 'tabpanel' },
                        react_1.default.createElement("div", { className: 'card card-custom bg-transparent' },
                            react_1.default.createElement("div", { className: 'card-header align-items-center border-0' },
                                react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white fs-3' }, "Treva Sales"),
                                react_1.default.createElement("div", { className: 'card-toolbar' },
                                    react_1.default.createElement("button", { type: 'button', className: 'btn btn-md btn-icon btn-icon-white btn-info', "data-kt-menu-trigger": 'click', "data-kt-menu-overflow": 'true', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-1' })),
                                    react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
                            react_1.default.createElement("div", { className: 'card-body px-3 py-0' },
                                react_1.default.createElement("div", { id: 'kt_sidebar_tab_5_chart', className: 'apexcharts-bar-hover-danger', style: { height: '250px' } }))),
                        react_1.default.createElement("div", { className: 'card card-custom bg-transparent' },
                            react_1.default.createElement("div", { className: 'card-header align-items-center border-0' },
                                react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white fs-3' }, "Treva's Products"),
                                react_1.default.createElement("div", { className: 'card-toolbar' },
                                    react_1.default.createElement("button", { type: 'button', className: 'btn btn-md btn-icon btn-icon-white btn-info', "data-kt-menu-trigger": 'click', "data-kt-menu-overflow": 'true', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-1' })),
                                    react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
                            react_1.default.createElement("div", { className: 'card-body pt-0' },
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-12.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Top Authors"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Successful Fellas"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-13.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Popular Authors"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Most Successful"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-14.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "New Users"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "HTML, CSS. jQuery"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-15.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Active Customers"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fs-7 fw-bold my-1' }, "Awesome Users"))),
                                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                                        react_1.default.createElement("img", { alt: '', src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-16.jpg'), className: 'mw-100' })),
                                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                                        react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Bose QC 35 II"),
                                        react_1.default.createElement("span", { className: 'text-white opacity-25 fs-7 fw-bold my-1' }, "Best Customers"))))))))),
        react_1.default.createElement("div", { id: 'kt_sidebar_footer', className: 'py-2 px-5 pb-md-6 text-center' },
            react_1.default.createElement("a", { href: '#', className: 'btn btn-color-white bg-white  bg-opacity-10 bg-hover-opacity-20 fw-bolder w-100' }, "View Extended Layout"))));
}
exports.SidebarGeneral = SidebarGeneral;
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
