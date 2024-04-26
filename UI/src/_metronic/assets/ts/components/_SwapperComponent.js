"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSwapperQueires = exports.defaultSwapperOptions = exports.SwapperComponent = exports.SwapperStore = void 0;
var index_1 = require("../_utils/index");
var SwapperStore = /** @class */ (function () {
    function SwapperStore() {
    }
    SwapperStore.set = function (instanceId, drawerComponentObj) {
        if (SwapperStore.has(instanceId)) {
            return;
        }
        SwapperStore.store.set(instanceId, drawerComponentObj);
    };
    SwapperStore.get = function (instanceId) {
        if (!SwapperStore.has(instanceId)) {
            return;
        }
        return SwapperStore.store.get(instanceId);
    };
    SwapperStore.remove = function (instanceId) {
        if (!SwapperStore.has(instanceId)) {
            return;
        }
        SwapperStore.store.delete(instanceId);
    };
    SwapperStore.has = function (instanceId) {
        return SwapperStore.store.has(instanceId);
    };
    SwapperStore.getAllInstances = function () {
        return SwapperStore.store;
    };
    SwapperStore.store = new Map();
    return SwapperStore;
}());
exports.SwapperStore = SwapperStore;
var defaultSwapperOptions = {
    mode: 'append',
};
exports.defaultSwapperOptions = defaultSwapperOptions;
var defaultSwapperQueires = {
    componentName: 'swapper',
    instanseQuery: '[data-kt-swapper="true"]',
    attrQuery: 'data-kt-swapper-',
};
exports.defaultSwapperQueires = defaultSwapperQueires;
var SwapperComponent = /** @class */ (function () {
    function SwapperComponent(_element, _options, _queries) {
        var _this = this;
        ///////////////////////
        // ** Public API  ** //
        ///////////////////////
        this.update = function () {
            var _a;
            var parentSelector = (_a = _this.getOption('parent')) === null || _a === void 0 ? void 0 : _a.toString();
            var mode = _this.getOption('mode');
            var parentElement = parentSelector ? document.querySelector(parentSelector) : null;
            if (parentElement && _this.element.parentNode !== parentElement) {
                if (mode === 'prepend') {
                    parentElement.prepend(_this.element);
                }
                else if (mode === 'append') {
                    parentElement.append(_this.element);
                }
            }
        };
        // Event API
        this.on = function (name, handler) {
            return index_1.EventHandlerUtil.on(_this.element, name, handler);
        };
        this.one = function (name, handler) {
            return index_1.EventHandlerUtil.one(_this.element, name, handler);
        };
        this.off = function (name) {
            return index_1.EventHandlerUtil.off(_this.element, name);
        };
        this.trigger = function (name, event) {
            return index_1.EventHandlerUtil.trigger(_this.element, name, event);
        };
        this.element = _element;
        this.options = Object.assign(defaultSwapperOptions, _options);
        this.queries = _queries;
        // Initial update
        this.update();
        SwapperStore.set(this.element.id, this);
    }
    SwapperComponent.prototype.getOption = function (name) {
        var attr = this.element.getAttribute("".concat(this.queries.attrQuery).concat(name));
        if (attr) {
            var value = (0, index_1.getAttributeValueByBreakpoint)(attr);
            if (attr != null && String(value) === 'true') {
                return true;
            }
            else if (value !== null && String(value) === 'false') {
                return false;
            }
            return value;
        }
        else {
            var optionName = (0, index_1.stringSnakeToCamel)(name);
            var option = (0, index_1.getObjectPropertyValueByKey)(this.options, optionName);
            if (option) {
                return (0, index_1.getAttributeValueByBreakpoint)(option);
            }
            else {
                return null;
            }
        }
    };
    // Static methods
    SwapperComponent.getInstance = function (el, componentName) {
        if (componentName === void 0) { componentName = defaultSwapperQueires.componentName; }
        var place = SwapperStore.get(el.id);
        if (place) {
            return place;
        }
        return null;
    };
    SwapperComponent.createInstances = function (selector, options, queries) {
        if (selector === void 0) { selector = defaultSwapperQueires.instanseQuery; }
        if (options === void 0) { options = defaultSwapperOptions; }
        if (queries === void 0) { queries = defaultSwapperQueires; }
        var elements = document.body.querySelectorAll(selector);
        elements.forEach(function (el) {
            var item = el;
            var place = SwapperComponent.getInstance(item);
            if (!place) {
                place = new SwapperComponent(item, options, queries);
            }
        });
    };
    SwapperComponent.createInsance = function (selector, options, queries) {
        if (selector === void 0) { selector = defaultSwapperQueires.instanseQuery; }
        if (options === void 0) { options = defaultSwapperOptions; }
        if (queries === void 0) { queries = defaultSwapperQueires; }
        var element = document.body.querySelector(selector);
        if (!element) {
            return;
        }
        var item = element;
        var place = SwapperComponent.getInstance(item);
        if (!place) {
            place = new SwapperComponent(item, options, queries);
        }
        return place;
    };
    SwapperComponent.bootstrap = function (selector) {
        if (selector === void 0) { selector = defaultSwapperQueires.instanseQuery; }
        SwapperComponent.createInstances(selector);
    };
    SwapperComponent.reinitialization = function (selector) {
        if (selector === void 0) { selector = defaultSwapperQueires.instanseQuery; }
        SwapperComponent.createInstances(selector);
    };
    return SwapperComponent;
}());
exports.SwapperComponent = SwapperComponent;
// Window resize handler
window.addEventListener('resize', function () {
    var timer;
    (0, index_1.throttle)(timer, function () {
        // Locate and update Offcanvas instances on window resize
        var elements = document.querySelectorAll(defaultSwapperQueires.instanseQuery);
        elements.forEach(function (el) {
            var place = SwapperComponent.getInstance(el);
            if (place) {
                place.update();
            }
        });
    }, 200);
});
