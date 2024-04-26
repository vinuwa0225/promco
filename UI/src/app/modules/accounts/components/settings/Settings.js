"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = void 0;
var react_1 = require("react");
var ProfileDetails_1 = require("./cards/ProfileDetails");
var SignInMethod_1 = require("./cards/SignInMethod");
var ConnectedAccounts_1 = require("./cards/ConnectedAccounts");
var EmailPreferences_1 = require("./cards/EmailPreferences");
var Notifications_1 = require("./cards/Notifications");
var DeactivateAccount_1 = require("./cards/DeactivateAccount");
function Settings() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ProfileDetails_1.ProfileDetails, null),
        react_1.default.createElement(SignInMethod_1.SignInMethod, null),
        react_1.default.createElement(ConnectedAccounts_1.ConnectedAccounts, null),
        react_1.default.createElement(EmailPreferences_1.EmailPreferences, null),
        react_1.default.createElement(Notifications_1.Notifications, null),
        react_1.default.createElement(DeactivateAccount_1.DeactivateAccount, null)));
}
exports.Settings = Settings;
