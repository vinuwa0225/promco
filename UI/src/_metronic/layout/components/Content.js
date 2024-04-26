"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = require("react");
var react_router_1 = require("react-router");
var clsx_1 = require("clsx");
var core_1 = require("../core");
var components_1 = require("../../assets/ts/components");
var Content = function (_a) {
    var children = _a.children;
    var classes = (0, core_1.useLayout)().classes;
    var location = (0, react_router_1.useLocation)();
    (0, react_1.useEffect)(function () {
        components_1.DrawerComponent.hideAll();
    }, [location]);
    return (react_1.default.createElement("div", { id: 'kt_content_container', className: (0, clsx_1.default)(classes.contentContainer.join(' ')) }, children));
};
exports.Content = Content;
