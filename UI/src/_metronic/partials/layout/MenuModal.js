"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModal = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var react_bootstrap_v5_1 = require("react-bootstrap-v5");
var react_router_dom_1 = require("react-router-dom");
var helpers_1 = require("../../helpers");
var MenuModal = function (_a) {
    var show = _a.show, handleClose = _a.handleClose, children = _a.children;
    var location = (0, react_router_dom_1.useLocation)();
    var isFirstRef = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(function () {
        if (isFirstRef.current) {
            isFirstRef.current = false;
        }
        else {
            handleClose();
        }
    }, [location]);
    return (react_1.default.createElement(react_bootstrap_v5_1.Modal, { className: 'bg-white', id: 'kt_mega_menu_modal', "aria-hidden": 'true', tabIndex: '-1', dialogClassName: 'modal-fullscreen', contentClassName: 'shadow-none', show: show },
        react_1.default.createElement("div", { className: 'container-xxl' },
            react_1.default.createElement("div", { className: 'modal-header d-flex align-items-center justify-content-between border-0' },
                react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                    react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
                        react_1.default.createElement("img", { alt: 'logo', className: 'h-30px', src: (0, helpers_1.toAbsoluteUrl)('/media/logos/logo-default.svg') }))),
                react_1.default.createElement("div", { className: 'btn btn-icon btn-sm btn-light-primary ms-2', onClick: handleClose },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr061.svg', className: 'svg-icon-2' }))),
            react_1.default.createElement("div", { className: 'modal-body' },
                react_1.default.createElement("div", { className: 'row py-10 g-5' },
                    react_1.default.createElement("div", { className: 'col-lg-6 pe-lg-25' }, children),
                    react_1.default.createElement("div", { className: 'col-lg-6' },
                        react_1.default.createElement("h3", { className: 'fw-bolder mb-8' }, "Quick Links"),
                        react_1.default.createElement("div", { className: 'row g-5' },
                            react_1.default.createElement("div", { className: 'col-sm-4' },
                                react_1.default.createElement("a", { href: '#', className: 'card card-custom bg-light-success hoverable min-h-125px shadow-none mb-5' },
                                    react_1.default.createElement("div", { className: 'card-body d-flex flex-column flex-center' },
                                        react_1.default.createElement("h3", { className: 'fs-3 mb-2 text-dark fw-bolder' }, "Security"),
                                        react_1.default.createElement("p", { className: 'mb-0 text-gray-600' }, "$2.99/month")))),
                            react_1.default.createElement("div", { className: 'col-sm-4' },
                                react_1.default.createElement("a", { href: '#', className: 'card card-custom bg-light-danger hoverable min-h-125px shadow-none mb-5' },
                                    react_1.default.createElement("div", { className: 'card-body d-flex flex-column flex-center text-center' },
                                        react_1.default.createElement("h3", { className: 'fs-3 mb-2 text-dark fw-bolder' }, "Demo"),
                                        react_1.default.createElement("p", { className: 'mb-0 text-gray-600' }, "Free Version")))),
                            react_1.default.createElement("div", { className: 'col-sm-4' },
                                react_1.default.createElement("a", { href: '#', className: 'card card-custom bg-light-warning hoverable min-h-125px shadow-none mb-5' },
                                    react_1.default.createElement("div", { className: 'card-body d-flex flex-column flex-center text-center' },
                                        react_1.default.createElement("h3", { className: 'fs-3 mb-2 text-dark text-hover-primary fw-bolder' }, "Try Now"),
                                        react_1.default.createElement("p", { className: 'mb-0 text-gray-600' }, "Pro Version"))))),
                        react_1.default.createElement("div", { className: 'row g-5' },
                            react_1.default.createElement("div", { className: 'col-sm-8' },
                                react_1.default.createElement("a", { href: '#', className: 'card card-custom bg-light-primary hoverable min-h-125px shadow-none mb-5' },
                                    react_1.default.createElement("div", { className: 'card-body d-flex flex-column flex-center text-center' },
                                        react_1.default.createElement("h3", { className: 'fs-3 mb-2 text-dark fw-bolder' }, "Payment Methods"),
                                        react_1.default.createElement("p", { className: 'mb-0 text-gray-600' },
                                            "Credit Cards/Debit Cards, Paypal,",
                                            react_1.default.createElement("br", null),
                                            " Transferwise & Others"))),
                                react_1.default.createElement("div", { className: 'row g-5' },
                                    react_1.default.createElement("div", { className: 'col-sm-6' },
                                        react_1.default.createElement("a", { className: 'card card-custom bg-light-warning hoverable shadow-none min-h-125px mb-5' },
                                            react_1.default.createElement("div", { className: 'card-body d-flex flex-column flex-center text-center' },
                                                react_1.default.createElement("h3", { className: 'fs-3 mb-2 text-dark fw-bolder' }, "Support"),
                                                react_1.default.createElement("p", { className: 'mb-0 text-gray-600' }, "6 Month Free")))),
                                    react_1.default.createElement("div", { className: 'col-sm-6' },
                                        react_1.default.createElement("a", { href: '#', className: 'card card-custom bg-light-success hoverable shadow-none min-h-125px mb-5' },
                                            react_1.default.createElement("div", { className: 'card-body d-flex flex-column flex-center text-center' },
                                                react_1.default.createElement("h3", { className: 'fs-3 mb-2 text-dark fw-bolder' }, "Installation"),
                                                react_1.default.createElement("p", { className: 'mb-0 text-gray-600' }, "$0.99 Per Machine")))))),
                            react_1.default.createElement("div", { className: 'col-sm-4' },
                                react_1.default.createElement("a", { href: '#', className: 'card card-custom card-stretch mb-5 bg-light-info hoverable shadow-none min-h-250px' },
                                    react_1.default.createElement("div", { className: 'card-body d-flex flex-column p-0' },
                                        react_1.default.createElement("div", { className: 'd-flex flex-column flex-center text-center px-5 pt-10' },
                                            react_1.default.createElement("h3", { className: 'fs-3 mb-2 text-dark fw-bolder' }, "Quick Start"),
                                            react_1.default.createElement("p", { className: 'mb-0 text-gray-600' }, "Single Click Import")),
                                        react_1.default.createElement("div", { className: 'flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom', style: {
                                                backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/illustrations/terms-1.png'), "')"),
                                            } })))))))))));
};
exports.MenuModal = MenuModal;
