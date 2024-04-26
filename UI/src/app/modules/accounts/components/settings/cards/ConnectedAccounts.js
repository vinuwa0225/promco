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
exports.ConnectedAccounts = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../../../../_metronic/helpers");
var SettingsModel_1 = require("../SettingsModel");
var ConnectedAccounts = function () {
    var _a = (0, react_1.useState)(SettingsModel_1.connectedAccounts), data = _a[0], setData = _a[1];
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
        react_1.default.createElement("div", { className: 'card-header border-0 cursor-pointer', role: 'button', "data-bs-toggle": 'collapse', "data-bs-target": '#kt_account_connected_accounts', "aria-expanded": 'true', "aria-controls": 'kt_account_connected_accounts' },
            react_1.default.createElement("div", { className: 'card-title m-0' },
                react_1.default.createElement("h3", { className: 'fw-bolder m-0' }, "Connected Accounts"))),
        react_1.default.createElement("div", { id: 'kt_account_connected_accounts', className: 'collapse show' },
            react_1.default.createElement("div", { className: 'card-body border-top p-9' },
                react_1.default.createElement("div", { className: 'notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/art/art006.svg', className: 'svg-icon-2tx svg-icon-primary me-4' }),
                    react_1.default.createElement("div", { className: 'd-flex flex-stack flex-grow-1' },
                        react_1.default.createElement("div", { className: 'fw-bold' },
                            react_1.default.createElement("div", { className: 'fs-6 text-gray-600' },
                                "Two-factor authentication adds an extra layer of security to your account. To log in, in you'll need to provide a 4 digit amazing code.",
                                react_1.default.createElement("a", { href: '#', className: 'fw-bolder' }, "Learn More"))))),
                react_1.default.createElement("div", { className: 'py-2' },
                    react_1.default.createElement("div", { className: 'd-flex flex-stack' },
                        react_1.default.createElement("div", { className: 'd-flex' },
                            react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/svg/brand-logos/google-icon.svg'), className: 'w-30px me-6', alt: '' }),
                            react_1.default.createElement("div", { className: 'd-flex flex-column' },
                                react_1.default.createElement("a", { href: '#', className: 'fs-5 text-dark text-hover-primary fw-bolder' }, "Google"),
                                react_1.default.createElement("div", { className: 'fs-6 fw-bold text-gray-400' }, "Plan properly your workflow"))),
                        react_1.default.createElement("div", { className: 'd-flex justify-content-end' },
                            react_1.default.createElement("div", { className: 'form-check form-check-solid form-switch' },
                                react_1.default.createElement("input", { className: 'form-check-input w-45px h-30px', type: 'checkbox', id: 'googleswitch', checked: data.google, onChange: function () {
                                        return updateData({
                                            google: !data.google,
                                        });
                                    } }),
                                react_1.default.createElement("label", { className: 'form-check-label', htmlFor: 'googleswitch' })))),
                    react_1.default.createElement("div", { className: 'separator separator-dashed my-5' }),
                    react_1.default.createElement("div", { className: 'd-flex flex-stack' },
                        react_1.default.createElement("div", { className: 'd-flex' },
                            react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/svg/brand-logos/github.svg'), className: 'w-30px me-6', alt: '' }),
                            react_1.default.createElement("div", { className: 'd-flex flex-column' },
                                react_1.default.createElement("a", { href: '#', className: 'fs-5 text-dark text-hover-primary fw-bolder' }, "Github"),
                                react_1.default.createElement("div", { className: 'fs-6 fw-bold text-gray-400' }, "Keep eye on on your Repositories"))),
                        react_1.default.createElement("div", { className: 'd-flex justify-content-end' },
                            react_1.default.createElement("div", { className: 'form-check form-check-solid form-switch' },
                                react_1.default.createElement("input", { className: 'form-check-input w-45px h-30px', type: 'checkbox', id: 'githubswitch', checked: data.github, onChange: function () {
                                        return updateData({
                                            github: !data.github,
                                        });
                                    } }),
                                react_1.default.createElement("label", { className: 'form-check-label', htmlFor: 'githubswitch' })))),
                    react_1.default.createElement("div", { className: 'separator separator-dashed my-5' }),
                    react_1.default.createElement("div", { className: 'd-flex flex-stack' },
                        react_1.default.createElement("div", { className: 'd-flex' },
                            react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/svg/brand-logos/slack-icon.svg'), className: 'w-30px me-6', alt: '' }),
                            react_1.default.createElement("div", { className: 'd-flex flex-column' },
                                react_1.default.createElement("a", { href: '#', className: 'fs-5 text-dark text-hover-primary fw-bolder' }, "Slack"),
                                react_1.default.createElement("div", { className: 'fs-6 fw-bold text-gray-400' }, "Integrate Projects Discussions"))),
                        react_1.default.createElement("div", { className: 'd-flex justify-content-end' },
                            react_1.default.createElement("div", { className: 'form-check form-check-solid form-switch' },
                                react_1.default.createElement("input", { className: 'form-check-input w-45px h-30px', type: 'checkbox', checked: data.stack, onChange: function () {
                                        return updateData({
                                            stack: !data.stack,
                                        });
                                    } }),
                                react_1.default.createElement("label", { className: 'form-check-label', htmlFor: 'slackswitch' })))))),
            react_1.default.createElement("div", { className: 'card-footer d-flex justify-content-end py-6 px-9' },
                react_1.default.createElement("button", { className: 'btn btn-white btn-active-light-primary me-2' }, "Discard"),
                react_1.default.createElement("button", { onClick: click, className: 'btn btn-primary' },
                    !loading && 'Save Changes',
                    loading && (react_1.default.createElement("span", { className: 'indicator-progress', style: { display: 'block' } },
                        "Please wait...",
                        ' ',
                        react_1.default.createElement("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' }))))))));
};
exports.ConnectedAccounts = ConnectedAccounts;
