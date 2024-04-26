"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var core_1 = require("../../../_metronic/layout/core");
var BuilderPage_1 = require("./BuilderPage");
var BuilderPageWrapper = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.PageTitle, { breadcrumbs: [] }, "Layout Builder"),
        react_1.default.createElement(BuilderPage_1.BuilderPage, null)));
};
exports.default = BuilderPageWrapper;
