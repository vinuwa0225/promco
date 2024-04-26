"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterInit = void 0;
var react_1 = require("react");
var components_1 = require("../assets/ts/components");
var core_1 = require("./core");
function MasterInit() {
    var config = (0, core_1.useLayout)().config;
    var isFirstRun = (0, react_1.useRef)(true);
    var pluginsInitialization = function () {
        isFirstRun.current = false;
        setTimeout(function () {
            components_1.ToggleComponent.bootstrap();
            components_1.ScrollTopComponent.bootstrap();
            components_1.DrawerComponent.bootstrap();
            components_1.StickyComponent.bootstrap();
            components_1.MenuComponent.bootstrap();
            components_1.ScrollComponent.bootstrap();
            components_1.SwapperComponent.bootstrap();
        }, 500);
    };
    (0, react_1.useEffect)(function () {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            pluginsInitialization();
        }
    }, [config]);
    return React.createElement(React.Fragment, null);
}
exports.MasterInit = MasterInit;
