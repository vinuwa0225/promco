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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saga = exports.actions = exports.reducer = exports.actionTypes = void 0;
var redux_persist_1 = require("redux-persist");
var storage_1 = require("redux-persist/lib/storage");
var effects_1 = require("redux-saga/effects");
var AuthCRUD_1 = require("./AuthCRUD");
exports.actionTypes = {
    Login: '[Login] Action',
    Logout: '[Logout] Action',
    Register: '[Register] Action',
    UserRequested: '[Request User] Action',
    UserLoaded: '[Load User] Auth API',
    SetUser: '[Set User] Action',
};
var initialAuthState = {
    user: undefined,
    accessToken: undefined,
};
exports.reducer = (0, redux_persist_1.persistReducer)({ storage: storage_1.default, key: 'v100-demo1-auth', whitelist: ['user', 'accessToken'] }, function (state, action) {
    var _a, _b, _c, _d;
    if (state === void 0) { state = initialAuthState; }
    switch (action.type) {
        case exports.actionTypes.Login: {
            var accessToken = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.accessToken;
            return { accessToken: accessToken, user: undefined };
        }
        case exports.actionTypes.Register: {
            var accessToken = (_b = action.payload) === null || _b === void 0 ? void 0 : _b.accessToken;
            return { accessToken: accessToken, user: undefined };
        }
        case exports.actionTypes.Logout: {
            return initialAuthState;
        }
        case exports.actionTypes.UserRequested: {
            return __assign(__assign({}, state), { user: undefined });
        }
        case exports.actionTypes.UserLoaded: {
            var user = (_c = action.payload) === null || _c === void 0 ? void 0 : _c.user;
            return __assign(__assign({}, state), { user: user });
        }
        case exports.actionTypes.SetUser: {
            var user = (_d = action.payload) === null || _d === void 0 ? void 0 : _d.user;
            return __assign(__assign({}, state), { user: user });
        }
        default:
            return state;
    }
});
exports.actions = {
    login: function (accessToken) { return ({ type: exports.actionTypes.Login, payload: { accessToken: accessToken } }); },
    register: function (accessToken) { return ({
        type: exports.actionTypes.Register,
        payload: { accessToken: accessToken },
    }); },
    logout: function () { return ({ type: exports.actionTypes.Logout }); },
    requestUser: function () { return ({
        type: exports.actionTypes.UserRequested,
    }); },
    fulfillUser: function (user) { return ({ type: exports.actionTypes.UserLoaded, payload: { user: user } }); },
    setUser: function (user) { return ({ type: exports.actionTypes.SetUser, payload: { user: user } }); },
};
function saga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.takeLatest)(exports.actionTypes.Login, function loginSaga() {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, (0, effects_1.put)(exports.actions.requestUser())];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                })];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(exports.actionTypes.Register, function registerSaga() {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, effects_1.put)(exports.actions.requestUser())];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    })];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(exports.actionTypes.UserRequested, function userRequested() {
                        var user;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, AuthCRUD_1.getUserByToken)()];
                                case 1:
                                    user = (_a.sent()).data;
                                    return [4 /*yield*/, (0, effects_1.put)(exports.actions.fulfillUser(user))];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    })];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.saga = saga;
