"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item2 = void 0;
var helpers_1 = require("../../../helpers");
var Item2 = function () {
    return (React.createElement("div", { className: 'timeline-item' },
        React.createElement("div", { className: 'timeline-line w-40px' }),
        React.createElement("div", { className: 'timeline-icon symbol symbol-circle symbol-40px' },
            React.createElement("div", { className: 'symbol-label bg-light' },
                React.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/communication/com009.svg', className: 'svg-icon-2 svg-icon-gray-500' }))),
        React.createElement("div", { className: 'timeline-content mb-10 mt-n2' },
            React.createElement("div", { className: 'overflow-auto pe-3' },
                React.createElement("div", { className: 'fs-5 fw-bold mb-2' }, "Invitation for crafting engaging designs that speak human workshop"),
                React.createElement("div", { className: 'd-flex align-items-center mt-1 fs-6' },
                    React.createElement("div", { className: 'text-muted me-2 fs-7' }, "Sent at 4:23 PM by"),
                    React.createElement("div", { className: 'symbol symbol-circle symbol-25px', "data-bs-toggle": 'tooltip', "data-bs-boundary": 'window', "data-bs-placement": 'top', title: 'Alan Nilson' },
                        React.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-2.jpg'), alt: 'img' })))))));
};
exports.Item2 = Item2;
