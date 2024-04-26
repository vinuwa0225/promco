"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModal = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var react_bootstrap_v5_1 = require("react-bootstrap-v5");
var helpers_1 = require("../../helpers");
var SearchModal = function (_a) {
    var show = _a.show, handleClose = _a.handleClose;
    return (react_1.default.createElement(react_bootstrap_v5_1.Modal, { className: 'bg-white', id: 'kt_header_search_modal', "aria-hidden": 'true', dialogClassName: 'modal-fullscreen h-auto', show: show },
        react_1.default.createElement("div", { className: 'modal-content shadow-none' },
            react_1.default.createElement("div", { className: 'container-xxl w-lg-800px' },
                react_1.default.createElement("div", { className: 'modal-header d-flex justify-content-end border-0' },
                    react_1.default.createElement("div", { className: 'btn btn-icon btn-sm btn-light-primary ms-2', onClick: handleClose },
                        react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-2', path: '/media/icons/duotune/arrows/arr061.svg' }))),
                react_1.default.createElement("div", { className: 'modal-body' },
                    react_1.default.createElement("form", { className: 'pb-10' },
                        react_1.default.createElement("input", { autoFocus: true, type: 'text', className: 'form-control bg-transparent border-0 fs-4x text-center fw-normal', name: 'query', placeholder: 'Search...' })),
                    react_1.default.createElement("div", { className: 'py-10' },
                        react_1.default.createElement("h3", { className: 'fw-bolder mb-8' }, "Shop Goods"),
                        react_1.default.createElement("div", { className: 'row g-5' },
                            react_1.default.createElement("div", { className: 'col-sm-6' },
                                react_1.default.createElement("div", { className: 'row g-5' },
                                    react_1.default.createElement("div", { className: 'col-sm-6' },
                                        react_1.default.createElement("div", { className: 'card card-custom overlay min-h-125px mb-5 shadow-none' },
                                            react_1.default.createElement("div", { className: 'card-body d-flex flex-column p-0' },
                                                react_1.default.createElement("div", { className: 'overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded', style: {
                                                        backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-17.jpg'), "')"),
                                                    } }),
                                                react_1.default.createElement("div", { className: 'overlay-layer bg-white bg-opacity-50' },
                                                    react_1.default.createElement("a", { href: '#', className: 'btn btn-sm fw-bold btn-primary' }, "Explore")))),
                                        react_1.default.createElement("div", { className: 'card card-custom overlay min-h-125px mb-5 shadow-none' },
                                            react_1.default.createElement("div", { className: 'card-body d-flex flex-column p-0' },
                                                react_1.default.createElement("div", { className: 'overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded', style: {
                                                        backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-1.jpg'), "')"),
                                                    } }),
                                                react_1.default.createElement("div", { className: 'overlay-layer bg-white bg-opacity-50' },
                                                    react_1.default.createElement("a", { href: '#', className: 'btn btn-sm fw-bold btn-primary' }, "Explore"))))),
                                    react_1.default.createElement("div", { className: 'col-sm-6' },
                                        react_1.default.createElement("div", { className: 'card card-custom card-stretch overlay mb-5 shadow-none min-h-250px' },
                                            react_1.default.createElement("div", { className: 'card-body d-flex flex-column p-0' },
                                                react_1.default.createElement("div", { className: 'overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded', style: {
                                                        backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-23.jpg'), "')"),
                                                    } }),
                                                react_1.default.createElement("div", { className: 'overlay-layer bg-white bg-opacity-50' },
                                                    react_1.default.createElement("a", { href: '#', className: 'btn btn-sm fw-bold btn-primary' }, "Explore"))))))),
                            react_1.default.createElement("div", { className: 'col-sm-6' },
                                react_1.default.createElement("div", { className: 'card card-custom card-stretch overlay mb-5 shadow-none min-h-250px' },
                                    react_1.default.createElement("div", { className: 'card-body d-flex flex-column p-0' },
                                        react_1.default.createElement("div", { className: 'overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded', style: {
                                                backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/stock/600x400/img-11.jpg'), "')"),
                                            } }),
                                        react_1.default.createElement("div", { className: 'overlay-layer bg-white bg-opacity-50' },
                                            react_1.default.createElement("a", { href: '#', className: 'btn btn-sm fw-bold btn-primary' }, "Explore"))))))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: 'text-dark fw-bolder fs-1 mb-6' }, "Framework Users")),
                    react_1.default.createElement("div", { className: 'pb-10' },
                        react_1.default.createElement("h3", { className: 'text-dark fw-bolder fs-1 mb-6' }, "Tutorials")))))));
};
exports.SearchModal = SearchModal;
