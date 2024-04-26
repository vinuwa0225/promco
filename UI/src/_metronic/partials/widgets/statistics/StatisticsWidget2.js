"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsWidget2 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var StatisticsWidget2 = function (_a) {
    var className = _a.className, title = _a.title, description = _a.description, avatar = _a.avatar;
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: 'card-body d-flex align-items-center pt-3 pb-0' },
            react_1.default.createElement("div", { className: 'd-flex flex-column flex-grow-1 py-2 py-lg-13 me-2' },
                react_1.default.createElement("a", { href: '#', className: 'fw-bolder text-dark fs-4 mb-2 text-hover-primary' }, title),
                react_1.default.createElement("span", { className: 'fw-bold text-muted fs-5', dangerouslySetInnerHTML: { __html: description } })),
            react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)(avatar), alt: '', className: 'align-self-end h-100px' }))));
};
exports.StatisticsWidget2 = StatisticsWidget2;
