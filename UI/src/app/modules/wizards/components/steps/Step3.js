"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step3 = void 0;
var react_1 = require("react");
var formik_1 = require("formik");
var Step3 = function () {
    return (react_1.default.createElement("div", { className: 'w-100' },
        react_1.default.createElement("div", { className: 'pb-10 pb-lg-12' },
            react_1.default.createElement("h2", { className: 'fw-bolder text-dark' }, "Business Details"),
            react_1.default.createElement("div", { className: 'text-gray-400 fw-bold fs-6' },
                "If you need more info, please check out",
                react_1.default.createElement("a", { href: '/dashboard', className: 'link-primary fw-bolder' },
                    ' ',
                    "Help Page"),
                ".")),
        react_1.default.createElement("div", { className: 'fv-row mb-10' },
            react_1.default.createElement("label", { className: 'form-label required' }, "Business Name"),
            react_1.default.createElement(formik_1.Field, { name: 'businessName', className: 'form-control form-control-lg form-control-solid' }),
            react_1.default.createElement("div", { className: 'text-danger mt-2' },
                react_1.default.createElement(formik_1.ErrorMessage, { name: 'businessName' }))),
        react_1.default.createElement("div", { className: 'fv-row mb-10' },
            react_1.default.createElement("label", { className: 'd-flex align-items-center form-label' },
                react_1.default.createElement("span", { className: 'required' }, "Shortened Descriptor")),
            react_1.default.createElement(formik_1.Field, { name: 'businessDescriptor', className: 'form-control form-control-lg form-control-solid' }),
            react_1.default.createElement("div", { className: 'text-danger mt-2' },
                react_1.default.createElement(formik_1.ErrorMessage, { name: 'businessDescriptor' })),
            react_1.default.createElement("div", { className: 'form-text' }, "Customers will see this shortened version of your statement descriptor")),
        react_1.default.createElement("div", { className: 'fv-row mb-10' },
            react_1.default.createElement("label", { className: 'form-label required' }, "Corporation Type"),
            react_1.default.createElement(formik_1.Field, { as: 'select', name: 'businessType', className: 'form-select form-select-lg form-select-solid' },
                react_1.default.createElement("option", null),
                react_1.default.createElement("option", { value: '1' }, "S Corporation"),
                react_1.default.createElement("option", { value: '1' }, "C Corporation"),
                react_1.default.createElement("option", { value: '2' }, "Sole Proprietorship"),
                react_1.default.createElement("option", { value: '3' }, "Non-profit"),
                react_1.default.createElement("option", { value: '4' }, "Limited Liability"),
                react_1.default.createElement("option", { value: '5' }, "General Partnership")),
            react_1.default.createElement("div", { className: 'text-danger mt-2' },
                react_1.default.createElement(formik_1.ErrorMessage, { name: 'businessType' }))),
        react_1.default.createElement("div", { className: 'fv-row mb-10' },
            react_1.default.createElement("label", { className: 'form-label' }, "Business Description"),
            react_1.default.createElement(formik_1.Field, { as: 'textarea', name: 'businessDescription', className: 'form-control form-control-lg form-control-solid', rows: 3 })),
        react_1.default.createElement("div", { className: 'fv-row mb-0' },
            react_1.default.createElement("label", { className: 'fs-6 fw-bold form-label required' }, "Contact Email"),
            react_1.default.createElement(formik_1.Field, { name: 'businessEmail', className: 'form-control form-control-lg form-control-solid' }),
            react_1.default.createElement("div", { className: 'text-danger mt-2' },
                react_1.default.createElement(formik_1.ErrorMessage, { name: 'businessEmail' })))));
};
exports.Step3 = Step3;
