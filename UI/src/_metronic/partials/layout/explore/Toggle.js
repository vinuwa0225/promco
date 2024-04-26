"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = void 0;
var react_1 = require("react");
var Toggle = function () { return (react_1.default.createElement("button", { id: 'kt_explore_toggle', className: 'btn btn-sm btn-white btn-active-primary shadow-sm position-fixed px-5 fw-bolder zindex-2 top-50 mt-10 end-0 transform-90 fs-6 rounded-top-0', title: "Explore ".concat(process.env.REACT_APP_THEME_NAME), "data-bs-toggle": 'tooltip', "data-bs-placement": 'right', "data-bs-trigger": 'hover' },
    react_1.default.createElement("span", { id: 'kt_explore_toggle_label' }, "Explore"))); };
exports.Toggle = Toggle;
