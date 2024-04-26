"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderUserMenu = void 0;
//import { useDispatch } from 'react-redux'
var DataLayer_1 = require("../../../../DataLayer");
var HeaderUserMenu = function () {
    //const user: UserModel = useSelector<RootState>(({ auth }) => auth.user, shallowEqual) as UserModel
    var _a = (0, DataLayer_1.useDataLayerValue)(), _b = _a[0], token = _b.token, user = _b.user, dispatch = _a[1];
    //const dispatch = useDispatch()
    var logout = function () {
        // dispatch(auth.actions.logout())
        dispatch({
            type: "SET_TOKEN",
            token: null,
        });
    };
    return (React.createElement("div", { className: 'menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px', "data-kt-menu": 'true' },
        React.createElement("div", { className: 'menu-item px-3' },
            React.createElement("div", { className: 'menu-content d-flex align-items-center px-3' },
                React.createElement("div", { className: 'd-flex flex-column' },
                    React.createElement("div", { className: 'fw-bolder d-flex align-items-center fs-5' },
                        user.firstName + ' ' + user.lastName,
                        React.createElement("span", { className: 'badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2' }))))),
        React.createElement("div", { className: 'separator my-2' }),
        React.createElement("div", { className: 'menu-item px-5' },
            React.createElement("a", { onClick: logout, className: 'menu-link px-5' }, "Sign Out"))));
};
exports.HeaderUserMenu = HeaderUserMenu;
