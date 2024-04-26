"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card4 = void 0;
var helpers_1 = require("../../../helpers");
var Card4 = function (_a) {
    var icon = _a.icon, title = _a.title, description = _a.description;
    return (React.createElement("div", { className: 'card h-100' },
        React.createElement("div", { className: 'card-body d-flex justify-content-center text-center flex-column p-8' },
            React.createElement("a", { href: '#', className: 'text-gray-800 text-hover-primary d-flex flex-column' },
                React.createElement("div", { className: 'symbol symbol-75px mb-6' },
                    React.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)(icon), alt: '' })),
                React.createElement("div", { className: 'fs-5 fw-bolder mb-2' }, title)),
            React.createElement("div", { className: 'fs-7 fw-bold text-gray-400 mt-auto' }, description))));
};
exports.Card4 = Card4;
