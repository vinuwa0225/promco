"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsideMenu = void 0;
var react_1 = require("react");
var react_router_1 = require("react-router");
var clsx_1 = require("clsx");
var AsideMenuMain_1 = require("./AsideMenuMain");
var components_1 = require("../../../assets/ts/components");
var AsideMenu = function (_a) {
    var asideMenuCSSClasses = _a.asideMenuCSSClasses;
    var scrollRef = (0, react_1.useRef)(null);
    var pathname = (0, react_router_1.useLocation)().pathname;
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            components_1.DrawerComponent.reinitialization();
            components_1.ToggleComponent.reinitialization();
            components_1.ScrollComponent.reinitialization();
            if (scrollRef.current) {
                scrollRef.current.scrollTop = 0;
            }
        }, 50);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    return (react_1.default.createElement("div", { id: 'kt_aside_menu_wrapper', ref: scrollRef, className: 'hover-scroll-overlay-y my-5 my-lg-5', "data-kt-scroll": 'true', "data-kt-scroll-activate": '{default: false, lg: true}', "data-kt-scroll-height": 'auto', "data-kt-scroll-dependencies": '#kt_aside_logo, #kt_aside_footer', "data-kt-scroll-wrappers": '#kt_aside_menu', "data-kt-scroll-offset": '0' },
        react_1.default.createElement("div", { id: '#kt_aside_menu', "data-kt-menu": 'true', className: (0, clsx_1.default)('menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500', asideMenuCSSClasses.join(' ')) },
            react_1.default.createElement(AsideMenuMain_1.AsideMenuMain, null))));
};
exports.AsideMenu = AsideMenu;
