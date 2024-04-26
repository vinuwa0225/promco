"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedsWidget5 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var Dropdown1_1 = require("../../content/dropdown/Dropdown1");
var FeedsWidget5 = function (_a) {
    var className = _a.className;
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: 'card-body pb-0' },
            react_1.default.createElement("div", { className: 'd-flex align-items-center mb-5' },
                react_1.default.createElement("div", { className: 'd-flex align-items-center flex-grow-1' },
                    react_1.default.createElement("div", { className: 'symbol symbol-45px me-5' },
                        react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-15.jpg'), alt: '' })),
                    react_1.default.createElement("div", { className: 'd-flex flex-column' },
                        react_1.default.createElement("a", { href: '#', className: 'text-gray-800 text-hover-primary fs-6 fw-bolder' }, "Sam Logan"),
                        react_1.default.createElement("span", { className: 'text-gray-400 fw-bold' }, "Mango, Java, Python"))),
                react_1.default.createElement("div", { className: 'my-0' },
                    react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-color-primary btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-2' })),
                    react_1.default.createElement(Dropdown1_1.Dropdown1, null))),
            react_1.default.createElement("div", { className: 'mb-5' },
                react_1.default.createElement("div", { className: 'bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5', style: {
                        backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/stock/900x600/20.jpg'), "')"),
                    } }),
                react_1.default.createElement("div", { className: 'text-gray-800 mb-5' }, "Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post"),
                react_1.default.createElement("div", { className: 'd-flex align-items-center mb-5' },
                    react_1.default.createElement("a", { href: '#', className: 'btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/communication/com012.svg', className: 'svg-icon-3' }),
                        "89"),
                    react_1.default.createElement("a", { href: '#', className: 'btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen030.svg', className: 'svg-icon-2' }),
                        "29"))),
            react_1.default.createElement("div", { className: 'separator mb-4' }),
            react_1.default.createElement("form", { className: 'position-relative mb-6' },
                react_1.default.createElement("textarea", { className: 'form-control border-0 p-0 pe-10 resize-none min-h-25px', rows: 1, placeholder: 'Reply..' }),
                react_1.default.createElement("div", { className: 'position-absolute top-0 end-0 me-n5' },
                    react_1.default.createElement("span", { className: 'btn btn-icon btn-sm btn-active-color-primary pe-0 me-2' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/communication/com008.svg', className: 'svg-icon-3 mb-3' })),
                    react_1.default.createElement("span", { className: 'btn btn-icon btn-sm btn-active-color-primary ps-0' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen018.svg', className: 'svg-icon-2 mb-3' })))))));
};
exports.FeedsWidget5 = FeedsWidget5;
