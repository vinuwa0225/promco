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
exports.BuilderPage = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var clsx_1 = require("clsx");
var react_1 = require("react");
var helpers_1 = require("../../../_metronic/helpers");
var core_1 = require("../../../_metronic/layout/core");
var BuilderPage = function () {
    var _a, _b;
    var setLayout = (0, core_1.useLayout)().setLayout;
    var _c = (0, react_1.useState)('Header'), tab = _c[0], setTab = _c[1];
    var _d = (0, react_1.useState)((0, core_1.getLayout)()), config = _d[0], setConfig = _d[1];
    var _e = (0, react_1.useState)(false), configLoading = _e[0], setConfigLoading = _e[1];
    var _f = (0, react_1.useState)(false), resetLoading = _f[0], setResetLoading = _f[1];
    var updateData = function (fieldsToUpdate) {
        var updatedData = __assign(__assign({}, config), fieldsToUpdate);
        setConfig(updatedData);
    };
    var updateConfig = function () {
        setConfigLoading(true);
        try {
            core_1.LayoutSetup.setConfig(config);
        }
        catch (error) {
            setConfig((0, core_1.getLayout)());
        }
        setTimeout(function () {
            setLayout(config);
            setConfigLoading(false);
        }, 1000);
    };
    var reset = function () {
        setResetLoading(true);
        setTimeout(function () {
            setConfig((0, core_1.getLayout)());
            setResetLoading(false);
        }, 1000);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'card mb-10' },
            react_1.default.createElement("div", { className: 'card-body d-flex align-items-center py-8' },
                react_1.default.createElement("div", { className: 'd-flex h-80px w-80px flex-shrink-0 flex-center position-relative' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/abstract/abs051.svg', className: 'svg-icon-primary position-absolute opacity-15', svgClassName: 'h-80px w-80px' }),
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/coding/cod009.svg', className: 'svg-icon-3x svg-icon-primary position-absolute' })),
                react_1.default.createElement("div", { className: 'ms-6' },
                    react_1.default.createElement("p", { className: 'list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0' }, "The layout builder is to assist your set and configure your preferred project layout specifications and preview it in real-time and export the HTML template with its includable partials of this demo. The downloaded version does not include the assets folder since the layout builder's main purpose is to help to generate the final HTML code without hassle. Layout builder changes don't affect pages with layout wrappers.")))),
        react_1.default.createElement("div", { className: 'card card-custom' },
            react_1.default.createElement("div", { className: 'card-header card-header-stretch overflow-auto' },
                react_1.default.createElement("ul", { className: 'nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap', role: 'tablist' },
                    react_1.default.createElement("li", { className: 'nav-item' },
                        react_1.default.createElement("a", { className: (0, clsx_1.default)("nav-link", { active: tab === 'Header' }), onClick: function () { return setTab('Header'); }, role: 'tab' }, "Header")),
                    react_1.default.createElement("li", { className: 'nav-item' },
                        react_1.default.createElement("a", { className: (0, clsx_1.default)("nav-link", { active: tab === 'Toolbar' }), onClick: function () { return setTab('Toolbar'); }, role: 'tab' }, "Toolbar")),
                    react_1.default.createElement("li", { className: 'nav-item' },
                        react_1.default.createElement("a", { className: (0, clsx_1.default)("nav-link", { active: tab === 'PageTitle' }), onClick: function () { return setTab('PageTitle'); }, role: 'tab' }, "Page Title")),
                    react_1.default.createElement("li", { className: 'nav-item' },
                        react_1.default.createElement("a", { className: (0, clsx_1.default)("nav-link", { active: tab === 'Aside' }), onClick: function () { return setTab('Aside'); }, role: 'tab' }, "Aside")),
                    react_1.default.createElement("li", { className: 'nav-item' },
                        react_1.default.createElement("a", { className: (0, clsx_1.default)("nav-link", { active: tab === 'Content' }), onClick: function () { return setTab('Content'); }, role: 'tab' }, "Content")),
                    react_1.default.createElement("li", { className: 'nav-item' },
                        react_1.default.createElement("a", { className: (0, clsx_1.default)("nav-link", { active: tab === 'Footer' }), onClick: function () { return setTab('Footer'); }, role: 'tab' }, "Footer")))),
            react_1.default.createElement("form", { className: 'form' },
                react_1.default.createElement("div", { className: 'card-body' },
                    react_1.default.createElement("div", { className: 'tab-content pt-3' },
                        react_1.default.createElement("div", { className: (0, clsx_1.default)('tab-pane', { active: tab === 'Header' }) },
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Fixed Header:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("label", { className: 'form-check form-check-custom form-check-solid form-switch mb-5' },
                                        react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', name: 'layout-builder[layout][header][fixed][desktop]', checked: config.header.fixed.desktop, onChange: function () {
                                                return updateData({
                                                    header: __assign(__assign({}, config.header), { fixed: __assign(__assign({}, config.header.fixed), { desktop: !config.header.fixed.desktop }) }),
                                                });
                                            } }),
                                        react_1.default.createElement("span", { className: 'form-check-label text-muted' }, "Desktop")),
                                    react_1.default.createElement("label", { className: 'form-check form-check-custom form-check-solid form-switch mb-3' },
                                        react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', checked: config.header.fixed.tabletAndMobile, onChange: function () {
                                                return updateData({
                                                    header: __assign(__assign({}, config.header), { fixed: __assign(__assign({}, config.header.fixed), { tabletAndMobile: !config.header.fixed.tabletAndMobile }) }),
                                                });
                                            } }),
                                        react_1.default.createElement("span", { className: 'form-check-label text-muted' }, "Tablet & Mobile")),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Enable fixed header"))),
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Left Content:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("select", { className: 'form-select form-select-solid', name: 'layout-builder[layout][header][width]', value: config.header.width, onChange: function (e) {
                                            return updateData({
                                                header: __assign(__assign({}, config.header), { left: e.target.value }),
                                            });
                                        } },
                                        react_1.default.createElement("option", { value: 'menu' }, "Menu"),
                                        react_1.default.createElement("option", { value: 'fixed' }, "Page title")),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Select header left content type."))),
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Width:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("select", { className: 'form-select form-select-solid', name: 'layout-builder[layout][header][width]', value: config.header.width, onChange: function (e) {
                                            return updateData({
                                                header: __assign(__assign({}, config.header), { width: e.target.value }),
                                            });
                                        } },
                                        react_1.default.createElement("option", { value: 'fluid' }, "Fluid"),
                                        react_1.default.createElement("option", { value: 'fixed' }, "Fixed")),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Select header width type.")))),
                        react_1.default.createElement("div", { className: (0, clsx_1.default)('tab-pane', { active: tab === 'Toolbar' }) },
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Display:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("div", { className: 'form-check form-check-custom form-check-solid form-switch mb-2' },
                                        react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', name: 'layout-builder[layout][toolbar][display]', checked: config.toolbar.display, onChange: function () {
                                                return updateData({
                                                    toolbar: __assign(__assign({}, config.toolbar), { display: !config.toolbar.display }),
                                                });
                                            } })),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Display toolbar"))),
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Fixed Toolbar:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("label", { className: 'form-check form-check-custom form-check-solid form-switch mb-5' },
                                        react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', name: 'layout-builder[layout][header][fixed][desktop]', checked: config.toolbar.fixed.desktop, onChange: function () {
                                                return updateData({
                                                    toolbar: __assign(__assign({}, config.toolbar), { fixed: __assign(__assign({}, config.toolbar.fixed), { desktop: !config.toolbar.fixed.desktop }) }),
                                                });
                                            } }),
                                        react_1.default.createElement("span", { className: 'form-check-label text-muted' }, "Desktop")),
                                    react_1.default.createElement("label", { className: 'form-check form-check-custom form-check-solid form-switch mb-3' },
                                        react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', checked: config.toolbar.fixed.tabletAndMobileMode, onChange: function () {
                                                return updateData({
                                                    toolbar: __assign(__assign({}, config.toolbar), { fixed: __assign(__assign({}, config.toolbar.fixed), { desktop: !config.toolbar.fixed.tabletAndMobileMode }) }),
                                                });
                                            } }),
                                        react_1.default.createElement("span", { className: 'form-check-label text-muted' }, "Tablet & Mobile")),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Enable fixed toolbar"))),
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Width:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("select", { className: 'form-select form-select-solid', name: 'layout-builder[layout][toolbar][width]', value: config.toolbar.width, onChange: function (e) {
                                            return updateData({
                                                toolbar: __assign(__assign({}, config.toolbar), { width: e.target.value }),
                                            });
                                        } },
                                        react_1.default.createElement("option", { value: 'fluid' }, "Fluid"),
                                        react_1.default.createElement("option", { value: 'fixed' }, "Fixed")),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Select layout width type.")))),
                        react_1.default.createElement("div", { className: (0, clsx_1.default)('tab-pane', { active: tab === 'PageTitle' }) },
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Display:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("div", { className: 'form-check form-check-custom form-check-solid form-switch mb-2' },
                                        react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', name: 'layout-builder[layout][pageTitle][display]', checked: (_a = config.pageTitle) === null || _a === void 0 ? void 0 : _a.display, onChange: function () {
                                                var _a;
                                                return updateData({
                                                    pageTitle: __assign(__assign({}, config.pageTitle), { display: !((_a = config.pageTitle) === null || _a === void 0 ? void 0 : _a.display) }),
                                                });
                                            } })),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Display page title"))),
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Breadcrumb:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("div", { className: 'form-check form-check-custom form-check-solid form-switch mb-2' },
                                        react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', name: 'layout-builder[layout][pageTitle][breadCrumbs]', checked: (_b = config.pageTitle) === null || _b === void 0 ? void 0 : _b.breadCrumbs, onChange: function () {
                                                var _a;
                                                return updateData({
                                                    pageTitle: __assign(__assign({}, config.pageTitle), { display: !((_a = config.pageTitle) === null || _a === void 0 ? void 0 : _a.breadCrumbs) }),
                                                });
                                            } })),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Display page title")))),
                        react_1.default.createElement("div", { className: (0, clsx_1.default)('tab-pane', { active: tab === 'Content' }) },
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Width:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("select", { className: 'form-select form-select-solid', name: 'layout-builder[layout][content][width]', value: config.content.width, onChange: function (e) {
                                            return updateData({
                                                content: __assign(__assign({}, config.content), { width: e.target.value }),
                                            });
                                        } },
                                        react_1.default.createElement("option", { value: 'fluid' }, "Fluid"),
                                        react_1.default.createElement("option", { value: 'fixed' }, "Fixed")),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Select layout width type.")))),
                        react_1.default.createElement("div", { className: (0, clsx_1.default)('tab-pane', { active: tab === 'Aside' }) },
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Display:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("div", { className: 'switch switch-icon' },
                                        react_1.default.createElement("div", { className: 'form-check form-check-custom form-check-solid form-switch mb-2' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', name: 'layout-builder[layout][aside][display]', checked: config.aside.display, onChange: function () {
                                                    return updateData({
                                                        aside: __assign(__assign({}, config.aside), { display: !config.aside.display }),
                                                    });
                                                } }))),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Display Aside"))),
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Theme:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("select", { className: 'form-select form-select-solid', name: 'layout-builder[layout][aside][theme]', value: config.aside.theme, onChange: function (e) {
                                            return updateData({
                                                aside: __assign(__assign({}, config.aside), { theme: e.target.value }),
                                            });
                                        } },
                                        react_1.default.createElement("option", { value: 'dark' }, "Dark"),
                                        react_1.default.createElement("option", { value: 'light' }, "Light")),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Select header left content type."))),
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Fixed:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("div", { className: 'switch switch-icon' },
                                        react_1.default.createElement("div", { className: 'form-check form-check-custom form-check-solid form-switch mb-2' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', name: 'layout-builder[layout][aside][fixed]', checked: config.aside.fixed, onChange: function () {
                                                    return updateData({
                                                        aside: __assign(__assign({}, config.aside), { display: !config.aside.fixed }),
                                                    });
                                                } }))),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Enable fixed aside"))),
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Minimize:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("div", { className: 'switch switch-icon' },
                                        react_1.default.createElement("div", { className: 'form-check form-check-custom form-check-solid form-switch mb-2' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', name: 'layout-builder[layout][aside][minimize]', checked: config.aside.minimize, onChange: function () {
                                                    return updateData({
                                                        aside: __assign(__assign({}, config.aside), { display: !config.aside.minimize }),
                                                    });
                                                } }))),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Enable aside minimization"))),
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Minimized:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("div", { className: 'switch switch-icon' },
                                        react_1.default.createElement("div", { className: 'form-check form-check-custom form-check-solid form-switch mb-2' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', name: 'layout-builder[layout][aside][minimized]', checked: config.aside.minimized, onChange: function () {
                                                    return updateData({
                                                        aside: __assign(__assign({}, config.aside), { display: !config.aside.minimized }),
                                                    });
                                                } }))),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Default minimized aside"))),
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Hoverable:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("div", { className: 'switch switch-icon' },
                                        react_1.default.createElement("div", { className: 'form-check form-check-custom form-check-solid form-switch mb-2' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', name: 'layout-builder[layout][aside][hoverable]', checked: config.aside.hoverable, onChange: function () {
                                                    return updateData({
                                                        aside: __assign(__assign({}, config.aside), { display: !config.aside.hoverable }),
                                                    });
                                                } }))),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Enable hoverable minimized aside")))),
                        react_1.default.createElement("div", { className: (0, clsx_1.default)('tab-pane', { active: tab === 'Footer' }) },
                            react_1.default.createElement("div", { className: 'row mb-10' },
                                react_1.default.createElement("label", { className: 'col-lg-3 col-form-label text-lg-end' }, "Width:"),
                                react_1.default.createElement("div", { className: 'col-lg-9 col-xl-4' },
                                    react_1.default.createElement("select", { className: 'form-select form-select-solid', name: 'layout-builder[layout][footer][width]', value: config.footer.width, onChange: function (e) {
                                            return updateData({
                                                footer: __assign(__assign({}, config.footer), { width: e.target.value }),
                                            });
                                        } },
                                        react_1.default.createElement("option", { value: 'fluid' }, "Fluid"),
                                        react_1.default.createElement("option", { value: 'fixed' }, "Fixed")),
                                    react_1.default.createElement("div", { className: 'form-text text-muted' }, "Select layout width type.")))))),
                react_1.default.createElement("div", { className: 'card-footer py-6' },
                    react_1.default.createElement("div", { className: 'row' },
                        react_1.default.createElement("div", { className: 'col-lg-3' }),
                        react_1.default.createElement("div", { className: 'col-lg-9' },
                            react_1.default.createElement("button", { type: 'button', onClick: updateConfig, className: 'btn btn-primary me-2' },
                                !configLoading && react_1.default.createElement("span", { className: 'indicator-label' }, "Preview"),
                                configLoading && (react_1.default.createElement("span", { className: 'indicator-progress', style: { display: 'block' } },
                                    "Please wait...",
                                    ' ',
                                    react_1.default.createElement("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' })))),
                            react_1.default.createElement("button", { type: 'button', id: 'kt_layout_builder_reset', className: 'btn btn-active-light btn-color-muted', onClick: reset },
                                !resetLoading && react_1.default.createElement("span", { className: 'indicator-label' }, "Reset"),
                                resetLoading && (react_1.default.createElement("span", { className: 'indicator-progress', style: { display: 'block' } },
                                    "Please wait...",
                                    ' ',
                                    react_1.default.createElement("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' })))))))))));
};
exports.BuilderPage = BuilderPage;
