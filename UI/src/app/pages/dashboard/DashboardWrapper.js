"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable jsx-a11y/anchor-is-valid */
var core_1 = require("../../../_metronic/layout/core");
var DataLayer_1 = require("../../../DataLayer");
function DashboardWrapper() {
    var _a = (0, DataLayer_1.useDataLayerValue)(), user = _a[0].user, dispatch = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(core_1.PageTitle, { breadcrumbs: [] }, "Dashboard"),
        React.createElement("div", { className: 'd-flex flex-wrap flex-stack mb-6' },
            React.createElement("h3", { className: 'fw-bolder my-2' },
                "Hello! ",
                user.firstName + ' ' + user.lastName,
                ", Welcome to the Training Attendance Tracking System"),
            React.createElement("div", { className: 'd-flex align-items-center my-2' },
                React.createElement("div", { className: 'w-100px me-5' })))));
}
exports.default = DashboardWrapper;
