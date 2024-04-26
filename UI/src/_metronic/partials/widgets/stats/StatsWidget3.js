"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsWidget3 = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var StatsWidget3 = function (_a) {
    var className = _a.className, _b = _a.innerPadding, innerPadding = _b === void 0 ? '' : _b;
    return (react_1.default.createElement("div", { className: "card bg-danger ".concat(className) },
        react_1.default.createElement("div", { className: "card-body ".concat(innerPadding) },
            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                react_1.default.createElement("div", { className: 'symbol symbol-50px me-5' },
                    react_1.default.createElement("span", { className: 'symbol-label bg-white bg-opacity-10' },
                        react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-2x svg-icon-white', path: '/media/icons/duotune/communication/com012.svg' }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("a", { href: '#', className: 'fs-4 text-white text-hover-primary fw-bolder' }, "Chat Application"),
                    react_1.default.createElement("div", { className: 'fs-7 text-white opacity-75 fw-bold mt-1' }, "HTML, Django"))),
            react_1.default.createElement("div", { className: 'fw-bolder text-white pt-7' },
                react_1.default.createElement("span", { className: 'd-block' }, "26 Authors"),
                react_1.default.createElement("span", { className: 'd-block pt-2' }, "140 Comments")),
            react_1.default.createElement("div", { className: 'progress h-6px mt-7 bg-white bg-opacity-10' },
                react_1.default.createElement("div", { className: 'progress-bar bg-white', role: 'progressbar', style: { width: '70%' }, "aria-valuenow": 50, "aria-valuemin": 0, "aria-valuemax": 100 })))));
};
exports.StatsWidget3 = StatsWidget3;
