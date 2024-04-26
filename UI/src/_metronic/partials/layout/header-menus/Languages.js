"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Languages = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var clsx_1 = require("clsx");
var helpers_1 = require("../../../helpers");
var Metronici18n_1 = require("../../../i18n/Metronici18n");
var languages = [
    {
        lang: 'en',
        name: 'English',
        flag: (0, helpers_1.toAbsoluteUrl)('/media/flags/united-states.svg'),
    },
    {
        lang: 'zh',
        name: 'Mandarin',
        flag: (0, helpers_1.toAbsoluteUrl)('/media/flags/china.svg'),
    },
    {
        lang: 'es',
        name: 'Spanish',
        flag: (0, helpers_1.toAbsoluteUrl)('/media/flags/spain.svg'),
    },
    {
        lang: 'ja',
        name: 'Japanese',
        flag: (0, helpers_1.toAbsoluteUrl)('/media/flags/japan.svg'),
    },
    {
        lang: 'de',
        name: 'German',
        flag: (0, helpers_1.toAbsoluteUrl)('/media/flags/germany.svg'),
    },
    {
        lang: 'fr',
        name: 'French',
        flag: (0, helpers_1.toAbsoluteUrl)('/media/flags/france.svg'),
    },
];
var Languages = function () {
    var lang = (0, Metronici18n_1.useLang)();
    var currentLanguage = languages.find(function (x) { return x.lang === lang; });
    return (React.createElement("div", { className: 'menu-item px-5', "data-kt-menu-trigger": 'hover', "data-kt-menu-placement": 'left-start', "data-kt-menu-flip": 'bottom' },
        React.createElement("a", { href: '#', className: 'menu-link px-5' },
            React.createElement("span", { className: 'menu-title position-relative' },
                "Language",
                React.createElement("span", { className: 'fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0' }, currentLanguage === null || currentLanguage === void 0 ? void 0 :
                    currentLanguage.name,
                    ' ',
                    React.createElement("img", { className: 'w-15px h-15px rounded-1 ms-2', src: currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.flag, alt: 'metronic' })))),
        React.createElement("div", { className: 'menu-sub menu-sub-dropdown w-175px py-4' }, languages.map(function (l) { return (React.createElement("div", { className: 'menu-item px-3', key: l.lang, onClick: function () {
                (0, Metronici18n_1.setLanguage)(l.lang);
            } },
            React.createElement("a", { href: '#', className: (0, clsx_1.default)('menu-link d-flex px-5', { active: l.lang === (currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.lang) }) },
                React.createElement("span", { className: 'symbol symbol-20px me-4' },
                    React.createElement("img", { className: 'rounded-1', src: l.flag, alt: 'metronic' })),
                l.name))); }))));
};
exports.Languages = Languages;
