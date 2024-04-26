"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("../../../_metronic/layout/core");
var Charts_1 = require("./components/Charts");
var Feeds_1 = require("./components/Feeds");
var Lists_1 = require("./components/Lists");
var Tables_1 = require("./components/Tables");
var Mixed_1 = require("./components/Mixed");
var Statistics_1 = require("./components/Statistics");
var widgetsBreadCrumbs = [
    {
        title: 'Widgets',
        path: '/crafted/widgets/charts',
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
var WidgetsPage = function () {
    return (react_1.default.createElement(react_router_dom_1.Switch, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/widgets/charts' },
            react_1.default.createElement(core_1.PageTitle, { breadcrumbs: widgetsBreadCrumbs }, "Charts"),
            react_1.default.createElement(Charts_1.Charts, null)),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/widgets/feeds' },
            react_1.default.createElement(core_1.PageTitle, { breadcrumbs: widgetsBreadCrumbs }, "Feeds"),
            react_1.default.createElement(Feeds_1.Feeds, null)),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/widgets/lists' },
            react_1.default.createElement(core_1.PageTitle, { breadcrumbs: widgetsBreadCrumbs }, "Lists"),
            react_1.default.createElement(Lists_1.Lists, null)),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/widgets/mixed' },
            react_1.default.createElement(core_1.PageTitle, { breadcrumbs: widgetsBreadCrumbs }, "Mixed"),
            react_1.default.createElement(Mixed_1.Mixed, null)),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/widgets/tables' },
            react_1.default.createElement(core_1.PageTitle, { breadcrumbs: widgetsBreadCrumbs }, "Tables"),
            react_1.default.createElement(Tables_1.Tables, null)),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/crafted/widgets/statistics' },
            react_1.default.createElement(core_1.PageTitle, { breadcrumbs: widgetsBreadCrumbs }, "Statiscics"),
            react_1.default.createElement(Statistics_1.Statistics, null)),
        react_1.default.createElement(react_router_dom_1.Redirect, { from: '/crafted/widgets', exact: true, to: '/crafted/widgets/lists' }),
        react_1.default.createElement(react_router_dom_1.Redirect, { to: '/crafted/widgets/lists' })));
};
exports.default = WidgetsPage;
