"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistor = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var redux_saga_1 = require("redux-saga");
var redux_batch_1 = require("@manaflair/redux-batch");
var redux_persist_1 = require("redux-persist");
var RootReducer_1 = require("./RootReducer");
var sagaMiddleware = (0, redux_saga_1.default)();
var middleware = __spreadArray(__spreadArray([], (0, toolkit_1.getDefaultMiddleware)({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
}), true), [
    sagaMiddleware,
], false);
var store = (0, toolkit_1.configureStore)({
    reducer: RootReducer_1.rootReducer,
    middleware: middleware,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [redux_batch_1.reduxBatch],
});
/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */
exports.persistor = (0, redux_persist_1.persistStore)(store);
sagaMiddleware.run(RootReducer_1.rootSaga);
exports.default = store;
