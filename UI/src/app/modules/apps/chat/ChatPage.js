"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("../../../../_metronic/layout/core");
var Private_1 = require("./components/Private");
var Group_1 = require("./components/Group");
var Drawer_1 = require("./components/Drawer");
var chatBreadCrumbs = [
    {
        title: 'Chat',
        path: '/apps/chat/private-chat',
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
var ChatPage = function () {
    return (react_1.default.createElement(react_router_dom_1.Switch, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: '/apps/chat/private-chat' },
            react_1.default.createElement(core_1.PageTitle, { breadcrumbs: chatBreadCrumbs }, "Private chat"),
            react_1.default.createElement(Private_1.Private, null)),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/apps/chat/group-chat' },
            react_1.default.createElement(core_1.PageTitle, { breadcrumbs: chatBreadCrumbs }, "Group chat"),
            react_1.default.createElement(Group_1.Group, null)),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/apps/chat/drawer-chat' },
            react_1.default.createElement(core_1.PageTitle, { breadcrumbs: chatBreadCrumbs }, "Drawer chat"),
            react_1.default.createElement(Drawer_1.Drawer, null)),
        react_1.default.createElement(react_router_dom_1.Redirect, { from: '/apps/chat', exact: true, to: '/apps/chat/private-chat' }),
        react_1.default.createElement(react_router_dom_1.Redirect, { to: '/apps/chat/private-chat' })));
};
exports.default = ChatPage;
