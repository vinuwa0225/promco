"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsWidget6 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var StatisticsWidget6 = function (_a) {
    var className = _a.className, color = _a.color, title = _a.title, description = _a.description, progress = _a.progress;
    return (react_1.default.createElement("div", { className: "card bg-light-".concat(color, " ").concat(className) },
        react_1.default.createElement("div", { className: 'card-body my-3' },
            react_1.default.createElement("a", { href: '#', className: "card-title fw-bolder text-".concat(color, " fs-5 mb-3 d-block") }, description),
            react_1.default.createElement("div", { className: 'py-1' },
                react_1.default.createElement("span", { className: 'text-dark fs-1 fw-bolder me-2' }, progress),
                react_1.default.createElement("span", { className: 'fw-bold text-muted fs-7' }, title)),
            react_1.default.createElement("div", { className: "progress h-7px bg-".concat(color, " bg-opacity-50 mt-7") },
                react_1.default.createElement("div", { className: "progress-bar bg-".concat(color), role: 'progressbar', style: { width: progress } })))));
};
exports.StatisticsWidget6 = StatisticsWidget6;
