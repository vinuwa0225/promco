"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngageWidget1 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var EngageWidget1 = function (_a) {
    var className = _a.className, _b = _a.innerPadding, innerPadding = _b === void 0 ? '' : _b, _c = _a.bgHex, bgHex = _c === void 0 ? '' : _c, _d = _a.bgColor, bgColor = _d === void 0 ? '' : _d, _e = _a.lg, lg = _e === void 0 ? '' : _e, _f = _a.bgImage, bgImage = _f === void 0 ? '' : _f;
    var bgImagePath = bgImage ? (0, helpers_1.toAbsoluteUrl)("/media/".concat(bgImage)) : '';
    if (bgImagePath) {
        bgImagePath = "url(\"".concat(bgImagePath, "\")");
    }
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: "card-body card-rounded p-0 d-flex bg-".concat(bgColor), style: { backgroundColor: bgHex } },
            react_1.default.createElement("div", { className: "d-flex flex-column flex-lg-row-auto ".concat(lg ? 'py-10 py-md-14 px-10 px-md-20 pe-lg-0' : 'p-10 p-md-20') },
                react_1.default.createElement("h1", { className: "fw-bolder text-dark ".concat(lg ? 'mb-0' : '') }, "Search Goods"),
                react_1.default.createElement("div", { className: 'fs-3 mb-8' }, "Get Amazing Gadgets"),
                react_1.default.createElement("form", { className: 'd-flex flex-center py-2 px-6 bg-white rounded' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen021.svg', className: 'svg-icon-1 svg-icon-primary' }),
                    react_1.default.createElement("input", { type: 'text', className: "form-control border-0 fw-bold ps-2 ".concat(lg ? 'w-xxl-600px' : 'w-xxl-350px'), placeholder: 'Search Goods' }))),
            react_1.default.createElement("div", { className: "d-none d-md-flex flex-row-fluid mw-400px ml-auto ".concat(bgImage ? 'bgi-no-repeat bgi-position-y-center bgi-position-x-left bgi-size-cover' : ''), style: { backgroundImage: bgImagePath } }))));
};
exports.EngageWidget1 = EngageWidget1;
