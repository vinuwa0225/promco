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
exports.DeactivateAccount = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../../../../_metronic/helpers");
var SettingsModel_1 = require("../SettingsModel");
var Yup = require("yup");
var formik_1 = require("formik");
var deactivateAccountSchema = Yup.object().shape({
    confirm: Yup.boolean().oneOf([true], 'Please check the box to deactivate your account'),
});
var DeactivateAccount = function () {
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var formik = (0, formik_1.useFormik)({
        initialValues: __assign({}, SettingsModel_1.deactivateAccount),
        validationSchema: deactivateAccountSchema,
        onSubmit: function () {
            setLoading(true);
            setTimeout(function () {
                setLoading(false);
            }, 1000);
            alert('Account has been successfully deleted!');
        },
    });
    return (react_1.default.createElement("div", { className: 'card' },
        react_1.default.createElement("div", { className: 'card-header border-0 cursor-pointer', role: 'button', "data-bs-toggle": 'collapse', "data-bs-target": '#kt_account_deactivate', "aria-expanded": 'true', "aria-controls": 'kt_account_deactivate' },
            react_1.default.createElement("div", { className: 'card-title m-0' },
                react_1.default.createElement("h3", { className: 'fw-bolder m-0' }, "Deactivate Account"))),
        react_1.default.createElement("div", { id: 'kt_account_deactivate', className: 'collapse show' },
            react_1.default.createElement("form", { onSubmit: formik.handleSubmit, id: 'kt_account_deactivate_form', className: 'form' },
                react_1.default.createElement("div", { className: 'card-body border-top p-9' },
                    react_1.default.createElement("div", { className: 'notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen044.svg', className: 'svg-icon-2tx svg-icon-warning me-4' }),
                        react_1.default.createElement("div", { className: 'd-flex flex-stack flex-grow-1' },
                            react_1.default.createElement("div", { className: 'fw-bold' },
                                react_1.default.createElement("h4", { className: 'text-gray-800 fw-bolder' }, "You Are Deactivating Your Account"),
                                react_1.default.createElement("div", { className: 'fs-6 text-gray-600' },
                                    "For extra security, this requires you to confirm your email or phone number when you reset yousignr password.",
                                    react_1.default.createElement("br", null),
                                    react_1.default.createElement("a", { className: 'fw-bolder', href: '#' }, "Learn more"))))),
                    react_1.default.createElement("div", { className: 'form-check form-check-solid fv-row' },
                        react_1.default.createElement("input", __assign({ className: 'form-check-input', type: 'checkbox' }, formik.getFieldProps('confirm'))),
                        react_1.default.createElement("label", { className: 'form-check-label fw-bold ps-2 fs-6', htmlFor: 'deactivate' }, "I confirm my account deactivation")),
                    formik.touched.confirm && formik.errors.confirm && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                        react_1.default.createElement("div", { className: 'fv-help-block' }, formik.errors.confirm)))),
                react_1.default.createElement("div", { className: 'card-footer d-flex justify-content-end py-6 px-9' },
                    react_1.default.createElement("button", { id: 'kt_account_deactivate_account_submit', type: 'submit', className: 'btn btn-danger fw-bold' },
                        !loading && 'Deactivate Account',
                        loading && (react_1.default.createElement("span", { className: 'indicator-progress', style: { display: 'block' } },
                            "Please wait...",
                            ' ',
                            react_1.default.createElement("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' })))))))));
};
exports.DeactivateAccount = DeactivateAccount;
