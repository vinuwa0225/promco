"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngageWidget5 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var EngageWidget5 = function (_a) {
    var className = _a.className, _b = _a.innerPadding, innerPadding = _b === void 0 ? '' : _b, children = _a.children;
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: "card-body pb-0 ".concat(innerPadding) },
            react_1.default.createElement("div", { className: 'd-flex flex-column h-100' },
                react_1.default.createElement("h3", { className: 'text-dark text-center fs-1 fw-bolder pt-15 lh-lg' },
                    "Kickstart",
                    react_1.default.createElement("br", null),
                    "Mobile Application"),
                children,
                react_1.default.createElement("div", { className: 'flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom h-200px', style: {
                        backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/illustrations/terms-2.png'), "')"),
                    } })))));
};
exports.EngageWidget5 = EngageWidget5;
