"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLang = exports.MetronicI18nProvider = exports.setLanguage = void 0;
var react_1 = require("react");
var I18N_CONFIG_KEY = process.env.REACT_APP_I18N_CONFIG_KEY || 'i18nConfig';
var initialState = {
    selectedLang: 'en',
};
function getConfig() {
    var ls = localStorage.getItem(I18N_CONFIG_KEY);
    if (ls) {
        try {
            return JSON.parse(ls);
        }
        catch (er) {
            console.error(er);
        }
    }
    return initialState;
}
// Side effect
function setLanguage(lang) {
    localStorage.setItem(I18N_CONFIG_KEY, JSON.stringify({ selectedLang: lang }));
    window.location.reload();
}
exports.setLanguage = setLanguage;
var I18nContext = (0, react_1.createContext)(initialState);
var useLang = function () {
    return (0, react_1.useContext)(I18nContext).selectedLang;
};
exports.useLang = useLang;
var MetronicI18nProvider = function (_a) {
    var children = _a.children;
    var lang = getConfig();
    return react_1.default.createElement(I18nContext.Provider, { value: lang }, children);
};
exports.MetronicI18nProvider = MetronicI18nProvider;
