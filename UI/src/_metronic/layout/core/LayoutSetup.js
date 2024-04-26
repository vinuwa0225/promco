"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutSetup = exports.getEmptyCSSVariables = exports.getEmptyHTMLAttributes = exports.getEmptyCssClasses = exports.getLayout = void 0;
var DefaultLayoutConfig_1 = require("./DefaultLayoutConfig");
var LAYOUT_CONFIG_KEY = process.env.REACT_APP_BASE_LAYOUT_CONFIG_KEY || 'LayoutConfig';
function getLayout() {
    var ls = localStorage.getItem(LAYOUT_CONFIG_KEY);
    if (ls) {
        try {
            return JSON.parse(ls);
        }
        catch (er) {
            console.error(er);
        }
    }
    return DefaultLayoutConfig_1.DefaultLayoutConfig;
}
exports.getLayout = getLayout;
function setLayout(config) {
    try {
        localStorage.setItem(LAYOUT_CONFIG_KEY, JSON.stringify(config));
    }
    catch (er) {
        console.error(er);
    }
}
function getEmptyCssClasses() {
    return {
        header: [],
        headerContainer: [],
        headerMobile: [],
        headerMenu: [],
        aside: [],
        asideMenu: [],
        asideToggle: [],
        toolbar: [],
        toolbarContainer: [],
        content: [],
        contentContainer: [],
        footerContainer: [],
        sidebar: [],
        pageTitle: [],
    };
}
exports.getEmptyCssClasses = getEmptyCssClasses;
function getEmptyHTMLAttributes() {
    return {
        asideMenu: new Map(),
        headerMobile: new Map(),
        headerMenu: new Map(),
        headerContainer: new Map(),
        pageTitle: new Map(),
    };
}
exports.getEmptyHTMLAttributes = getEmptyHTMLAttributes;
function getEmptyCSSVariables() {
    return {
        body: new Map(),
    };
}
exports.getEmptyCSSVariables = getEmptyCSSVariables;
var LayoutSetup = /** @class */ (function () {
    function LayoutSetup() {
    }
    LayoutSetup.initCSSClasses = function () {
        LayoutSetup.classes = getEmptyCssClasses();
    };
    LayoutSetup.initHTMLAttributes = function () {
        LayoutSetup.attributes = Object.assign({}, getEmptyHTMLAttributes());
    };
    LayoutSetup.initCSSVariables = function () {
        LayoutSetup.cssVariables = getEmptyCSSVariables();
    };
    LayoutSetup.initLayout = function (config) {
        var _a, _b, _c, _d;
        Array.from(document.body.attributes).forEach(function (attr) {
            document.body.removeAttribute(attr.name);
        });
        document.body.setAttribute('style', '');
        document.body.setAttribute('id', 'kt_body');
        if ((_b = (_a = config.main) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.backgroundImage) {
            document.body.style.backgroundImage = "url('".concat(config.main.body.backgroundImage, "')");
        }
        if ((_d = (_c = config.main) === null || _c === void 0 ? void 0 : _c.body) === null || _d === void 0 ? void 0 : _d.class) {
            document.body.classList.add(config.main.body.class);
        }
        // if (config.loader.display) {
        //   document.body.classList.add('page-loading')
        //   document.body.classList.add('page-loading-enabled')
        // }
    };
    LayoutSetup.initHeader = function (config) {
        LayoutSetup.classes.headerContainer.push(config.width === 'fluid' ? 'container-fluid' : 'container');
        if (config.fixed.desktop) {
            document.body.classList.add('header-fixed');
        }
        if (config.fixed.tabletAndMobile) {
            document.body.classList.add('header-tablet-and-mobile-fixed');
        }
    };
    LayoutSetup.initToolbar = function (config) {
        if (!config.display) {
            return;
        }
        document.body.classList.add('toolbar-enabled');
        LayoutSetup.classes.toolbarContainer.push(config.width === 'fluid' ? 'container-fluid' : 'container');
        if (config.fixed.desktop) {
            document.body.classList.add('toolbar-fixed');
        }
        if (config.fixed.tabletAndMobileMode) {
            document.body.classList.add('toolbar-tablet-and-mobile-fixed');
        }
        // Height setup
        var type = config.layout;
        var typeOptions = config.layouts[type];
        if (typeOptions) {
            var bodyStyles = '';
            if (typeOptions.height) {
                bodyStyles += " --kt-toolbar-height: ".concat(typeOptions.height, ";");
            }
            if (typeOptions.heightAndTabletMobileMode) {
                bodyStyles += " --kt-toolbar-height-tablet-and-mobile: ".concat(typeOptions.heightAndTabletMobileMode, ";");
            }
            document.body.setAttribute('style', bodyStyles);
        }
    };
    LayoutSetup.initPageTitle = function (config) {
        if (!config.display) {
            return;
        }
        if (config.direction === 'column') {
            this.classes.pageTitle.push('flex-column');
            this.classes.pageTitle.push('align-items-start');
        }
        else {
            this.classes.pageTitle.push('align-items-center');
            this.classes.pageTitle.push('flex-wrap');
        }
        this.classes.pageTitle.push('me-3');
        if (config.responsive) {
            this.classes.pageTitle.push('mb-5');
            this.classes.pageTitle.push('mb-lg-0');
            LayoutSetup.attributes.pageTitle.set('data-kt-swapper', true);
            LayoutSetup.attributes.pageTitle.set('data-kt-swapper-mode', 'prepend');
            LayoutSetup.attributes.pageTitle.set('data-kt-swapper-parent', "{ default: '#kt_content_container', '".concat(config.responsiveBreakpoint, "': '").concat(config.responsiveTarget, "'}"));
        }
    };
    LayoutSetup.initContent = function (config) {
        LayoutSetup.classes.contentContainer.push(config.width === 'fluid' ? 'container-fluid' : 'container');
        // if (Theme::getOption('layout', 'content/container-class')) {
        // 	Theme::addHtmlClass('content-container', Theme::getOption('layout', 'content/container-class'));
        // }
    };
    LayoutSetup.initAside = function (config) {
        // Check if aside is displayed
        if (!config.display) {
            return;
        }
        // Enable Aside
        document.body.classList.add('aside-enabled');
        LayoutSetup.classes.aside.push("aside-".concat(config.theme));
        // Fixed Aside
        if (config.fixed) {
            document.body.classList.add('aside-fixed');
        }
        // Default minimized
        if (config.minimized) {
            document.body.setAttribute('data-kt-aside-minimize', 'on');
        }
        // Hoverable on minimize
        if (config.hoverable) {
            LayoutSetup.classes.aside.push('aside-hoverable');
        }
    };
    LayoutSetup.initAsideMenu = function (config) {
        // if (Theme::getOption('layout', 'aside/menu') === 'documentation') {
        // 	self::$menu = new Menu( Theme::getOption('menu', 'documentation'), Theme::getPagePath() );
        // } else {
        // 	self::$menu = new Menu( Theme::getOption('menu', 'main'), Theme::getPagePath() );
        // }
        // if (Theme::getOption('layout', 'aside/menu-icons-display') === false) {
        // 	self::$menu->displayIcons(false);
        // }
        // self::$menu->setIconType(Theme::getOption('layout', 'aside/menu-icon'));
    };
    // private static initSidebar(sidebarConfig: ISidebarConfig): void {
    //   // / Set Sidebar enabled class
    //   if (sidebarConfig.display) {
    //     document.body.classList.add('sidebar-enabled')
    //   } else {
    //     return
    //   }
    //   // Set Sidebar shown status
    //   if (sidebarConfig.shown) {
    //     document.body.setAttribute('data-sidebar', 'on')
    //   }
    //   // Set Sidebar background color class
    //   ThemeSetup.classes.sidebar.push(sidebarConfig.bgColor)
    // }
    LayoutSetup.initFooter = function (config) {
        LayoutSetup.classes.footerContainer.push("container".concat(config.width === 'fluid' ? '-fluid' : ''));
    };
    LayoutSetup.initConfig = function (config) {
        var _a, _b;
        if ((_a = config.main) === null || _a === void 0 ? void 0 : _a.darkSkinEnabled) {
            document.body.classList.add('dark-skin');
        }
        // Init layout
        LayoutSetup.initLayout(config);
        if (((_b = config.main) === null || _b === void 0 ? void 0 : _b.type) !== 'default') {
            return;
        }
        LayoutSetup.initHeader(config.header);
        LayoutSetup.initPageTitle(config.pageTitle);
        LayoutSetup.initToolbar(config.toolbar);
        LayoutSetup.initContent(config.content);
        LayoutSetup.initAside(config.aside);
        LayoutSetup.initFooter(config.footer);
        LayoutSetup.initAsideMenu(config.aside);
    };
    LayoutSetup.updatePartialConfig = function (fieldsToUpdate) {
        var config = LayoutSetup.config;
        var updatedConfig = __assign(__assign({}, config), fieldsToUpdate);
        LayoutSetup.initCSSClasses();
        LayoutSetup.initCSSVariables();
        LayoutSetup.initHTMLAttributes();
        LayoutSetup.isLoaded = false;
        LayoutSetup.config = updatedConfig;
        LayoutSetup.initConfig(Object.assign({}, updatedConfig));
        LayoutSetup.isLoaded = true; // remove loading there
        return updatedConfig;
    };
    LayoutSetup.setConfig = function (config) {
        setLayout(config);
    };
    LayoutSetup.isLoaded = false;
    LayoutSetup.config = getLayout();
    LayoutSetup.classes = getEmptyCssClasses();
    LayoutSetup.attributes = getEmptyHTMLAttributes();
    LayoutSetup.cssVariables = getEmptyCSSVariables();
    LayoutSetup.bootstrap = (function () {
        LayoutSetup.updatePartialConfig(LayoutSetup.config);
    })();
    return LayoutSetup;
}());
exports.LayoutSetup = LayoutSetup;
