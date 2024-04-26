"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var core_1 = require("../core");
var Footer = function () {
    var classes = (0, core_1.useLayout)().classes;
    return (React.createElement("div", { className: 'footer py-4 d-flex flex-lg-column', id: 'kt_footer' },
        React.createElement("div", { className: "".concat(classes.footerContainer, " d-flex flex-column flex-md-row align-items-center justify-content-between") },
            React.createElement("div", { className: 'text-dark order-2 order-md-1' },
                React.createElement("span", { className: 'text-muted fw-bold me-2' },
                    new Date().getFullYear(),
                    " \u00A9"),
                React.createElement("a", { href: '#', className: 'text-gray-800 text-hover-primary' }, "MSIT")),
            React.createElement("ul", { className: 'menu menu-gray-600 menu-hover-primary fw-bold order-1' },
                React.createElement("li", { className: 'menu-item' },
                    React.createElement("a", { href: '#', className: 'menu-link ps-0 pe-2' }, process.env.REACT_APP_VERSION)),
                React.createElement("li", { className: 'menu-item' },
                    React.createElement("a", { target: '_blank', href: '#', className: 'menu-link pe-0 pe-2' }, "helpdesk"))))));
};
exports.Footer = Footer;
