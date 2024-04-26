"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarUser = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var apexcharts_1 = require("apexcharts");
var helpers_1 = require("../../../helpers");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var _utils_1 = require("../../../assets/ts/_utils");
function SidebarUser() {
    var chartRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!chartRef.current) {
            return;
        }
        var height = parseInt((0, _utils_1.getCSS)(chartRef.current, 'height'));
        var chart = new apexcharts_1.default(chartRef.current, chartOptions(height));
        if (chart) {
            chart.render();
        }
        return function () {
            if (chart) {
                chart.destroy();
            }
        };
    }, [chartRef]);
    return (react_1.default.createElement("div", { id: 'kt_sidebar_content', className: 'py-10 px-2 px-lg-8' },
        react_1.default.createElement("div", { className: 'hover-scroll-y me-lg-n5 pe-lg-4', "data-kt-scroll": 'true', "data-kt-scroll-height": 'auto', "data-kt-scroll-offset": '10px', "data-kt-scroll-wrappers": '#kt_sidebar_content' },
            react_1.default.createElement("div", { className: 'card card-custom bg-info' },
                react_1.default.createElement("div", { className: 'card-body px-0' },
                    react_1.default.createElement("div", { className: 'pt-0' },
                        react_1.default.createElement("div", { className: 'd-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center', style: {
                                backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/svg/illustrations/bg-2.svg'), "')"),
                            } },
                            react_1.default.createElement("div", { className: 'position-absolute mb-7' },
                                react_1.default.createElement("div", { className: 'symbol symbol-circle symbol-100px overflow-hidden d-flex flex-center z-index-1' },
                                    react_1.default.createElement("span", { className: 'symbol-label bg-warning  align-items-end' },
                                        react_1.default.createElement("img", { alt: 'Logo', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/avatars/016-boy-7.svg'), className: 'mh-75px' })))),
                            react_1.default.createElement("div", { ref: chartRef, id: 'kt_user_chart', style: { height: '200px' } })),
                        react_1.default.createElement("div", { className: 'pt-4' },
                            react_1.default.createElement("div", { className: 'text-center pb-12' },
                                react_1.default.createElement("h3", { className: 'fw-bolder text-white fs-2 pb-4' }, "Mr. Anderson"),
                                react_1.default.createElement("span", { className: 'fw-bolder fs-6 text-primary px-4 py-2 rounded bg-white bg-opacity-10' }, "Python Dev")),
                            react_1.default.createElement("div", { className: 'row row-cols-2 px-xl-12 sidebar-toolbar' },
                                react_1.default.createElement("div", { className: 'col p-3' },
                                    react_1.default.createElement("a", { href: '#', className: 'btn  p-5 w-100 text-start btn-active-primary' },
                                        react_1.default.createElement("span", { className: 'text-white fw-bolder fs-1 d-block pb-1' }, "38"),
                                        react_1.default.createElement("span", { className: 'fw-bold' }, "Pending"))),
                                react_1.default.createElement("div", { className: 'col p-3' },
                                    react_1.default.createElement("a", { href: '#', className: 'btn  p-5 w-100 text-start btn-active-primary' },
                                        react_1.default.createElement("span", { className: 'text-white fw-bolder fs-1 d-block pb-1' }, "204"),
                                        react_1.default.createElement("span", { className: 'fw-bold' }, "Completed"))),
                                react_1.default.createElement("div", { className: 'col p-3' },
                                    react_1.default.createElement("a", { href: '#', className: 'btn  p-5 w-100 text-start btn-active-primary' },
                                        react_1.default.createElement("span", { className: 'text-white fw-bolder fs-1 d-block pb-1' }, "76"),
                                        react_1.default.createElement("span", { className: 'fw-bold' }, "On Hold"))),
                                react_1.default.createElement("div", { className: 'col p-3' },
                                    react_1.default.createElement("a", { href: '#', className: 'btn  p-5 w-100 text-start btn-active-primary' },
                                        react_1.default.createElement("span", { className: 'text-white fw-bolder fs-1 d-block pb-1' }, "9"),
                                        react_1.default.createElement("span", { className: 'fw-bold' }, "In Progress")))))))),
            react_1.default.createElement("div", { className: 'card card-custom bg-info' },
                react_1.default.createElement("div", { className: 'card-header border-0' },
                    react_1.default.createElement("h3", { className: 'card-title fw-bolder text-white fs-3' }, "Fox Bestsellers"),
                    react_1.default.createElement("div", { className: 'card-toolbar' },
                        react_1.default.createElement("button", { type: 'button', className: 'btn btn-md btn-icon btn-icon-white btn-info', "data-kt-menu-trigger": 'click', "data-kt-menu-overflow": 'true', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                            react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-1' })),
                        react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
                react_1.default.createElement("div", { className: 'card-body' },
                    react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                        react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                            react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-17.jpg'), alt: '', className: 'mw-100' })),
                        react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                            react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Blue Donut"),
                            react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Study the highway types"))),
                    react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                        react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                            react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-10.jpg'), alt: '', className: 'mw-100' })),
                        react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                            react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Lovely Hearts"),
                            react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Study the highway types"))),
                    react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                        react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                            react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-1.jpg'), alt: '', className: 'mw-100' })),
                        react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 pe-3' },
                            react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Hands & Yellow"),
                            react_1.default.createElement("span", { className: 'text-white opacity-25 fw-bold fs-7 my-1' }, "Study the highway types"))),
                    react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-7' },
                        react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                            react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-9.jpg'), alt: '', className: 'mw-100' })),
                        react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                            react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Cup & Green"),
                            react_1.default.createElement("span", { className: 'text-white opacity-25 fs-7 fw-bold my-1' }, "Study the highway types"))),
                    react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center' },
                        react_1.default.createElement("div", { className: 'symbol symbol-40px symbol-2by3 me-4' },
                            react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-4.jpg'), alt: '', className: 'mw-100' })),
                        react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3' },
                            react_1.default.createElement("a", { href: '#', className: 'text-white fw-bolder text-hover-primary fs-6' }, "Bose QC 35 II"),
                            react_1.default.createElement("span", { className: 'text-white opacity-25 fs-7 fw-bold my-1' }, "Study the highway types"))))))));
}
exports.SidebarUser = SidebarUser;
var chartOptions = function (height) {
    return {
        series: [74],
        chart: {
            fontFamily: 'inherit',
            height: height,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '78%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        fontWeight: '700',
                    },
                    value: {
                        color: '#5E6278',
                        fontSize: '30px',
                        fontWeight: '700',
                        offsetY: 6,
                        show: true,
                        formatter: function (val) {
                            return val + '%';
                        },
                    },
                },
                track: {
                    background: '#00A3FF',
                    strokeWidth: '100%',
                },
            },
        },
        colors: ['#F1416C'],
        stroke: {
            lineCap: 'round',
        },
        labels: ['Progress'],
    };
};
