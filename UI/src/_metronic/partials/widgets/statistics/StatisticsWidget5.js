"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsWidget5 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var StatisticsWidget5 = function (_a) {
    var className = _a.className, color = _a.color, svgIcon = _a.svgIcon, iconColor = _a.iconColor, title = _a.title, description = _a.description;
    return (react_1.default.createElement("a", { href: '#', className: "card bg-".concat(color, " hoverable ").concat(className) },
        react_1.default.createElement("div", { className: 'card-body' },
            react_1.default.createElement(helpers_1.KTSVG, { path: svgIcon, className: "svg-icon-".concat(iconColor, " svg-icon-3x ms-n1") }),
            react_1.default.createElement("div", { className: "text-inverse-".concat(color, " fw-bolder fs-2 mb-2 mt-5") }, title),
            react_1.default.createElement("div", { className: "fw-bold text-inverse-".concat(color, " fs-7") }, description))));
};
exports.StatisticsWidget5 = StatisticsWidget5;
