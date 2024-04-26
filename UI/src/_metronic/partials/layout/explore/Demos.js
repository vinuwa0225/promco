"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demos = void 0;
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var Demos = function () {
    var demos = [
        {
            name: 'demo1',
            available: true,
        },
        {
            name: 'demo2',
            available: true,
        },
        {
            name: 'demo3',
        },
        {
            name: 'demo4',
        },
        {
            name: 'demo5',
        },
        {
            name: 'demo6',
        },
        {
            name: 'demo7',
        },
        {
            name: 'demo8',
        },
        {
            name: 'demo9',
        },
        {
            name: 'demo10',
        },
        {
            name: 'demo11',
        },
        {
            name: 'demo12',
        },
        {
            name: 'demo13',
        },
    ];
    return (react_1.default.createElement("div", { className: 'mb-0' },
        react_1.default.createElement("h3", { className: 'fw-bolder text-center mb-6' },
            process.env.REACT_APP_THEME_NAME,
            " Demos"),
        react_1.default.createElement("div", { className: 'row g-5' }, demos.map(function (item, index) { return (react_1.default.createElement("div", { className: 'col-6', key: index },
            react_1.default.createElement("div", { className: "overlay overflow-hidden position-relative ".concat(process.env.REACT_APP_THEME_DEMO === item.name
                    ? 'border border-4 border-success'
                    : 'border border-4 border-gray-200', " rounded") },
                react_1.default.createElement("div", { className: 'overlay-wrapper' },
                    react_1.default.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)("/media/demos/".concat(item.name, ".png")), alt: 'demo', className: "w-100 ".concat(!item.available && 'opacity-75') })),
                react_1.default.createElement("div", { className: 'overlay-layer bg-dark bg-opacity-10' },
                    item.available && (react_1.default.createElement("a", { href: "".concat(process.env.REACT_APP_PREVIEW_REACT_URL, "/").concat(item.name), className: 'btn btn-sm btn-success shadow' }, item.name.charAt(0).toUpperCase() + item.name.slice(1))),
                    !item.available && (react_1.default.createElement("div", { className: 'badge badge-white px-6 py-4 fw-bold fs-base shadow' }, "Coming soon")))))); }))));
};
exports.Demos = Demos;
