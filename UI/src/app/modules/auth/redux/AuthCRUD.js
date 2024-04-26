"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByToken = exports.requestPassword = exports.register = exports.login = exports.REQUEST_PASSWORD_URL = exports.REGISTER_URL = exports.LOGIN_URL = exports.GET_USER_BY_ACCESSTOKEN_URL = void 0;
var axios_1 = require("axios");
var API_URL = process.env.REACT_APP_API_URL || 'api';
exports.GET_USER_BY_ACCESSTOKEN_URL = "".concat(API_URL, "/auth/get-user");
exports.LOGIN_URL = "".concat(API_URL, "/auth/login");
exports.REGISTER_URL = "".concat(API_URL, "/auth/register");
exports.REQUEST_PASSWORD_URL = "".concat(API_URL, "/auth/forgot-password");
// Server should return AuthModel
function login(email, password) {
    return axios_1.default.post(exports.LOGIN_URL, { email: email, password: password });
}
exports.login = login;
// Server should return AuthModel
function register(email, firstname, lastname, password) {
    return axios_1.default.post(exports.REGISTER_URL, {
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password,
    });
}
exports.register = register;
// Server should return object => { result: boolean } (Is Email in DB)
function requestPassword(email) {
    return axios_1.default.post(exports.REQUEST_PASSWORD_URL, { email: email });
}
exports.requestPassword = requestPassword;
function getUserByToken() {
    // Authorization head should be fulfilled in interceptor.
    // Check common redux folder => setupAxios
    return axios_1.default.get(exports.GET_USER_BY_ACCESSTOKEN_URL);
}
exports.getUserByToken = getUserByToken;
