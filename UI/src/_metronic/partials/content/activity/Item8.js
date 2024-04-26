"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item8 = void 0;
var helpers_1 = require("../../../helpers");
var Item8 = function () {
    return (React.createElement("div", { className: 'timeline-item' },
        React.createElement("div", { className: 'timeline-line w-40px' }),
        React.createElement("div", { className: 'timeline-icon symbol symbol-circle symbol-40px' },
            React.createElement("div", { className: 'symbol-label bg-light' },
                React.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/ecommerce/ecm002.svg', className: 'svg-icon-2 svg-icon-gray-500' }))),
        React.createElement("div", { className: 'timeline-content mt-n1' },
            React.createElement("div", { className: 'pe-3 mb-5' },
                React.createElement("div", { className: 'fs-5 fw-bold mb-2' },
                    "New order",
                    ' ',
                    React.createElement("a", { href: '#', className: 'text-primary fw-bolder me-1' }, "#67890"),
                    "is placed for Workshow Planning & Budget Estimation"),
                React.createElement("div", { className: 'd-flex align-items-center mt-1 fs-6' },
                    React.createElement("div", { className: 'text-muted me-2 fs-7' }, "Placed at 4:23 PM by"),
                    React.createElement("a", { href: '#', className: 'text-primary fw-bolder me-1' }, "Jimmy Bold"))))));
};
exports.Item8 = Item8;
