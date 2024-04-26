"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toolbar1 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var clsx_1 = require("clsx");
var react_1 = require("react");
var core_1 = require("../../core");
var DefaultTitle_1 = require("../header/page-title/DefaultTitle");
var Toolbar1 = function () {
    var classes = (0, core_1.useLayout)().classes;
    return (react_1.default.createElement("div", { className: 'toolbar', id: 'kt_toolbar' },
        react_1.default.createElement("div", { id: 'kt_toolbar_container', className: (0, clsx_1.default)(classes.toolbarContainer.join(' '), 'd-flex flex-stack') },
            react_1.default.createElement(DefaultTitle_1.DefaultTitle, null),
            react_1.default.createElement("div", { className: 'd-flex align-items-center py-1' }))));
};
exports.Toolbar1 = Toolbar1;
