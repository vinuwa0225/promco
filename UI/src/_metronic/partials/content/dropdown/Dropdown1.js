"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown1 = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
function Dropdown1() {
    return (react_1.default.createElement("div", { className: 'menu menu-sub menu-sub-dropdown w-250px w-md-300px', "data-kt-menu": 'true' },
        react_1.default.createElement("div", { className: 'px-7 py-5' },
            react_1.default.createElement("div", { className: 'fs-5 text-dark fw-bolder' }, "Filter Options")),
        react_1.default.createElement("div", { className: 'separator border-gray-200' }),
        react_1.default.createElement("div", { className: 'px-7 py-5' },
            react_1.default.createElement("div", { className: 'mb-10' },
                react_1.default.createElement("label", { className: 'form-label fw-bold' }, "Status:"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("select", { className: 'form-select form-select-solid', "data-kt-select2": 'true', "data-placeholder": 'Select option', "data-allow-clear": 'true', defaultValue: '1' },
                        react_1.default.createElement("option", null),
                        react_1.default.createElement("option", { value: '1' }, "Approved"),
                        react_1.default.createElement("option", { value: '2' }, "Pending"),
                        react_1.default.createElement("option", { value: '3' }, "In Process"),
                        react_1.default.createElement("option", { value: '4' }, "Rejected")))),
            react_1.default.createElement("div", { className: 'mb-10' },
                react_1.default.createElement("label", { className: 'form-label fw-bold' }, "Member Type:"),
                react_1.default.createElement("div", { className: 'd-flex' },
                    react_1.default.createElement("label", { className: 'form-check form-check-sm form-check-custom form-check-solid me-5' },
                        react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '1' }),
                        react_1.default.createElement("span", { className: 'form-check-label' }, "Author")),
                    react_1.default.createElement("label", { className: 'form-check form-check-sm form-check-custom form-check-solid' },
                        react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '2', defaultChecked: true }),
                        react_1.default.createElement("span", { className: 'form-check-label' }, "Customer")))),
            react_1.default.createElement("div", { className: 'mb-10' },
                react_1.default.createElement("label", { className: 'form-label fw-bold' }, "Notifications:"),
                react_1.default.createElement("div", { className: 'form-check form-switch form-switch-sm form-check-custom form-check-solid' },
                    react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '', name: 'notifications', defaultChecked: true }),
                    react_1.default.createElement("label", { className: 'form-check-label' }, "Enabled"))),
            react_1.default.createElement("div", { className: 'd-flex justify-content-end' },
                react_1.default.createElement("button", { type: 'reset', className: 'btn btn-sm btn-white btn-active-light-primary me-2', "data-kt-menu-dismiss": 'true' }, "Reset"),
                react_1.default.createElement("button", { type: 'submit', className: 'btn btn-sm btn-primary', "data-kt-menu-dismiss": 'true' }, "Apply")))));
}
exports.Dropdown1 = Dropdown1;
