"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("../../../_metronic/layout/core");
var Overview_1 = require("./components/Overview");
var Projects_1 = require("./components/Projects");
var Campaigns_1 = require("./components/Campaigns");
var Documents_1 = require("./components/Documents");
var Connections_1 = require("./components/Connections");
var ProfileHeader_1 = require("./ProfileHeader");
var profileBreadCrumbs = [
    {
        title: 'Profile',
        path: '/crafted/pages/profile/overview',
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
var ProfilePage = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ProfileHeader_1.ProfileHeader, null),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/pages/profile/overview' },
                react_1.default.createElement(core_1.PageTitle, { breadcrumbs: profileBreadCrumbs }, "Overview"),
                react_1.default.createElement(Overview_1.Overview, null)),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/pages/profile/projects' },
                react_1.default.createElement(core_1.PageTitle, { breadcrumbs: profileBreadCrumbs }, "Projects"),
                react_1.default.createElement(Projects_1.Projects, null)),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/pages/profile/campaigns' },
                react_1.default.createElement(core_1.PageTitle, { breadcrumbs: profileBreadCrumbs }, "Campaigns"),
                react_1.default.createElement(Campaigns_1.Campaigns, null)),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/pages/profile/documents' },
                react_1.default.createElement(core_1.PageTitle, { breadcrumbs: profileBreadCrumbs }, "Documents"),
                react_1.default.createElement(Documents_1.Documents, null)),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/pages/profile/connections' },
                react_1.default.createElement(core_1.PageTitle, { breadcrumbs: profileBreadCrumbs }, "Connections"),
                react_1.default.createElement(Connections_1.Connections, null)),
            react_1.default.createElement(react_router_dom_1.Redirect, { from: '/crafted/pages/profile', exact: true, to: '/crafted/pages/profile/overview' }),
            react_1.default.createElement(react_router_dom_1.Redirect, { to: '/crafted/pages/profile/overview' }))));
};
exports.default = ProfilePage;
