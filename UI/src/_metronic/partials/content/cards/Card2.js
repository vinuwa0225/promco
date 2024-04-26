"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card2 = void 0;
var react_router_dom_1 = require("react-router-dom");
var UsersList_1 = require("../../../../app/modules/profile/components/UsersList");
var helpers_1 = require("../../../helpers");
var Card2 = function (_a) {
    var icon = _a.icon, badgeColor = _a.badgeColor, status = _a.status, statusColor = _a.statusColor, title = _a.title, description = _a.description, date = _a.date, budget = _a.budget, progress = _a.progress, _b = _a.users, users = _b === void 0 ? undefined : _b;
    return (React.createElement(react_router_dom_1.Link, { to: '/crafted/pages/profile/overview', className: 'card border border-2 border-gray-300 border-hover' },
        React.createElement("div", { className: 'card-header border-0 pt-9' },
            React.createElement("div", { className: 'card-title m-0' },
                React.createElement("div", { className: 'symbol symbol-50px w-50px bg-light' },
                    React.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)(icon), alt: 'card2', className: 'p-3' }))),
            React.createElement("div", { className: 'card-toolbar' },
                React.createElement("span", { className: "badge badge-light-".concat(badgeColor, " fw-bolder me-auto px-4 py-3") }, status))),
        React.createElement("div", { className: 'card-body p-9' },
            React.createElement("div", { className: 'fs-3 fw-bolder text-dark' }, title),
            React.createElement("p", { className: 'text-gray-400 fw-bold fs-5 mt-1 mb-7' }, description),
            React.createElement("div", { className: 'd-flex flex-wrap mb-5' },
                React.createElement("div", { className: 'border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3' },
                    React.createElement("div", { className: 'fs-6 text-gray-800 fw-bolder' }, date),
                    React.createElement("div", { className: 'fw-bold text-gray-400' }, "Due Date")),
                React.createElement("div", { className: 'border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3' },
                    React.createElement("div", { className: 'fs-6 text-gray-800 fw-bolder' }, budget),
                    React.createElement("div", { className: 'fw-bold text-gray-400' }, "Budget"))),
            React.createElement("div", { className: 'h-4px w-100 bg-light mb-5', "data-bs-toggle": 'tooltip', title: 'This project completed' },
                React.createElement("div", { className: "bg-".concat(statusColor, " rounded h-4px"), role: 'progressbar', style: { width: "".concat(progress, "%") } })),
            React.createElement(UsersList_1.UsersList, { users: users }))));
};
exports.Card2 = Card2;
