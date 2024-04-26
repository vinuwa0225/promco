"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngageWidget3 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var EngageWidget3 = function (_a) {
    var className = _a.className, _b = _a.imagePath, imagePath = _b === void 0 ? '' : _b, _c = _a.innerPadding, innerPadding = _c === void 0 ? '' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d;
    return (react_1.default.createElement("div", { className: "card card-custom ".concat(className) },
        react_1.default.createElement("div", { className: "card-body d-flex p-12 flex-column flex-md-row flex-lg-column flex-xxl-row bg-".concat(color) },
            react_1.default.createElement("div", { className: 'bgi-no-repeat bgi-position-center bgi-size-cover h-300px h-md-auto h-lg-300px h-xxl-auto mw-100 w-650px mx-auto', style: {
                    backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/products/12.png'), "'"),
                } }),
            react_1.default.createElement("div", { className: 'card shadow-none w-auto w-md-300px w-lg-auto w-xxl-300px ml-auto' },
                react_1.default.createElement("div", { className: 'card-body bg-light px-12 py-10' },
                    react_1.default.createElement("h3", { className: 'fw-bolder fs-1 mb-1' },
                        react_1.default.createElement("a", { href: '#', className: 'text-gray-800' }, "Nike True Balance")),
                    react_1.default.createElement("div", { className: 'text-primary fs-3 mb-9' }, "$ 399.99"),
                    react_1.default.createElement("div", { className: 'fs-7 mb-8' }, "Outlines keep you honest. They stop you from indulging in poorly ought out metaphorsy about driving and keep you focused one the overall structure of your post"),
                    react_1.default.createElement("table", { className: 'table table-borderless align-middle fw-bold' },
                        react_1.default.createElement("tbody", null,
                            react_1.default.createElement("tr", null,
                                react_1.default.createElement("td", { className: 'text-gray-600 ps-0' }, "Shoes Brand"),
                                react_1.default.createElement("td", { className: 'text-dark pe-0' }, "Nike")),
                            react_1.default.createElement("tr", null,
                                react_1.default.createElement("td", { className: 'text-gray-600 ps-0' }, "SKU"),
                                react_1.default.createElement("td", { className: 'text-dark pe-0' }, "NF3535")),
                            react_1.default.createElement("tr", null,
                                react_1.default.createElement("td", { className: 'text-gray-600 ps-0' }, "Color"),
                                react_1.default.createElement("td", { className: 'text-dark pe-0' }, "White")),
                            react_1.default.createElement("tr", null,
                                react_1.default.createElement("td", { className: 'text-gray-600 ps-0' }, "Collection"),
                                react_1.default.createElement("td", { className: 'text-dark pe-0' }, "2020 Spring")),
                            react_1.default.createElement("tr", null,
                                react_1.default.createElement("td", { className: 'text-gray-600 ps-0' }, "In Stock"),
                                react_1.default.createElement("td", { className: 'text-dark pe-0' }, "280")))))))));
};
exports.EngageWidget3 = EngageWidget3;
