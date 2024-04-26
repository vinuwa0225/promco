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
exports.EmailPreferences = void 0;
var react_1 = require("react");
var SettingsModel_1 = require("../SettingsModel");
var EmailPreferences = function () {
    var _a = (0, react_1.useState)(SettingsModel_1.emailPreferences), data = _a[0], setData = _a[1];
    var updateData = function (fieldsToUpdate) {
        var updatedData = __assign(__assign({}, data), fieldsToUpdate);
        setData(updatedData);
    };
    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];
    var click = function () {
        setLoading(true);
        setTimeout(function () {
            setLoading(false);
        }, 1000);
    };
    return (react_1.default.createElement("div", { className: 'card mb-5 mb-xl-10' },
        react_1.default.createElement("div", { className: 'card-header border-0 cursor-pointer', role: 'button', "data-bs-toggle": 'collapse', "data-bs-target": '#kt_account_email_preferences', "aria-expanded": 'true', "aria-controls": 'kt_account_email_preferences' },
            react_1.default.createElement("div", { className: 'card-title m-0' },
                react_1.default.createElement("h3", { className: 'fw-bolder m-0' }, "Email Preferences"))),
        react_1.default.createElement("div", { id: 'kt_account_email_preferences', className: 'collapse show' },
            react_1.default.createElement("form", { className: 'form' },
                react_1.default.createElement("div", { className: 'card-body border-top px-9 py-9' },
                    react_1.default.createElement("label", { className: 'form-check form-check-custom form-check-solid align-items-start' },
                        react_1.default.createElement("input", { className: 'form-check-input me-3', type: 'checkbox', name: 'email-preferences[]', defaultChecked: data.successfulPayments, onChange: function () {
                                return updateData({
                                    successfulPayments: !data.successfulPayments,
                                });
                            } }),
                        react_1.default.createElement("span", { className: 'form-check-label d-flex flex-column align-items-start' },
                            react_1.default.createElement("span", { className: 'fw-bolder fs-5 mb-0' }, "Successful Payments"),
                            react_1.default.createElement("span", { className: 'text-muted fs-6' }, "Receive a notification for every successful payment."))),
                    react_1.default.createElement("div", { className: 'separator separator-dashed my-6' }),
                    react_1.default.createElement("label", { className: 'form-check form-check-custom form-check-solid align-items-start' },
                        react_1.default.createElement("input", { className: 'form-check-input me-3', type: 'checkbox', name: 'email-preferences[]', defaultChecked: data.payouts, onChange: function () {
                                return updateData({
                                    payouts: !data.payouts,
                                });
                            } }),
                        react_1.default.createElement("span", { className: 'form-check-label d-flex flex-column align-items-start' },
                            react_1.default.createElement("span", { className: 'fw-bolder fs-5 mb-0' }, "Payouts"),
                            react_1.default.createElement("span", { className: 'text-muted fs-6' }, "Receive a notification for every initiated payout."))),
                    react_1.default.createElement("div", { className: 'separator separator-dashed my-6' }),
                    react_1.default.createElement("label", { className: 'form-check form-check-custom form-check-solid align-items-start' },
                        react_1.default.createElement("input", { className: 'form-check-input me-3', type: 'checkbox', name: 'email-preferences[]', defaultChecked: data.freeCollections, onChange: function () {
                                return updateData({
                                    freeCollections: !data.freeCollections,
                                });
                            } }),
                        react_1.default.createElement("span", { className: 'form-check-label d-flex flex-column align-items-start' },
                            react_1.default.createElement("span", { className: 'fw-bolder fs-5 mb-0' }, "Fee Collection"),
                            react_1.default.createElement("span", { className: 'text-muted fs-6' }, "Receive a notification each time you collect a fee from sales"))),
                    react_1.default.createElement("div", { className: 'separator separator-dashed my-6' }),
                    react_1.default.createElement("label", { className: 'form-check form-check-custom form-check-solid align-items-start' },
                        react_1.default.createElement("input", { className: 'form-check-input me-3', type: 'checkbox', name: 'email-preferences[]', defaultChecked: data.customerPaymentDispute, onChange: function () {
                                return updateData({
                                    customerPaymentDispute: !data.customerPaymentDispute,
                                });
                            } }),
                        react_1.default.createElement("span", { className: 'form-check-label d-flex flex-column align-items-start' },
                            react_1.default.createElement("span", { className: 'fw-bolder fs-5 mb-0' }, "Customer Payment Dispute"),
                            react_1.default.createElement("span", { className: 'text-muted fs-6' }, "Receive a notification if a payment is disputed by a customer and for dispute purposes."))),
                    react_1.default.createElement("div", { className: 'separator separator-dashed my-6' }),
                    react_1.default.createElement("label", { className: 'form-check form-check-custom form-check-solid align-items-start' },
                        react_1.default.createElement("input", { className: 'form-check-input me-3', type: 'checkbox', name: 'email-preferences[]', defaultChecked: data.refundAlert, onChange: function () {
                                return updateData({
                                    refundAlert: !data.refundAlert,
                                });
                            } }),
                        react_1.default.createElement("span", { className: 'form-check-label d-flex flex-column align-items-start' },
                            react_1.default.createElement("span", { className: 'fw-bolder fs-5 mb-0' }, "Refund Alerts"),
                            react_1.default.createElement("span", { className: 'text-muted fs-6' }, "Receive a notification if a payment is stated as risk by the Finance Department."))),
                    react_1.default.createElement("div", { className: 'separator separator-dashed my-6' }),
                    react_1.default.createElement("label", { className: 'form-check form-check-custom form-check-solid align-items-start' },
                        react_1.default.createElement("input", { className: 'form-check-input me-3', type: 'checkbox', name: 'email-preferences[]', defaultChecked: data.invoicePayments, onChange: function () {
                                return updateData({
                                    invoicePayments: !data.invoicePayments,
                                });
                            } }),
                        react_1.default.createElement("span", { className: 'form-check-label d-flex flex-column align-items-start' },
                            react_1.default.createElement("span", { className: 'fw-bolder fs-5 mb-0' }, "Invoice Payments"),
                            react_1.default.createElement("span", { className: 'text-muted fs-6' }, "Receive a notification if a customer sends an incorrect amount to pay their invoice."))),
                    react_1.default.createElement("div", { className: 'separator separator-dashed my-6' }),
                    react_1.default.createElement("label", { className: 'form-check form-check-custom form-check-solid align-items-start' },
                        react_1.default.createElement("input", { className: 'form-check-input me-3', type: 'checkbox', name: 'email-preferences[]', defaultChecked: data.webhookAPIEndpoints, onChange: function () {
                                return updateData({
                                    webhookAPIEndpoints: !data.webhookAPIEndpoints,
                                });
                            } }),
                        react_1.default.createElement("span", { className: 'form-check-label d-flex flex-column align-items-start' },
                            react_1.default.createElement("span", { className: 'fw-bolder fs-5 mb-0' }, "Webhook API Endpoints"),
                            react_1.default.createElement("span", { className: 'text-muted fs-6' }, "Receive notifications for consistently failing webhook API endpoints.")))),
                react_1.default.createElement("div", { className: 'card-footer d-flex justify-content-end py-6 px-9' },
                    react_1.default.createElement("button", { className: 'btn btn-white btn-active-light-primary me-2' }, "Discard"),
                    react_1.default.createElement("button", { type: 'button', onClick: click, className: 'btn btn-primary' },
                        !loading && 'Save Changes',
                        loading && (react_1.default.createElement("span", { className: 'indicator-progress', style: { display: 'block' } },
                            "Please wait...",
                            ' ',
                            react_1.default.createElement("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' })))))))));
};
exports.EmailPreferences = EmailPreferences;
