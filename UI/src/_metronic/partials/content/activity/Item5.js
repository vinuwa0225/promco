"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item5 = void 0;
var helpers_1 = require("../../../helpers");
var Item5 = function () {
    return (React.createElement("div", { className: 'timeline-item' },
        React.createElement("div", { className: 'timeline-line w-40px' }),
        React.createElement("div", { className: 'timeline-icon symbol symbol-circle symbol-40px' },
            React.createElement("div", { className: 'symbol-label bg-light' },
                React.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/art/art005.svg', className: 'svg-icon-2 svg-icon-gray-500' }))),
        React.createElement("div", { className: 'timeline-content mb-10 mt-n1' },
            React.createElement("div", { className: 'pe-3 mb-5' },
                React.createElement("div", { className: 'fs-5 fw-bold mb-2' }, "3 new application design concepts added:"),
                React.createElement("div", { className: 'd-flex align-items-center mt-1 fs-6' },
                    React.createElement("div", { className: 'text-muted me-2 fs-7' }, "Created at 4:23 PM by"),
                    React.createElement("div", { className: 'symbol symbol-circle symbol-25px', "data-bs-toggle": 'tooltip', "data-bs-boundary": 'window', "data-bs-placement": 'top', title: 'Marcus Dotson' },
                        React.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-3.jpg'), alt: 'img' })))),
            React.createElement("div", { className: 'overflow-auto pb-5' },
                React.createElement("div", { className: 'd-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7' },
                    React.createElement("div", { className: 'overlay me-10' },
                        React.createElement("div", { className: 'overlay-wrapper' },
                            React.createElement("img", { alt: 'img', className: 'rounded w-200px', src: (0, helpers_1.toAbsoluteUrl)('/media/demos/demo1.png') })),
                        React.createElement("div", { className: 'overlay-layer bg-dark bg-opacity-10 rounded' },
                            React.createElement("a", { href: '#', className: 'btn btn-sm btn-primary btn-shadow' }, "Explore"))),
                    React.createElement("div", { className: 'overlay me-10' },
                        React.createElement("div", { className: 'overlay-wrapper' },
                            React.createElement("img", { alt: 'img', className: 'rounded w-200px', src: (0, helpers_1.toAbsoluteUrl)('/media/demos/demo2.png') })),
                        React.createElement("div", { className: 'overlay-layer bg-dark bg-opacity-10 rounded' },
                            React.createElement("a", { href: '#', className: 'btn btn-sm btn-primary btn-shadow' }, "Explore"))),
                    React.createElement("div", { className: 'overlay' },
                        React.createElement("div", { className: 'overlay-wrapper' },
                            React.createElement("img", { alt: 'img', className: 'rounded w-200px', src: (0, helpers_1.toAbsoluteUrl)('/media/demos/demo3.png') })),
                        React.createElement("div", { className: 'overlay-layer bg-dark bg-opacity-10 rounded' },
                            React.createElement("a", { href: '#', className: 'btn btn-sm btn-primary btn-shadow' }, "Explore"))))))));
};
exports.Item5 = Item5;
