"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStickyOptions = exports.StickyComponent = void 0;
var index_1 = require("../_utils/index");
var defaultStickyOptions = {
    offset: 200,
    reverse: false,
    animation: true,
    animationSpeed: '0.3s',
    animationClass: 'animation-slide-in-down',
};
exports.defaultStickyOptions = defaultStickyOptions;
var StickyComponent = /** @class */ (function () {
    function StickyComponent(_element, options) {
        var _this = this;
        this.instanceName = '';
        this.scroll = function () {
            var offset = _this.getOption('offset');
            var reverse = _this.getOption('reverse');
            // Exit if false
            if (offset === false) {
                return;
            }
            var offsetNum = 0;
            if (typeof offset === 'string') {
                offsetNum = parseInt(offset);
            }
            var st = (0, index_1.getScrollTop)();
            // Reverse scroll mode
            if (reverse === true) {
                // Release on reverse scroll mode
                if (st > offsetNum && _this.lastScrollTop < st) {
                    if (document.body.hasAttribute(_this.attributeName) === false) {
                        _this.enable();
                        document.body.setAttribute(_this.attributeName, 'on');
                    }
                    if (_this.eventTriggerState === true) {
                        index_1.EventHandlerUtil.trigger(_this.element, 'kt.sticky.on');
                        index_1.EventHandlerUtil.trigger(_this.element, 'kt.sticky.change');
                        _this.eventTriggerState = false;
                    }
                }
                else {
                    // Back scroll mode
                    if (document.body.hasAttribute(_this.attributeName)) {
                        _this.disable();
                        document.body.removeAttribute(_this.attributeName);
                    }
                    if (_this.eventTriggerState === false) {
                        index_1.EventHandlerUtil.trigger(_this.element, 'kt.sticky.off');
                        index_1.EventHandlerUtil.trigger(_this.element, 'kt.sticky.change');
                        _this.eventTriggerState = true;
                    }
                }
                _this.lastScrollTop = st;
                return;
            }
            // Classic scroll mode
            if (st > offsetNum) {
                if (document.body.hasAttribute(_this.attributeName) === false) {
                    _this.enable();
                    document.body.setAttribute(_this.attributeName, 'on');
                }
                if (_this.eventTriggerState === true) {
                    index_1.EventHandlerUtil.trigger(_this.element, 'kt.sticky.on');
                    index_1.EventHandlerUtil.trigger(_this.element, 'kt.sticky.change');
                    _this.eventTriggerState = false;
                }
            }
            else {
                // back scroll mode
                if (document.body.hasAttribute(_this.attributeName) === true) {
                    _this.disable();
                    document.body.removeAttribute(_this.attributeName);
                }
                if (_this.eventTriggerState === false) {
                    index_1.EventHandlerUtil.trigger(_this.element, 'kt.sticky.off');
                    index_1.EventHandlerUtil.trigger(_this.element, 'kt.sticky.change');
                    _this.eventTriggerState = true;
                }
            }
        };
        this.getOption = function (name) {
            var dataStickyAttr = 'data-kt-sticky-' + name;
            if (_this.element.hasAttribute(dataStickyAttr) === true) {
                var attrValueInStr = _this.element.getAttribute(dataStickyAttr);
                var attrValue = (0, index_1.getAttributeValueByBreakpoint)(attrValueInStr || '');
                if (attrValue !== null && String(attrValue) === 'true') {
                    return true;
                }
                else if (attrValue !== null && String(attrValue) === 'false') {
                    return false;
                }
                return attrValue;
            }
            else {
                var optionName = (0, index_1.stringSnakeToCamel)(name);
                var option = (0, index_1.getObjectPropertyValueByKey)(_this.options, optionName);
                if (option) {
                    return (0, index_1.getAttributeValueByBreakpoint)(option);
                }
            }
        };
        this.disable = function () {
            index_1.ElementStyleUtil.remove(_this.element, 'top');
            index_1.ElementStyleUtil.remove(_this.element, 'width');
            index_1.ElementStyleUtil.remove(_this.element, 'left');
            index_1.ElementStyleUtil.remove(_this.element, 'right');
            index_1.ElementStyleUtil.remove(_this.element, 'z-index');
            index_1.ElementStyleUtil.remove(_this.element, 'position');
        };
        this.enable = function (update) {
            if (update === void 0) { update = false; }
            var top = _this.getOption('top');
            var left = _this.getOption('left');
            // const right = this.getOption("right");
            var width = _this.getOption('width');
            var zindex = _this.getOption('zindex');
            if (update !== true && _this.getOption('animation') === true) {
                index_1.ElementStyleUtil.set(_this.element, 'animationDuration', _this.getOption('animationSpeed'));
                index_1.ElementAnimateUtil.animateClass(_this.element, 'animation ' + _this.getOption('animationClass'));
            }
            if (zindex !== null) {
                index_1.ElementStyleUtil.set(_this.element, 'z-index', zindex);
                index_1.ElementStyleUtil.set(_this.element, 'position', 'fixed');
            }
            if (top !== null) {
                index_1.ElementStyleUtil.set(_this.element, 'top', top);
            }
            if (width !== null && width !== undefined) {
                var widthTarget = (0, index_1.getObjectPropertyValueByKey)(width, 'target');
                if (widthTarget) {
                    var targetElement = document.querySelector(widthTarget);
                    if (targetElement) {
                        width = (0, index_1.getCSS)(targetElement, 'width');
                    }
                }
                index_1.ElementStyleUtil.set(_this.element, 'width', width);
            }
            if (left !== null) {
                if (String(left).toLowerCase() === 'auto') {
                    var offsetLeft = (0, index_1.getElementOffset)(_this.element).left;
                    if (offsetLeft > 0) {
                        index_1.ElementStyleUtil.set(_this.element, 'left', String(offsetLeft) + 'px');
                    }
                }
            }
        };
        this.update = function () {
            if (document.body.hasAttribute(_this.attributeName) === true) {
                _this.disable();
                document.body.removeAttribute(_this.attributeName);
                _this.enable(true);
                document.body.setAttribute(_this.attributeName, 'on');
            }
        };
        // Event API
        this.on = function (name, callBack) {
            return index_1.EventHandlerUtil.on(_this.element, name, callBack);
        };
        this.one = function (name, callback) {
            return index_1.EventHandlerUtil.one(_this.element, name, callback);
        };
        this.off = function (name) {
            return index_1.EventHandlerUtil.off(_this.element, name);
        };
        this.trigger = function (name) {
            return index_1.EventHandlerUtil.trigger(_this.element, name);
        };
        this.element = _element;
        this.options = Object.assign(defaultStickyOptions, options);
        this.instanceUid = (0, index_1.getUniqueIdWithPrefix)('sticky');
        this.instanceName = this.element.getAttribute('data-kt-sticky-name');
        this.attributeName = 'data-kt-sticky-' + this.instanceName;
        this.eventTriggerState = true;
        this.lastScrollTop = 0;
        // Event Handlers
        window.addEventListener('scroll', this.scroll);
        // Initial Launch
        this.scroll();
        index_1.DataUtil.set(this.element, 'sticky', this);
    }
    // Static methods
    StickyComponent.hasInstace = function (element) {
        return index_1.DataUtil.has(element, 'sticky');
    };
    StickyComponent.getInstance = function (element) {
        if (element !== null && StickyComponent.hasInstace(element)) {
            return index_1.DataUtil.get(element, 'sticky');
        }
    };
    // Create Instances
    StickyComponent.createInstances = function (selector) {
        var elements = document.body.querySelectorAll(selector);
        elements.forEach(function (element) {
            var item = element;
            var sticky = StickyComponent.getInstance(item);
            if (!sticky) {
                sticky = new StickyComponent(item, defaultStickyOptions);
            }
        });
    };
    StickyComponent.bootstrap = function (attr) {
        if (attr === void 0) { attr = '[data-kt-sticky="true"]'; }
        StickyComponent.createInstances(attr);
    };
    StickyComponent.reInitialization = function (attr) {
        if (attr === void 0) { attr = '[data-kt-sticky="true"]'; }
        StickyComponent.createInstances(attr);
    };
    StickyComponent.createInsance = function (selector, options) {
        if (options === void 0) { options = defaultStickyOptions; }
        var element = document.body.querySelector(selector);
        if (!element) {
            return;
        }
        var item = element;
        var sticky = StickyComponent.getInstance(item);
        if (!sticky) {
            sticky = new StickyComponent(item, options);
        }
        return sticky;
    };
    return StickyComponent;
}());
exports.StickyComponent = StickyComponent;
