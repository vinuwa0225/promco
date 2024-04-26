"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsWidget1 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var ListsWidget1 = function (_a) {
    var className = _a.className;
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: 'card-header border-0 pt-5' },
            react_1.default.createElement("h3", { className: 'card-title align-items-start flex-column' },
                react_1.default.createElement("span", { className: 'card-label fw-bolder text-dark' }, "Tasks Overview"),
                react_1.default.createElement("span", { className: 'text-muted mt-1 fw-bold fs-7' }, "Pending 10 tasks")),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-primary btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-2' })),
                react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
        react_1.default.createElement("div", { className: 'card-body pt-5' },
            react_1.default.createElement("div", { className: 'd-flex align-items-center mb-7' },
                react_1.default.createElement("div", { className: 'symbol symbol-50px me-5' },
                    react_1.default.createElement("span", { className: 'symbol-label bg-light-success' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/abstract/abs027.svg', className: 'svg-icon-2x svg-icon-success' }))),
                react_1.default.createElement("div", { className: 'd-flex flex-column' },
                    react_1.default.createElement("a", { href: '#', className: 'text-dark text-hover-primary fs-6 fw-bolder' }, "Project Briefing"),
                    react_1.default.createElement("span", { className: 'text-muted fw-bold' }, "Project Manager"))),
            react_1.default.createElement("div", { className: 'd-flex align-items-center mb-7' },
                react_1.default.createElement("div", { className: 'symbol symbol-50px me-5' },
                    react_1.default.createElement("span", { className: 'symbol-label bg-light-warning' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/art/art005.svg', className: 'svg-icon-2x svg-icon-warning' }))),
                react_1.default.createElement("div", { className: 'd-flex flex-column' },
                    react_1.default.createElement("a", { href: '#', className: 'text-dark text-hover-primary fs-6 fw-bolder' }, "Concept Design"),
                    react_1.default.createElement("span", { className: 'text-muted fw-bold' }, "Art Director"))),
            react_1.default.createElement("div", { className: 'd-flex align-items-center mb-7' },
                react_1.default.createElement("div", { className: 'symbol symbol-50px me-5' },
                    react_1.default.createElement("span", { className: 'symbol-label bg-light-primary' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/communication/com012.svg', className: 'svg-icon-2x svg-icon-primary' }))),
                react_1.default.createElement("div", { className: 'd-flex flex-column' },
                    react_1.default.createElement("a", { href: '#', className: 'text-dark text-hover-primary fs-6 fw-bolder' }, "Functional Logics"),
                    react_1.default.createElement("span", { className: 'text-muted fw-bold' }, "Lead Developer"))),
            react_1.default.createElement("div", { className: 'd-flex align-items-center mb-7' },
                react_1.default.createElement("div", { className: 'symbol symbol-50px me-5' },
                    react_1.default.createElement("span", { className: 'symbol-label bg-light-danger' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/coding/cod008.svg', className: 'svg-icon-2x svg-icon-danger' }))),
                react_1.default.createElement("div", { className: 'd-flex flex-column' },
                    react_1.default.createElement("a", { href: '#', className: 'text-dark text-hover-primary fs-6 fw-bolder' }, "Development"),
                    react_1.default.createElement("span", { className: 'text-muted fw-bold' }, "DevOps"))),
            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                react_1.default.createElement("div", { className: 'symbol symbol-50px me-5' },
                    react_1.default.createElement("span", { className: 'symbol-label bg-light-info' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen049.svg', className: 'svg-icon-2x svg-icon-info' }))),
                react_1.default.createElement("div", { className: 'd-flex flex-column' },
                    react_1.default.createElement("a", { href: '#', className: 'text-dark text-hover-primary fs-6 fw-bolder' }, "Testing"),
                    react_1.default.createElement("span", { className: 'text-muted fw-bold' }, "QA Managers"))))));
};
exports.ListsWidget1 = ListsWidget1;
