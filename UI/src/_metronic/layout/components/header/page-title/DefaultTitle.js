"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultTitle = void 0;
var clsx_1 = require("clsx");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var LayoutProvider_1 = require("../../../core/LayoutProvider");
var PageData_1 = require("../../../core/PageData");
var DefaultTitle = function () {
    var _a = (0, PageData_1.usePageData)(), pageTitle = _a.pageTitle, pageDescription = _a.pageDescription, pageBreadcrumbs = _a.pageBreadcrumbs;
    var _b = (0, LayoutProvider_1.useLayout)(), config = _b.config, classes = _b.classes;
    return (react_1.default.createElement("div", { id: 'kt_page_title', "data-kt-swapper": 'true', "data-kt-swapper-mode": 'prepend', "data-kt-swapper-parent": "{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}", className: (0, clsx_1.default)('page-title d-flex', classes.pageTitle.join(' ')) },
        pageTitle && (react_1.default.createElement("h1", { className: 'd-flex align-items-center text-dark fw-bolder my-1 fs-3' },
            pageTitle,
            pageDescription && config.pageTitle && config.pageTitle.description && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", { className: 'h-20px border-gray-200 border-start ms-3 mx-2' }),
                react_1.default.createElement("small", { className: 'text-muted fs-7 fw-bold my-1 ms-1' }, pageDescription))))),
        pageBreadcrumbs &&
            pageBreadcrumbs.length > 0 &&
            config.pageTitle &&
            config.pageTitle.breadCrumbs && (react_1.default.createElement(react_1.default.Fragment, null,
            config.pageTitle.direction === 'row' && (react_1.default.createElement("span", { className: 'h-20px border-gray-200 border-start mx-4' })),
            react_1.default.createElement("ul", { className: 'breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1' },
                Array.from(pageBreadcrumbs).map(function (item, index) { return (react_1.default.createElement("li", { className: (0, clsx_1.default)('breadcrumb-item', {
                        'text-dark': !item.isSeparator && item.isActive,
                        'text-muted': !item.isSeparator && !item.isActive,
                    }), key: "".concat(item.path).concat(index) }, !item.isSeparator ? (react_1.default.createElement(react_router_dom_1.Link, { className: 'text-muted text-hover-primary', to: item.path }, item.title)) : (react_1.default.createElement("span", { className: 'bullet bg-gray-200 w-5px h-2px' })))); }),
                react_1.default.createElement("li", { className: 'breadcrumb-item text-dark' }, pageTitle))))));
};
exports.DefaultTitle = DefaultTitle;
