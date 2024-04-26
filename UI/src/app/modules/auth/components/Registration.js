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
exports.Registration = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var formik_1 = require("formik");
var Yup = require("yup");
var clsx_1 = require("clsx");
var auth = require("../redux/AuthRedux");
var AuthCRUD_1 = require("../redux/AuthCRUD");
var react_router_dom_1 = require("react-router-dom");
var helpers_1 = require("../../../../_metronic/helpers");
var initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    changepassword: '',
    acceptTerms: false,
};
var registrationSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('First name is required'),
    email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    lastname: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Last name is required'),
    password: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
    changepassword: Yup.string()
        .required('Password confirmation is required')
        .when('password', {
        is: function (val) { return (val && val.length > 0 ? true : false); },
        then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
    }),
    acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
});
function Registration() {
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    var formik = (0, formik_1.useFormik)({
        initialValues: initialValues,
        validationSchema: registrationSchema,
        onSubmit: function (values, _a) {
            var setStatus = _a.setStatus, setSubmitting = _a.setSubmitting;
            setLoading(true);
            setTimeout(function () {
                (0, AuthCRUD_1.register)(values.email, values.firstname, values.lastname, values.password)
                    .then(function (_a) {
                    var accessToken = _a.data.accessToken;
                    setLoading(false);
                    dispatch(auth.actions.login(accessToken));
                })
                    .catch(function () {
                    setLoading(false);
                    setSubmitting(false);
                    setStatus('Registration process has broken');
                });
            }, 1000);
        },
    });
    return (react_1.default.createElement("form", { className: 'form w-100 fv-plugins-bootstrap5 fv-plugins-framework', noValidate: true, id: 'kt_login_signup_form', onSubmit: formik.handleSubmit },
        react_1.default.createElement("div", { className: 'mb-10 text-center' },
            react_1.default.createElement("h1", { className: 'text-dark mb-3' }, "Create an Account"),
            react_1.default.createElement("div", { className: 'text-gray-400 fw-bold fs-4' },
                "Already have an account?",
                react_1.default.createElement(react_router_dom_1.Link, { to: '/auth/login', className: 'link-primary fw-bolder', style: { marginLeft: '5px' } }, "Forgot Password ?"))),
        react_1.default.createElement("button", { type: 'button', className: 'btn btn-light-primary fw-bolder w-100 mb-10' },
            react_1.default.createElement("img", { alt: 'Logo', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/brand-logos/google-icon.svg'), className: 'h-20px me-3' }),
            "Sign in with Google"),
        react_1.default.createElement("div", { className: 'd-flex align-items-center mb-10' },
            react_1.default.createElement("div", { className: 'border-bottom border-gray-300 mw-50 w-100' }),
            react_1.default.createElement("span", { className: 'fw-bold text-gray-400 fs-7 mx-2' }, "OR"),
            react_1.default.createElement("div", { className: 'border-bottom border-gray-300 mw-50 w-100' })),
        formik.status && (react_1.default.createElement("div", { className: 'mb-lg-15 alert alert-danger' },
            react_1.default.createElement("div", { className: 'alert-text font-weight-bold' }, formik.status))),
        react_1.default.createElement("div", { className: 'row fv-row mb-7' },
            react_1.default.createElement("div", { className: 'col-xl-6' },
                react_1.default.createElement("label", { className: 'class="form-label fw-bolder text-dark fs-6' }, "First name"),
                react_1.default.createElement("input", __assign({ placeholder: 'First name', type: 'text', autoComplete: 'off' }, formik.getFieldProps('firstname'), { className: (0, clsx_1.default)('form-control form-control-lg form-control-solid', {
                        'is-invalid': formik.touched.firstname && formik.errors.firstname,
                    }, {
                        'is-valid': formik.touched.firstname && !formik.errors.firstname,
                    }) })),
                formik.touched.firstname && formik.errors.firstname && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                    react_1.default.createElement("div", { className: 'fv-help-block' },
                        react_1.default.createElement("span", { role: 'alert' }, formik.errors.firstname))))),
            react_1.default.createElement("div", { className: 'col-xl-6' },
                react_1.default.createElement("div", { className: 'fv-row mb-5' },
                    react_1.default.createElement("label", { className: 'form-label fw-bolder text-dark fs-6' }, "Last name"),
                    react_1.default.createElement("input", __assign({ placeholder: 'Last name', type: 'text', autoComplete: 'off' }, formik.getFieldProps('lastname'), { className: (0, clsx_1.default)('form-control form-control-lg form-control-solid', {
                            'is-invalid': formik.touched.lastname && formik.errors.lastname,
                        }, {
                            'is-valid': formik.touched.lastname && !formik.errors.lastname,
                        }) })),
                    formik.touched.lastname && formik.errors.lastname && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                        react_1.default.createElement("div", { className: 'fv-help-block' },
                            react_1.default.createElement("span", { role: 'alert' }, formik.errors.lastname))))))),
        react_1.default.createElement("div", { className: 'fv-row mb-7' },
            react_1.default.createElement("label", { className: 'form-label fw-bolder text-dark fs-6' }, "Email"),
            react_1.default.createElement("input", __assign({ placeholder: 'Email', type: 'email', autoComplete: 'off' }, formik.getFieldProps('email'), { className: (0, clsx_1.default)('form-control form-control-lg form-control-solid', { 'is-invalid': formik.touched.email && formik.errors.email }, {
                    'is-valid': formik.touched.email && !formik.errors.email,
                }) })),
            formik.touched.email && formik.errors.email && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                react_1.default.createElement("div", { className: 'fv-help-block' },
                    react_1.default.createElement("span", { role: 'alert' }, formik.errors.email))))),
        react_1.default.createElement("div", { className: 'mb-10 fv-row', "data-kt-password-meter": 'true' },
            react_1.default.createElement("div", { className: 'mb-1' },
                react_1.default.createElement("label", { className: 'form-label fw-bolder text-dark fs-6' }, "Password"),
                react_1.default.createElement("div", { className: 'position-relative mb-3' },
                    react_1.default.createElement("input", __assign({ type: 'password', placeholder: 'Password', autoComplete: 'off' }, formik.getFieldProps('password'), { className: (0, clsx_1.default)('form-control form-control-lg form-control-solid', {
                            'is-invalid': formik.touched.password && formik.errors.password,
                        }, {
                            'is-valid': formik.touched.password && !formik.errors.password,
                        }) })),
                    formik.touched.password && formik.errors.password && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                        react_1.default.createElement("div", { className: 'fv-help-block' },
                            react_1.default.createElement("span", { role: 'alert' }, formik.errors.password))))))),
        react_1.default.createElement("div", { className: 'fv-row mb-5' },
            react_1.default.createElement("label", { className: 'form-label fw-bolder text-dark fs-6' }, "Confirm Password"),
            react_1.default.createElement("input", __assign({ type: 'password', placeholder: 'Password confirmation', autoComplete: 'off' }, formik.getFieldProps('changepassword'), { className: (0, clsx_1.default)('form-control form-control-lg form-control-solid', {
                    'is-invalid': formik.touched.changepassword && formik.errors.changepassword,
                }, {
                    'is-valid': formik.touched.changepassword && !formik.errors.changepassword,
                }) })),
            formik.touched.changepassword && formik.errors.changepassword && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                react_1.default.createElement("div", { className: 'fv-help-block' },
                    react_1.default.createElement("span", { role: 'alert' }, formik.errors.changepassword))))),
        react_1.default.createElement("div", { className: 'fv-row mb-10' },
            react_1.default.createElement("div", { className: 'form-check form-check-custom form-check-solid' },
                react_1.default.createElement("input", __assign({ className: 'form-check-input', type: 'checkbox', id: 'kt_login_toc_agree' }, formik.getFieldProps('acceptTerms'))),
                react_1.default.createElement("label", { className: 'form-check-label fw-bold text-gray-700 fs-6', htmlFor: 'kt_login_toc_agree' },
                    "I Agree the",
                    ' ',
                    react_1.default.createElement(react_router_dom_1.Link, { to: '/auth/terms', className: 'ms-1 link-primary' }, "terms and conditions"),
                    "."),
                formik.touched.acceptTerms && formik.errors.acceptTerms && (react_1.default.createElement("div", { className: 'fv-plugins-message-container' },
                    react_1.default.createElement("div", { className: 'fv-help-block' },
                        react_1.default.createElement("span", { role: 'alert' }, formik.errors.acceptTerms)))))),
        react_1.default.createElement("div", { className: 'text-center' },
            react_1.default.createElement("button", { type: 'submit', id: 'kt_sign_up_submit', className: 'btn btn-lg btn-primary w-100 mb-5', disabled: formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms },
                !loading && react_1.default.createElement("span", { className: 'indicator-label' }, "Submit"),
                loading && (react_1.default.createElement("span", { className: 'indicator-progress', style: { display: 'block' } },
                    "Please wait...",
                    ' ',
                    react_1.default.createElement("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' })))),
            react_1.default.createElement(react_router_dom_1.Link, { to: '/auth/login' },
                react_1.default.createElement("button", { type: 'button', id: 'kt_login_signup_form_cancel_button', className: 'btn btn-lg btn-light-primary w-100 mb-5' }, "Cancel")))));
}
exports.Registration = Registration;
