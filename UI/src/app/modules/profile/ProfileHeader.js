"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileHeader = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../_metronic/helpers");
var react_router_dom_1 = require("react-router-dom");
var partials_1 = require("../../../_metronic/partials");
var react_router_dom_2 = require("react-router-dom");
var ProfileHeader = function () {
    var location = (0, react_router_dom_2.useLocation)();
    return (react_1.default.createElement("div", { className: 'card mb-5 mb-xl-10' },
        react_1.default.createElement("div", { className: 'card-body pt-9 pb-0' },
            react_1.default.createElement("div", { className: 'd-flex flex-wrap flex-sm-nowrap mb-3' },
                react_1.default.createElement("div", { className: 'me-7 mb-4' },
                    react_1.default.createElement("div", { className: 'symbol symbol-100px symbol-lg-160px symbol-fixed position-relative' },
                        react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-2.jpg'), alt: 'Metornic' }),
                        react_1.default.createElement("div", { className: 'position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px' }))),
                react_1.default.createElement("div", { className: 'flex-grow-1' },
                    react_1.default.createElement("div", { className: 'd-flex justify-content-between align-items-start flex-wrap mb-2' },
                        react_1.default.createElement("div", { className: 'd-flex flex-column' },
                            react_1.default.createElement("div", { className: 'd-flex align-items-center mb-2' },
                                react_1.default.createElement("a", { href: '#', className: 'text-gray-800 text-hover-primary fs-2 fw-bolder me-1' }, "Max Smith"),
                                react_1.default.createElement("a", { href: '#' },
                                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen026.svg', className: 'svg-icon-1 svg-icon-primary' }))),
                            react_1.default.createElement("div", { className: 'd-flex flex-wrap fw-bold fs-6 mb-4 pe-2' },
                                react_1.default.createElement("a", { href: '#', className: 'd-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2' },
                                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/communication/com006.svg', className: 'svg-icon-4 me-1' }),
                                    "Developer"),
                                react_1.default.createElement("a", { href: '#', className: 'd-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2' },
                                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen018.svg', className: 'svg-icon-4 me-1' }),
                                    "SF, Bay Area"),
                                react_1.default.createElement("a", { href: '#', className: 'd-flex align-items-center text-gray-400 text-hover-primary mb-2' },
                                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/communication/com011.svg', className: 'svg-icon-4 me-1' }),
                                    "max@kt.com"))),
                        react_1.default.createElement("div", { className: 'd-flex my-4' },
                            react_1.default.createElement("a", { href: '#', className: 'btn btn-sm btn-light me-2', id: 'kt_user_follow_button' },
                                react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr012.svg', className: 'svg-icon-3 d-none' }),
                                react_1.default.createElement("span", { className: 'indicator-label' }, "Follow"),
                                react_1.default.createElement("span", { className: 'indicator-progress' },
                                    "Please wait...",
                                    react_1.default.createElement("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' }))),
                            react_1.default.createElement("a", { href: '#', className: 'btn btn-sm btn-primary me-3', "data-bs-toggle": 'modal', "data-bs-target": '#kt_modal_offer_a_deal' }, "Hire Me"),
                            react_1.default.createElement("div", { className: 'me-0' },
                                react_1.default.createElement("button", { className: 'btn btn-sm btn-icon btn-bg-light btn-active-color-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                                    react_1.default.createElement("i", { className: 'bi bi-three-dots fs-3' })),
                                react_1.default.createElement(partials_1.Dropdown1, null)))),
                    react_1.default.createElement("div", { className: 'd-flex flex-wrap flex-stack' },
                        react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 pe-8' },
                            react_1.default.createElement("div", { className: 'd-flex flex-wrap' },
                                react_1.default.createElement("div", { className: 'border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3' },
                                    react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr066.svg', className: 'svg-icon-3 svg-icon-success me-2' }),
                                        react_1.default.createElement("div", { className: 'fs-2 fw-bolder' }, "4500$")),
                                    react_1.default.createElement("div", { className: 'fw-bold fs-6 text-gray-400' }, "Earnings")),
                                react_1.default.createElement("div", { className: 'border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3' },
                                    react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr065.svg', className: 'svg-icon-3 svg-icon-danger me-2' }),
                                        react_1.default.createElement("div", { className: 'fs-2 fw-bolder' }, "75")),
                                    react_1.default.createElement("div", { className: 'fw-bold fs-6 text-gray-400' }, "Projects")),
                                react_1.default.createElement("div", { className: 'border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3' },
                                    react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr066.svg', className: 'svg-icon-3 svg-icon-success me-2' }),
                                        react_1.default.createElement("div", { className: 'fs-2 fw-bolder' }, "60%")),
                                    react_1.default.createElement("div", { className: 'fw-bold fs-6 text-gray-400' }, "Success Rate")))),
                        react_1.default.createElement("div", { className: 'd-flex align-items-center w-200px w-sm-300px flex-column mt-3' },
                            react_1.default.createElement("div", { className: 'd-flex justify-content-between w-100 mt-auto mb-2' },
                                react_1.default.createElement("span", { className: 'fw-bold fs-6 text-gray-400' }, "Profile Compleation"),
                                react_1.default.createElement("span", { className: 'fw-bolder fs-6' }, "50%")),
                            react_1.default.createElement("div", { className: 'h-5px mx-3 w-100 bg-light mb-3' },
                                react_1.default.createElement("div", { className: 'bg-success rounded h-5px', role: 'progressbar', style: { width: '50%' } })))))),
            react_1.default.createElement("div", { className: 'd-flex overflow-auto h-55px' },
                react_1.default.createElement("ul", { className: 'nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap' },
                    react_1.default.createElement("li", { className: 'nav-item' },
                        react_1.default.createElement(react_router_dom_1.Link, { className: "nav-link text-active-primary me-6 " +
                                (location.pathname === '/crafted/pages/profile/overview' && 'active'), to: '/crafted/pages/profile/overview' }, "Overview")),
                    react_1.default.createElement("li", { className: 'nav-item' },
                        react_1.default.createElement(react_router_dom_1.Link, { className: "nav-link text-active-primary me-6 " +
                                (location.pathname === '/crafted/pages/profile/projects' && 'active'), to: '/crafted/pages/profile/projects' }, "Projects")),
                    react_1.default.createElement("li", { className: 'nav-item' },
                        react_1.default.createElement(react_router_dom_1.Link, { className: "nav-link text-active-primary me-6 " +
                                (location.pathname === '/crafted/pages/profile/campaigns' && 'active'), to: '/crafted/pages/profile/campaigns' }, "Campaigns")),
                    react_1.default.createElement("li", { className: 'nav-item' },
                        react_1.default.createElement(react_router_dom_1.Link, { className: "nav-link text-active-primary me-6 " +
                                (location.pathname === '/crafted/pages/profile/documents' && 'active'), to: '/crafted/pages/profile/documents' }, "Documents")),
                    react_1.default.createElement("li", { className: 'nav-item' },
                        react_1.default.createElement(react_router_dom_1.Link, { className: "nav-link text-active-primary me-6 " +
                                (location.pathname === '/crafted/pages/profile/connections' && 'active'), to: '/crafted/pages/profile/connections' }, "Connections")))))));
};
exports.ProfileHeader = ProfileHeader;
