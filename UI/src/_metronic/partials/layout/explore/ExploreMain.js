"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExploreMain = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var Toggle_1 = require("./Toggle");
var Demos_1 = require("./Demos");
var helpers_1 = require("../../../helpers");
function ExploreMain() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Toggle_1.Toggle, null),
        react_1.default.createElement("div", { id: 'kt_explore', className: 'bg-body', "data-kt-drawer": 'true', "data-kt-drawer-name": 'explore', "data-kt-drawer-activate": 'true', "data-kt-drawer-overlay": 'true', "data-kt-drawer-width": "{default:'350px', 'lg': '475px'}", "data-kt-drawer-direction": 'end', "data-kt-drawer-toggle": '#kt_explore_toggle', "data-kt-drawer-close": '#kt_explore_close' },
            react_1.default.createElement("div", { className: 'card shadow-none w-100' },
                react_1.default.createElement("div", { className: 'card-header', id: 'kt_explore_header' },
                    react_1.default.createElement("h5", { className: 'card-title fw-bold text-gray-600' },
                        "Explore ",
                        process.env.REACT_APP_THEME_NAME),
                    react_1.default.createElement("div", { className: 'card-toolbar' },
                        react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon explore-btn-dismiss me-n5', id: 'kt_explore_close' },
                            react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr061.svg', className: 'svg-icon-2' })))),
                react_1.default.createElement("div", { className: 'card-body', id: 'kt_explore_body' },
                    react_1.default.createElement("div", { id: 'kt_explore_scroll', className: 'scroll-y me-n5 pe-5', "data-kt-scroll": 'true', "data-kt-scroll-height": 'auto', "data-kt-scroll-wrappers": '#kt_explore_body', "data-kt-scroll-dependencies": '#kt_explore_header, #kt_explore_footer', "data-kt-scroll-offset": '5px' },
                        react_1.default.createElement("div", { className: 'mb-7' },
                            react_1.default.createElement("div", { className: 'd-flex flex-stack' },
                                react_1.default.createElement("h3", { className: 'mb-0' },
                                    process.env.REACT_APP_THEME_NAME,
                                    " Licenses"),
                                react_1.default.createElement("a", { href: 'https://themeforest.net/licenses/standard', className: 'fw-bold' }, "License FAQs"))),
                        react_1.default.createElement("div", { className: 'rounded border border-dashed border-gray-300 py-4 px-6 mb-5' },
                            react_1.default.createElement("div", { className: 'd-flex flex-stack' },
                                react_1.default.createElement("div", { className: 'd-flex flex-column' },
                                    react_1.default.createElement("div", { className: 'd-flex align-items-center mb-1' },
                                        react_1.default.createElement("div", { className: 'fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1' }, "Regular License"),
                                        react_1.default.createElement("i", { className: 'text-gray-400 fas fa-exclamation-circle ms-1 fs-7', "data-bs-toggle": 'popover', "data-bs-trigger": 'hover', "data-bs-placement": 'top', "data-bs-content": 'Use, by you or one client in a single end product which end users are not charged for.' })),
                                    react_1.default.createElement("div", { className: 'fs-7 text-muted' }, "For single end product used by you or one client")),
                                react_1.default.createElement("div", { className: 'text-nowrap' },
                                    react_1.default.createElement("span", { className: 'text-muted fs-7 fw-bold' }, "$"),
                                    react_1.default.createElement("span", { className: 'text-dark fs-1 fw-bolder' }, "39")))),
                        react_1.default.createElement("div", { className: 'rounded border border-dashed border-gray-300 py-4 px-6 mb-5' },
                            react_1.default.createElement("div", { className: 'd-flex flex-stack' },
                                react_1.default.createElement("div", { className: 'd-flex flex-column' },
                                    react_1.default.createElement("div", { className: 'd-flex align-items-center mb-1' },
                                        react_1.default.createElement("div", { className: 'fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1' }, "Extended License"),
                                        react_1.default.createElement("i", { className: 'text-gray-400 fas fa-exclamation-circle ms-1 fs-7', "data-bs-toggle": 'popover', "data-bs-trigger": 'hover', "data-bs-placement": 'top', "data-bs-content": 'Use, by you or one client, in a single end product which end users can be charged for.' })),
                                    react_1.default.createElement("div", { className: 'fs-7 text-muted' }, "For single end product with paying users.")),
                                react_1.default.createElement("div", { className: 'text-nowrap' },
                                    react_1.default.createElement("span", { className: 'text-muted fs-7 fw-bold' }, "$"),
                                    react_1.default.createElement("span", { className: 'text-dark fs-1 fw-bolder' }, "939")))),
                        react_1.default.createElement("div", { className: 'rounded border border-dashed border-gray-300 py-4 px-6 mb-5' },
                            react_1.default.createElement("div", { className: 'd-flex flex-stack' },
                                react_1.default.createElement("div", { className: 'd-flex flex-column' },
                                    react_1.default.createElement("div", { className: 'd-flex align-items-center mb-1' },
                                        react_1.default.createElement("div", { className: 'fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1' }, "Custom License")),
                                    react_1.default.createElement("div", { className: 'fs-7 text-muted' }, "Reach us for custom license offers.")),
                                react_1.default.createElement("div", { className: 'text-nowrap' },
                                    react_1.default.createElement("a", { href: 'https://keenthemes.com/contact/', className: 'btn btn-sm btn-success' }, "Contact Us")))),
                        react_1.default.createElement("a", { href: process.env.REACT_APP_PURCHASE_URL, className: 'btn btn-primary mb-15 w-100' }, "Buy Now"),
                        react_1.default.createElement(Demos_1.Demos, null)))))));
}
exports.ExploreMain = ExploreMain;
