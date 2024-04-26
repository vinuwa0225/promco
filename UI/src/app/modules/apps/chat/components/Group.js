"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../../../_metronic/helpers");
var partials_1 = require("../../../../../_metronic/partials");
var Group = function () {
    return (react_1.default.createElement("div", { className: 'd-flex flex-column flex-lg-row' },
        react_1.default.createElement("div", { className: 'flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0' },
            react_1.default.createElement("div", { className: 'card card-flush' },
                react_1.default.createElement("div", { className: 'card-header pt-7', id: 'kt_chat_contacts_header' },
                    react_1.default.createElement("form", { className: 'w-100 position-relative', autoComplete: 'off' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen021.svg', className: 'svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y' }),
                        react_1.default.createElement("input", { type: 'text', className: 'form-control form-control-solid px-15', name: 'search', placeholder: 'Search by username or email...' }))),
                react_1.default.createElement("div", { className: 'card-body pt-5', id: 'kt_chat_contacts_body' },
                    react_1.default.createElement("div", { className: 'scroll-y me-n5 pe-5 h-200px h-lg-auto', "data-kt-scroll": 'true', "data-kt-scroll-activate": '{default: false, lg: true}', "data-kt-scroll-max-height": 'auto', "data-kt-scroll-dependencies": '#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header', "data-kt-scroll-wrappers": '#kt_content, #kt_chat_contacts_body', "data-kt-scroll-offset": '0px' },
                        react_1.default.createElement("div", { className: 'd-flex flex-stack py-4' },
                            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                react_1.default.createElement("div", { className: 'symbol symbol-45px symbol-circle' },
                                    react_1.default.createElement("span", { className: 'symbol-label bg-light-danger text-danger fs-6 fw-bolder' }, "M")),
                                react_1.default.createElement("div", { className: 'ms-5' },
                                    react_1.default.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary mb-2' }, "Melody Macy"),
                                    react_1.default.createElement("div", { className: 'fw-bold text-gray-400' }, "melody@altbox.com"))),
                            react_1.default.createElement("div", { className: 'd-flex flex-column align-items-end ms-2' },
                                react_1.default.createElement("span", { className: 'text-muted fs-7 mb-1' }, "5 hrs"))),
                        react_1.default.createElement("div", { className: 'separator separator-dashed d-none' }),
                        react_1.default.createElement("div", { className: 'd-flex flex-stack py-4' },
                            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                react_1.default.createElement("div", { className: 'symbol symbol-45px symbol-circle' },
                                    react_1.default.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-2.jpg') })),
                                react_1.default.createElement("div", { className: 'ms-5' },
                                    react_1.default.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary mb-2' }, "Max Smith"),
                                    react_1.default.createElement("div", { className: 'fw-bold text-gray-400' }, "max@kt.com"))),
                            react_1.default.createElement("div", { className: 'd-flex flex-column align-items-end ms-2' },
                                react_1.default.createElement("span", { className: 'text-muted fs-7 mb-1' }, "20 hrs"))),
                        react_1.default.createElement("div", { className: 'separator separator-dashed d-none' }),
                        react_1.default.createElement("div", { className: 'd-flex flex-stack py-4' },
                            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                react_1.default.createElement("div", { className: 'symbol symbol-45px symbol-circle' },
                                    react_1.default.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-4.jpg') })),
                                react_1.default.createElement("div", { className: 'ms-5' },
                                    react_1.default.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary mb-2' }, "Sean Bean"),
                                    react_1.default.createElement("div", { className: 'fw-bold text-gray-400' }, "sean@dellito.com"))),
                            react_1.default.createElement("div", { className: 'd-flex flex-column align-items-end ms-2' },
                                react_1.default.createElement("span", { className: 'text-muted fs-7 mb-1' }, "20 hrs"),
                                react_1.default.createElement("span", { className: 'badge badge-sm badge-circle badge-light-success' }, "6"))),
                        react_1.default.createElement("div", { className: 'separator separator-dashed d-none' }),
                        react_1.default.createElement("div", { className: 'd-flex flex-stack py-4' },
                            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                react_1.default.createElement("div", { className: 'symbol symbol-45px symbol-circle' },
                                    react_1.default.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-15.jpg') })),
                                react_1.default.createElement("div", { className: 'ms-5' },
                                    react_1.default.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary mb-2' }, "Brian Cox"),
                                    react_1.default.createElement("div", { className: 'fw-bold text-gray-400' }, "brian@exchange.com"))),
                            react_1.default.createElement("div", { className: 'd-flex flex-column align-items-end ms-2' },
                                react_1.default.createElement("span", { className: 'text-muted fs-7 mb-1' }, "20 hrs"))),
                        react_1.default.createElement("div", { className: 'separator separator-dashed d-none' }),
                        react_1.default.createElement("div", { className: 'd-flex flex-stack py-4' },
                            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                react_1.default.createElement("div", { className: 'symbol symbol-45px symbol-circle' },
                                    react_1.default.createElement("span", { className: 'symbol-label bg-light-warning text-warning fs-6 fw-bolder' }, "M")),
                                react_1.default.createElement("div", { className: 'ms-5' },
                                    react_1.default.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary mb-2' }, "Mikaela Collins"),
                                    react_1.default.createElement("div", { className: 'fw-bold text-gray-400' }, "mikaela@pexcom.com"))),
                            react_1.default.createElement("div", { className: 'd-flex flex-column align-items-end ms-2' },
                                react_1.default.createElement("span", { className: 'text-muted fs-7 mb-1' }, "1 day"))),
                        react_1.default.createElement("div", { className: 'separator separator-dashed d-none' }),
                        react_1.default.createElement("div", { className: 'd-flex flex-stack py-4' },
                            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                react_1.default.createElement("div", { className: 'symbol symbol-45px symbol-circle' },
                                    react_1.default.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-8.jpg') })),
                                react_1.default.createElement("div", { className: 'ms-5' },
                                    react_1.default.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary mb-2' }, "Francis Mitcham"),
                                    react_1.default.createElement("div", { className: 'fw-bold text-gray-400' }, "f.mitcham@kpmg.com.au"))),
                            react_1.default.createElement("div", { className: 'd-flex flex-column align-items-end ms-2' },
                                react_1.default.createElement("span", { className: 'text-muted fs-7 mb-1' }, "5 hrs"),
                                react_1.default.createElement("span", { className: 'badge badge-sm badge-circle badge-light-success' }, "6"))),
                        react_1.default.createElement("div", { className: 'separator separator-dashed d-none' }),
                        react_1.default.createElement("div", { className: 'd-flex flex-stack py-4' },
                            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                react_1.default.createElement("div", { className: 'symbol symbol-45px symbol-circle' },
                                    react_1.default.createElement("span", { className: 'symbol-label bg-light-danger text-danger fs-6 fw-bolder' }, "O"),
                                    react_1.default.createElement("div", { className: 'symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2' })),
                                react_1.default.createElement("div", { className: 'ms-5' },
                                    react_1.default.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary mb-2' }, "Olivia Wild"),
                                    react_1.default.createElement("div", { className: 'fw-bold text-gray-400' }, "olivia@corpmail.com"))),
                            react_1.default.createElement("div", { className: 'd-flex flex-column align-items-end ms-2' },
                                react_1.default.createElement("span", { className: 'text-muted fs-7 mb-1' }, "1 week"))),
                        react_1.default.createElement("div", { className: 'separator separator-dashed d-none' }),
                        react_1.default.createElement("div", { className: 'd-flex flex-stack py-4' },
                            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                react_1.default.createElement("div", { className: 'symbol symbol-45px symbol-circle' },
                                    react_1.default.createElement("span", { className: 'symbol-label bg-light-primary text-primary fs-6 fw-bolder' }, "N")),
                                react_1.default.createElement("div", { className: 'ms-5' },
                                    react_1.default.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary mb-2' }, "Neil Owen"),
                                    react_1.default.createElement("div", { className: 'fw-bold text-gray-400' }, "owen.neil@gmail.com"))),
                            react_1.default.createElement("div", { className: 'd-flex flex-column align-items-end ms-2' },
                                react_1.default.createElement("span", { className: 'text-muted fs-7 mb-1' }, "20 hrs"),
                                react_1.default.createElement("span", { className: 'badge badge-sm badge-circle badge-light-success' }, "6"))),
                        react_1.default.createElement("div", { className: 'separator separator-dashed d-none' }),
                        react_1.default.createElement("div", { className: 'd-flex flex-stack py-4' },
                            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                react_1.default.createElement("div", { className: 'symbol symbol-45px symbol-circle' },
                                    react_1.default.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-6.jpg') })),
                                react_1.default.createElement("div", { className: 'ms-5' },
                                    react_1.default.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary mb-2' }, "Dan Wilson"),
                                    react_1.default.createElement("div", { className: 'fw-bold text-gray-400' }, "dam@consilting.com"))),
                            react_1.default.createElement("div", { className: 'd-flex flex-column align-items-end ms-2' },
                                react_1.default.createElement("span", { className: 'text-muted fs-7 mb-1' }, "2 weeks"),
                                react_1.default.createElement("span", { className: 'badge badge-sm badge-circle badge-light-warning' }, "9"))),
                        react_1.default.createElement("div", { className: 'separator separator-dashed d-none' }),
                        react_1.default.createElement("div", { className: 'd-flex flex-stack py-4' },
                            react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                react_1.default.createElement("div", { className: 'symbol symbol-45px symbol-circle' },
                                    react_1.default.createElement("span", { className: 'symbol-label bg-light-danger text-danger fs-6 fw-bolder' }, "E"),
                                    react_1.default.createElement("div", { className: 'symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2' })),
                                react_1.default.createElement("div", { className: 'ms-5' },
                                    react_1.default.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary mb-2' }, "Emma Bold"),
                                    react_1.default.createElement("div", { className: 'fw-bold text-gray-400' }, "emma@intenso.com"))),
                            react_1.default.createElement("div", { className: 'd-flex flex-column align-items-end ms-2' },
                                react_1.default.createElement("span", { className: 'text-muted fs-7 mb-1' }, "1 day"))))))),
        react_1.default.createElement("div", { className: 'flex-lg-row-fluid ms-lg-7 ms-xl-10' },
            react_1.default.createElement("div", { className: 'card', id: 'kt_chat_messenger' },
                react_1.default.createElement("div", { className: 'card-header', id: 'kt_chat_messenger_header' },
                    react_1.default.createElement("div", { className: 'card-title' },
                        react_1.default.createElement("div", { className: 'symbol-group symbol-hover' },
                            react_1.default.createElement("div", { className: 'symbol symbol-35px symbol-circle' },
                                react_1.default.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-4.jpg') })),
                            react_1.default.createElement("div", { className: 'symbol symbol-35px symbol-circle' },
                                react_1.default.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-15.jpg') })),
                            react_1.default.createElement("div", { className: 'symbol symbol-35px symbol-circle' },
                                react_1.default.createElement("span", { className: 'symbol-label bg-light-warning text-warning 40px' }, "M")),
                            react_1.default.createElement("div", { className: 'symbol symbol-35px symbol-circle' },
                                react_1.default.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-8.jpg') })),
                            react_1.default.createElement("div", { className: 'symbol symbol-35px symbol-circle' },
                                react_1.default.createElement("span", { className: 'symbol-label bg-light-danger text-danger 40px' }, "O")),
                            react_1.default.createElement("div", { className: 'symbol symbol-35px symbol-circle' },
                                react_1.default.createElement("span", { className: 'symbol-label bg-light-primary text-primary 40px' }, "N")),
                            react_1.default.createElement("div", { className: 'symbol symbol-35px symbol-circle' },
                                react_1.default.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)('/media/avatars/150-6.jpg') })),
                            react_1.default.createElement("a", { href: '#', className: 'symbol symbol-35px symbol-circle' },
                                react_1.default.createElement("span", { className: 'symbol-label fs-8 fw-bolder', "data-bs-toggle": 'tooltip', "data-bs-trigger": 'hover', title: 'View more users' }, "+42")))),
                    react_1.default.createElement("div", { className: 'card-toolbar' },
                        react_1.default.createElement("div", { className: 'me-n3' },
                            react_1.default.createElement("button", { className: 'btn btn-sm btn-icon btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                                react_1.default.createElement("i", { className: 'bi bi-three-dots fs-2' })),
                            react_1.default.createElement(partials_1.Dropdown1, null)))),
                react_1.default.createElement(partials_1.ChatInner, null)))));
};
exports.Group = Group;
