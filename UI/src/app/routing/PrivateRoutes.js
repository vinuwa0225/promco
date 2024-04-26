"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateRoutes = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var partials_1 = require("../../_metronic/partials");
var DashboardWrapper_1 = require("../pages/dashboard/DashboardWrapper");
var allTraining_1 = require("../ui/training/allTraining");
var newTraining_1 = require("../ui/training/newTraining");
var allTraining_2 = require("../ui/sharedservice/allTraining");
var newTraining_2 = require("../ui/sharedservice/newTraining");
var settings_1 = require("../ui/admin/settings");
function PrivateRoutes() {
    var BuilderPageWrapper = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../pages/layout-builder/BuilderPageWrapper'); }); });
    var ProfilePage = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../modules/profile/ProfilePage'); }); });
    var WizardsPage = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../modules/wizards/WizardsPage'); }); });
    var AccountPage = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../modules/accounts/AccountPage'); }); });
    var WidgetsPage = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../modules/widgets/WidgetsPage'); }); });
    var ChatPage = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../modules/apps/chat/ChatPage'); }); });
    return (react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(partials_1.FallbackView, null) },
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/dashboard', component: DashboardWrapper_1.default }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/training/all', component: allTraining_1.default }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/training/new', component: newTraining_1.default }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/training/edit/:id', component: newTraining_1.default }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/shared-service/all', component: allTraining_2.default }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/shared-service/new', component: newTraining_2.default }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/shared-service/edit/:id', component: newTraining_2.default }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/admin/settings', component: settings_1.default }),
            react_1.default.createElement(react_router_dom_1.Redirect, { from: '/auth', to: '/dashboard' }),
            react_1.default.createElement(react_router_dom_1.Redirect, { exact: true, from: '/', to: '/dashboard' }),
            react_1.default.createElement(react_router_dom_1.Redirect, { to: 'error/404' }))));
}
exports.PrivateRoutes = PrivateRoutes;
