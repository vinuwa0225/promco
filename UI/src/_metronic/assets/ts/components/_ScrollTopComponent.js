"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultScrollTopOptions = exports.ScrollTopComponent = void 0;
var index_1 = require("../_utils/index");
var defaultScrollTopOptions = {
    offset: 200,
    speed: 600,
};
exports.defaultScrollTopOptions = defaultScrollTopOptions;
var ScrollTopComponent = /** @class */ (function () {
    function ScrollTopComponent(_element, options) {
        var _this = this;
        this._handlers = function () {
            var timer;
            window.addEventListener('scroll', function () {
                (0, index_1.throttle)(timer, function () {
                    _this._scroll();
                });
            });
            _this.element.addEventListener('click', function (e) {
                e.preventDefault();
                _this._go();
            });
        };
        this._scroll = function () {
            var offset = parseInt(_this._getOption('offset'));
            var pos = (0, index_1.getScrollTop)(); // current vertical position
            if (pos > offset) {
                if (!document.body.hasAttribute('data-kt-scrolltop')) {
                    document.body.setAttribute('data-kt-scrolltop', 'on');
                }
            }
            else {
                if (document.body.hasAttribute('data-kt-scrolltop')) {
                    document.body.removeAttribute('data-kt-scrolltop');
                }
            }
        };
        this._go = function () {
            var speed = parseInt(_this._getOption('speed'));
            index_1.ElementAnimateUtil.scrollTop(0, speed);
        };
        this._getOption = function (name) {
            var attr = _this.element.getAttribute("data-kt-scrolltop-".concat(name));
            if (attr) {
                var value = (0, index_1.getAttributeValueByBreakpoint)(attr);
                return value !== null && String(value) === 'true';
            }
            var optionName = (0, index_1.stringSnakeToCamel)(name);
            var option = (0, index_1.getObjectPropertyValueByKey)(_this.options, optionName);
            if (option) {
                return (0, index_1.getAttributeValueByBreakpoint)(option);
            }
            return null;
        };
        ///////////////////////
        // ** Public API  ** //
        ///////////////////////
        // Plugin API
        this.go = function () {
            return _this._go();
        };
        this.getElement = function () {
            return _this.element;
        };
        this.element = _element;
        this.options = Object.assign(defaultScrollTopOptions, options);
        this.instanceUid = (0, index_1.getUniqueIdWithPrefix)('scrolltop');
        // Event Handlers
        this._handlers();
        // Bind Instance
        index_1.DataUtil.set(this.element, 'scrolltop', this);
    }
    // Static methods
    ScrollTopComponent.getInstance = function (el) {
        var scrollTop = index_1.DataUtil.get(el, 'scrolltop');
        if (scrollTop) {
            return scrollTop;
        }
        return null;
    };
    ScrollTopComponent.createInstances = function (selector) {
        var elements = document.body.querySelectorAll(selector);
        elements.forEach(function (el) {
            var item = el;
            var scrollTop = ScrollTopComponent.getInstance(item);
            if (!scrollTop) {
                scrollTop = new ScrollTopComponent(item, defaultScrollTopOptions);
            }
        });
    };
    ScrollTopComponent.createInsance = function (selector, options) {
        if (options === void 0) { options = defaultScrollTopOptions; }
        var element = document.body.querySelector(selector);
        if (!element) {
            return;
        }
        var item = element;
        var scrollTop = ScrollTopComponent.getInstance(item);
        if (!scrollTop) {
            scrollTop = new ScrollTopComponent(item, options);
        }
        return scrollTop;
    };
    ScrollTopComponent.bootstrap = function () {
        ScrollTopComponent.createInstances('[data-kt-scrolltop="true"]');
    };
    ScrollTopComponent.reinitialization = function () {
        ScrollTopComponent.createInstances('[data-kt-scrolltop="true"]');
    };
    ScrollTopComponent.goTop = function () {
        index_1.ElementAnimateUtil.scrollTop(0, defaultScrollTopOptions.speed);
    };
    return ScrollTopComponent;
}());
exports.ScrollTopComponent = ScrollTopComponent;
