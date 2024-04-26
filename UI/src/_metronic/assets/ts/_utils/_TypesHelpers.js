"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJSON = exports.stringSnakeToCamel = exports.getUniqueIdWithPrefix = exports.getObjectPropertyValueByKey = void 0;
function getObjectPropertyValueByKey(obj, key) {
    var map = new Map(Object.entries(obj));
    if (obj.hasOwnProperty(key) && map) {
        return map.get(key);
    }
}
exports.getObjectPropertyValueByKey = getObjectPropertyValueByKey;
/**
 * Generates unique ID for give prefix.
 * @param {string} prefix Prefix for generated ID
 * @returns {boolean}
 */
function getUniqueIdWithPrefix(prefix) {
    var result = Math.floor(Math.random() * new Date().getTime()).toString();
    if (!prefix) {
        return result;
    }
    return "".concat(prefix).concat(result);
}
exports.getUniqueIdWithPrefix = getUniqueIdWithPrefix;
/* eslint-disable no-useless-escape */
function stringSnakeToCamel(str) {
    return str.replace(/(\-\w)/g, function (m) {
        return m[1].toUpperCase();
    });
}
exports.stringSnakeToCamel = stringSnakeToCamel;
function toJSON(value) {
    if (typeof value !== 'string') {
        return value;
    }
    if (!value) {
        return undefined;
    }
    // ("'" => "\"");
    var result = value
        .toString()
        .split('')
        .map(function (el) { return (el !== "'" ? el : '"'); })
        .join('');
    var jsonStr = result.replace(/(\w+:)|(\w+ :)/g, function (matched) {
        return '"' + matched.substring(0, matched.length - 1) + '":';
    });
    try {
        return JSON.parse(jsonStr);
    }
    catch (_a) {
        return undefined;
    }
}
exports.toJSON = toJSON;
