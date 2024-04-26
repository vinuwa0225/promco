"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsPage = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Error500_1 = require("./components/Error500");
var Error404_1 = require("./components/Error404");
var helpers_1 = require("../../../_metronic/helpers");
var ErrorsPage = function () {
    var history = (0, react_router_dom_1.useHistory)();
    var redirectToDashboard = function () {
        history.push('/');
    };
    return (react_1.default.createElement("div", { className: 'd-flex flex-column flex-root' },
        react_1.default.createElement("div", { className: 'd-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed', style: { backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/illustrations/progress-hd.png'), "')") } },
            react_1.default.createElement("div", { className: 'd-flex flex-column flex-column-fluid text-center p-10 py-lg-20' },
                react_1.default.createElement("a", { href: '/dashboard', className: 'mb-10 pt-lg-20' },
                    react_1.default.createElement("img", { alt: 'Logo', src: (0, helpers_1.toAbsoluteUrl)('/media/logos/TASLOGO.png'), className: 'h-50px mb-5' })),
                react_1.default.createElement("div", { className: 'pt-lg-10 mb-10' },
                    react_1.default.createElement(react_router_dom_1.Switch, null,
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/error/404', exact: true },
                            react_1.default.createElement(Error404_1.Error404, null)),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/error/500', exact: true },
                            react_1.default.createElement(Error500_1.Error500, null)),
                        react_1.default.createElement(react_router_dom_1.Redirect, { from: '/error', exact: true, to: '/error/404' }),
                        react_1.default.createElement(react_router_dom_1.Redirect, { to: '/error/404' })),
                    react_1.default.createElement("div", { className: 'text-center' },
                        react_1.default.createElement("a", { onClick: redirectToDashboard, className: 'btn btn-lg btn-primary fw-bolder' }, "Go to homepage"))),
                react_1.default.createElement("div", { className: '\r\n          d-flex\r\n          flex-row-auto\r\n          bgi-no-repeat\r\n          bgi-position-x-center\r\n          bgi-size-contain\r\n          bgi-position-y-bottom\r\n          min-h-100px min-h-lg-350px\r\n        ', style: {
                        backgroundImage: "url('".concat((0, helpers_1.toAbsoluteUrl)('/media/illustrations/sketchy-1/17.png'), "')"),
                    } })),
            react_1.default.createElement("div", { className: 'd-flex flex-center flex-column-auto p-10' },
                react_1.default.createElement("div", { className: 'd-flex align-items-center fw-bold fs-6' },
                    react_1.default.createElement("a", { href: 'https://keenthemes.com', className: 'text-muted text-hover-primary px-2' }, "About"),
                    react_1.default.createElement("a", { href: 'mailto:support@keenthemes.com', className: 'text-muted text-hover-primary px-2' }, "Contact"),
                    react_1.default.createElement("a", { href: 'https://1.envato.market/EA4JP', className: 'text-muted text-hover-primary px-2' }, "Contact Us"))))));
};
exports.ErrorsPage = ErrorsPage;
