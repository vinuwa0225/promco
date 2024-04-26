"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step1 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../../../_metronic/helpers");
var formik_1 = require("formik");
var Step1 = function () {
    return (react_1.default.createElement("div", { className: 'w-100' },
        react_1.default.createElement("div", { className: 'pb-10 pb-lg-15' },
            react_1.default.createElement("h2", { className: 'fw-bolder d-flex align-items-center text-dark' },
                "Choose Account Type",
                react_1.default.createElement("i", { className: 'fas fa-exclamation-circle ms-2 fs-7', "data-bs-toggle": 'tooltip', title: 'Billing is issued based on your selected account type' })),
            react_1.default.createElement("div", { className: 'text-gray-400 fw-bold fs-6' },
                "If you need more info, please check out",
                react_1.default.createElement("a", { href: '/dashboard', className: 'link-primary fw-bolder' },
                    ' ',
                    "Help Page"),
                ".")),
        react_1.default.createElement("div", { className: 'fv-row' },
            react_1.default.createElement("div", { className: 'row' },
                react_1.default.createElement("div", { className: 'col-lg-6' },
                    react_1.default.createElement(formik_1.Field, { type: 'radio', className: 'btn-check', name: 'accountType', value: 'personal', id: 'kt_create_account_form_account_type_personal' }),
                    react_1.default.createElement("label", { className: 'btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10', htmlFor: 'kt_create_account_form_account_type_personal' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/communication/com005.svg', className: 'svg-icon-3x me-5' }),
                        react_1.default.createElement("span", { className: 'd-block fw-bold text-start' },
                            react_1.default.createElement("span", { className: 'text-dark fw-bolder d-block fs-4 mb-2' }, "Personal Account"),
                            react_1.default.createElement("span", { className: 'text-gray-400 fw-bold fs-6' }, "If you need more info, please check it out")))),
                react_1.default.createElement("div", { className: 'col-lg-6' },
                    react_1.default.createElement(formik_1.Field, { type: 'radio', className: 'btn-check', name: 'accountType', value: 'corporate', id: 'kt_create_account_form_account_type_corporate' }),
                    react_1.default.createElement("label", { className: 'btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center', htmlFor: 'kt_create_account_form_account_type_corporate' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/finance/fin006.svg', className: 'svg-icon-3x me-5' }),
                        react_1.default.createElement("span", { className: 'd-block fw-bold text-start' },
                            react_1.default.createElement("span", { className: 'text-dark fw-bolder d-block fs-4 mb-2' }, "Corporate Account"),
                            react_1.default.createElement("span", { className: 'text-gray-400 fw-bold fs-6' }, "Create corporate account to mane users")))),
                react_1.default.createElement("div", { className: 'text-danger mt-2' },
                    react_1.default.createElement(formik_1.ErrorMessage, { name: 'accountType' }))))));
};
exports.Step1 = Step1;
