"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsWidget7 = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var StatsWidget7 = function (_a) {
    var className = _a.className, _b = _a.innerPadding, innerPadding = _b === void 0 ? '' : _b;
    var _c = (0, react_1.useState)('1'), category = _c[0], setCategory = _c[1];
    var _d = (0, react_1.useState)('1'), option = _d[0], setOption = _d[1];
    var _e = (0, react_1.useState)('1'), fleet = _e[0], setFleet = _e[1];
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: "card-body ".concat(innerPadding) },
            react_1.default.createElement("div", { className: 'mb-10' },
                react_1.default.createElement("h3", { className: 'fw-bold text-dark mb-5 fs-1' }, "What A Pretty Form"),
                react_1.default.createElement("span", { className: 'fw-bold fs-4 text-muted' }, "This information will help us tailor your experience.")),
            react_1.default.createElement("div", { className: 'mb-10' },
                react_1.default.createElement("h3", { className: 'fw-bold fs-3 text-dark mb-5' }, "Select A Category"),
                react_1.default.createElement("div", { className: 'row', "data-kt-control": 'toggle-buttons' },
                    react_1.default.createElement("input", { type: 'radio', className: 'btn-check', name: 'form-options', checked: category === '1', value: '1', id: 'kt_form_options_1', onChange: function (e) { return setCategory(e.target.value); } }),
                    react_1.default.createElement("label", { className: "col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px ".concat(category === '1' ? 'active' : ''), htmlFor: 'kt_form_options_1' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen002.svg', className: 'svg-icon-2x me-1' }),
                        react_1.default.createElement("span", { className: 'text-gray-800 fw-bold' }, "Movie Creator")),
                    react_1.default.createElement("input", { type: 'radio', className: 'btn-check', name: 'form-options', value: '2', id: 'kt_form_options_2', checked: category === '2', onChange: function (e) { return setCategory(e.target.value); } }),
                    react_1.default.createElement("label", { className: "col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px ".concat(category === '2' ? 'active' : ''), htmlFor: 'kt_form_options_2' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/electronics/elc007.svg', className: 'svg-icon-2x me-1' }),
                        react_1.default.createElement("span", { className: 'text-gray-800 fw-bold' }, "Networking")),
                    react_1.default.createElement("input", { type: 'radio', className: 'btn-check', name: 'form-options', value: '3', id: 'kt_form_options_3', checked: category === '3', onChange: function (e) { return setCategory(e.target.value); } }),
                    react_1.default.createElement("label", { className: "col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px ".concat(category === '3' ? 'active' : ''), htmlFor: 'kt_form_options_3' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/ecommerce/ecm002.svg', className: 'svg-icon-2x me-1' }),
                        react_1.default.createElement("span", { className: 'text-gray-800 fw-bold' }, "eCommerce")),
                    react_1.default.createElement("input", { type: 'radio', className: 'btn-check', name: 'form-options', value: '4', id: 'kt_form_options_4', checked: category === '4', onChange: function (e) { return setCategory(e.target.value); } }),
                    react_1.default.createElement("label", { className: "col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px ".concat(category === '4' ? 'active' : ''), htmlFor: 'kt_form_options_4' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen032.svg', className: 'svg-icon-2x me-1' }),
                        react_1.default.createElement("span", { className: 'text-gray-800 fw-bold' }, "Data Analysis")))),
            react_1.default.createElement("div", { className: 'mb-10' },
                react_1.default.createElement("div", { className: 'd-flex justify-content-between mb-5' },
                    react_1.default.createElement("label", { className: 'fw-bold fs-3 text-dark' }, "Select An Option"),
                    react_1.default.createElement("span", { className: 'fw-bold fs-6 text-muted' }, "Optional")),
                react_1.default.createElement("select", { className: 'form-select form-select-lg form-select-solid fw-bold fs-6 text-gray-600 h-60px', "data-control": 'select2', "data-placeholder": 'Choose one', "data-hide-search": 'true', onChange: function (e) { return setOption(e.target.value); }, value: option, defaultValue: '1' },
                    react_1.default.createElement("option", { value: '1' }, "1"),
                    react_1.default.createElement("option", { value: '2' }, "2"),
                    react_1.default.createElement("option", { value: '3' }, "3"),
                    react_1.default.createElement("option", { value: '4' }, "4"),
                    react_1.default.createElement("option", { value: '5' }, "5"))),
            react_1.default.createElement("div", { className: 'mb-10' },
                react_1.default.createElement("h3", { className: 'fw-bold fs-3 text-dark  mb-5' }, "How Big Is Your Fleet?"),
                react_1.default.createElement("div", { className: 'row', "data-kt-control": 'toggle-buttons' },
                    react_1.default.createElement("input", { type: 'radio', className: 'btn-check', name: 'form-fleet', value: '1', id: 'kt_form_fleet_1', onChange: function (e) { return setFleet(e.target.value); }, checked: fleet === '1' }),
                    react_1.default.createElement("label", { className: "col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px ".concat(fleet === '1' ? 'active' : ''), htmlFor: 'kt_form_fleet_1' },
                        react_1.default.createElement("span", { className: 'text-gray-800 fw-bold' }, "1-10")),
                    react_1.default.createElement("input", { type: 'radio', className: 'btn-check', name: 'form-fleet', value: '2', id: 'kt_form_fleet_2', onChange: function (e) { return setFleet(e.target.value); }, checked: fleet === '2' }),
                    react_1.default.createElement("label", { className: "col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px ".concat(fleet === '2' ? 'active' : ''), htmlFor: 'kt_form_fleet_2' },
                        react_1.default.createElement("span", { className: 'text-gray-800 fw-bold' }, "10-50")),
                    react_1.default.createElement("input", { type: 'radio', className: 'btn-check', name: 'form-fleet', value: '3', id: 'kt_form_fleet_3', onChange: function (e) { return setFleet(e.target.value); }, checked: fleet === '3' }),
                    react_1.default.createElement("label", { className: "col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px ".concat(fleet === '3' ? 'active' : ''), htmlFor: 'kt_form_fleet_3' },
                        react_1.default.createElement("span", { className: 'text-gray-800 fw-bold' }, "50-100")),
                    react_1.default.createElement("input", { type: 'radio', className: 'btn-check', name: 'form-fleet', value: '4', id: 'kt_form_fleet_4', onChange: function (e) { return setFleet(e.target.value); }, checked: fleet === '4' }),
                    react_1.default.createElement("label", { className: "col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px ".concat(fleet === '4' ? 'active' : ''), htmlFor: 'kt_form_fleet_4' },
                        react_1.default.createElement("span", { className: 'text-gray-800 fw-bold' }, "100-500")),
                    react_1.default.createElement("input", { type: 'radio', className: 'btn-check', name: 'form-fleet', value: '5', id: 'kt_form_fleet_5', onChange: function (e) { return setFleet(e.target.value); }, checked: fleet === '5' }),
                    react_1.default.createElement("label", { className: "col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px ".concat(fleet === '5' ? 'active' : ''), htmlFor: 'kt_form_fleet_5' },
                        react_1.default.createElement("span", { className: 'text-gray-800 fw-bold' }, "500+")))),
            react_1.default.createElement("div", { className: 'mb-10' },
                react_1.default.createElement("a", { href: '#', className: 'btn btn-primary px-11 py-4 fw-bolder fs-3' }, "Create Fleet")))));
};
exports.StatsWidget7 = StatsWidget7;
