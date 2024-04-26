"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown2 = void 0;
var Dropdown2 = function () {
    return (React.createElement("div", { className: 'menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px', "data-kt-menu": 'true' },
        React.createElement("div", { className: 'menu-item px-3' },
            React.createElement("div", { className: 'menu-content fs-6 text-dark fw-bolder px-3 py-4' }, "Quick Actions")),
        React.createElement("div", { className: 'separator mb-3 opacity-75' }),
        React.createElement("div", { className: 'menu-item px-3' },
            React.createElement("a", { href: '#', className: 'menu-link px-3' }, "New Ticket")),
        React.createElement("div", { className: 'menu-item px-3' },
            React.createElement("a", { href: '#', className: 'menu-link px-3' }, "New Customer")),
        React.createElement("div", { className: 'menu-item px-3', "data-kt-menu-trigger": 'hover', "data-kt-menu-placement": 'right-start', "data-kt-menu-flip": 'left-start, top' },
            React.createElement("a", { href: '#', className: 'menu-link px-3' },
                React.createElement("span", { className: 'menu-title' }, "New Group"),
                React.createElement("span", { className: 'menu-arrow' })),
            React.createElement("div", { className: 'menu-sub menu-sub-dropdown w-175px py-4' },
                React.createElement("div", { className: 'menu-item px-3' },
                    React.createElement("a", { href: '#', className: 'menu-link px-3' }, "Admin Group")),
                React.createElement("div", { className: 'menu-item px-3' },
                    React.createElement("a", { href: '#', className: 'menu-link px-3' }, "Staff Group")),
                React.createElement("div", { className: 'menu-item px-3' },
                    React.createElement("a", { href: '#', className: 'menu-link px-3' }, "Member Group")))),
        React.createElement("div", { className: 'menu-item px-3' },
            React.createElement("a", { href: '#', className: 'menu-link px-3' }, "New Contact")),
        React.createElement("div", { className: 'separator mt-3 opacity-75' }),
        React.createElement("div", { className: 'menu-item px-3' },
            React.createElement("div", { className: 'menu-content px-3 py-3' },
                React.createElement("a", { className: 'btn btn-primary  btn-sm px-4', href: '#' }, "Generate Reports")))));
};
exports.Dropdown2 = Dropdown2;
