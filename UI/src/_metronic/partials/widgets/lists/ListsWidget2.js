"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsWidget2 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var ListsWidget2 = function (_a) {
    var className = _a.className;
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: 'card-header border-0' },
            react_1.default.createElement("h3", { className: 'card-title fw-bolder text-dark' }, "Authors"),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-primary btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-2' })),
                react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
        react_1.default.createElement("div", { className: 'card-body pt-2' },
            react_1.default.createElement("div", { className: 'd-flex align-items-center mb-7' },
                react_1.default.createElement("div", { className: 'symbol symbol-50px me-5' },
                    react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-1.jpg'), className: '', alt: '' })),
                react_1.default.createElement("div", { className: 'flex-grow-1' },
                    react_1.default.createElement("a", { href: '#', className: 'text-dark fw-bolder text-hover-primary fs-6' }, "Emma Smith"),
                    react_1.default.createElement("span", { className: 'text-muted d-block fw-bold' }, "Project Manager"))),
            react_1.default.createElement("div", { className: 'd-flex align-items-center mb-7' },
                react_1.default.createElement("div", { className: 'symbol symbol-50px me-5' },
                    react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-4.jpg'), className: '', alt: '' })),
                react_1.default.createElement("div", { className: 'flex-grow-1' },
                    react_1.default.createElement("a", { href: '#', className: 'text-dark fw-bolder text-hover-primary fs-6' }, "Sean Bean"),
                    react_1.default.createElement("span", { className: 'text-muted d-block fw-bold' }, "PHP, SQLite, Artisan CLI"))),
            react_1.default.createElement("div", { className: 'd-flex align-items-center mb-7' },
                react_1.default.createElement("div", { className: 'symbol symbol-50px me-5' },
                    react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-12.jpg'), className: '', alt: '' })),
                react_1.default.createElement("div", { className: 'flex-grow-1' },
                    react_1.default.createElement("a", { href: '#', className: 'text-dark fw-bolder text-hover-primary fs-6' }, "Brian Cox"),
                    react_1.default.createElement("span", { className: 'text-muted d-block fw-bold' }, "PHP, SQLite, Artisan CLI"))),
            react_1.default.createElement("div", { className: 'd-flex align-items-center mb-7' },
                react_1.default.createElement("div", { className: 'symbol symbol-50px me-5' },
                    react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-8.jpg'), className: '', alt: '' })),
                react_1.default.createElement("div", { className: 'flex-grow-1' },
                    react_1.default.createElement("a", { href: '#', className: 'text-dark fw-bolder text-hover-primary fs-6' }, "Francis Mitcham"),
                    react_1.default.createElement("span", { className: 'text-muted d-block fw-bold' }, "PHP, SQLite, Artisan CLI"))),
            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                react_1.default.createElement("div", { className: 'symbol symbol-50px me-5' },
                    react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-6.jpg'), className: '', alt: '' })),
                react_1.default.createElement("div", { className: 'flex-grow-1' },
                    react_1.default.createElement("a", { href: '#', className: 'text-dark fw-bolder text-hover-primary fs-6' }, "Dan Wilson"),
                    react_1.default.createElement("span", { className: 'text-muted d-block fw-bold' }, "PHP, SQLite, Artisan CLI"))))));
};
exports.ListsWidget2 = ListsWidget2;
