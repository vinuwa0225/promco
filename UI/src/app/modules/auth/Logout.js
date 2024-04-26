"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var auth = require("./redux/AuthRedux");
function Logout() {
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch(auth.actions.logout());
        document.location.reload();
    }, [dispatch]);
    return (react_1.default.createElement(react_router_dom_1.Switch, null,
        react_1.default.createElement(react_router_dom_1.Redirect, { to: '/auth/login' })));
}
exports.Logout = Logout;
