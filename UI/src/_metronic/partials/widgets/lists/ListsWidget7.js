"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsWidget7 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var ListsWidget7 = function (_a) {
    var className = _a.className;
    return (react_1.default.createElement("div", { className: 'card card-xl-stretch mb-xl-8' },
        react_1.default.createElement("div", { className: 'card-header align-items-center border-0 mt-4' },
            react_1.default.createElement("h3", { className: 'card-title align-items-start flex-column' },
                react_1.default.createElement("span", { className: 'fw-bolder text-dark' }, "Latest Media"),
                react_1.default.createElement("span", { className: 'text-muted mt-1 fw-bold fs-7' }, "Articles and publications")),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-primary btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-2' })),
                react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
        react_1.default.createElement("div", { className: 'card-body pt-3' },
            react_1.default.createElement("div", { className: 'd-flex align-items-sm-center mb-7' },
                react_1.default.createElement("div", { className: 'symbol symbol-60px symbol-2by3 me-4' },
                    react_1.default.createElement("div", { className: 'symbol-label', style: { backgroundImage: "url(".concat((0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-20.jpg'), ")") } })),
                react_1.default.createElement("div", { className: 'd-flex flex-row-fluid flex-wrap align-items-center' },
                    react_1.default.createElement("div", { className: 'flex-grow-1 me-2' },
                        react_1.default.createElement("a", { href: '#', className: 'text-gray-800 fw-bolder text-hover-primary fs-6' }, "Cup & Green"),
                        react_1.default.createElement("span", { className: 'text-muted fw-bold d-block pt-1' }, "Size: 87KB")),
                    react_1.default.createElement("span", { className: 'badge badge-light-success fs-8 fw-bolder my-2' }, "Approved"))),
            react_1.default.createElement("div", { className: 'd-flex align-items-sm-center mb-7' },
                react_1.default.createElement("div", { className: 'symbol symbol-60px symbol-2by3 me-4' },
                    react_1.default.createElement("div", { className: 'symbol-label', style: { backgroundImage: "url(".concat((0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-19.jpg'), ")") } })),
                react_1.default.createElement("div", { className: 'd-flex flex-row-fluid flex-wrap align-items-center' },
                    react_1.default.createElement("div", { className: 'flex-grow-1 me-2' },
                        react_1.default.createElement("a", { href: '#', className: 'text-gray-800 fw-bolder text-hover-primary fs-6' }, "Yellow Background"),
                        react_1.default.createElement("span", { className: 'text-muted fw-bold d-block pt-1' }, "Size: 1.2MB")),
                    react_1.default.createElement("span", { className: 'badge badge-light-warning fs-8 fw-bolder my-2' }, "In Progress"))),
            react_1.default.createElement("div", { className: 'd-flex align-items-sm-center mb-7' },
                react_1.default.createElement("div", { className: 'symbol symbol-60px symbol-2by3 me-4' },
                    react_1.default.createElement("div", { className: 'symbol-label', style: { backgroundImage: "url(".concat((0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-25.jpg'), ")") } })),
                react_1.default.createElement("div", { className: 'd-flex flex-row-fluid flex-wrap align-items-center' },
                    react_1.default.createElement("div", { className: 'flex-grow-1 me-2' },
                        react_1.default.createElement("a", { href: '#', className: 'text-gray-800 fw-bolder text-hover-primary fs-6' }, "Nike & Blue"),
                        react_1.default.createElement("span", { className: 'text-muted fw-bold d-block pt-1' }, "Size: 87KB")),
                    react_1.default.createElement("span", { className: 'badge badge-light-success fs-8 fw-bolder my-2' }, "Success"))),
            react_1.default.createElement("div", { className: 'd-flex align-items-sm-center' },
                react_1.default.createElement("div", { className: 'symbol symbol-60px symbol-2by3 me-4' },
                    react_1.default.createElement("div", { className: 'symbol-label', style: { backgroundImage: "url(".concat((0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-24.jpg')) } })),
                react_1.default.createElement("div", { className: 'd-flex flex-row-fluid flex-wrap align-items-center' },
                    react_1.default.createElement("div", { className: 'flex-grow-1 me-2' },
                        react_1.default.createElement("a", { href: '#', className: 'text-gray-800 fw-bolder text-hover-primary fs-6' }, "Red Boots"),
                        react_1.default.createElement("span", { className: 'text-muted fw-bold d-block pt-1' }, "Size: 345KB")),
                    react_1.default.createElement("span", { className: 'badge badge-light-danger fs-8 fw-bolder my-2' }, "Rejected"))))));
};
exports.ListsWidget7 = ListsWidget7;
