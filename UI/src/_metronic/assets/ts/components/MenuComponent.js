"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMenuOptions = exports.MenuComponent = void 0;
var core_1 = require("@popperjs/core");
var index_1 = require("../_utils/index");
var defaultMenuOptions = {
    dropdown: {
        hoverTimeout: 200,
        zindex: 105,
    },
    accordion: {
        slideSpeed: 250,
        expand: false,
    },
};
exports.defaultMenuOptions = defaultMenuOptions;
var MenuComponent = /** @class */ (function () {
    function MenuComponent(_element, options) {
        var _this = this;
        this.triggerElement = null;
        // Set external trigger element
        this._setTriggerElement = function () {
            var target = document.querySelector("[data-kt-menu-target=\"#".concat(_this.element.getAttribute('id'), "\""));
            if (target) {
                _this.triggerElement = target;
            }
            else if (_this.element.closest('[data-kt-menu-trigger]')) {
                _this.triggerElement = _this.element.closest('[data-kt-menu-trigger]');
            }
            else if (_this.element.parentNode &&
                (0, index_1.getElementChild)(_this.element.parentNode, '[data-kt-menu-trigger]')) {
                var child = (0, index_1.getElementChild)(_this.element.parentNode, '[data-kt-menu-trigger]');
                if (child) {
                    _this.triggerElement = child;
                }
            }
            if (_this.triggerElement) {
                index_1.DataUtil.set(_this.triggerElement, 'menu', _this);
            }
        };
        // Test if menu has external trigger element
        this._isTriggerElement = function (item) {
            return _this.triggerElement === item;
        };
        // Get item option(through html attributes)
        this._getItemOption = function (item, name) {
            var value = null;
            if (item && item.hasAttribute('data-kt-menu-' + name)) {
                var attr = item.getAttribute('data-kt-menu-' + name) || '';
                value = (0, index_1.getAttributeValueByBreakpoint)(attr);
                if (value !== null && String(value) === 'true') {
                    value = true;
                }
                else if (value !== null && String(value) === 'false') {
                    value = false;
                }
            }
            return value;
        };
        // Get item element
        this._getItemElement = function (_element) {
            // Element is the external trigger element
            if (_this._isTriggerElement(_element)) {
                return _element;
            }
            // Element has item toggler attribute
            if (_element.hasAttribute('data-kt-menu-trigger')) {
                return _element;
            }
            // Element has item DOM reference in it's data storage
            var itemElement = index_1.DataUtil.get(_element, 'item');
            if (itemElement) {
                return itemElement;
            }
            // Item is parent of element
            var item = _element.closest('.menu-item[data-kt-menu-trigger]');
            if (item) {
                return item;
            }
            // Element's parent has item DOM reference in it's data storage
            var sub = _element.closest('.menu-sub');
            if (sub) {
                var subItem = index_1.DataUtil.get(sub, 'item');
                if (subItem) {
                    return subItem;
                }
            }
        };
        // Get item parent element
        this._getItemParentElement = function (item) {
            var sub = item.closest('.menu-sub');
            if (!sub) {
                return null;
            }
            var subItem = index_1.DataUtil.get(sub, 'item');
            if (subItem) {
                return subItem;
            }
            var parentItem = sub.closest('.menu-item[data-kt-menu-trigger]');
            if (sub && parentItem) {
                return parentItem;
            }
            return null;
        };
        // Get item parent elements
        this._getItemParentElements = function (item) {
            var parents = [];
            var parent;
            var i = 0;
            var buffer = item;
            do {
                parent = _this._getItemParentElement(buffer);
                if (parent) {
                    parents.push(parent);
                    buffer = parent;
                }
                i++;
            } while (parent !== null && i < 20);
            if (_this.triggerElement) {
                parents.unshift(_this.triggerElement);
            }
            return parents;
        };
        // Prepare popper config for dropdown(see: https://popper.js.org/docs/v2/)
        this._getDropdownPopperConfig = function (item) {
            // Placement
            var placementOption = _this._getItemOption(item, 'placement');
            var placement = 'right';
            if (placementOption) {
                placement = placementOption;
            }
            // Flip
            // const flipValue = this._getItemOption(item, 'flip')
            // const flip = flipValue ? flipValue.toString().split(',') : []
            // Offset
            var offsetValue = _this._getItemOption(item, 'offset');
            var offset = offsetValue ? offsetValue.toString().split(',') : [];
            // Strategy
            var strategy = _this._getItemOption(item, 'overflow') === true ? 'absolute' : 'fixed';
            return {
                placement: placement,
                strategy: strategy,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: offset,
                        },
                    },
                    {
                        name: 'preventOverflow',
                    },
                    {
                        name: 'flip',
                        options: {
                            // altBoundary: true,
                            // fallbackPlacements: flip,
                            flipVariations: false,
                        },
                    },
                ],
            };
        };
        // Get item child element
        this._getItemChildElement = function (item) {
            var selector = item;
            var subItem = index_1.DataUtil.get(item, 'sub');
            if (subItem) {
                selector = subItem;
            }
            if (selector) {
                //element = selector.querySelector('.show.menu-item[data-kt-menu-trigger]');
                var element = selector.querySelector('.menu-item[data-kt-menu-trigger]');
                if (element) {
                    return element;
                }
            }
            return null;
        };
        // Get item child elements
        this._getItemChildElements = function (item) {
            var children = [];
            var child;
            var i = 0;
            var buffer = item;
            do {
                child = _this._getItemChildElement(buffer);
                if (child) {
                    children.push(child);
                    buffer = child;
                }
                i++;
            } while (child !== null && i < 20);
            return children;
        };
        // Get item sub element
        this._getItemSubElement = function (item) {
            if (!item) {
                return null;
            }
            if (_this._isTriggerElement(item)) {
                return _this.element;
            }
            if (item.classList.contains('menu-sub')) {
                return item;
            }
            else if (index_1.DataUtil.has(item, 'sub')) {
                return index_1.DataUtil.get(item, 'sub');
            }
            else {
                return (0, index_1.getElementChild)(item, '.menu-sub');
            }
        };
        this._getCss = function (el, styleProp) {
            var defaultView = (el.ownerDocument || document).defaultView;
            if (!defaultView) {
                return '';
            }
            // sanitize property name to css notation
            // (hyphen separated words eg. font-Size)
            styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
            return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        };
        // Get item sub type
        this._getItemSubType = function (element) {
            var sub = _this._getItemSubElement(element);
            if (sub && parseInt(_this._getCss(sub, 'z-index')) > 0) {
                return 'dropdown';
            }
            else {
                return 'accordion';
            }
        };
        // Test if item's sub is shown
        this._isItemSubShown = function (item) {
            var sub = _this._getItemSubElement(item);
            if (sub) {
                if (_this._getItemSubType(item) === 'dropdown') {
                    return sub.classList.contains('show') && sub.hasAttribute('data-popper-placement');
                }
                else {
                    return item.classList.contains('show');
                }
            }
            return false;
        };
        // Test if item dropdown is permanent
        this._isItemDropdownPermanent = function (item) {
            return _this._getItemOption(item, 'permanent') === true;
        };
        // Test if item's parent is shown
        this._isItemParentShown = function (item) {
            return (0, index_1.getElementParents)(item, '.menu-item.show').length > 0;
        };
        // Test of it is item sub element
        this._isItemSubElement = function (item) {
            return item.classList.contains('menu-sub');
        };
        // Test if item has sub
        this._hasItemSub = function (item) {
            return item.classList.contains('menu-item') && item.hasAttribute('data-kt-menu-trigger');
        };
        // Get link element
        this._getItemLinkElement = function (item) {
            return (0, index_1.getElementChild)(item, '.menu-link');
        };
        // Get toggle element
        this._getItemToggleElement = function (item) {
            if (_this.triggerElement) {
                return _this.triggerElement;
            }
            return _this._getItemLinkElement(item);
        };
        // Show item dropdown
        this._showDropdown = function (item) {
            if (index_1.EventHandlerUtil.trigger(_this.element, 'kt.menu.dropdown.show') === false) {
                return;
            }
            // Hide all currently shown dropdowns except current one
            MenuComponent.hideDropdowns(item);
            // const toggle = this._isTriggerElement(item) ? item : this._getItemLinkElement(item);
            var sub = _this._getItemSubElement(item);
            var width = _this._getItemOption(item, 'width');
            var height = _this._getItemOption(item, 'height');
            var zindex = _this.options.dropdown.zindex;
            var parentZindex = (0, index_1.getHighestZindex)(item); // update
            // Apply a new z-index if dropdown's toggle element or it's parent has greater z-index // update
            if (parentZindex !== null && parentZindex >= zindex) {
                zindex = parentZindex + 1;
            }
            if (zindex) {
                index_1.ElementStyleUtil.set(sub, 'z-index', zindex);
            }
            if (width) {
                index_1.ElementStyleUtil.set(sub, 'width', width);
            }
            if (height) {
                index_1.ElementStyleUtil.set(sub, 'height', height);
            }
            _this.initDropdownPopper(item, sub);
            item.classList.add('show');
            item.classList.add('menu-dropdown');
            sub.classList.add('show');
            // Append the sub the the root of the menu
            if (_this._getItemOption(item, 'overflow') === true) {
                document.body.appendChild(sub);
                index_1.DataUtil.set(item, 'sub', sub);
                index_1.DataUtil.set(sub, 'item', item);
                index_1.DataUtil.set(sub, 'menu', _this);
            }
            else {
                index_1.DataUtil.set(sub, 'item', item);
            }
            index_1.EventHandlerUtil.trigger(_this.element, 'kt.menu.dropdown.shown');
        };
        // Init dropdown popper(new)
        this.initDropdownPopper = function (item, sub) {
            // Setup popper instance
            var reference;
            var attach = _this._getItemOption(item, 'attach');
            if (attach) {
                if (attach === 'parent') {
                    reference = item.parentNode;
                }
                else {
                    reference = document.querySelector(attach);
                }
            }
            else {
                reference = item;
            }
            if (reference) {
                var popper = (0, core_1.createPopper)(reference, sub, _this._getDropdownPopperConfig(item));
                index_1.DataUtil.set(item, 'popper', popper);
            }
        };
        // Hide item dropdown
        this._hideDropdown = function (item) {
            if (index_1.EventHandlerUtil.trigger(_this.element, 'kt.menu.dropdown.hide') === false) {
                return;
            }
            var sub = _this._getItemSubElement(item);
            index_1.ElementStyleUtil.set(sub, 'z-index', '');
            index_1.ElementStyleUtil.set(sub, 'width', '');
            index_1.ElementStyleUtil.set(sub, 'height', '');
            item.classList.remove('show');
            item.classList.remove('menu-dropdown');
            sub.classList.remove('show');
            // Append the sub back to it's parent
            if (_this._getItemOption(item, 'overflow') === true) {
                if (item.classList.contains('menu-item')) {
                    item.appendChild(sub);
                }
                else {
                    (0, index_1.insertAfterElement)(_this.element, item);
                }
                index_1.DataUtil.remove(item, 'sub');
                index_1.DataUtil.remove(sub, 'item');
                index_1.DataUtil.remove(sub, 'menu');
            }
            if (index_1.DataUtil.has(item, 'popper') === true) {
                index_1.DataUtil.get(item, 'popper').destroy();
                index_1.DataUtil.remove(item, 'popper');
            }
            // Destroy popper(new)
            _this.destroyDropdownPopper(item);
            index_1.EventHandlerUtil.trigger(_this.element, 'kt.menu.dropdown.hidden');
        };
        // Destroy dropdown popper(new)
        this.destroyDropdownPopper = function (item) {
            if (index_1.DataUtil.has(item, 'popper') === true) {
                index_1.DataUtil.get(item, 'popper').destroy();
                index_1.DataUtil.remove(item, 'popper');
            }
            index_1.EventHandlerUtil.trigger(_this.element, 'kt.menu.dropdown.hidden');
        };
        this._showAccordion = function (item) {
            if (index_1.EventHandlerUtil.trigger(_this.element, 'kt.menu.accordion.show') === false) {
                return;
            }
            if (_this.options.accordion.expand === false) {
                _this._hideAccordions(item);
            }
            if (index_1.DataUtil.has(item, 'popper') === true) {
                _this._hideDropdown(item);
            }
            item.classList.add('hover'); // updateWW
            item.classList.add('showing');
            var subElement = _this._getItemSubElement(item);
            if (subElement) {
                var sub_1 = subElement;
                (0, index_1.slideDown)(sub_1, _this.options.accordion.slideSpeed, function () {
                    item.classList.remove('showing');
                    item.classList.add('show');
                    sub_1.classList.add('show');
                    index_1.EventHandlerUtil.trigger(_this.element, 'kt.menu.accordion.shown');
                });
            }
        };
        this._hideAccordion = function (item) {
            if (index_1.EventHandlerUtil.trigger(_this.element, 'kt.menu.accordion.hide') === false) {
                return;
            }
            var sub = _this._getItemSubElement(item);
            item.classList.add('hiding');
            if (sub) {
                (0, index_1.slideUp)(sub, _this.options.accordion.slideSpeed, function () {
                    item.classList.remove('hiding');
                    item.classList.remove('show');
                    sub.classList.remove('show');
                    item.classList.remove('hover'); // update
                    index_1.EventHandlerUtil.trigger(_this.element, 'kt.menu.accordion.hidden');
                });
            }
        };
        // Hide all shown accordions of item
        this._hideAccordions = function (item) {
            var itemsToHide = _this.element.querySelectorAll('.show[data-kt-menu-trigger]');
            if (itemsToHide && itemsToHide.length > 0) {
                for (var i = 0, len = itemsToHide.length; i < len; i++) {
                    var itemToHide = itemsToHide[i];
                    if (_this._getItemSubType(itemToHide) === 'accordion' &&
                        itemToHide !== item &&
                        item.contains(itemToHide) === false &&
                        itemToHide.contains(item) === false) {
                        _this._hideAccordion(itemToHide);
                    }
                }
            }
        };
        // Event Handlers
        // Reset item state classes if item sub type changed
        this._reset = function (item) {
            if (_this._hasItemSub(item) === false) {
                return;
            }
            var sub = _this._getItemSubElement(item);
            // Reset sub state if sub type is changed during the window resize
            if (index_1.DataUtil.has(item, 'type') && index_1.DataUtil.get(item, 'type') !== _this._getItemSubType(item)) {
                // updated
                item.classList.remove('hover');
                item.classList.remove('show');
                item.classList.remove('show');
                if (sub && sub.removeClass) {
                    sub.removeClass(sub, 'show');
                }
            } // updated
        };
        // TODO: not done
        this._destroy = function () { };
        // Update all item state classes if item sub type changed
        this._update = function () {
            var items = _this.element.querySelectorAll('.menu-item[data-kt-menu-trigger]');
            items.forEach(function (el) { return _this._reset(el); });
        };
        // Hide item sub
        this._hide = function (item) {
            if (!item) {
                return;
            }
            if (_this._isItemSubShown(item) === false) {
                return;
            }
            if (_this._getItemSubType(item) === 'dropdown') {
                _this._hideDropdown(item);
            }
            else if (_this._getItemSubType(item) === 'accordion') {
                _this._hideAccordion(item);
            }
        };
        // Show item sub
        this._show = function (item) {
            if (!item) {
                return;
            }
            if (_this._isItemSubShown(item) === true) {
                return;
            }
            if (_this._getItemSubType(item) === 'dropdown') {
                _this._showDropdown(item); // // show current dropdown
            }
            else if (_this._getItemSubType(item) === 'accordion') {
                _this._showAccordion(item);
            }
            // Remember last submenu type
            index_1.DataUtil.set(item, 'type', _this._getItemSubType(item)); // updated
        };
        // Toggle item sub
        this._toggle = function (item) {
            if (!item) {
                return;
            }
            if (_this._isItemSubShown(item) === true) {
                _this._hide(item);
            }
            else {
                _this._show(item);
            }
        };
        // Mouseout handle
        this._mouseout = function (element, e) {
            var item = _this._getItemElement(element);
            if (!item) {
                return;
            }
            if (_this._getItemOption(item, 'trigger') !== 'hover') {
                return;
            }
            var timeout = setTimeout(function () {
                if (index_1.DataUtil.get(item, 'hover') === '1') {
                    _this._hide(item);
                }
            }, _this.options.dropdown.hoverTimeout);
            index_1.DataUtil.set(item, 'hover', '1');
            index_1.DataUtil.set(item, 'timeout', timeout);
        };
        // Mouseover handle
        this._mouseover = function (element, e) {
            var item = _this._getItemElement(element);
            if (!item) {
                return;
            }
            if (_this._getItemOption(item, 'trigger') !== 'hover') {
                return;
            }
            if (index_1.DataUtil.get(item, 'hover') === '1') {
                clearTimeout(index_1.DataUtil.get(item, 'timeout'));
                index_1.DataUtil.remove(item, 'hover');
                index_1.DataUtil.remove(item, 'timeout');
            }
            _this._show(item);
        };
        // Dismiss handler
        this._dismiss = function (element, e) {
            var item = _this._getItemElement(element);
            var items = _this._getItemChildElements(item);
            //if ( item !== null && _getItemOption(item, 'trigger') === 'click' &&  _getItemSubType(item) === 'dropdown' ) {
            var itemSubType = _this._getItemSubType(item);
            if (item !== null && itemSubType === 'dropdown') {
                _this._hide(item); // hide items dropdown
                // Hide all child elements as well
                if (items.length > 0) {
                    for (var i = 0, len = items.length; i < len; i++) {
                        //if ( _getItemOption(item, 'trigger') === 'click' &&  _getItemSubType(item) === 'dropdown' ) {
                        if (items[i] !== null && _this._getItemSubType(items[i]) === 'dropdown') {
                            _this._hide(items[i]);
                        }
                    }
                }
            }
        };
        // Link handler
        this._link = function (element, e) {
            if (index_1.EventHandlerUtil.trigger(_this.element, 'kt.menu.link.click') === false) {
                return;
            }
            // Dismiss all shown dropdowns
            MenuComponent.hideDropdowns(undefined);
            index_1.EventHandlerUtil.trigger(_this.element, 'kt.menu.link.clicked');
        };
        this._click = function (element, e) {
            e.preventDefault();
            var item = _this._getItemElement(element);
            if (_this._getItemOption(item, 'trigger') !== 'click') {
                return;
            }
            if (_this._getItemOption(item, 'toggle') === false) {
                _this._show(item);
            }
            else {
                _this._toggle(item);
            }
        };
        ///////////////////////
        // ** Public API  ** //
        ///////////////////////
        this.click = function (element, e) {
            return _this._click(element, e);
        };
        this.link = function (element, e) {
            return _this._link(element, e);
        };
        this.dismiss = function (element, e) {
            return _this._dismiss(element, e);
        };
        this.mouseover = function (element, e) {
            return _this._mouseover(element, e);
        };
        this.mouseout = function (element, e) {
            return _this._mouseout(element, e);
        };
        // General Methods
        this.getItemTriggerType = function (item) {
            return _this._getItemOption(item, 'trigger');
        };
        this.getItemSubType = function (element) {
            return _this._getItemSubType(element);
        };
        this.show = function (item) {
            return _this._show(item);
        };
        this.hide = function (item) {
            return _this._hide(item);
        };
        this.reset = function (item) {
            return _this._reset(item);
        };
        this.update = function () {
            return _this._update();
        };
        this.getElement = function () {
            return _this.element;
        };
        this.getItemLinkElement = function (item) {
            return _this._getItemLinkElement(item);
        };
        this.getItemToggleElement = function (item) {
            return _this._getItemToggleElement(item);
        };
        this.getItemSubElement = function (item) {
            return _this._getItemSubElement(item);
        };
        this.getItemParentElements = function (item) {
            return _this._getItemParentElements(item);
        };
        this.isItemSubShown = function (item) {
            return _this._isItemSubShown(item);
        };
        this.isItemParentShown = function (item) {
            return _this._isItemParentShown(item);
        };
        this.getTriggerElement = function () {
            return _this.triggerElement;
        };
        this.isItemDropdownPermanent = function (item) {
            return _this._isItemDropdownPermanent(item);
        };
        // Accordion Mode Methods
        this.hideAccordions = function (item) {
            return _this._hideAccordions(item);
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
        this.element = _element;
        this.options = Object.assign(defaultMenuOptions, options);
        this.instanceUid = (0, index_1.getUniqueIdWithPrefix)('menu');
        // this.element.setAttribute('data-kt-menu', 'true')
        this._setTriggerElement();
        this._update();
        index_1.DataUtil.set(this.element, 'menu', this);
        return this;
    }
    // public static methods
    // Get KTMenu instance by element
    MenuComponent.getInstance = function (element) {
        // Element has menu DOM reference in it's DATA storage
        var elementMenu = index_1.DataUtil.get(element, 'menu');
        if (elementMenu) {
            return elementMenu;
        }
        // Element has .menu parent
        var menu = element.closest('.menu');
        if (menu) {
            var menuData = index_1.DataUtil.get(menu, 'menu');
            if (menuData) {
                return menuData;
            }
        }
        // Element has a parent with DOM reference to .menu in it's DATA storage
        if (element.classList.contains('menu-link')) {
            var sub = element.closest('.menu-sub');
            if (sub) {
                var subMenu = index_1.DataUtil.get(sub, 'menu');
                if (subMenu) {
                    return subMenu;
                }
            }
        }
        return null;
    };
    // Hide all dropdowns and skip one if provided
    MenuComponent.hideDropdowns = function (skip) {
        var items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]');
        if (items && items.length > 0) {
            for (var i = 0, len = items.length; i < len; i++) {
                var item = items[i];
                var menu = MenuComponent.getInstance(item);
                if (menu && menu.getItemSubType(item) === 'dropdown') {
                    if (skip) {
                        if (menu.getItemSubElement(item).contains(skip) === false &&
                            item.contains(skip) === false &&
                            item !== skip) {
                            menu.hide(item);
                        }
                    }
                    else {
                        menu.hide(item);
                    }
                }
            }
        }
    };
    MenuComponent.updateDropdowns = function () {
        var items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]');
        if (items && items.length > 0) {
            for (var i = 0, len = items.length; i < len; i++) {
                var item = items[i];
                if (index_1.DataUtil.has(item, 'popper')) {
                    index_1.DataUtil.get(item, 'popper').forceUpdate();
                }
            }
        }
    };
    // Global handlers
    MenuComponent.createInstances = function (selector) {
        // Initialize menus
        document.querySelectorAll(selector).forEach(function (el) {
            var menuItem = el;
            var menuInstance = MenuComponent.getInstance(menuItem);
            if (!menuInstance) {
                menuInstance = new MenuComponent(el, defaultMenuOptions);
            }
        });
    };
    MenuComponent.initGlobalHandlers = function () {
        // Dropdown handler
        document.addEventListener('click', function (e) {
            var menuItems = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]');
            if (menuItems && menuItems.length > 0) {
                for (var i = 0; i < menuItems.length; i++) {
                    var item = menuItems[i];
                    var menuObj = MenuComponent.getInstance(item);
                    if (menuObj && menuObj.getItemSubType(item) === 'dropdown') {
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        var menu = menuObj.getElement();
                        var sub = menuObj.getItemSubElement(item);
                        if (item === e.target || item.contains(e.target)) {
                            continue;
                        }
                        if (sub && (sub === e.target || sub.contains(e.target))) {
                            continue;
                        }
                        menuObj.hide(item);
                    }
                }
            }
        });
        // Sub toggle handler
        index_1.DOMEventHandlerUtil.on(document.body, '.menu-item[data-kt-menu-trigger] > .menu-link, [data-kt-menu-trigger]:not(.menu-item):not([data-kt-menu-trigger="auto"])', 'click', function (e) {
            var menu = MenuComponent.getInstance(this);
            if (menu) {
                return menu.click(this, e);
            }
        });
        // // Link handler
        index_1.DOMEventHandlerUtil.on(document.body, '.menu-item:not([data-kt-menu-trigger]) > .menu-link', 'click', function (e) {
            e.stopPropagation();
            var menu = MenuComponent.getInstance(this);
            if (menu && menu.link) {
                return menu.link(this, e);
            }
        });
        // Dismiss handler
        index_1.DOMEventHandlerUtil.on(document.body, '[data-kt-menu-dismiss="true"]', 'click', function (e) {
            var menu = MenuComponent.getInstance(this);
            if (menu) {
                return menu.dismiss(this, e);
            }
        });
        // Mouseover handler
        index_1.DOMEventHandlerUtil.on(document.body, '[data-kt-menu-trigger], .menu-sub', 'mouseover', function (e) {
            var menu = MenuComponent.getInstance(this);
            if (menu && menu.getItemSubType(this) === 'dropdown') {
                return menu.mouseover(this, e);
            }
        });
        // Mouseout handler
        index_1.DOMEventHandlerUtil.on(document.body, '[data-kt-menu-trigger], .menu-sub', 'mouseout', function (e) {
            var menu = MenuComponent.getInstance(this);
            if (menu && menu.getItemSubType(this) === 'dropdown') {
                return menu.mouseout(this, e);
            }
        });
        // Resize handler
        window.addEventListener('resize', function () {
            var timer;
            (0, index_1.throttle)(timer, function () {
                // Locate and update Drawer instances on window resize
                var elements = document.querySelectorAll('[data-kt-menu="true"]');
                elements.forEach(function (el) {
                    var menu = MenuComponent.getInstance(el);
                    if (menu) {
                        menu.update();
                    }
                });
            }, 200);
        });
    };
    MenuComponent.bootstrap = function () {
        MenuComponent.initGlobalHandlers();
        MenuComponent.createInstances('[data-kt-menu="true"]');
    };
    MenuComponent.reinitialization = function () {
        MenuComponent.createInstances('[data-kt-menu="true"]');
    };
    MenuComponent.createInsance = function (selector, options) {
        if (options === void 0) { options = defaultMenuOptions; }
        var element = document.body.querySelector(selector);
        if (!element) {
            return;
        }
        var item = element;
        var menu = MenuComponent.getInstance(item);
        if (!menu) {
            menu = new MenuComponent(item, options);
        }
        return menu;
    };
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
