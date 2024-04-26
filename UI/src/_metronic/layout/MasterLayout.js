"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterLayout = void 0;
var react_1 = require("react");
var AsideDefault_1 = require("./components/aside/AsideDefault");
var Footer_1 = require("./components/Footer");
var HeaderWrapper_1 = require("./components/header/HeaderWrapper");
var ScrollTop_1 = require("./components/ScrollTop");
var Content_1 = require("./components/Content");
var core_1 = require("./core");
var react_router_dom_1 = require("react-router-dom");
var partials_1 = require("../partials");
var components_1 = require("../assets/ts/components");
var MasterLayout = function (_a) {
    var children = _a.children;
    var location = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            components_1.MenuComponent.reinitialization();
        }, 500);
    }, []);
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            components_1.MenuComponent.reinitialization();
        }, 500);
    }, [location.key]);
    return (react_1.default.createElement(core_1.PageDataProvider, null,
        react_1.default.createElement("div", { className: 'page d-flex flex-row flex-column-fluid' },
            react_1.default.createElement(AsideDefault_1.AsideDefault, null),
            "   ",
            react_1.default.createElement("div", { className: 'wrapper d-flex flex-column flex-row-fluid', id: 'kt_wrapper' },
                react_1.default.createElement(HeaderWrapper_1.HeaderWrapper, null),
                react_1.default.createElement("div", { className: 'post d-flex flex-column-fluid', style: { marginTop: "-30px" }, id: 'kt_post' },
                    react_1.default.createElement(Content_1.Content, null, children)),
                react_1.default.createElement(Footer_1.Footer, null))),
        react_1.default.createElement(partials_1.Main, null),
        react_1.default.createElement(partials_1.InviteUsers, null),
        react_1.default.createElement(partials_1.UpgradePlan, null),
        react_1.default.createElement(ScrollTop_1.ScrollTop, null)));
};
exports.MasterLayout = MasterLayout;
