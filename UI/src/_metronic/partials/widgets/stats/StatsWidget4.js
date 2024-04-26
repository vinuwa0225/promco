"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsWidget4 = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var StatsWidget4 = function (_a) {
    var className = _a.className, _b = _a.innerPadding, innerPadding = _b === void 0 ? '' : _b;
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: "card-body ".concat(innerPadding) },
            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                react_1.default.createElement("div", { className: 'symbol symbol-50px me-5' },
                    react_1.default.createElement("span", { className: 'symbol-label bg-light-success' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/abstract/abs027.svg', className: 'svg-icon-2x svg-icon-success' }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("a", { href: '#', className: 'fs-4 text-gray-800 text-hover-primary fw-bolder' }, "Library Studio"),
                    react_1.default.createElement("div", { className: 'fs-7 text-muted fw-bold mt-1' }, "VueJS, Laravel"))),
            react_1.default.createElement("div", { className: 'fw-bolder text-muted pt-7' },
                react_1.default.createElement("span", { className: 'd-block' }, "26 Authors"),
                react_1.default.createElement("span", { className: 'd-block pt-2' }, "140 Comments")),
            react_1.default.createElement("div", { className: 'progress h-6px  bg-light-success mt-7' },
                react_1.default.createElement("div", { className: 'progress-bar bg-success', role: 'progressbar', style: { width: '80%' }, "aria-valuenow": 50, "aria-valuemin": 0, "aria-valuemax": 100 })))));
};
exports.StatsWidget4 = StatsWidget4;
