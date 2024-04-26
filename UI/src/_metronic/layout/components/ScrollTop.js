"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollTop = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var components_1 = require("../../assets/ts/components");
var helpers_1 = require("../../helpers");
function ScrollTop() {
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    var isFirstRun = (0, react_1.useRef)(true);
    var pluginsReinitialization = function () {
        setTimeout(function () {
            components_1.StickyComponent.reInitialization();
            setTimeout(function () {
                components_1.ToggleComponent.reinitialization();
                components_1.DrawerComponent.reinitialization();
            }, 70);
        }, 140);
    };
    var scrollTop = function () {
        components_1.ScrollTopComponent.goTop();
    };
    var updateHeaderSticky = function () {
        var stickyHeader = document.body.querySelectorAll("[data-kt-sticky-name=\"header\"]");
        if (stickyHeader && stickyHeader.length > 0) {
            var sticky = components_1.StickyComponent.getInstance(stickyHeader[0]);
            if (sticky) {
                sticky.update();
            }
        }
    };
    (0, react_1.useEffect)(function () {
        if (isFirstRun.current) {
            isFirstRun.current = false;
        }
        else {
            pluginsReinitialization();
        }
        updateHeaderSticky();
        setTimeout(function () {
            scrollTop();
        }, 0);
    }, [pathname]);
    return (react_1.default.createElement("div", { id: 'kt_scrolltop', className: 'scrolltop', "data-kt-scrolltop": 'true' },
        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr066.svg' })));
}
exports.ScrollTop = ScrollTop;
