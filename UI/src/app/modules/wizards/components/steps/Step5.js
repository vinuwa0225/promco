"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step5 = void 0;
var react_1 = require("react");
var helpers_1 = require("../../../../../_metronic/helpers");
var react_router_dom_1 = require("react-router-dom");
var Step5 = function () {
    return (react_1.default.createElement("div", { className: 'w-100' },
        react_1.default.createElement("div", { className: 'pb-8 pb-lg-10' },
            react_1.default.createElement("h2", { className: 'fw-bolder text-dark' }, "Your Are Done!"),
            react_1.default.createElement("div", { className: 'text-gray-400 fw-bold fs-6' },
                "If you need more info, please",
                react_1.default.createElement(react_router_dom_1.Link, { to: '/auth/login', className: 'link-primary fw-bolder' },
                    ' ',
                    "Sign In"),
                ".")),
        react_1.default.createElement("div", { className: 'mb-0' },
            react_1.default.createElement("div", { className: 'fs-6 text-gray-600 mb-5' }, "Writing headlines for blog posts is as much an art as it is a science and probably warrants its own post, but for all advise is with what works for your great & amazing audience."),
            react_1.default.createElement("div", { className: 'notice d-flex bg-light-warning rounded border-warning border border-dashed p-6' },
                react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen044.svg', className: 'svg-icon-2tx svg-icon-warning me-4' }),
                react_1.default.createElement("div", { className: 'd-flex flex-stack flex-grow-1' },
                    react_1.default.createElement("div", { className: 'fw-bold' },
                        react_1.default.createElement("h4", { className: 'text-gray-800 fw-bolder' }, "We need your attention!"),
                        react_1.default.createElement("div", { className: 'fs-6 text-gray-600' },
                            "To start using great tools, please, please",
                            react_1.default.createElement("a", { href: '/dashboard', className: 'fw-bolder' },
                                ' ',
                                "Create Team Platform"))))))));
};
exports.Step5 = Step5;
