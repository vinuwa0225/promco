"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedWidget5 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var MixedWidget5 = function (_a) {
    var className = _a.className, time = _a.time, image = _a.image, title = _a.title, description = _a.description;
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: 'card-body d-flex flex-column pb-10 pb-lg-15' },
            react_1.default.createElement("div", { className: 'flex-grow-1' },
                react_1.default.createElement("div", { className: 'd-flex align-items-center pe-2 mb-5' },
                    react_1.default.createElement("span", { className: 'text-muted fw-bolder fs-5 flex-grow-1' }, time),
                    react_1.default.createElement("div", { className: 'symbol symbol-50px' },
                        react_1.default.createElement("span", { className: 'symbol-label bg-light' },
                            react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)(image), className: 'h-50 align-self-center', alt: '' })))),
                react_1.default.createElement("a", { href: '#', className: 'text-dark fw-bolder text-hover-primary fs-4' }, title),
                react_1.default.createElement("p", { className: 'py-3', dangerouslySetInnerHTML: { __html: description } })),
            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                react_1.default.createElement("a", { href: '#', className: 'symbol symbol-35px me-2', "data-bs-toggle": 'tooltip', title: 'Ana Stone' },
                    react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-1.jpg'), alt: '' })),
                react_1.default.createElement("a", { href: '#', className: 'symbol symbol-35px me-2', "data-bs-toggle": 'tooltip', title: 'Mark Larson' },
                    react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-4.jpg'), alt: '' })),
                react_1.default.createElement("a", { href: '#', className: 'symbol symbol-35px me-2', "data-bs-toggle": 'tooltip', title: 'Sam Harris' },
                    react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-8.jpg'), alt: '' }))))));
};
exports.MixedWidget5 = MixedWidget5;
