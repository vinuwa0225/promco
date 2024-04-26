"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("../../../_metronic/layout/core");
var Vertical_1 = require("./components/Vertical");
var Horizontal_1 = require("./components/Horizontal");
var wizardsBreadCrumbs = [
    {
        title: 'Wizards',
        path: '/crafted/pages/wizards/horizontal',
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
var WizardsPage = function () {
    return (react_1.default.createElement(react_router_dom_1.Switch, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/pages/wizards/horizontal' },
            react_1.default.createElement(core_1.PageTitle, { breadcrumbs: wizardsBreadCrumbs }, "Horizontal"),
            react_1.default.createElement(Horizontal_1.Horizontal, null)),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/pages/wizards/vertical' },
            react_1.default.createElement(core_1.PageTitle, { breadcrumbs: wizardsBreadCrumbs }, "Vertical"),
            react_1.default.createElement(Vertical_1.Vertical, null)),
        react_1.default.createElement(react_router_dom_1.Redirect, { from: '/crafted/pages/wizards', exact: true, to: '/crafted/pages/wizards/horizontal' }),
        react_1.default.createElement(react_router_dom_1.Redirect, { to: '/crafted/pages/wizards/horizontal' })));
};
exports.default = WizardsPage;
