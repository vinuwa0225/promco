"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setupAxios(axios, store) {
    axios.interceptors.request.use(function (config) {
        var accessToken = store.getState().auth.accessToken;
        if (accessToken) {
            config.headers.Authorization = "Bearer ".concat(accessToken);
        }
        return config;
    }, function (err) { return Promise.reject(err); });
}
exports.default = setupAxios;
