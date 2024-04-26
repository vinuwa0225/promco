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
exports.CookieComponent = void 0;
/* eslint-disable no-useless-escape */
// DOCS: https://javascript.info/cookie
var CookieComponent = /** @class */ (function () {
    function CookieComponent() {
    }
    /**
     * Returns the cookie with the given name, or undefined if not found
     *
     * @param  {string} name - cookie name
     * @returns string | null
     */
    CookieComponent.get = function (name) {
        var matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };
    /**
     * Please note that a cookie value is encoded,
     * so getCookie uses a built-in decodeURIComponent function to decode it.
     *
     * @param  {string} name - cookie name
     * @param  {string | number | boolean} value - cookie value
     * @param  {any} cookieOptions - cookie options
     * @returns void
     */
    CookieComponent.set = function (name, value, cookieOptions) {
        var options = __assign({ path: '/' }, cookieOptions);
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        var updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        for (var optionKey in options) {
            updatedCookie += '; ' + optionKey;
            var optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += '=' + optionValue;
            }
        }
        document.cookie = updatedCookie;
    };
    /**
     * To delete a cookie, we can call it with a negative expiration date
     *
     * @param  {string} name
     */
    CookieComponent.delete = function (name) {
        CookieComponent.set(name, '', {
            'max-age': -1,
        });
    };
    return CookieComponent;
}());
exports.CookieComponent = CookieComponent;
