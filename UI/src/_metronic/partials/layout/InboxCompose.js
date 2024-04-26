"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboxCompose = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var react_bootstrap_v5_1 = require("react-bootstrap-v5");
var helpers_1 = require("../../helpers");
var InboxCompose = function (_a) {
    var show = _a.show, handleClose = _a.handleClose;
    var composeToRef = (0, react_1.useRef)(null);
    var formRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(''), composeCC = _b[0], setComposeCC = _b[1];
    var _c = (0, react_1.useState)(''), composeBCC = _c[0], setComposeBCC = _c[1];
    var _d = (0, react_1.useState)(''), subject = _d[0], setSubject = _d[1];
    return (react_1.default.createElement(react_bootstrap_v5_1.Modal, { className: 'modal-sticky modal-sticky-lg modal-sticky-bottom-right', id: 'kt_inbox_compose', role: 'dialog', "data-backdrop": 'false', "aria-hidden": 'true', tabIndex: '-1', show: show, animation: false },
        react_1.default.createElement("div", { className: 'modal-content' },
            react_1.default.createElement("form", { ref: formRef, id: 'kt_inbox_compose_form', onSubmit: function () { return console.log('submit'); } },
                react_1.default.createElement("div", { className: 'd-flex align-items-center justify-content-between py-5 ps-8 pe-5 border-bottom' },
                    react_1.default.createElement("h5", { className: 'fw-bold m-0' }, "Compose"),
                    react_1.default.createElement("div", { className: 'd-flex ms-2' },
                        react_1.default.createElement("div", { className: 'btn btn-icon btn-sm btn-light-primary ms-2', "data-bs-dismiss": 'modal', onClick: handleClose },
                            react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-1', path: '/media/icons/duotune/arrows/arr061.svg' })))),
                react_1.default.createElement("div", { className: 'd-block' },
                    react_1.default.createElement("div", { className: 'd-flex align-items-center border-bottom inbox-to px-8 min-h-45px' },
                        react_1.default.createElement("div", { className: 'text-gray-600 w-75px' }, "To:"),
                        react_1.default.createElement("div", { className: 'd-flex align-items-center flex-grow-1' },
                            react_1.default.createElement("input", { type: 'text', className: 'form-control border-0', name: 'compose_to', ref: composeToRef })),
                        react_1.default.createElement("div", { className: 'ms-2' },
                            react_1.default.createElement("span", { className: 'text-muted fw-bold cursor-pointer text-hover-primary me-2', "data-inbox": 'cc-show' }, "Cc"),
                            react_1.default.createElement("span", { className: 'text-muted fw-bold cursor-pointer text-hover-primary', "data-inbox": 'bcc-show' }, "Bcc"))),
                    react_1.default.createElement("div", { className: 'd-none align-items-center border-bottom inbox-to-cc ps-8 pe-5 min-h-45px' },
                        react_1.default.createElement("div", { className: 'text-gray-600 w-75px' }, "Cc:"),
                        react_1.default.createElement("div", { className: 'flex-grow-1' },
                            react_1.default.createElement("input", { type: 'text', className: 'form-control border-0', name: 'compose_cc', value: composeCC, onChange: function (e) { return setComposeCC(e.target.value); } })),
                        react_1.default.createElement("span", { className: 'btn btn-active-light-primary btn-sm btn-icon', "data-inbox": 'cc-hide' },
                            react_1.default.createElement("i", { className: 'la la-close ' }))),
                    react_1.default.createElement("div", { className: 'd-none align-items-center border-bottom inbox-to-bcc ps-8 pe-5 min-h-45px' },
                        react_1.default.createElement("div", { className: 'text-gray-600 w-75px' }, "Bcc:"),
                        react_1.default.createElement("div", { className: 'flex-grow-1' },
                            react_1.default.createElement("input", { type: 'text', className: 'form-control border-0', name: 'compose_bcc', value: composeBCC, onChange: function (e) { return setComposeBCC(e.target.value); } })),
                        react_1.default.createElement("span", { className: 'btn btn-active-light-primary btn-sm btn-icon', "data-inbox": 'bcc-hide' },
                            react_1.default.createElement("i", { className: 'la la-close ' }))),
                    react_1.default.createElement("div", { className: 'border-bottom' },
                        react_1.default.createElement("input", { className: 'form-control border-0 px-8 min-h-45px', name: 'compose_subject', placeholder: 'Subject', value: subject, onChange: function (e) { return setSubject(e.target.value); } })),
                    react_1.default.createElement("div", { id: 'kt_inbox_compose_editor', className: 'border-0 h-125px h-lg-250px' }),
                    react_1.default.createElement("div", { className: 'dropzone dropzone-multi px-8 py-4', id: 'kt_inbox_compose_attachments' },
                        react_1.default.createElement("div", { className: 'dropzone-items' },
                            react_1.default.createElement("div", { className: 'dropzone-item', style: { display: 'none' } },
                                react_1.default.createElement("div", { className: 'dropzone-file' },
                                    react_1.default.createElement("div", { className: 'dropzone-filename', title: 'some_image_file_name.jpg' },
                                        react_1.default.createElement("span", { "data-dz-name": true }, "some_image_file_name.jpg"),
                                        ' ',
                                        react_1.default.createElement("strong", null,
                                            "(",
                                            react_1.default.createElement("span", { "data-dz-size": true }, "340kb"),
                                            ")")),
                                    react_1.default.createElement("div", { className: 'dropzone-error', "data-dz-errormessage": true })),
                                react_1.default.createElement("div", { className: 'dropzone-progress' },
                                    react_1.default.createElement("div", { className: 'progress' },
                                        react_1.default.createElement("div", { className: 'progress-bar bg-primary', role: 'progressbar', "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0, "data-dz-uploadprogress": true }))),
                                react_1.default.createElement("div", { className: 'dropzone-toolbar' },
                                    react_1.default.createElement("span", { className: 'dropzone-delete', "data-dz-remove": true },
                                        react_1.default.createElement("span", { className: 'btn btn-icon btn-sm btn-active-light-primary ms-2', "data-bs-dismiss": 'modal' },
                                            react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-1', path: '/media/icons/duotune/arrows/arr061.svg' })))))))),
                react_1.default.createElement("div", { className: 'd-flex align-items-center justify-content-between py-5 ps-8 pe-5 border-top' },
                    react_1.default.createElement("div", { className: 'd-flex align-items-center me-3' },
                        react_1.default.createElement("button", { className: 'btn btn-primary me-4 px-6' }, "Send"),
                        react_1.default.createElement("a", { href: '#', className: 'btn btn-icon btn-active-light-primary me-2', id: 'kt_inbox_compose_attachments_select' },
                            react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-1', path: '/media/icons/duotune/files/fil022.svg' })),
                        react_1.default.createElement("a", { href: '#', className: 'btn btn-icon btn-active-light-primary' },
                            react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-1', path: '/media/icons/duotune/general/gen018.svg' }))),
                    react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                        react_1.default.createElement("button", { className: 'btn btn-icon btn-active-light-primary me-2', "data-bs-toggle": 'tooltip', title: 'More actions' },
                            react_1.default.createElement(helpers_1.KTSVG, { className: 'svg-icon-1', path: '/media/icons/duotune/coding/cod001.svg' }))))))));
};
exports.InboxCompose = InboxCompose;
