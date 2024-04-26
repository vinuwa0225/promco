"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderWrapper = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
var clsx_1 = require("clsx");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var helpers_1 = require("../../../helpers");
var core_1 = require("../../core");
var Header_1 = require("./Header");
var DefaultTitle_1 = require("./page-title/DefaultTitle");
var Topbar_1 = require("./Topbar");
function HeaderWrapper() {
    var _a = (0, core_1.useLayout)(), config = _a.config, classes = _a.classes, attributes = _a.attributes;
    var header = config.header, aside = config.aside;
    return (react_1.default.createElement("div", __assign({ id: 'kt_header', className: (0, clsx_1.default)('header', classes.header.join(' '), 'align-items-stretch') }, attributes.headerMenu),
        react_1.default.createElement("div", { id: 'kt_toolbar_container', className: (0, clsx_1.default)(classes.toolbarContainer.join(' '), 'd-flex flex-stack') },
            react_1.default.createElement(DefaultTitle_1.DefaultTitle, null),
            react_1.default.createElement("div", { className: 'd-flex align-items-center py-1' }),
            react_1.default.createElement("div", { className: 'd-flex align-items-stretch flex-shrink-0' },
                react_1.default.createElement(Topbar_1.Topbar, null)))));
    return (react_1.default.createElement("div", __assign({ id: 'kt_header', className: (0, clsx_1.default)('header', classes.header.join(' '), 'align-items-stretch') }, attributes.headerMenu),
        react_1.default.createElement("div", { className: (0, clsx_1.default)(classes.headerContainer.join(' '), 'd-flex align-items-stretch justify-content-between') },
            aside.display && (react_1.default.createElement("div", { className: 'd-flex align-items-center d-lg-none ms-n3 me-1', title: 'Show aside menu' },
                react_1.default.createElement("div", { className: 'btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px', id: 'kt_aside_mobile_toggle' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/abstract/abs015.svg', className: 'svg-icon-2x mt-1' })))),
            !aside.display && (react_1.default.createElement("div", { className: 'd-flex align-items-center flex-grow-1 flex-lg-grow-0' },
                react_1.default.createElement(react_router_dom_1.Link, { to: '/dashboard', className: 'd-lg-none' },
                    react_1.default.createElement("img", { alt: 'Logo', src: (0, helpers_1.toAbsoluteUrl)('/media/Img/TASLOGO.png'), className: 'h-30px' })))),
            aside.display && (react_1.default.createElement("div", { className: 'd-flex align-items-center flex-grow-1 flex-lg-grow-0' },
                react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: 'd-lg-none' },
                    react_1.default.createElement("img", { alt: 'Logo', src: (0, helpers_1.toAbsoluteUrl)('/media/Img/TASLOGO.png'), className: 'h-30px' })))),
            react_1.default.createElement("div", { className: 'd-flex align-items-stretch justify-content-between flex-lg-grow-1' },
                header.left === 'menu' && (react_1.default.createElement("div", { className: 'd-flex align-items-stretch', id: 'kt_header_nav' },
                    react_1.default.createElement(Header_1.Header, null))),
                header.left === 'page-title' && (react_1.default.createElement("div", { className: 'd-flex align-items-center', id: 'kt_header_nav' },
                    react_1.default.createElement(DefaultTitle_1.DefaultTitle, null))),
                react_1.default.createElement("div", { className: 'd-flex align-items-stretch flex-shrink-0' },
                    react_1.default.createElement(Topbar_1.Topbar, null))))));
}
exports.HeaderWrapper = HeaderWrapper;
