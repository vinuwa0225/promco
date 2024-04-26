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
exports.Notifications = void 0;
var react_1 = require("react");
var SettingsModel_1 = require("../SettingsModel");
var Notifications = function () {
    var _a = (0, react_1.useState)(SettingsModel_1.notifications), data = _a[0], setData = _a[1];
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
        react_1.default.createElement("div", { className: 'card-header border-0 cursor-pointer', role: 'button', "data-bs-toggle": 'collapse', "data-bs-target": '#kt_account_notifications', "aria-expanded": 'true', "aria-controls": 'kt_account_notifications' },
            react_1.default.createElement("div", { className: 'card-title m-0' },
                react_1.default.createElement("h3", { className: 'fw-bolder m-0' }, "Notifications"))),
        react_1.default.createElement("div", { id: 'kt_account_notifications', className: 'collapse show' },
            react_1.default.createElement("form", { className: 'form' },
                react_1.default.createElement("div", { className: 'card-body border-top px-9 pt-3 pb-4' },
                    react_1.default.createElement("div", { className: 'table-responsive' },
                        react_1.default.createElement("table", { className: 'table table-row-dashed border-gray-300 align-middle gy-6' },
                            react_1.default.createElement("tbody", { className: 'fs-6 fw-bold' },
                                react_1.default.createElement("tr", null,
                                    react_1.default.createElement("td", { className: 'min-w-250px fs-4 fw-bolder' }, "Notifications"),
                                    react_1.default.createElement("td", { className: 'w-125px' },
                                        react_1.default.createElement("div", { className: 'form-check form-check-solid' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '', id: 'kt_settings_notification_email', defaultChecked: data.notifications.email, onChange: function () {
                                                    return updateData({
                                                        notifications: {
                                                            phone: data.notifications.phone,
                                                            email: !data.notifications.email,
                                                        },
                                                    });
                                                } }),
                                            react_1.default.createElement("label", { className: 'form-check-label ps-2', htmlFor: 'kt_settings_notification_email' }, "Email"))),
                                    react_1.default.createElement("td", { className: 'w-125px' },
                                        react_1.default.createElement("div", { className: 'form-check form-check-solid' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '', id: 'kt_settings_notification_phone', defaultChecked: data.notifications.phone, onChange: function () {
                                                    return updateData({
                                                        notifications: {
                                                            phone: !data.notifications.phone,
                                                            email: data.notifications.email,
                                                        },
                                                    });
                                                } }),
                                            react_1.default.createElement("label", { className: 'form-check-label ps-2', htmlFor: 'kt_settings_notification_phone' }, "Phone")))),
                                react_1.default.createElement("tr", null,
                                    react_1.default.createElement("td", null, "Billing Updates"),
                                    react_1.default.createElement("td", null,
                                        react_1.default.createElement("div", { className: 'form-check form-check-solid' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '1', id: 'billing1', defaultChecked: data.billingUpdates.email, onChange: function () {
                                                    return updateData({
                                                        billingUpdates: {
                                                            phone: data.billingUpdates.phone,
                                                            email: !data.billingUpdates.email,
                                                        },
                                                    });
                                                } }),
                                            react_1.default.createElement("label", { className: 'form-check-label ps-2', htmlFor: 'billing1' }))),
                                    react_1.default.createElement("td", null,
                                        react_1.default.createElement("div", { className: 'form-check form-check-solid' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '', id: 'billing2', defaultChecked: data.billingUpdates.phone, onChange: function () {
                                                    return updateData({
                                                        billingUpdates: {
                                                            phone: !data.billingUpdates.phone,
                                                            email: data.billingUpdates.email,
                                                        },
                                                    });
                                                } }),
                                            react_1.default.createElement("label", { className: 'form-check-label ps-2', htmlFor: 'billing2' })))),
                                react_1.default.createElement("tr", null,
                                    react_1.default.createElement("td", null, "New Team Members"),
                                    react_1.default.createElement("td", null,
                                        react_1.default.createElement("div", { className: 'form-check form-check-solid' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '', id: 'team1', defaultChecked: data.newTeamMembers.email, onChange: function () {
                                                    return updateData({
                                                        newTeamMembers: {
                                                            phone: data.newTeamMembers.phone,
                                                            email: !data.newTeamMembers.email,
                                                        },
                                                    });
                                                } }),
                                            react_1.default.createElement("label", { className: 'form-check-label ps-2', htmlFor: 'team1' }))),
                                    react_1.default.createElement("td", null,
                                        react_1.default.createElement("div", { className: 'form-check form-check-solid' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '', id: 'team2', defaultChecked: data.newTeamMembers.phone, onChange: function () {
                                                    return updateData({
                                                        newTeamMembers: {
                                                            phone: !data.newTeamMembers.phone,
                                                            email: data.newTeamMembers.email,
                                                        },
                                                    });
                                                } }),
                                            react_1.default.createElement("label", { className: 'form-check-label ps-2', htmlFor: 'team2' })))),
                                react_1.default.createElement("tr", null,
                                    react_1.default.createElement("td", null, "Completed Projects"),
                                    react_1.default.createElement("td", null,
                                        react_1.default.createElement("div", { className: 'form-check form-check-solid' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '', id: 'project1', defaultChecked: data.completeProjects.email, onChange: function () {
                                                    return updateData({
                                                        completeProjects: {
                                                            phone: data.completeProjects.phone,
                                                            email: !data.completeProjects.email,
                                                        },
                                                    });
                                                } }),
                                            react_1.default.createElement("label", { className: 'form-check-label ps-2', htmlFor: 'project1' }))),
                                    react_1.default.createElement("td", null,
                                        react_1.default.createElement("div", { className: 'form-check form-check-solid' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '', id: 'project2', defaultChecked: data.completeProjects.phone, onChange: function () {
                                                    return updateData({
                                                        completeProjects: {
                                                            phone: !data.completeProjects.phone,
                                                            email: data.completeProjects.email,
                                                        },
                                                    });
                                                } }),
                                            react_1.default.createElement("label", { className: 'form-check-label ps-2', htmlFor: 'project2' })))),
                                react_1.default.createElement("tr", null,
                                    react_1.default.createElement("td", { className: 'border-bottom-0' }, "Newsletters"),
                                    react_1.default.createElement("td", { className: 'border-bottom-0' },
                                        react_1.default.createElement("div", { className: 'form-check form-check-solid' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '', id: 'newsletter1', defaultChecked: data.newsletters.email, onChange: function () {
                                                    return updateData({
                                                        newsletters: {
                                                            phone: data.newsletters.phone,
                                                            email: !data.newsletters.email,
                                                        },
                                                    });
                                                } }),
                                            react_1.default.createElement("label", { className: 'form-check-label ps-2', htmlFor: 'newsletter1' }))),
                                    react_1.default.createElement("td", { className: 'border-bottom-0' },
                                        react_1.default.createElement("div", { className: 'form-check form-check-solid' },
                                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '', id: 'newsletter2', defaultChecked: data.newsletters.phone, onChange: function () {
                                                    return updateData({
                                                        newsletters: {
                                                            phone: !data.newsletters.phone,
                                                            email: data.newsletters.email,
                                                        },
                                                    });
                                                } }),
                                            react_1.default.createElement("label", { className: 'form-check-label ps-2', htmlFor: 'newsletter2' })))))))),
                react_1.default.createElement("div", { className: 'card-footer d-flex justify-content-end py-6 px-9' },
                    react_1.default.createElement("button", { className: 'btn btn-white btn-active-light-primary me-2' }, "Discard"),
                    react_1.default.createElement("button", { type: 'button', onClick: click, className: 'btn btn-primary' },
                        !loading && 'Save Changes',
                        loading && (react_1.default.createElement("span", { className: 'indicator-progress', style: { display: 'block' } },
                            "Please wait...",
                            ' ',
                            react_1.default.createElement("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' })))))))));
};
exports.Notifications = Notifications;
