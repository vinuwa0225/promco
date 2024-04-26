"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nProvider = void 0;
var Metronici18n_1 = require("./Metronici18n");
var react_intl_1 = require("react-intl");
require("@formatjs/intl-relativetimeformat/polyfill");
require("@formatjs/intl-relativetimeformat/locale-data/en");
require("@formatjs/intl-relativetimeformat/locale-data/de");
require("@formatjs/intl-relativetimeformat/locale-data/es");
require("@formatjs/intl-relativetimeformat/locale-data/fr");
require("@formatjs/intl-relativetimeformat/locale-data/ja");
require("@formatjs/intl-relativetimeformat/locale-data/zh");
var de_json_1 = require("./messages/de.json");
var en_json_1 = require("./messages/en.json");
var es_json_1 = require("./messages/es.json");
var fr_json_1 = require("./messages/fr.json");
var ja_json_1 = require("./messages/ja.json");
var zh_json_1 = require("./messages/zh.json");
var allMessages = {
    de: de_json_1.default,
    en: en_json_1.default,
    es: es_json_1.default,
    fr: fr_json_1.default,
    ja: ja_json_1.default,
    zh: zh_json_1.default,
};
var I18nProvider = function (_a) {
    var children = _a.children;
    var locale = (0, Metronici18n_1.useLang)();
    var messages = allMessages[locale];
    return (React.createElement(react_intl_1.IntlProvider, { locale: locale, messages: messages }, children));
};
exports.I18nProvider = I18nProvider;
