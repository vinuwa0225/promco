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
exports.CodeBlock = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
var prism_react_renderer_1 = require("prism-react-renderer");
var shadesOfPurple_1 = require("prism-react-renderer/themes/shadesOfPurple");
var react_bootstrap_v5_1 = require("react-bootstrap-v5");
var CodeBlock = function (_a) {
    var code = _a.code, language = _a.language;
    var codeRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), copied = _b[0], setCopied = _b[1];
    (0, react_1.useEffect)(function () {
        if (!copied) {
            return;
        }
        setTimeout(function () {
            setCopied(false);
        }, 1500);
    }, [copied]);
    (0, react_1.useEffect)(function () {
        if (!codeRef.current) {
            return;
        }
        var prismCodeElement = codeRef.current.querySelector('.prism-code ');
        if (prismCodeElement) {
            prismCodeElement.style.background = 'none';
            prismCodeElement.style.fontSize = '13px';
        }
    }, []);
    return (react_1.default.createElement("div", { className: 'py-5' },
        react_1.default.createElement("div", { className: 'highlight' },
            react_1.default.createElement(react_bootstrap_v5_1.OverlayTrigger, { key: 'copy-to-clipboard', placement: 'top', overlay: react_1.default.createElement(react_bootstrap_v5_1.Tooltip, { id: 'tooltip-copy-to-clipboard' }, "Copy Code") },
                react_1.default.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: code, onCopy: function () { return setCopied(true); } },
                    react_1.default.createElement("a", { className: 'highlight-copy btn' }, copied ? 'copied' : 'copy'))),
            react_1.default.createElement("div", { className: 'highlight-code', ref: codeRef },
                react_1.default.createElement(prism_react_renderer_1.default, __assign({}, prism_react_renderer_1.defaultProps, { theme: shadesOfPurple_1.default, code: code, language: language }), function (_a) {
                    var className = _a.className, style = _a.style, tokens = _a.tokens, getLineProps = _a.getLineProps, getTokenProps = _a.getTokenProps;
                    return (react_1.default.createElement("pre", { className: className, style: __assign({ maxHeight: '300px' }, style) }, tokens.map(function (line, i) { return (react_1.default.createElement("div", __assign({}, getLineProps({ line: line, key: i })), line.map(function (token, key) { return (react_1.default.createElement("span", __assign({}, getTokenProps({ token: token, key: key })))); }))); })));
                })))));
};
exports.CodeBlock = CodeBlock;
