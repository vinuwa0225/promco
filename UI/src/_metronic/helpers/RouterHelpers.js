"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsActive = exports.getCurrentUrl = void 0;
function getCurrentUrl(pathname) {
    return pathname.split(/[?#]/)[0];
}
exports.getCurrentUrl = getCurrentUrl;
function checkIsActive(pathname, url) {
    var current = getCurrentUrl(pathname);
    if (!current || !url) {
        return false;
    }
    if (current === url) {
        return true;
    }
    if (current.indexOf(url) > -1) {
        return true;
    }
    return false;
}
exports.checkIsActive = checkIsActive;
