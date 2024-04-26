"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item3 = void 0;
var helpers_1 = require("../../../helpers");
var Item3 = function () {
    return (React.createElement("div", { className: 'timeline-item' },
        React.createElement("div", { className: 'timeline-line w-40px' }),
        React.createElement("div", { className: 'timeline-icon symbol symbol-circle symbol-40px' },
            React.createElement("div", { className: 'symbol-label bg-light' },
                React.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/coding/cod008.svg', className: 'svg-icon-2 svg-icon-gray-500' }))),
        React.createElement("div", { className: 'timeline-content mb-10 mt-n1' },
            React.createElement("div", { className: 'mb-5 pe-3' },
                React.createElement("a", { href: '#', className: 'fs-5 fw-bold text-gray-800 text-hover-primary mb-2' }, "3 New Incoming Project Files:"),
                React.createElement("div", { className: 'd-flex align-items-center mt-1 fs-6' },
                    React.createElement("div", { className: 'text-muted me-2 fs-7' }, "Sent at 10:30 PM by"),
                    React.createElement("div", { className: 'symbol symbol-circle symbol-25px', "data-bs-toggle": 'tooltip', "data-bs-boundary": 'window', "data-bs-placement": 'top', title: 'Jan Hummer' },
                        React.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-6.jpg'), alt: 'img' })))),
            React.createElement("div", { className: 'overflow-auto pb-5' },
                React.createElement("div", { className: 'd-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5' },
                    React.createElement("div", { className: 'd-flex flex-aligns-center pe-10 pe-lg-20' },
                        React.createElement("img", { alt: '', className: 'w-30px me-3', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/files/pdf.svg') }),
                        React.createElement("div", { className: 'ms-1 fw-bold' },
                            React.createElement("a", { href: '#', className: 'fs-6 text-hover-primary fw-bolder' }, "Finance KPI App Guidelines"),
                            React.createElement("div", { className: 'text-gray-400' }, "1.9mb"))),
                    React.createElement("div", { className: 'd-flex flex-aligns-center pe-10 pe-lg-20' },
                        React.createElement("img", { alt: '', className: 'w-30px me-3', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/files/doc.svg') }),
                        React.createElement("div", { className: 'ms-1 fw-bold' },
                            React.createElement("a", { href: '#', className: 'fs-6 text-hover-primary fw-bolder' }, "Client UAT Testing Results"),
                            React.createElement("div", { className: 'text-gray-400' }, "18kb"))),
                    React.createElement("div", { className: 'd-flex flex-aligns-center' },
                        React.createElement("img", { alt: '', className: 'w-30px me-3', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/files/css.svg') }),
                        React.createElement("div", { className: 'ms-1 fw-bold' },
                            React.createElement("a", { href: '#', className: 'fs-6 text-hover-primary fw-bolder' }, "Finance Reports"),
                            React.createElement("div", { className: 'text-gray-400' }, "20mb"))))))));
};
exports.Item3 = Item3;
