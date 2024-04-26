"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("../../../_metronic/layout/core");
var Overview_1 = require("./components/Overview");
var Settings_1 = require("./components/settings/Settings");
var AccountHeader_1 = require("./AccountHeader");
var accountBreadCrumbs = [
    {
        title: 'Account',
        path: '/crafted/account/overview',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
];
var AccountPage = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(AccountHeader_1.AccountHeader, null),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/account/overview' },
                react_1.default.createElement(core_1.PageTitle, { breadcrumbs: accountBreadCrumbs }, "Overview"),
                react_1.default.createElement(Overview_1.Overview, null)),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/account/settings' },
                react_1.default.createElement(core_1.PageTitle, { breadcrumbs: accountBreadCrumbs }, "Settings"),
                react_1.default.createElement(Settings_1.Settings, null)),
            react_1.default.createElement(react_router_dom_1.Redirect, { from: '/crafted/account', exact: true, to: '/crafted/account/overview' }),
            react_1.default.createElement(react_router_dom_1.Redirect, { to: '/crafted/account/overview' }))));
};
exports.default = AccountPage;
