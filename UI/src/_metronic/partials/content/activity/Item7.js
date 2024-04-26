"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item7 = void 0;
var helpers_1 = require("../../../helpers");
var Item7 = function () {
    return (React.createElement("div", { className: 'timeline-item' },
        React.createElement("div", { className: 'timeline-line w-40px' }),
        React.createElement("div", { className: 'timeline-icon symbol symbol-circle symbol-40px' },
            React.createElement("div", { className: 'symbol-label bg-light' },
                React.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/art/art005.svg', className: 'svg-icon-2 svg-icon-gray-500' }))),
        React.createElement("div", { className: 'timeline-content mb-10 mt-n1' },
            React.createElement("div", { className: 'pe-3 mb-5' },
                React.createElement("div", { className: 'fs-5 fw-bold mb-2' }, "You have received a new order:"),
                React.createElement("div", { className: 'd-flex align-items-center mt-1 fs-6' },
                    React.createElement("div", { className: 'text-muted me-2 fs-7' }, "Placed at 5:05 AM by"),
                    React.createElement("div", { className: 'symbol symbol-circle symbol-25px', "data-bs-toggle": 'tooltip', "data-bs-boundary": 'window', "data-bs-placement": 'top', title: 'Robert Rich' },
                        React.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-14.jpg'), alt: 'img' })))),
            React.createElement("div", { className: 'overflow-auto pb-5' },
                React.createElement("div", { className: 'notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6' },
                    React.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/coding/cod004.svg', className: 'svg-icon-2tx svg-icon-primary me-4' }),
                    React.createElement("div", { className: 'd-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap' },
                        React.createElement("div", { className: 'mb-3 mb-md-0 fw-bold' },
                            React.createElement("h4", { className: 'text-gray-800 fw-bolder' }, "Database Backup Process Completed!"),
                            React.createElement("div", { className: 'fs-6 text-gray-600 pe-7' }, "Login into Metronic Admin Dashboard to make sure the data integrity is OK")),
                        React.createElement("a", { href: '#', className: 'btn btn-primary px-6 align-self-center text-nowrap' }, "Proceed")))))));
};
exports.Item7 = Item7;
