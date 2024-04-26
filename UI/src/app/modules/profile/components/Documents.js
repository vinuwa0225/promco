"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documents = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../../_metronic/helpers");
var Card4_1 = require("../../../../_metronic/partials/content/cards/Card4");
function Documents() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'd-flex flex-wrap flex-stack mb-6' },
            react_1.default.createElement("h3", { className: 'fw-bolder my-2' },
                "My Documents",
                react_1.default.createElement("span", { className: 'fs-6 text-gray-400 fw-bold ms-1' }, "100+ resources")),
            react_1.default.createElement("div", { className: 'd-flex my-2' },
                react_1.default.createElement("div", { className: 'd-flex align-items-center position-relative me-4' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen021.svg', className: 'svg-icon-3 position-absolute ms-3' }),
                    react_1.default.createElement("input", { type: 'text', id: 'kt_filter_search', className: 'form-control form-control-white form-control-sm w-150px ps-9', placeholder: 'Search' })),
                react_1.default.createElement("a", { href: '#', className: 'btn btn-primary btn-sm' }, "File Manager"))),
        react_1.default.createElement("div", { className: 'row g-6 g-xl-9 mb-6 mb-xl-9' },
            react_1.default.createElement("div", { className: 'col-12 col-sm-12 col-xl' },
                react_1.default.createElement(Card4_1.Card4, { icon: '/media/svg/files/folder-document.svg', title: 'Finance', description: '7 files' })),
            react_1.default.createElement("div", { className: 'col-12 col-sm-12 col-xl' },
                react_1.default.createElement(Card4_1.Card4, { icon: '/media/svg/files/folder-document.svg', title: 'Customers', description: '3 files' })),
            react_1.default.createElement("div", { className: 'col-12 col-sm-12 col-xl' },
                react_1.default.createElement(Card4_1.Card4, { icon: '/media/svg/files/folder-document.svg', title: 'CRM Project', description: '25 files' }))),
        react_1.default.createElement("div", { className: 'row g-6 g-xl-9 mb-6 mb-xl-9' },
            react_1.default.createElement("div", { className: 'col-12 col-sm-12 col-xl' },
                react_1.default.createElement(Card4_1.Card4, { icon: '/media/svg/files/pdf.svg', title: 'Project Reqs..', description: '3 days ago' })),
            react_1.default.createElement("div", { className: 'col-12 col-sm-12 col-xl' },
                react_1.default.createElement(Card4_1.Card4, { icon: '/media/svg/files/doc.svg', title: 'CRM App Docs..', description: '3 days ago' })),
            react_1.default.createElement("div", { className: 'col-12 col-sm-12 col-xl' },
                react_1.default.createElement(Card4_1.Card4, { icon: '/media/svg/files/css.svg', title: 'User CRUD Styles', description: '4 days ago' })),
            react_1.default.createElement("div", { className: 'col-12 col-sm-12 col-xl' },
                react_1.default.createElement(Card4_1.Card4, { icon: '/media/svg/files/ai.svg', title: 'Metronic Logo', description: '5 days ago' })),
            react_1.default.createElement("div", { className: 'col-12 col-sm-12 col-xl' },
                react_1.default.createElement(Card4_1.Card4, { icon: '/media/svg/files/sql.svg', title: 'Orders backup', description: '1 week ago' }))),
        react_1.default.createElement("div", { className: 'row g-6 g-xl-9 mb-6 mb-xl-9' },
            react_1.default.createElement("div", { className: 'col-12 col-sm-12 col-xl' },
                react_1.default.createElement(Card4_1.Card4, { icon: '/media/svg/files/xml.svg', title: 'UTAIR CRM API Co..', description: '2 week ago' })),
            react_1.default.createElement("div", { className: 'col-12 col-sm-12 col-xl' },
                react_1.default.createElement(Card4_1.Card4, { icon: '/media/svg/files/tif.svg', title: 'Tower Hill App..', description: '3 week ago' })))));
}
exports.Documents = Documents;
