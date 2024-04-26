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
var react_dom_1 = require("react-dom");
// Redux
// https://github.com/rt2zz/redux-persist
var react_1 = require("redux-persist/integration/react");
var Store_1 = require("./setup/redux/Store");
var DataLayer_1 = require("./DataLayer");
var reducer_1 = require("./reducer");
/**
 * TIP: Replace this style import with dark styles to enable dark mode
 *
 * import './_metronic/assets/sass/style.dark.scss'
 *
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
require("./_metronic/assets/sass/style.scss");
require("./_metronic/assets/sass/style.react.scss");
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
var PUBLIC_URL = process.env.PUBLIC_URL;
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/* const mock =  _redux.mockAxios(axios)
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors

_redux.setupAxios(axios, store)

Chart.register(...registerables)
 */
react_dom_1.default.render.apply(react_dom_1.default, __spreadArray(__spreadArray([Store_1.default, { store: Store_1.default } >
        { /* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
        < react_1.PersistGate, Store_1.persistor = { persistor: Store_1.persistor }, loading = {} < div > Loading], /div>}>
    < DataLayer_1.DataLayer, false), [reducer_1.initialState = { initialState: reducer_1.initialState }, reducer_1.default = { reducer: reducer_1.default } >
        basename, { PUBLIC_URL: PUBLIC_URL } /  >
        /DataLayer>
        < /PersistGate>
        < /Provider>,
    document.getElementById('root')], false));
