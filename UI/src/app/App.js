"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var i18nProvider_1 = require("../_metronic/i18n/i18nProvider");
var core_1 = require("../_metronic/layout/core");
var AuthInit_1 = require("./modules/auth/redux/AuthInit");
var Routes_1 = require("./routing/Routes");
var App = function (_a) {
    var basename = _a.basename;
    return (react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(core_1.LayoutSplashScreen, null) },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, { basename: basename },
            react_1.default.createElement(i18nProvider_1.I18nProvider, null,
                react_1.default.createElement(core_1.LayoutProvider, null,
                    react_1.default.createElement(AuthInit_1.default, null,
                        react_1.default.createElement(Routes_1.Routes, null)))))));
};
exports.App = App;
