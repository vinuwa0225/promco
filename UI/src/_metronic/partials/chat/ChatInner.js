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
exports.ChatInner = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var clsx_1 = require("clsx");
var helpers_1 = require("../../helpers");
var bufferMessages = helpers_1.defaultMessages;
var ChatInner = function (_a) {
    var _b = _a.isDrawer, isDrawer = _b === void 0 ? false : _b;
    var _c = (0, react_1.useState)(false), chatUpdateFlag = _c[0], toggleChatUpdateFlat = _c[1];
    var _d = (0, react_1.useState)(''), message = _d[0], setMessage = _d[1];
    var _e = (0, react_1.useState)(bufferMessages), messages = _e[0], setMessages = _e[1];
    var userInfos = (0, react_1.useState)(helpers_1.defaultUserInfos)[0];
    var sendMessage = function () {
        var newMessage = {
            user: 2,
            type: 'out',
            text: message,
            time: 'Just now',
        };
        bufferMessages.push(newMessage);
        setMessages(bufferMessages);
        toggleChatUpdateFlat(!chatUpdateFlag);
        setMessage('');
        setTimeout(function () {
            bufferMessages.push(helpers_1.messageFromClient);
            setMessages(function () { return bufferMessages; });
            toggleChatUpdateFlat(function (flag) { return !flag; });
        }, 1000);
    };
    var onEnterPress = function (e) {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            sendMessage();
        }
    };
    return (React.createElement("div", { className: 'card-body', id: isDrawer ? 'kt_drawer_chat_messenger_body' : 'kt_chat_messenger_body' },
        React.createElement("div", { className: (0, clsx_1.default)('scroll-y me-n5 pe-5', { 'h-300px h-lg-auto': !isDrawer }), "data-kt-element": 'messages', "data-kt-scroll": 'true', "data-kt-scroll-activate": '{default: false, lg: true}', "data-kt-scroll-max-height": 'auto', "data-kt-scroll-dependencies": isDrawer
                ? '#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer'
                : '#kt_header, #kt_toolbar, #kt_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer', "data-kt-scroll-wrappers": isDrawer ? '#kt_drawer_chat_messenger_body' : '#kt_content, #kt_chat_messenger_body', "data-kt-scroll-offset": isDrawer ? '0px' : '-2px' }, messages.map(function (message, index) {
            var userInfo = userInfos[message.user];
            var state = message.type === 'in' ? 'info' : 'primary';
            var templateAttr = {};
            if (message.template) {
                Object.defineProperty(templateAttr, 'data-kt-element', {
                    value: "template-".concat(message.type),
                });
            }
            var contentClass = "".concat(isDrawer ? '' : 'd-flex', " justify-content-").concat(message.type === 'in' ? 'start' : 'end', " mb-10");
            return (React.createElement("div", __assign({ key: "message".concat(index), className: (0, clsx_1.default)('d-flex', contentClass, 'mb-10', { 'd-none': message.template }) }, templateAttr),
                React.createElement("div", { className: (0, clsx_1.default)('d-flex flex-column align-items', "align-items-".concat(message.type === 'in' ? 'start' : 'end')) },
                    React.createElement("div", { className: 'd-flex align-items-center mb-2' }, message.type === 'in' ? (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: 'symbol  symbol-35px symbol-circle ' },
                            React.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)("/media/".concat(userInfo.avatar)) })),
                        React.createElement("div", { className: 'ms-3' },
                            React.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary me-1' }, userInfo.name),
                            React.createElement("span", { className: 'text-muted fs-7 mb-1' }, message.time)))) : (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: 'me-3' },
                            React.createElement("span", { className: 'text-muted fs-7 mb-1' }, message.time),
                            React.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary ms-1' }, "You")),
                        React.createElement("div", { className: 'symbol  symbol-35px symbol-circle ' },
                            React.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)("/media/".concat(userInfo.avatar)) }))))),
                    React.createElement("div", { className: (0, clsx_1.default)('p-5 rounded', "bg-light-".concat(state), 'text-dark fw-bold mw-lg-400px', "text-".concat(message.type === 'in' ? 'start' : 'end')), "data-kt-element": 'message-text', dangerouslySetInnerHTML: { __html: message.text } }))));
        })),
        React.createElement("div", { className: 'card-footer pt-4', id: isDrawer ? 'kt_drawer_chat_messenger_footer' : 'kt_chat_messenger_footer' },
            React.createElement("textarea", { className: 'form-control form-control-flush mb-3', rows: 1, "data-kt-element": 'input', placeholder: 'Type a message', value: message, onChange: function (e) { return setMessage(e.target.value); }, onKeyDown: onEnterPress }),
            React.createElement("div", { className: 'd-flex flex-stack' },
                React.createElement("div", { className: 'd-flex align-items-center me-2' },
                    React.createElement("button", { className: 'btn btn-sm btn-icon btn-active-light-primary me-1', type: 'button', "data-bs-toggle": 'tooltip', title: 'Coming soon' },
                        React.createElement("i", { className: 'bi bi-paperclip fs-3' })),
                    React.createElement("button", { className: 'btn btn-sm btn-icon btn-active-light-primary me-1', type: 'button', "data-bs-toggle": 'tooltip', title: 'Coming soon' },
                        React.createElement("i", { className: 'bi bi-upload fs-3' }))),
                React.createElement("button", { className: 'btn btn-primary', type: 'button', "data-kt-element": 'send', onClick: sendMessage }, "Send")))));
};
exports.ChatInner = ChatInner;
