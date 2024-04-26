"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsideDefault = void 0;
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var clsx_1 = require("clsx");
var core_1 = require("../../core");
var helpers_1 = require("../../../helpers");
var AsideMenu_1 = require("./AsideMenu");
var AsideDefault = function () {
    var _a = (0, core_1.useLayout)(), config = _a.config, classes = _a.classes;
    var aside = config.aside;
    return (react_1.default.createElement("div", { id: 'kt_aside', className: (0, clsx_1.default)('aside', classes.aside.join(' ')), "data-kt-drawer": 'true', "data-kt-drawer-name": 'aside', "data-kt-drawer-activate": '{default: true, lg: false}', "data-kt-drawer-overlay": 'true', "data-kt-drawer-width": "{default:'200px', '300px': '250px'}", "data-kt-drawer-direction": 'start', "data-kt-drawer-toggle": '#kt_aside_mobile_toggle' },
        react_1.default.createElement("div", { className: 'aside-logo flex-column-auto', id: 'kt_aside_logo' },
            aside.theme === 'dark' && (react_1.default.createElement(react_router_dom_1.Link, { to: '/dashboard' },
                react_1.default.createElement("img", { alt: 'Logo', className: 'h-25px logo', src: (0, helpers_1.toAbsoluteUrl)('/media/img/TASLOGO.png') }))),
            aside.theme === 'light' && (react_1.default.createElement(react_router_dom_1.Link, { to: '/dashboard' },
                react_1.default.createElement("img", { alt: 'Logo', className: 'h-25px logo', src: (0, helpers_1.toAbsoluteUrl)('/media/img/TASLOGO.png') }))),
            aside.minimize && (react_1.default.createElement("div", { id: 'kt_aside_toggle', className: 'btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle', "data-kt-toggle": 'true', "data-kt-toggle-state": 'active', "data-kt-toggle-target": 'body', "data-kt-toggle-name": 'aside-minimize' },
                react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr080.svg', className: 'svg-icon-1 rotate-180' })))),
        react_1.default.createElement("div", { className: 'aside-menu flex-column-fluid' },
            react_1.default.createElement(AsideMenu_1.AsideMenu, { asideMenuCSSClasses: classes.asideMenu }))));
};
exports.AsideDefault = AsideDefault;
