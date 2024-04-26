"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsWidget6 = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var StatsWidget6 = function (_a) {
    var className = _a.className, _b = _a.innerPadding, innerPadding = _b === void 0 ? '' : _b, children = _a.children;
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: "card-body ".concat(innerPadding) },
            react_1.default.createElement("div", { className: 'd-flex bg-light-primary card-rounded flex-grow-1' },
                react_1.default.createElement("div", { className: 'py-10 ps-7' },
                    react_1.default.createElement("div", { className: '' },
                        react_1.default.createElement("span", { className: 'text-primary d-block mb-n1' }, "Your Storage"),
                        react_1.default.createElement("span", { className: 'font-weight-light fs-1 text-gray-800' },
                            "GB ",
                            react_1.default.createElement("span", { className: 'fw-bolder fs-1 text-gray-800' }, "7,562.00"))),
                    children),
                react_1.default.createElement("div", { className: 'position-relative bgi-no-repeat bgi-size-contain bgi-position-y-bottom bgi-position-x-end mt-6 flex-grow-1', style: {
                        backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/misc/illustration-1.png'), "')"),
                    } })),
            react_1.default.createElement("div", { className: 'pt-9' },
                react_1.default.createElement("div", { className: 'row' },
                    react_1.default.createElement("div", { className: 'col me-n2 mb-5' },
                        react_1.default.createElement("button", { type: 'button', className: 'btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active border-primary px-6 py-7 text-start w-100 min-w-150px' },
                            react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-2x ms-n1', path: '/media/icons/duotune/general/gen002.svg' }),
                            ' ',
                            react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-6 d-block pt-6' }, "Upload File"))),
                    react_1.default.createElement("div", { className: 'col mb-5' },
                        react_1.default.createElement("button", { type: 'button', className: 'btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px' },
                            react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-2x ms-n1', path: '/media/icons/duotune/general/gen005.svg' }),
                            ' ',
                            react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-6 d-block pt-6' }, "Read Docs")))),
                react_1.default.createElement("div", { className: 'row' },
                    react_1.default.createElement("div", { className: 'col me-n2 mb-5' },
                        react_1.default.createElement("button", { type: 'button', className: 'btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px' },
                            react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-2x ms-n1', path: '/media/icons/duotune/general/gen002.svg' }),
                            ' ',
                            react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-6 d-block pt-6' }, "MRC 22 XML"))),
                    react_1.default.createElement("div", { className: 'col mb-5' },
                        react_1.default.createElement("button", { type: 'button', className: 'btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px' },
                            react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-2x ms-n1', path: '/media/icons/duotune/general/gen005.svg' }),
                            ' ',
                            react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-6 d-block pt-6' }, "CTI Tech Specs")))),
                react_1.default.createElement("div", { className: 'row' },
                    react_1.default.createElement("div", { className: 'col mb-5 me-n2' },
                        react_1.default.createElement("button", { type: 'button', className: 'btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px' },
                            react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-2x ms-n1', path: '/media/icons/duotune/general/gen005.svg' }),
                            ' ',
                            react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-6 d-block pt-6' }, "Check List"))),
                    react_1.default.createElement("div", { className: 'col mb-5' },
                        react_1.default.createElement("button", { type: 'button', className: 'btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7  text-start w-100 min-w-150px' },
                            react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-2x ms-n1', path: '/media/icons/duotune/files/fil023.svg' }),
                            ' ',
                            react_1.default.createElement("span", { className: 'text-gray-800 fw-bolder fs-6 d-block pt-6' }, "Reports"))))))));
};
exports.StatsWidget6 = StatsWidget6;
