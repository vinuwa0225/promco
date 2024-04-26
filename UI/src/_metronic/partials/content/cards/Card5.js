"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card5 = void 0;
var helpers_1 = require("../../../helpers");
var Dropdown1_1 = require("../dropdown/Dropdown1");
var Card5 = function (_a) {
    var image = _a.image, title = _a.title, description = _a.description, status = _a.status, statusValue = _a.statusValue, statusDesc = _a.statusDesc, progress = _a.progress, progressType = _a.progressType;
    return (React.createElement("div", { className: 'card h-100' },
        React.createElement("div", { className: 'card-header flex-nowrap border-0 pt-9' },
            React.createElement("div", { className: 'card-title m-0' },
                React.createElement("div", { className: 'symbol symbol-45px w-45px bg-light me-5' },
                    React.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)(image), alt: 'Metronic', className: 'p-3' })),
                React.createElement("a", { href: '#', className: 'fs-4 fw-bold text-hover-primary text-gray-600 m-0' }, title)),
            React.createElement("div", { className: 'card-toolbar m-0' },
                React.createElement("button", { type: 'button', className: 'btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                    React.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen024.svg', className: 'svg-icon-3 svg-icon-primary' })),
                React.createElement(Dropdown1_1.Dropdown1, null))),
        React.createElement("div", { className: 'card-body d-flex flex-column px-9 pt-6 pb-8' },
            React.createElement("div", { className: 'fs-2tx fw-bolder mb-3' }, description),
            React.createElement("div", { className: 'd-flex align-items-center flex-wrap mb-5 mt-auto fs-6' },
                status === 'up' && (React.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr007.svg', className: 'svg-icon-3 me-1 svg-icon-success' })),
                status === 'down' && (React.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr006.svg', className: 'svg-icon-3 me-1 svg-icon-danger' })),
                React.createElement("div", { className: "fw-bolder me-2 " + (status === 'up' ? 'text-success' : 'text-danger') },
                    status === 'up' ? '+' : '-',
                    statusValue,
                    "%"),
                React.createElement("div", { className: 'fw-bold text-gray-400' }, statusDesc)),
            React.createElement("div", { className: 'd-flex align-items-center fw-bold' },
                React.createElement("span", { className: 'badge bg-light text-gray-700 px-3 py-2 me-2' },
                    progress,
                    "%"),
                React.createElement("span", { className: 'text-gray-400 fs-7' }, progressType)))));
};
exports.Card5 = Card5;
