"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KTSVG = void 0;
var react_1 = require("react");
var react_inlinesvg_1 = require("react-inlinesvg");
var AssetHelpers_1 = require("../AssetHelpers");
var KTSVG = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, path = _a.path, _c = _a.svgClassName, svgClassName = _c === void 0 ? 'mh-50px' : _c;
    return (react_1.default.createElement("span", { className: "svg-icon ".concat(className) },
        react_1.default.createElement(react_inlinesvg_1.default, { src: (0, AssetHelpers_1.toAbsoluteUrl)(path), className: svgClassName })));
};
exports.KTSVG = KTSVG;
