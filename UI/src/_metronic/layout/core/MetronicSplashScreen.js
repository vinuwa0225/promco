"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutSplashScreen = exports.MetronicSplashScreenProvider = void 0;
var react_1 = require("react");
var MetronicSplashScreenContext = (0, react_1.createContext)(undefined);
var MetronicSplashScreenProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(0), count = _b[0], setCount = _b[1];
    var visible = count > 0;
    (0, react_1.useEffect)(function () {
        var splashScreen = document.getElementById('splash-screen');
        // Show SplashScreen
        if (splashScreen && visible) {
            splashScreen.classList.remove('hidden');
            return function () {
                splashScreen.classList.add('hidden');
            };
        }
        // Hide SplashScreen
        var timeout;
        if (splashScreen && !visible) {
            timeout = window.setTimeout(function () {
                splashScreen.classList.add('hidden');
            }, 3000);
        }
        return function () {
            clearTimeout(timeout);
        };
    }, [visible]);
    return (react_1.default.createElement(MetronicSplashScreenContext.Provider, { value: setCount }, children));
};
exports.MetronicSplashScreenProvider = MetronicSplashScreenProvider;
var LayoutSplashScreen = function (_a) {
    var _b = _a.visible, visible = _b === void 0 ? true : _b;
    // Everything are ready - remove splashscreen
    var setCount = (0, react_1.useContext)(MetronicSplashScreenContext);
    (0, react_1.useEffect)(function () {
        if (!visible) {
            return;
        }
        if (setCount) {
            setCount(function (prev) {
                return prev + 1;
            });
        }
        return function () {
            if (setCount) {
                setCount(function (prev) {
                    return prev - 1;
                });
            }
        };
    }, [setCount, visible]);
    return null;
};
exports.LayoutSplashScreen = LayoutSplashScreen;
