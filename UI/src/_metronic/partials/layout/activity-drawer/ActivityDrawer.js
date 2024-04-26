"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityDrawer = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var helpers_1 = require("../../../helpers");
var Item1_1 = require("../../content/activity/Item1");
var Item2_1 = require("../../content/activity/Item2");
var Item3_1 = require("../../content/activity/Item3");
var Item4_1 = require("../../content/activity/Item4");
var Item5_1 = require("../../content/activity/Item5");
var Item6_1 = require("../../content/activity/Item6");
var Item7_1 = require("../../content/activity/Item7");
var Item8_1 = require("../../content/activity/Item8");
var ActivityDrawer = function () { return (react_1.default.createElement("div", { id: 'kt_activities', className: 'bg-white', "data-kt-drawer": 'true', "data-kt-drawer-name": 'activities', "data-kt-drawer-activate": 'true', "data-kt-drawer-overlay": 'true', "data-kt-drawer-width": "{default:'300px', 'lg': '900px'}", "data-kt-drawer-direction": 'end', "data-kt-drawer-toggle": '#kt_activities_toggle', "data-kt-drawer-close": '#kt_activities_close' },
    react_1.default.createElement("div", { className: 'card shadow-none rounded-0' },
        react_1.default.createElement("div", { className: 'card-header', id: 'kt_activities_header' },
            react_1.default.createElement("h3", { className: 'card-title fw-bolder text-dark' }, "Activity Logs"),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("button", { type: 'button', className: 'btn btn-sm btn-icon btn-active-light-primary me-n5', id: 'kt_activities_close' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr061.svg', className: 'svg-icon-1' })))),
        react_1.default.createElement("div", { className: 'card-body position-relative', id: 'kt_activities_body' },
            react_1.default.createElement("div", { id: 'kt_activities_scroll', className: 'position-relative scroll-y me-n5 pe-5', "data-kt-scroll": 'true', "data-kt-scroll-height": 'auto', "data-kt-scroll-wrappers": '#kt_activities_body', "data-kt-scroll-dependencies": '#kt_activities_header, #kt_activities_footer', "data-kt-scroll-offset": '5px' },
                react_1.default.createElement("div", { className: 'timeline' },
                    react_1.default.createElement(Item1_1.Item1, null),
                    react_1.default.createElement(Item2_1.Item2, null),
                    react_1.default.createElement(Item3_1.Item3, null),
                    react_1.default.createElement(Item4_1.Item4, null),
                    react_1.default.createElement(Item5_1.Item5, null),
                    react_1.default.createElement(Item6_1.Item6, null),
                    react_1.default.createElement(Item7_1.Item7, null),
                    react_1.default.createElement(Item8_1.Item8, null)))),
        react_1.default.createElement("div", { className: 'card-footer py-5 text-center', id: 'kt_activities_footer' },
            react_1.default.createElement(react_router_dom_1.Link, { to: '/crafted/pages/profile', className: 'btn btn-bg-white text-primary' },
                "View All Activities",
                react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr064.svg', className: 'svg-icon-3 svg-icon-primary' })))))); };
exports.ActivityDrawer = ActivityDrawer;
