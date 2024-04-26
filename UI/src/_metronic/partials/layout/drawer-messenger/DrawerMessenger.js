"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerMessenger = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var ChatInner_1 = require("../../chat/ChatInner");
var DrawerMessenger = function () { return (react_1.default.createElement("div", { id: 'kt_drawer_chat', className: 'bg-white', "data-kt-drawer": 'true', "data-kt-drawer-name": 'chat', "data-kt-drawer-activate": 'true', "data-kt-drawer-overlay": 'true', "data-kt-drawer-width": "{default:'300px', 'md': '500px'}", "data-kt-drawer-direction": 'end', "data-kt-drawer-toggle": '#kt_drawer_chat_toggle', "data-kt-drawer-close": '#kt_drawer_chat_close' },
    react_1.default.createElement("div", { className: 'card w-100 rounded-0', id: 'kt_drawer_chat_messenger' },
        react_1.default.createElement("div", { className: 'card-header pe-5', id: 'kt_drawer_chat_messenger_header' },
            react_1.default.createElement("div", { className: 'card-title' },
                react_1.default.createElement("div", { className: 'd-flex justify-content-center flex-column me-3' },
                    react_1.default.createElement("a", { href: '#', className: 'fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1' }, "Brian Cox"),
                    react_1.default.createElement("div", { className: 'mb-0 lh-1' },
                        react_1.default.createElement("span", { className: 'badge badge-success badge-circle w-10px h-10px me-1' }),
                        react_1.default.createElement("span", { className: 'fs-7 fw-bold text-gray-400' }, "Active")))),
            react_1.default.createElement("div", { className: 'card-toolbar' },
                react_1.default.createElement("div", { className: 'me-2' },
                    react_1.default.createElement("button", { className: 'btn btn-sm btn-icon btn-active-light-primary', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end', "data-kt-menu-flip": 'top-end' },
                        react_1.default.createElement("i", { className: 'bi bi-three-dots fs-3' }))),
                react_1.default.createElement("div", { className: 'btn btn-sm btn-icon btn-active-light-primary', id: 'kt_drawer_chat_close' },
                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr061.svg', className: 'svg-icon-2' })))),
        react_1.default.createElement(ChatInner_1.ChatInner, { isDrawer: true })))); };
exports.DrawerMessenger = DrawerMessenger;
