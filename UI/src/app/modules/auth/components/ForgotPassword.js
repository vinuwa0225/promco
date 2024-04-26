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
exports.ForgotPassword = void 0;
var react_1 = require("react");
var Yup = require("yup");
var clsx_1 = require("clsx");
var react_router_dom_1 = require("react-router-dom");
var formik_1 = require("formik");
var AuthCRUD_1 = require("../redux/AuthCRUD");
var initialValues = {
    email: 'pethum.padukkage@siamcitycement.com',
};
var forgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
});
function ForgotPassword() {
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var _b = (0, react_1.useState)(undefined), hasErrors = _b[0], setHasErrors = _b[1];
    var formik = (0, formik_1.useFormik)({
        initialValues: initialValues,
        validationSchema: forgotPasswordSchema,
        onSubmit: function (values, _a) {
            var setStatus = _a.setStatus, setSubmitting = _a.setSubmitting;
            setLoading(true);
            setHasErrors(undefined);
            setTimeout(function () {
                (0, AuthCRUD_1.requestPassword)(values.email)
                    .then(function (_a) {
                    var result = _a.data.result;
                    setHasErrors(false);
                    setLoading(false);
                })
                    .catch(function () {
                    setHasErrors(true);
                    setLoading(false);
                    setSubmitting(false);
                    setStatus('The login detail is incorrect');
                });
            }, 1000);
        },
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { className: 'form w-100 fv-plugins-bootstrap5 fv-plugins-framework', noValidate: true, id: 'kt_login_password_reset_form', onSubmit: formik.handleSubmit },
            react_1.default.createElement("div", { className: 'text-center mb-10' },
                react_1.default.createElement("h1", { className: 'text-dark mb-3' }, "Forgot Password ?"),
                react_1.default.createElement("div", { className: 'text-gray-400 fw-bold fs-4' }, "Enter your email to reset your password.")),
            hasErrors === true && (react_1.default.createElement("div", { className: 'mb-lg-15 alert alert-danger' },
                react_1.default.createElement("div", { className: 'alert-text font-weight-bold' }, "Sorry, looks like there are some errors detected, please try again."))),
            hasErrors === false && (react_1.default.createElement("div", { className: 'mb-10 bg-light-info p-8 rounded' },
                react_1.default.createElement("div", { className: 'text-info' }, "Sent password reset. Please check your email"))),
            react_1.default.createElement("div", { className: 'fv-row mb-10' },
                react_1.default.createElement("label", { className: 'form-label fw-bolder text-gray-900 fs-6' }, "Email"),
                react_1.default.createElement("input", __assign({ type: 'email', placeholder: '', autoComplete: 'off' }, formik.getFieldProps('email'), { className: (0, clsx_1.default)('form-control form-control-lg form-control-solid', { 'is-invalid': formik.touched.email && formik.errors.email }, {
                        'is-valid': formik.touched.email && !formik.errors.email,
                    }) })),
                formik.touched.email && formik.errors.email && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                    react_1.default.createElement("div", { className: 'fv-help-block' },
                        react_1.default.createElement("span", { role: 'alert' }, formik.errors.email))))),
            react_1.default.createElement("div", { className: 'd-flex flex-wrap justify-content-center pb-lg-0' },
                react_1.default.createElement("button", { type: 'submit', id: 'kt_password_reset_submit', className: 'btn btn-lg btn-primary fw-bolder me-4' },
                    react_1.default.createElement("span", { className: 'indicator-label' }, "Submit"),
                    loading && (react_1.default.createElement("span", { className: 'indicator-progress' },
                        "Please wait...",
                        react_1.default.createElement("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' })))),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/auth/login' },
                    react_1.default.createElement("button", { type: 'button', id: 'kt_login_password_reset_form_cancel_button', className: 'btn btn-lg btn-light-primary fw-bolder', disabled: formik.isSubmitting || !formik.isValid }, "Cancel")),
                ' '))));
}
exports.ForgotPassword = ForgotPassword;
