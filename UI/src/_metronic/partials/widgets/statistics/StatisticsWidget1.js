"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsWidget1 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var StatisticsWidget1 = function (_a) {
    var className = _a.className, image = _a.image, title = _a.title, time = _a.time, description = _a.description;
    return (react_1.default.createElement("div", { className: "card bgi-no-repeat ".concat(className), style: {
            backgroundPosition: 'right top',
            backgroundSize: '30% auto',
            backgroundImage: "url(".concat((0, helpers_1.toAbsoluteUrl)('/media/svg/shapes/' + image), ")"),
        } },
        react_1.default.createElement("div", { className: 'card-body' },
            react_1.default.createElement("a", { href: '#', className: 'card-title fw-bolder text-muted text-hover-primary fs-4' }, title),
            react_1.default.createElement("div", { className: 'fw-bolder text-primary my-6' }, time),
            react_1.default.createElement("p", { className: 'text-dark-75 fw-bold fs-5 m-0', dangerouslySetInnerHTML: { __html: description } }))));
};
exports.StatisticsWidget1 = StatisticsWidget1;
