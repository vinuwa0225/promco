"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_router_1 = require("react-router");
var clsx_1 = require("clsx");
var helpers_1 = require("../../../helpers");
var MenuItem = function (_a) {
    var to = _a.to, title = _a.title, icon = _a.icon, fontIcon = _a.fontIcon, _b = _a.hasArrow, hasArrow = _b === void 0 ? false : _b, _c = _a.hasBullet, hasBullet = _c === void 0 ? false : _c;
    var pathname = (0, react_router_1.useLocation)().pathname;
    return (react_1.default.createElement("div", { className: 'menu-item me-lg-1' },
        react_1.default.createElement(react_router_dom_1.Link, { className: (0, clsx_1.default)('menu-link py-3', {
                active: (0, helpers_1.checkIsActive)(pathname, to),
            }), to: to },
            hasBullet && (react_1.default.createElement("span", { className: 'menu-bullet' },
                react_1.default.createElement("span", { className: 'bullet bullet-dot' }))),
            icon && (react_1.default.createElement("span", { className: 'menu-icon' },
                react_1.default.createElement(helpers_1.KTSVG, { path: icon, className: 'svg-icon-2' }))),
            fontIcon && (react_1.default.createElement("span", { className: 'menu-icon' },
                react_1.default.createElement("i", { className: (0, clsx_1.default)('bi fs-3', fontIcon) }))),
            react_1.default.createElement("span", { className: 'menu-title' }, title),
            hasArrow && react_1.default.createElement("span", { className: 'menu-arrow' }))));
};
exports.MenuItem = MenuItem;
