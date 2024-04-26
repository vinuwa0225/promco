"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsideMenuItemWithSub = void 0;
var react_1 = require("react");
var clsx_1 = require("clsx");
var react_router_1 = require("react-router");
var helpers_1 = require("../../../helpers");
var core_1 = require("../../core");
var AsideMenuItemWithSub = function (_a) {
    var children = _a.children, to = _a.to, title = _a.title, icon = _a.icon, fontIcon = _a.fontIcon, hasBullet = _a.hasBullet;
    var pathname = (0, react_router_1.useLocation)().pathname;
    var isActive = (0, helpers_1.checkIsActive)(pathname, to);
    var config = (0, core_1.useLayout)().config;
    var aside = config.aside;
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)('menu-item', { 'here show': isActive }, 'menu-accordion'), "data-kt-menu-trigger": 'click' },
        react_1.default.createElement("span", { className: 'menu-link' },
            hasBullet && (react_1.default.createElement("span", { className: 'menu-bullet' },
                react_1.default.createElement("span", { className: 'bullet bullet-dot' }))),
            icon && aside.menuIcon === 'svg' && (react_1.default.createElement("span", { className: 'menu-icon' },
                react_1.default.createElement(helpers_1.KTSVG, { path: icon, className: 'svg-icon-2' }))),
            fontIcon && aside.menuIcon === 'font' && react_1.default.createElement("i", { className: (0, clsx_1.default)('bi fs-3', fontIcon) }),
            react_1.default.createElement("span", { className: 'menu-title' }, title),
            react_1.default.createElement("span", { className: 'menu-arrow' })),
        react_1.default.createElement("div", { className: (0, clsx_1.default)('menu-sub menu-sub-accordion', { 'menu-active-bg': isActive }) }, children)));
};
exports.AsideMenuItemWithSub = AsideMenuItemWithSub;
