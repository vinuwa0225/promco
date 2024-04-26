"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsWidget6 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var ListsWidget6 = function (_a) {
    var className = _a.className;
    return (react_1.default.createElement("div", { className: 'card card-xl-stretch mb-5 mb-xl-8' },
        react_1.default.createElement("div", { className: 'card-header border-0' },
            react_1.default.createElement("h3", { className: 'card-title fw-bolder text-dark' }, "Notifications"),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-primary btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-2' })),
                react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
        react_1.default.createElement("div", { className: 'card-body pt-0' },
            react_1.default.createElement("div", { className: 'd-flex align-items-center bg-light-warning rounded p-5 mb-7' },
                react_1.default.createElement("span", { className: 'svg-icon svg-icon-warning me-5' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/abstract/abs027.svg', className: 'svg-icon-1' })),
                react_1.default.createElement("div", { className: 'flex-grow-1 me-2' },
                    react_1.default.createElement("a", { href: '#', className: 'fw-bolder text-gray-800 text-hover-primary fs-6' }, "Group lunch celebration"),
                    react_1.default.createElement("span", { className: 'text-muted fw-bold d-block' }, "Due in 2 Days")),
                react_1.default.createElement("span", { className: 'fw-bolder text-warning py-1' }, "+28%")),
            react_1.default.createElement("div", { className: 'd-flex align-items-center bg-light-success rounded p-5 mb-7' },
                react_1.default.createElement("span", { className: 'svg-icon svg-icon-success me-5' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/abstract/abs027.svg', className: 'svg-icon-1' })),
                react_1.default.createElement("div", { className: 'flex-grow-1 me-2' },
                    react_1.default.createElement("a", { href: '#', className: 'fw-bolder text-gray-800 text-hover-primary fs-6' }, "Navigation optimization"),
                    react_1.default.createElement("span", { className: 'text-muted fw-bold d-block' }, "Due in 2 Days")),
                react_1.default.createElement("span", { className: 'fw-bolder text-success py-1' }, "+50%")),
            react_1.default.createElement("div", { className: 'd-flex align-items-center bg-light-danger rounded p-5 mb-7' },
                react_1.default.createElement("span", { className: 'svg-icon svg-icon-danger me-5' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/abstract/abs027.svg', className: 'svg-icon-1' })),
                react_1.default.createElement("div", { className: 'flex-grow-1 me-2' },
                    react_1.default.createElement("a", { href: '#', className: 'fw-bolder text-gray-800 text-hover-primary fs-6' }, "Rebrand strategy planning"),
                    react_1.default.createElement("span", { className: 'text-muted fw-bold d-block' }, "Due in 5 Days")),
                react_1.default.createElement("span", { className: 'fw-bolder text-danger py-1' }, "-27%")),
            react_1.default.createElement("div", { className: 'd-flex align-items-center bg-light-info rounded p-5' },
                react_1.default.createElement("span", { className: 'svg-icon svg-icon-info me-5' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/abstract/abs027.svg', className: 'svg-icon-1' })),
                react_1.default.createElement("div", { className: 'flex-grow-1 me-2' },
                    react_1.default.createElement("a", { href: '#', className: 'fw-bolder text-gray-800 text-hover-primary fs-6' }, "Product goals strategy"),
                    react_1.default.createElement("span", { className: 'text-muted fw-bold d-block' }, "Due in 7 Days")),
                react_1.default.createElement("span", { className: 'fw-bolder text-info py-1' }, "+8%")))));
};
exports.ListsWidget6 = ListsWidget6;
