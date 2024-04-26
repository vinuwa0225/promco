"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topbar = void 0;
var clsx_1 = require("clsx");
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var partials_1 = require("../../../partials");
var core_1 = require("../../core");
var DataLayer_1 = require("../../../../DataLayer");
var toolbarButtonMarginClass = 'ms-1 ms-lg-3', toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px', toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px', toolbarButtonIconSizeClass = 'svg-icon-1';
var Topbar = function () {
    var config = (0, core_1.useLayout)().config;
    var _a = (0, DataLayer_1.useDataLayerValue)(), user = _a[0].user, dispatch = _a[1];
    return (react_1.default.createElement("div", { className: 'd-flex align-items-stretch flex-shrink-0' },
        react_1.default.createElement("div", { className: (0, clsx_1.default)('d-flex align-items-center', toolbarButtonMarginClass), id: 'kt_header_user_menu_toggle' },
            react_1.default.createElement("div", { className: (0, clsx_1.default)('cursor-pointer symbol', toolbarUserAvatarHeightClass), "data-kt-menu-trigger": 'click', "data-kt-menu-attach": 'parent', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'bottom' },
                react_1.default.createElement("span", { style: { fontSize: "30px" }, className: 'badge badge-light-success fw-bolder  px-2 py-1 ms-2' }, user.firstName[0])),
            react_1.default.createElement(partials_1.HeaderUserMenu, null)),
        config.header.left === 'menu' && (react_1.default.createElement("div", { className: 'd-flex align-items-center d-lg-none ms-2 me-n3', title: 'Show header menu' },
            react_1.default.createElement("div", { className: 'btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px', id: 'kt_header_menu_mobile_toggle' },
                react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/text/txt001.svg', className: 'svg-icon-1' }))))));
};
exports.Topbar = Topbar;
