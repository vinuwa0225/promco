"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradePlan = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var plans = [
    {
        title: 'Startup',
        subTitle: 'Best for startups',
        description: 'Optimal for 10+ team size and new startup',
        priceMonth: '39',
        priceAnnual: '399',
        default: true,
        custom: false,
        features: [
            {
                title: 'Up to 10 Active Users',
                supported: true,
            },
            {
                title: 'Up to 30 Project Integrations',
                supported: true,
            },
            {
                title: 'Analytics Module',
                supported: true,
            },
            {
                title: 'Finance Module',
                supported: false,
            },
            {
                title: 'Accounting Module',
                supported: false,
            },
            {
                title: 'Network Platform',
                supported: false,
            },
            {
                title: 'Unlimited Cloud Space',
                supported: false,
            },
        ],
    },
    {
        title: 'Advanced',
        subTitle: 'Best for 100+ team size',
        description: 'Optimal for 100+ team size and grown company',
        priceMonth: '339',
        priceAnnual: '3399',
        default: false,
        custom: false,
        features: [
            {
                title: 'Up to 10 Active Users',
                supported: true,
            },
            {
                title: 'Up to 30 Project Integrations',
                supported: true,
            },
            {
                title: 'Analytics Module',
                supported: true,
            },
            {
                title: 'Finance Module',
                supported: true,
            },
            {
                title: 'Accounting Module',
                supported: true,
            },
            {
                title: 'Network Platform',
                supported: false,
            },
            {
                title: 'Unlimited Cloud Space',
                supported: false,
            },
        ],
    },
    {
        title: 'Enterprise',
        subTitle: 'Best value for 1000+ team',
        description: 'Optimal for 1000+ team and enterpise',
        priceMonth: '999',
        priceAnnual: '9999',
        label: 'Most popular',
        default: false,
        custom: false,
        features: [
            {
                title: 'Up to 10 Active Users',
                supported: true,
            },
            {
                title: 'Up to 30 Project Integrations',
                supported: true,
            },
            {
                title: 'Analytics Module',
                supported: true,
            },
            {
                title: 'Finance Module',
                supported: true,
            },
            {
                title: 'Accounting Module',
                supported: true,
            },
            {
                title: 'Network Platform',
                supported: true,
            },
            {
                title: 'Unlimited Cloud Space',
                supported: true,
            },
        ],
    },
    {
        title: 'Custom',
        subTitle: 'Requet a custom license',
        default: false,
        custom: true,
    },
];
var UpgradePlan = function () {
    var _a = (0, react_1.useState)('month'), currentState = _a[0], setCurrentState = _a[1];
    var _b = (0, react_1.useState)('Startup'), selected = _b[0], setSelected = _b[1];
    return (react_1.default.createElement("div", { className: 'modal fade', id: 'kt_modal_upgrade_plan', "aria-hidden": 'true' },
        react_1.default.createElement("div", { className: 'modal-dialog modal-xl' },
            react_1.default.createElement("div", { className: 'modal-content rounded' },
                react_1.default.createElement("div", { className: 'modal-header justify-content-end border-0 pb-0' },
                    react_1.default.createElement("div", { className: 'btn btn-sm btn-icon btn-active-color-primary', "data-bs-dismiss": 'modal' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr061.svg', className: 'svg-icon-1' }))),
                react_1.default.createElement("div", { className: 'modal-body pt-0 pb-15 px-5 px-xl-20' },
                    react_1.default.createElement("div", { className: 'mb-13 text-center' },
                        react_1.default.createElement("h1", { className: 'mb-3' }, "Upgrade a Plan"),
                        react_1.default.createElement("div", { className: 'text-muted fw-bold fs-5' },
                            "If you need more info, please check",
                            ' ',
                            react_1.default.createElement("a", { href: '#', className: 'link-primary fw-bolder' }, "Pricing Guidelines"),
                            ".")),
                    react_1.default.createElement("div", { className: 'd-flex flex-column' },
                        react_1.default.createElement("div", { className: 'nav-group nav-group-outline mx-auto', "data-kt-buttons": 'true' },
                            react_1.default.createElement("a", { href: '#', className: 'btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 ' +
                                    (currentState === 'month' && 'active'), onClick: function () {
                                    setCurrentState('month');
                                }, "data-kt-plan": 'month' }, "Monthly"),
                            react_1.default.createElement("a", { href: '#', className: 'btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 ' +
                                    (currentState === 'annual' && 'active'), onClick: function () {
                                    setCurrentState('annual');
                                }, "data-kt-plan": 'annual' }, "Annual")),
                        react_1.default.createElement("div", { className: 'row mt-10' },
                            react_1.default.createElement("div", { className: 'col-lg-6 mb-10 mb-lg-0' },
                                react_1.default.createElement("div", { className: 'nav flex-column' }, plans.map(function (plan, index) {
                                    return (react_1.default.createElement("div", { onClick: function () {
                                            setSelected(plan.title);
                                        }, className: "nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6 " +
                                            (index !== plans.length - 1 && 'mb-6 ') +
                                            (plan.default && 'active ') +
                                            (!plan.custom && 'btn-active btn-active-primary '), "data-bs-toggle": 'tab', "data-bs-target": "#kt_upgrade_plan_".concat(index), key: index },
                                        react_1.default.createElement("div", { className: 'd-flex align-items-center me-2' },
                                            react_1.default.createElement("div", { className: 'form-check form-check-custom form-check-solid form-check-success me-6' },
                                                react_1.default.createElement("input", { className: 'form-check-input', type: 'radio', name: 'plan', value: plan.title, checked: selected === plan.title, onChange: function (e) { return setSelected(e.target.value); } })),
                                            react_1.default.createElement("div", { className: 'flex-grow-1' },
                                                react_1.default.createElement("h2", { className: 'd-flex align-items-center fs-2 fw-bolder flex-wrap' },
                                                    plan.title,
                                                    plan.label && (react_1.default.createElement("span", { className: 'badge badge-light-success ms-2 fs-7' }, plan.label))),
                                                react_1.default.createElement("div", { className: 'fw-bold opacity-50' }, plan.subTitle))),
                                        react_1.default.createElement("div", { className: 'ms-5' },
                                            plan.custom && (react_1.default.createElement("button", { className: 'btn btn-sm btn-primary' }, "Contact Us")),
                                            !plan.custom && (react_1.default.createElement(react_1.default.Fragment, null,
                                                react_1.default.createElement("span", { className: 'mb-2' }, "$"),
                                                react_1.default.createElement("span", { className: 'fs-3x fw-bolder' }, currentState === 'month' ? plan.priceMonth : plan.priceAnnual),
                                                react_1.default.createElement("span", { className: 'fs-7 opacity-50' },
                                                    "/",
                                                    react_1.default.createElement("span", { "data-kt-element": 'period' }, "Mon")))))));
                                }))),
                            react_1.default.createElement("div", { className: 'col-lg-6' },
                                react_1.default.createElement("div", { className: 'tab-content rounded h-100 bg-light p-10' }, plans.map(function (plan, index) {
                                    return (react_1.default.createElement("div", { key: "custom".concat(index) }, !plan.custom && (react_1.default.createElement(react_1.default.Fragment, null,
                                        react_1.default.createElement("div", { className: "tab-pane fade" + (plan.default && 'show active'), id: "kt_upgrade_plan_".concat(index), key: index },
                                            react_1.default.createElement("div", { className: 'pb-5' },
                                                react_1.default.createElement("h2", { className: 'fw-bolder text-dark' }, "What\u2019s in Startup Plan?"),
                                                react_1.default.createElement("div", { className: 'text-gray-400 fw-bold' }, plan.description)),
                                            react_1.default.createElement("div", { className: 'pt-1' }, plan.features.map(function (feature, i) {
                                                return (react_1.default.createElement("div", { className: "d-flex align-items-center" +
                                                        (i !== plan.features.length - 1 && ' mb-7'), key: "".concat(i, "-").concat(feature.title) },
                                                    feature.supported && (react_1.default.createElement(react_1.default.Fragment, null,
                                                        react_1.default.createElement("span", { className: 'fw-bold fs-5 text-gray-700 flex-grow-1' }, feature.title),
                                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen043.svg', className: 'svg-icon-1 svg-icon-success' }))),
                                                    !feature.supported && (react_1.default.createElement(react_1.default.Fragment, null,
                                                        react_1.default.createElement("span", { className: 'fw-bold fs-5 text-gray-400 flex-grow-1' }, feature.title),
                                                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/general/gen040.svg', className: 'svg-icon-1' })))));
                                            })))))));
                                }))))),
                    react_1.default.createElement("div", { className: 'd-flex flex-center flex-row-fluid pt-12' },
                        react_1.default.createElement("button", { type: 'reset', className: 'btn btn-light me-3', "data-bs-dismiss": 'modal' }, "Cancel"),
                        react_1.default.createElement("button", { type: 'submit', className: 'btn btn-primary' }, "Upgrade Plan")))))));
};
exports.UpgradePlan = UpgradePlan;
