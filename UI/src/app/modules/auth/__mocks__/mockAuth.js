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
exports.mockAuth = void 0;
var AuthCRUD_1 = require("../redux/AuthCRUD");
var usersTableMock_1 = require("./usersTableMock");
function mockAuth(mock) {
    mock.onPost(AuthCRUD_1.LOGIN_URL).reply(function (_a) {
        var data = _a.data;
        var _b = JSON.parse(data), email = _b.email, password = _b.password;
        if (email && password) {
            var user = usersTableMock_1.UsersTableMock.table.find(function (x) { return x.email.toLowerCase() === email.toLowerCase() && x.password === password; });
            if (user) {
                var auth = user.auth;
                return [200, __assign(__assign({}, auth), { password: undefined })];
            }
        }
        return [400];
    });
    mock.onPost(AuthCRUD_1.REGISTER_URL).reply(function (_a) {
        var data = _a.data;
        var _b = JSON.parse(data), email = _b.email, firstname = _b.firstname, lastname = _b.lastname, password = _b.password;
        if (email && firstname && lastname && password) {
            var user = {
                id: generateUserId(),
                email: email,
                firstname: firstname,
                lastname: lastname,
                username: "".concat(firstname, "-").concat(lastname),
                password: password,
                roles: [2], // Manager
                auth: {
                    accessToken: 'access-token-' + Math.random(),
                    refreshToken: 'access-token-' + Math.random(),
                },
                pic: process.env.PUBLIC_URL + '/media/users/default.jpg',
            };
            usersTableMock_1.UsersTableMock.table.push(user);
            var auth = user.auth;
            return [200, __assign(__assign({}, auth), { password: undefined })];
        }
        return [400];
    });
    mock.onPost(AuthCRUD_1.REQUEST_PASSWORD_URL).reply(function (_a) {
        var data = _a.data;
        var email = JSON.parse(data).email;
        if (email) {
            var user = usersTableMock_1.UsersTableMock.table.find(function (x) { return x.email.toLowerCase() === email.toLowerCase(); });
            var result = false;
            if (user) {
                user.password = undefined;
                result = true;
                return [200, { result: result, password: undefined }];
            }
        }
        return [400];
    });
    mock.onGet(AuthCRUD_1.GET_USER_BY_ACCESSTOKEN_URL).reply(function (_a) {
        var Authorization = _a.headers.Authorization;
        var accessToken = Authorization && Authorization.startsWith('Bearer ') && Authorization.slice('Bearer '.length);
        if (accessToken) {
            var user = usersTableMock_1.UsersTableMock.table.find(function (x) { var _a; return ((_a = x.auth) === null || _a === void 0 ? void 0 : _a.accessToken) === accessToken; });
            if (user) {
                return [200, __assign(__assign({}, user), { password: undefined })];
            }
        }
        return [401];
    });
    function generateUserId() {
        var ids = usersTableMock_1.UsersTableMock.table.map(function (el) { return el.id; });
        var maxId = Math.max.apply(Math, ids);
        return maxId + 1;
    }
}
exports.mockAuth = mockAuth;
