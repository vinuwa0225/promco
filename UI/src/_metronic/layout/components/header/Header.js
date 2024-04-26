"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = require("react");
var MenuInner_1 = require("./MenuInner");
var Header = function () {
    return (react_1.default.createElement("div", { className: 'header-menu align-items-stretch', "data-kt-drawer": 'true', "data-kt-drawer-name": 'header-menu', "data-kt-drawer-activate": '{default: true, lg: false}', "data-kt-drawer-overlay": 'true', "data-kt-drawer-width": "{default:'200px', '300px': '250px'}", "data-kt-drawer-direction": 'end', "data-kt-drawer-toggle": '#kt_header_menu_mobile_toggle', "data-kt-swapper": 'true', "data-kt-swapper-mode": 'prepend', "data-kt-swapper-parent": "{default: '#kt_body', lg: '#kt_header_nav'}" },
        react_1.default.createElement("div", { className: 'menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch', id: '#kt_header_menu', "data-kt-menu": 'true' },
            react_1.default.createElement(MenuInner_1.MenuInner, null))));
};
exports.Header = Header;
