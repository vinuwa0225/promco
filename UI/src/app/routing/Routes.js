"use strict";
/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var MasterLayout_1 = require("../../_metronic/layout/MasterLayout");
var PrivateRoutes_1 = require("./PrivateRoutes");
var auth_1 = require("../modules/auth");
var ErrorsPage_1 = require("../modules/errors/ErrorsPage");
var MasterInit_1 = require("../../_metronic/layout/MasterInit");
var DataLayer_1 = require("../../DataLayer");
var Routes = function () {
    var isAuthorized = (0, react_redux_1.useSelector)(function (_a) {
        var auth = _a.auth;
        return auth.user;
    }, react_redux_1.shallowEqual);
    var _a = (0, DataLayer_1.useDataLayerValue)(), token = _a[0].token, dispatch = _a[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.Switch, null,
            !token ? (
            /*Render auth page when user at `/auth` and not authorized.*/
            react_1.default.createElement(react_router_dom_1.Route, null,
                react_1.default.createElement(auth_1.AuthPage, null))) : (
            /*Otherwise redirect to root page (`/`)*/
            react_1.default.createElement(react_router_dom_1.Redirect, { from: '/auth', to: '/' })),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/error', component: ErrorsPage_1.ErrorsPage }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/logout', component: auth_1.Logout }),
            !token ? (
            /*Redirect to `/auth` when user is not authorized*/
            react_1.default.createElement(react_router_dom_1.Redirect, { to: '/auth/login' })) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(MasterLayout_1.MasterLayout, null,
                    react_1.default.createElement(PrivateRoutes_1.PrivateRoutes, null))))),
        react_1.default.createElement(MasterInit_1.MasterInit, null)));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.Switch, null,
            !isAuthorized ? (
            /*Render auth page when user at `/auth` and not authorized.*/
            react_1.default.createElement(react_router_dom_1.Route, null,
                react_1.default.createElement(auth_1.AuthPage, null))) : (
            /*Otherwise redirect to root page (`/`)*/
            react_1.default.createElement(react_router_dom_1.Redirect, { from: '/auth', to: '/' })),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/error', component: ErrorsPage_1.ErrorsPage }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/logout', component: auth_1.Logout }),
            !isAuthorized ? (
            /*Redirect to `/auth` when user is not authorized*/
            react_1.default.createElement(react_router_dom_1.Redirect, { to: '/auth/login' })) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(MasterLayout_1.MasterLayout, null,
                    react_1.default.createElement(PrivateRoutes_1.PrivateRoutes, null))))),
        react_1.default.createElement(MasterInit_1.MasterInit, null)));
};
exports.Routes = Routes;
