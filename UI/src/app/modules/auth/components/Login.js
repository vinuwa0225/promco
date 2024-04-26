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
exports.Login = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var DataLayer_1 = require("../../../../DataLayer");
var axios_1 = require("axios");
var commonResource_1 = require("../../../../app/ui/common/commonResource");
function Login() {
    var _a;
    var search = window.location.search;
    var params = new URLSearchParams(search);
    var uuid = (_a = params.get('UUID')) !== null && _a !== void 0 ? _a : '0088680A-DBFC-44ED-9C24-6B63A8B6B1AD';
    var _b = (0, DataLayer_1.useDataLayerValue)(), token = _b[0].token, dispatch = _b[1];
    var _c = (0, react_1.useState)(''), tempToken = _c[0], setTempToken = _c[1];
    var _d = (0, react_1.useState)({
        errorMessage: '',
        isCompleted: false,
    }), state = _d[0], setState = _d[1];
    var values = {
        email: '',
        password: '',
        _token: '',
    };
    if (uuid === undefined || uuid === '') {
        console.log('redirecting' + uuid);
        window.location.href = 'https://esb.midassit.com/?sys=tas';
    }
    console.log(token);
    if (!state.isCompleted) {
        setTimeout(function () {
            console.log(process.env.REACT_APP_MIDAS_BACKEND_API + '/api/accounts/token?UUID=' + uuid);
            (0, axios_1.default)(__assign(__assign({}, commonResource_1.axioDefaultConfig), { method: 'post', url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/accounts/token?UUID=' + uuid }))
                .then(function (response) {
                var _a, _b, _c, _d, _e, _f;
                if (((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.token) !== '' && ((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.token) !== null) {
                    values._token = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.token;
                    setTempToken((_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.token);
                    console.log(values._token);
                    dispatch({
                        type: 'SET_USER',
                        user: (_e = response === null || response === void 0 ? void 0 : response.data) === null || _e === void 0 ? void 0 : _e.loggedUser,
                    });
                    console.log((_f = response === null || response === void 0 ? void 0 : response.data) === null || _f === void 0 ? void 0 : _f.loggedUser);
                    dispatch({
                        type: 'SET_TOKEN',
                        token: values._token,
                    });
                    console.log('redirect to main site');
                    window.location.href = '/dashboard';
                    // dispatch(auth.actions.login(response?.data?.token))
                    // dispatch(auth.actions.setUser(response?.data))
                }
                else {
                    setState(__assign(__assign({}, state), { errorMessage: 'Unable to continue, you do not have permissions to access', isCompleted: true }));
                    console.log(response.data.message);
                }
            })
                .catch(function (error) {
                setState(__assign(__assign({}, state), { errorMessage: 'Unable to continue, you do not have permissions to access', isCompleted: true }));
                console.log('The login detail is incorrect');
            });
        }, 1000);
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", { className: 'indicator-progress', style: { display: 'block' } },
            !state.isCompleted && (react_1.default.createElement(react_1.default.Fragment, null,
                ' ',
                "Please wait...",
                react_1.default.createElement("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' }))),
            state.isCompleted && react_1.default.createElement(react_1.default.Fragment, null,
                " ",
                state.errorMessage))));
}
exports.Login = Login;
