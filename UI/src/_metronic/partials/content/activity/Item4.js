"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item4 = void 0;
var helpers_1 = require("../../../helpers");
var Item4 = function () {
    return (React.createElement("div", { className: 'timeline-item' },
        React.createElement("div", { className: 'timeline-line w-40px' }),
        React.createElement("div", { className: 'timeline-icon symbol symbol-circle symbol-40px' },
            React.createElement("div", { className: 'symbol-label bg-light' },
                React.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/abstract/abs027.svg', className: 'svg-icon-2 svg-icon-gray-500' }))),
        React.createElement("div", { className: 'timeline-content mb-10 mt-n1' },
            React.createElement("div", { className: 'pe-3 mb-5' },
                React.createElement("div", { className: 'fs-5 fw-bold mb-2' },
                    "Task",
                    ' ',
                    React.createElement("a", { href: '#', className: 'text-primary fw-bolder me-1' }, "#45890"),
                    "merged with",
                    ' ',
                    React.createElement("a", { href: '#', className: 'text-primary fw-bolder me-1' }, "#45890"),
                    ' ',
                    "in \u201CAds Pro Admin Dashboard project:"),
                React.createElement("div", { className: 'd-flex align-items-center mt-1 fs-6' },
                    React.createElement("div", { className: 'text-muted me-2 fs-7' }, "Initiated at 4:23 PM by"),
                    React.createElement("div", { className: 'symbol symbol-circle symbol-25px', "data-bs-toggle": 'tooltip', "data-bs-boundary": 'window', "data-bs-placement": 'top', title: 'Nina Nilson' },
                        React.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-11.jpg'), alt: 'img' })))))));
};
exports.Item4 = Item4;
