"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayout = exports.LayoutProvider = exports.LayoutContext = void 0;
var react_1 = require("react");
var DefaultLayoutConfig_1 = require("./DefaultLayoutConfig");
var LayoutSetup_1 = require("./LayoutSetup");
var LayoutContext = (0, react_1.createContext)({
    config: DefaultLayoutConfig_1.DefaultLayoutConfig,
    classes: (0, LayoutSetup_1.getEmptyCssClasses)(),
    attributes: (0, LayoutSetup_1.getEmptyHTMLAttributes)(),
    cssVariables: (0, LayoutSetup_1.getEmptyCSSVariables)(),
    setLayout: function (config) { },
});
exports.LayoutContext = LayoutContext;
var enableSplashScreen = function () {
    var splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        splashScreen.style.setProperty('display', 'flex');
    }
};
var disableSplashScreen = function () {
    var splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        splashScreen.style.setProperty('display', 'none');
    }
};
var LayoutProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(LayoutSetup_1.LayoutSetup.config), config = _b[0], setConfig = _b[1];
    var _c = (0, react_1.useState)(LayoutSetup_1.LayoutSetup.classes), classes = _c[0], setClasses = _c[1];
    var _d = (0, react_1.useState)(LayoutSetup_1.LayoutSetup.attributes), attributes = _d[0], setAttributes = _d[1];
    var _e = (0, react_1.useState)(LayoutSetup_1.LayoutSetup.cssVariables), cssVariables = _e[0], setCSSVariables = _e[1];
    var setLayout = function (_themeConfig) {
        enableSplashScreen();
        var bodyClasses = Array.from(document.body.classList);
        bodyClasses.forEach(function (cl) { return document.body.classList.remove(cl); });
        LayoutSetup_1.LayoutSetup.updatePartialConfig(_themeConfig);
        setConfig(Object.assign({}, LayoutSetup_1.LayoutSetup.config));
        setClasses(LayoutSetup_1.LayoutSetup.classes);
        setAttributes(LayoutSetup_1.LayoutSetup.attributes);
        setCSSVariables(LayoutSetup_1.LayoutSetup.cssVariables);
        setTimeout(function () {
            disableSplashScreen();
        }, 500);
    };
    var value = {
        config: config,
        classes: classes,
        attributes: attributes,
        cssVariables: cssVariables,
        setLayout: setLayout,
    };
    (0, react_1.useEffect)(function () {
        disableSplashScreen();
    }, []);
    return react_1.default.createElement(LayoutContext.Provider, { value: value }, children);
};
exports.LayoutProvider = LayoutProvider;
function useLayout() {
    return (0, react_1.useContext)(LayoutContext);
}
exports.useLayout = useLayout;
