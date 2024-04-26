"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuInnerWithSub = void 0;
var react_1 = require("react");
var react_router_1 = require("react-router");
var clsx_1 = require("clsx");
var helpers_1 = require("../../../helpers");
var MenuInnerWithSub = function (_a) {
    var children = _a.children, to = _a.to, title = _a.title, icon = _a.icon, fontIcon = _a.fontIcon, menuTrigger = _a.menuTrigger, menuPlacement = _a.menuPlacement, _b = _a.hasArrow, hasArrow = _b === void 0 ? false : _b, _c = _a.hasBullet, hasBullet = _c === void 0 ? false : _c, _d = _a.isMega, isMega = _d === void 0 ? false : _d;
    var menuItemRef = (0, react_1.useRef)(null);
    var pathname = (0, react_router_1.useLocation)().pathname;
    (0, react_1.useEffect)(function () {
        if (menuItemRef.current && menuTrigger && menuPlacement) {
            menuItemRef.current.setAttribute('data-kt-menu-trigger', menuTrigger);
            menuItemRef.current.setAttribute('data-kt-menu-placement', menuPlacement);
        }
    }, [menuTrigger, menuPlacement]);
    return (react_1.default.createElement("div", { ref: menuItemRef, className: 'menu-item menu-lg-down-accordion me-lg-1' },
        react_1.default.createElement("span", { className: (0, clsx_1.default)('menu-link py-3', {
                active: (0, helpers_1.checkIsActive)(pathname, to),
            }) },
            hasBullet && (react_1.default.createElement("span", { className: 'menu-bullet' },
                react_1.default.createElement("span", { className: 'bullet bullet-dot' }))),
            icon && (react_1.default.createElement("span", { className: 'menu-icon' },
                react_1.default.createElement(helpers_1.KTSVG, { path: icon, className: 'svg-icon-2' }))),
            fontIcon && (react_1.default.createElement("span", { className: 'menu-icon' },
                react_1.default.createElement("i", { className: (0, clsx_1.default)('bi fs-3', fontIcon) }))),
            react_1.default.createElement("span", { className: 'menu-title' }, title),
            hasArrow && react_1.default.createElement("span", { className: 'menu-arrow' })),
        react_1.default.createElement("div", { className: (0, clsx_1.default)('menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown', isMega ? 'w-100 w-lg-600px p-5 p-lg-5' : 'menu-rounded-0 py-lg-4 w-lg-225px'), "data-kt-menu-dismiss": 'true' }, children)));
};
exports.MenuInnerWithSub = MenuInnerWithSub;
