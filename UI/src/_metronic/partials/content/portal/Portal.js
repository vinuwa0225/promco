"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
var react_1 = require("react");
var react_dom_1 = require("react-dom");
/**
 * React portal based on https://stackoverflow.com/a/59154364
 * @param children Child elements
 * @param className CSS classname
 * @param el HTML element to create.  default: div
 */
var Portal = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    var container = (0, react_1.useState)(document.createElement('div'))[0];
    if (className)
        container.classList.add(className);
    (0, react_1.useEffect)(function () {
        document.body.appendChild(container);
        return function () {
            document.body.removeChild(container);
        };
    }, []);
    return (0, react_dom_1.createPortal)(children, container);
};
exports.Portal = Portal;
