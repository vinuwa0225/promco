"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedWidget4 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var clsx_1 = require("clsx");
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var MixedWidget4 = function (_a) {
    var className = _a.className, color = _a.color, image = _a.image, title = _a.title, date = _a.date, progress = _a.progress;
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: 'card-body' },
            react_1.default.createElement("div", { className: 'd-flex flex-stack' },
                react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                    react_1.default.createElement("div", { className: 'symbol symbol-60px me-5' },
                        react_1.default.createElement("span", { className: (0, clsx_1.default)("symbol-label", "bg-".concat(color, "-light")) },
                            react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)(image), className: 'h-50 align-self-center', alt: '' }))),
                    react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3' },
                        react_1.default.createElement("a", { href: '#', className: 'text-dark fw-bolder text-hover-primary fs-5' }, title),
                        react_1.default.createElement("span", { className: 'text-muted fw-bold' }, date))),
                react_1.default.createElement("div", { className: 'ms-1' },
                    react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-primary btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-2' })),
                    react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
            react_1.default.createElement("div", { className: 'd-flex flex-column w-100 mt-12' },
                react_1.default.createElement("span", { className: 'text-dark me-2 fw-bolder pb-3' }, "Progress"),
                react_1.default.createElement("div", { className: 'progress h-5px w-100' },
                    react_1.default.createElement("div", { className: "progress-bar bg-".concat(color), role: 'progressbar', style: { width: progress } }))),
            react_1.default.createElement("div", { className: 'd-flex flex-column mt-10' },
                react_1.default.createElement("div", { className: 'text-dark me-2 fw-bolder pb-4' }, "Team"),
                react_1.default.createElement("div", { className: 'd-flex' },
                    react_1.default.createElement("a", { href: '#', className: 'symbol symbol-35px me-2', "data-bs-toggle": 'tooltip', title: 'Ana Stone' },
                        react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-1.jpg'), alt: '' })),
                    react_1.default.createElement("a", { href: '#', className: 'symbol symbol-35px me-2', "data-bs-toggle": 'tooltip', title: 'Mark Larson' },
                        react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-4.jpg'), alt: '' })),
                    react_1.default.createElement("a", { href: '#', className: 'symbol symbol-35px me-2', "data-bs-toggle": 'tooltip', title: 'Sam Harris' },
                        react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-8.jpg'), alt: '' })),
                    react_1.default.createElement("a", { href: '#', className: 'symbol symbol-35px', "data-bs-toggle": 'tooltip', title: 'Alice Micto' },
                        react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-9.jpg'), alt: '' })))))));
};
exports.MixedWidget4 = MixedWidget4;
