"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPage = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Login_1 = require("./components/Login");
var helpers_1 = require("../../../_metronic/helpers");
function AuthPage() {
    (0, react_1.useEffect)(function () {
        document.body.classList.add('bg-white');
        return function () {
            document.body.classList.remove('bg-white');
        };
    }, []);
    return (react_1.default.createElement("div", { className: 'd-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed', style: {
            backgroundImage: "url(".concat((0, helpers_1.toAbsoluteUrl)('/media/illustrations/sketchy-1/14.png'), ")"),
        } },
        react_1.default.createElement("div", { className: 'd-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20' },
            react_1.default.createElement("div", { className: 'w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto' },
                react_1.default.createElement(react_router_dom_1.Switch, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/auth/login', component: Login_1.Login }),
                    react_1.default.createElement(react_router_dom_1.Redirect, { from: '/auth', exact: true, to: '/auth/login' }),
                    react_1.default.createElement(react_router_dom_1.Redirect, { to: '/auth/login' })))),
        react_1.default.createElement("div", { className: 'd-flex flex-center flex-column-auto p-10' },
            react_1.default.createElement("div", { className: 'd-flex align-items-center fw-bold fs-6' },
                react_1.default.createElement("span", { className: 'text-muted fw-bold me-2' },
                    new Date().getFullYear(),
                    " \u00A9"),
                react_1.default.createElement("a", { href: '#', className: 'text-gray-800 text-hover-primary' }, "MSIT")))));
}
exports.AuthPage = AuthPage;
