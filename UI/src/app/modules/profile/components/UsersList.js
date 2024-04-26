"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersList = void 0;
var helpers_1 = require("../../../../_metronic/helpers");
var react_bootstrap_v5_1 = require("react-bootstrap-v5");
var UsersList = function (_a) {
    var _b = _a.users, users = _b === void 0 ? undefined : _b;
    return (React.createElement(React.Fragment, null, users &&
        users.map(function (user, i) {
            return (React.createElement(react_bootstrap_v5_1.OverlayTrigger, { key: "".concat(i, "-").concat(user.name), placement: 'top', overlay: React.createElement(react_bootstrap_v5_1.Tooltip, { id: 'tooltip-user-name' }, user.name) },
                React.createElement("div", { className: 'symbol symbol-35px symbol-circle' },
                    user.avatar && React.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)(user.avatar), alt: 'Pic' }),
                    user.initials && (React.createElement("span", { className: 'symbol-label bg-primary text-inverse-primary fw-bolder' }, user.initials)))));
        })));
};
exports.UsersList = UsersList;
