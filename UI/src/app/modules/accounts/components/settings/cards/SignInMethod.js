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
exports.SignInMethod = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../../../../_metronic/helpers");
var Yup = require("yup");
var formik_1 = require("formik");
var SettingsModel_1 = require("../SettingsModel");
var emailFormValidationSchema = Yup.object().shape({
    newEmail: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    confirmPassword: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
});
var passwordFormValidationSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
    newPassword: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
    passwordConfirmation: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required')
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});
var SignInMethod = function () {
    var _a = (0, react_1.useState)(SettingsModel_1.updateEmail), emailUpdateData = _a[0], setEmailUpdateData = _a[1];
    var _b = (0, react_1.useState)(SettingsModel_1.updatePassword), passwordUpdateData = _b[0], setPasswordUpdateData = _b[1];
    var _c = (0, react_1.useState)(false), showEmailForm = _c[0], setShowEmailForm = _c[1];
    var _d = (0, react_1.useState)(false), showPasswordForm = _d[0], setPasswordForm = _d[1];
    var _e = (0, react_1.useState)(false), loading1 = _e[0], setLoading1 = _e[1];
    var formik1 = (0, formik_1.useFormik)({
        initialValues: __assign({}, emailUpdateData),
        validationSchema: emailFormValidationSchema,
        onSubmit: function (values) {
            setLoading1(true);
            setTimeout(function (values) {
                setEmailUpdateData(values);
                setLoading1(false);
                setShowEmailForm(false);
            }, 1000);
        },
    });
    var _f = (0, react_1.useState)(false), loading2 = _f[0], setLoading2 = _f[1];
    var formik2 = (0, formik_1.useFormik)({
        initialValues: __assign({}, passwordUpdateData),
        validationSchema: passwordFormValidationSchema,
        onSubmit: function (values) {
            setLoading2(true);
            setTimeout(function (values) {
                setPasswordUpdateData(values);
                setLoading2(false);
                setPasswordForm(false);
            }, 1000);
        },
    });
    return (react_1.default.createElement("div", { className: 'card mb-5 mb-xl-10' },
        react_1.default.createElement("div", { className: 'card-header border-0 cursor-pointer', role: 'button', "data-bs-toggle": 'collapse', "data-bs-target": '#kt_account_signin_method' },
            react_1.default.createElement("div", { className: 'card-title m-0' },
                react_1.default.createElement("h3", { className: 'fw-bolder m-0' }, "Sign-in Method"))),
        react_1.default.createElement("div", { id: 'kt_account_signin_method', className: 'collapse show' },
            react_1.default.createElement("div", { className: 'card-body border-top p-9' },
                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center' },
                    react_1.default.createElement("div", { id: 'kt_signin_email', className: ' ' + (showEmailForm && 'd-none') },
                        react_1.default.createElement("div", { className: 'fs-6 fw-bolder mb-1' }, "Email Address"),
                        react_1.default.createElement("div", { className: 'fw-bold text-gray-600' }, "support@keenthemes.com")),
                    react_1.default.createElement("div", { id: 'kt_signin_email_edit', className: 'flex-row-fluid ' + (!showEmailForm && 'd-none') },
                        react_1.default.createElement("form", { onSubmit: formik1.handleSubmit, id: 'kt_signin_change_email', className: 'form', noValidate: true },
                            react_1.default.createElement("div", { className: 'row mb-6' },
                                react_1.default.createElement("div", { className: 'col-lg-6 mb-4 mb-lg-0' },
                                    react_1.default.createElement("div", { className: 'fv-row mb-0' },
                                        react_1.default.createElement("label", { htmlFor: 'emailaddress', className: 'form-label fs-6 fw-bolder mb-3' }, "Enter New Email Address"),
                                        react_1.default.createElement("input", __assign({ type: 'email', className: 'form-control form-control-lg form-control-solid', id: 'emailaddress', placeholder: 'Email Address' }, formik1.getFieldProps('newEmail'))),
                                        formik1.touched.newEmail && formik1.errors.newEmail && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                                            react_1.default.createElement("div", { className: 'fv-help-block' }, formik1.errors.newEmail))))),
                                react_1.default.createElement("div", { className: 'col-lg-6' },
                                    react_1.default.createElement("div", { className: 'fv-row mb-0' },
                                        react_1.default.createElement("label", { htmlFor: 'confirmemailpassword', className: 'form-label fs-6 fw-bolder mb-3' }, "Confirm Password"),
                                        react_1.default.createElement("input", __assign({ type: 'password', className: 'form-control form-control-lg form-control-solid', id: 'confirmemailpassword' }, formik1.getFieldProps('confirmPassword'))),
                                        formik1.touched.confirmPassword && formik1.errors.confirmPassword && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                                            react_1.default.createElement("div", { className: 'fv-help-block' }, formik1.errors.confirmPassword)))))),
                            react_1.default.createElement("div", { className: 'd-flex' },
                                react_1.default.createElement("button", { id: 'kt_signin_submit', type: 'submit', className: 'btn btn-primary  me-2 px-6' },
                                    !loading1 && 'Update Email',
                                    loading1 && (react_1.default.createElement("span", { className: 'indicator-progress', style: { display: 'block' } },
                                        "Please wait...",
                                        ' ',
                                        react_1.default.createElement("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' })))),
                                react_1.default.createElement("button", { id: 'kt_signin_cancel', type: 'button', onClick: function () {
                                        setShowEmailForm(false);
                                    }, className: 'btn btn-color-gray-400 btn-active-light-primary px-6' }, "Cancel")))),
                    react_1.default.createElement("div", { id: 'kt_signin_email_button', className: 'ms-auto ' + (showEmailForm && 'd-none') },
                        react_1.default.createElement("button", { onClick: function () {
                                setShowEmailForm(true);
                            }, className: 'btn btn-light btn-active-light-primary' }, "Change Email"))),
                react_1.default.createElement("div", { className: 'separator separator-dashed my-6' }),
                react_1.default.createElement("div", { className: 'd-flex flex-wrap align-items-center mb-10' },
                    react_1.default.createElement("div", { id: 'kt_signin_password', className: ' ' + (showPasswordForm && 'd-none') },
                        react_1.default.createElement("div", { className: 'fs-6 fw-bolder mb-1' }, "Password"),
                        react_1.default.createElement("div", { className: 'fw-bold text-gray-600' }, "************")),
                    react_1.default.createElement("div", { id: 'kt_signin_password_edit', className: 'flex-row-fluid ' + (!showPasswordForm && 'd-none') },
                        react_1.default.createElement("form", { onSubmit: formik2.handleSubmit, id: 'kt_signin_change_password', className: 'form', noValidate: true },
                            react_1.default.createElement("div", { className: 'row mb-1' },
                                react_1.default.createElement("div", { className: 'col-lg-4' },
                                    react_1.default.createElement("div", { className: 'fv-row mb-0' },
                                        react_1.default.createElement("label", { htmlFor: 'currentpassword', className: 'form-label fs-6 fw-bolder mb-3' }, "Current Password"),
                                        react_1.default.createElement("input", __assign({ type: 'password', className: 'form-control form-control-lg form-control-solid ', id: 'currentpassword' }, formik2.getFieldProps('currentPassword'))),
                                        formik2.touched.currentPassword && formik2.errors.currentPassword && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                                            react_1.default.createElement("div", { className: 'fv-help-block' }, formik2.errors.currentPassword))))),
                                react_1.default.createElement("div", { className: 'col-lg-4' },
                                    react_1.default.createElement("div", { className: 'fv-row mb-0' },
                                        react_1.default.createElement("label", { htmlFor: 'newpassword', className: 'form-label fs-6 fw-bolder mb-3' }, "New Password"),
                                        react_1.default.createElement("input", __assign({ type: 'password', className: 'form-control form-control-lg form-control-solid ', id: 'newpassword' }, formik2.getFieldProps('newPassword'))),
                                        formik2.touched.newPassword && formik2.errors.newPassword && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                                            react_1.default.createElement("div", { className: 'fv-help-block' }, formik2.errors.newPassword))))),
                                react_1.default.createElement("div", { className: 'col-lg-4' },
                                    react_1.default.createElement("div", { className: 'fv-row mb-0' },
                                        react_1.default.createElement("label", { htmlFor: 'confirmpassword', className: 'form-label fs-6 fw-bolder mb-3' }, "Confirm New Password"),
                                        react_1.default.createElement("input", __assign({ type: 'password', className: 'form-control form-control-lg form-control-solid ', id: 'confirmpassword' }, formik2.getFieldProps('passwordConfirmation'))),
                                        formik2.touched.passwordConfirmation && formik2.errors.passwordConfirmation && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                                            react_1.default.createElement("div", { className: 'fv-help-block' }, formik2.errors.passwordConfirmation)))))),
                            react_1.default.createElement("div", { className: 'form-text mb-5' }, "Password must be at least 8 character and contain symbols"),
                            react_1.default.createElement("div", { className: 'd-flex' },
                                react_1.default.createElement("button", { id: 'kt_password_submit', type: 'submit', className: 'btn btn-primary me-2 px-6' },
                                    !loading2 && 'Update Password',
                                    loading2 && (react_1.default.createElement("span", { className: 'indicator-progress', style: { display: 'block' } },
                                        "Please wait...",
                                        ' ',
                                        react_1.default.createElement("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' })))),
                                react_1.default.createElement("button", { onClick: function () {
                                        setPasswordForm(false);
                                    }, id: 'kt_password_cancel', type: 'button', className: 'btn btn-color-gray-400 btn-active-light-primary px-6' }, "Cancel")))),
                    react_1.default.createElement("div", { id: 'kt_signin_password_button', className: 'ms-auto ' + (showPasswordForm && 'd-none') },
                        react_1.default.createElement("button", { onClick: function () {
                                setPasswordForm(true);
                            }, className: 'btn btn-light btn-active-light-primary' }, "Reset Password"))),
                react_1.default.createElement("div", { className: 'notice d-flex bg-light-primary rounded border-primary border border-dashed p-6' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen048.svg', className: 'svg-icon-2tx svg-icon-primary me-4' }),
                    react_1.default.createElement("div", { className: 'd-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap' },
                        react_1.default.createElement("div", { className: 'mb-3 mb-md-0 fw-bold' },
                            react_1.default.createElement("h4", { className: 'text-gray-800 fw-bolder' }, "Secure Your Account"),
                            react_1.default.createElement("div", { className: 'fs-6 text-gray-600 pe-7' }, "Two-factor authentication adds an extra layer of security to your account. To log in, in addition you'll need to provide a 6 digit code")),
                        react_1.default.createElement("a", { href: '#', className: 'btn btn-primary px-6 align-self-center text-nowrap', "data-bs-toggle": 'modal', "data-bs-target": '#kt_modal_two_factor_authentication' }, "Enable")))))));
};
exports.SignInMethod = SignInMethod;
