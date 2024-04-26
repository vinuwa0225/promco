"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickLinks = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var helpers_1 = require("../../../helpers");
var QuickLinks = function () { return (react_1.default.createElement("div", { className: 'menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px', "data-kt-menu": 'true' },
    react_1.default.createElement("div", { className: 'd-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10', style: { backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/misc/pattern-1.jpg'), "')") } },
        react_1.default.createElement("h3", { className: 'text-white fw-bold mb-3' }, "Quick Links"),
        react_1.default.createElement("span", { className: 'badge bg-primary py-2 px-3' }, "25 pending tasks")),
    react_1.default.createElement("div", { className: 'row g-0' },
        react_1.default.createElement("div", { className: 'col-6' },
            react_1.default.createElement("a", { href: '#', className: 'd-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom' },
                react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/finance/fin009.svg', className: 'svg-icon-3x svg-icon-primary mb-2' }),
                react_1.default.createElement("span", { className: 'fs-5 fw-bold text-gray-800 mb-0' }, "Accounting"),
                react_1.default.createElement("span", { className: 'fs-7 text-gray-400' }, "eCommerce"))),
        react_1.default.createElement("div", { className: 'col-6' },
            react_1.default.createElement("a", { href: '#', className: 'd-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom' },
                react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/communication/com010.svg', className: 'svg-icon-3x svg-icon-primary mb-2' }),
                react_1.default.createElement("span", { className: 'fs-5 fw-bold text-gray-800 mb-0' }, "Administration"),
                react_1.default.createElement("span", { className: 'fs-7 text-gray-400' }, "Console"))),
        react_1.default.createElement("div", { className: 'col-6' },
            react_1.default.createElement("a", { href: '#', className: 'd-flex flex-column flex-center h-100 p-6 bg-hover-light border-end' },
                react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/abstract/abs042.svg', className: 'svg-icon-3x svg-icon-primary mb-2' }),
                react_1.default.createElement("span", { className: 'fs-5 fw-bold text-gray-800 mb-0' }, "Projects"),
                react_1.default.createElement("span", { className: 'fs-7 text-gray-400' }, "Pending Tasks"))),
        react_1.default.createElement("div", { className: 'col-6' },
            react_1.default.createElement("a", { href: '#', className: 'd-flex flex-column flex-center h-100 p-6 bg-hover-light' },
                react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/finance/fin006.svg', className: 'svg-icon-3x svg-icon-primary mb-2' }),
                react_1.default.createElement("span", { className: 'fs-5 fw-bold text-gray-800 mb-0' }, "Customers"),
                react_1.default.createElement("span", { className: 'fs-7 text-gray-400' }, "Latest cases")))),
    react_1.default.createElement("div", { className: 'py-2 text-center border-top' },
        react_1.default.createElement(react_router_dom_1.Link, { to: '/crafted/pages/profile', className: 'btn btn-color-gray-600 btn-active-color-primary' },
            "View All ",
            react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr064.svg', className: 'svg-icon-5' }))))); };
exports.QuickLinks = QuickLinks;
