"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngageWidget2 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var clsx_1 = require("clsx");
var react_1 = require("react");
var EngageWidget2 = function (_a) {
    var className = _a.className, _b = _a.imagePath, imagePath = _b === void 0 ? '' : _b, _c = _a.innerPadding, innerPadding = _c === void 0 ? '' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d;
    return (react_1.default.createElement("div", { className: "card overflow-hidden ".concat(className) },
        react_1.default.createElement("div", { className: "card-body p-0 d-flex card-rounded bg-light-".concat(color) },
            react_1.default.createElement("div", { className: 'py-18 px-12' },
                react_1.default.createElement("h3", { className: 'fs-2x' },
                    react_1.default.createElement("a", { href: '#', className: 'text-dark text-hover-primary fw-bolder' }, "Nike Sneakers")),
                react_1.default.createElement("div", { className: (0, clsx_1.default)('fs-3', "text-".concat(color)) }, "Get Amazing Nike Sneakers")),
            imagePath && (react_1.default.createElement("div", { className: 'd-none d-md-flex flex-row-fluid bgi-no-repeat bgi-position-y-center bgi-position-x-right bgi-size-cover', style: {
                    transform: 'translateX(10%) rotate(-26deg)',
                    backgroundImage: "url('".concat(imagePath, "')"),
                } })))));
};
exports.EngageWidget2 = EngageWidget2;
