"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toolbar = void 0;
var react_1 = require("react");
var LayoutProvider_1 = require("../../core/LayoutProvider");
var Toolbar1_1 = require("./Toolbar1");
var Toolbar = function () {
    var config = (0, LayoutProvider_1.useLayout)().config;
    switch (config.toolbar.layout) {
        case 'toolbar1':
            return react_1.default.createElement(Toolbar1_1.Toolbar1, null);
        default:
            return react_1.default.createElement(Toolbar1_1.Toolbar1, null);
    }
};
exports.Toolbar = Toolbar;
