"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_mock_adapter_1 = require("axios-mock-adapter");
var auth_1 = require("../../app/modules/auth");
function mockAxios(axios) {
    var mock = new axios_mock_adapter_1.default(axios, { delayResponse: 300 });
    (0, auth_1.mockAuth)(mock);
    return mock;
}
exports.default = mockAxios;
