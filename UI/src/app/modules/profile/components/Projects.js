"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var Card2_1 = require("../../../../_metronic/partials/content/cards/Card2");
function Projects() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'd-flex flex-wrap flex-stack mb-6' },
            react_1.default.createElement("h3", { className: 'fw-bolder my-2' },
                "My Projects",
                react_1.default.createElement("span", { className: 'fs-6 text-gray-400 fw-bold ms-1' }, "Active")),
            react_1.default.createElement("div", { className: 'd-flex flex-wrap my-2' },
                react_1.default.createElement("div", { className: 'me-4' },
                    react_1.default.createElement("select", { name: 'status', "data-control": 'select2', "data-hide-search": 'true', className: 'form-select form-select-sm form-select-white w-125px', defaultValue: 'Active' },
                        react_1.default.createElement("option", { value: 'Active' }, "Active"),
                        react_1.default.createElement("option", { value: 'Approved' }, "In Progress"),
                        react_1.default.createElement("option", { value: 'Declined' }, "To Do"),
                        react_1.default.createElement("option", { value: 'In Progress' }, "Completed"))),
                react_1.default.createElement("a", { href: '#', className: 'btn btn-primary btn-sm', "data-bs-toggle": 'modal', "data-bs-target": '#kt_modal_create_project' }, "New Project"))),
        react_1.default.createElement("div", { className: 'row g-6 g-xl-9' },
            react_1.default.createElement("div", { className: 'col-md-6 col-xl-4' },
                react_1.default.createElement(Card2_1.Card2, { icon: '/media/svg/brand-logos/plurk.svg', badgeColor: 'primary', status: 'In Progress', statusColor: 'primary', title: 'Fitnes App', description: 'CRM App application to HR efficiency', date: 'November 10, 2021', budget: '$284,900.00', progress: 50, users: users1 })),
            react_1.default.createElement("div", { className: 'col-md-6 col-xl-4' },
                react_1.default.createElement(Card2_1.Card2, { icon: '/media/svg/brand-logos/disqus.svg', badgeColor: 'info', status: 'Pending', statusColor: 'info', title: 'Leaf CRM', description: 'CRM App application to HR efficiency', date: 'May 10, 2021', budget: '$36,400.00', progress: 30, users: users2 })),
            react_1.default.createElement("div", { className: 'col-md-6 col-xl-4' },
                react_1.default.createElement(Card2_1.Card2, { icon: '/media/svg/brand-logos/figma-1.svg', badgeColor: 'success', status: 'Completed', statusColor: 'success', title: 'Atica Banking', description: 'CRM App application to HR efficiency', date: 'Mar 14, 2021', budget: '$605,100.00', progress: 100, users: users3 })),
            react_1.default.createElement("div", { className: 'col-md-6 col-xl-4' },
                react_1.default.createElement(Card2_1.Card2, { icon: '/media/svg/brand-logos/sentry-3.svg', badgeColor: 'info', status: 'Pending', statusColor: 'info', title: 'Finance Dispatch', description: 'CRM App application to HR efficiency', date: 'Mar 14, 2021', budget: '$605,100.00', progress: 60, users: users4 })),
            react_1.default.createElement("div", { className: 'col-md-6 col-xl-4' },
                react_1.default.createElement(Card2_1.Card2, { icon: '/media/svg/brand-logos/xing-icon.svg', badgeColor: 'primary', status: 'In Progress', statusColor: 'primary', title: '9 Degree', description: 'CRM App application to HR efficiency', date: 'Mar 14, 2021', budget: '$605,100.00', progress: 40, users: users5 })),
            react_1.default.createElement("div", { className: 'col-md-6 col-xl-4' },
                react_1.default.createElement(Card2_1.Card2, { icon: '/media/svg/brand-logos/tvit.svg', badgeColor: 'primary', status: 'In Progress', statusColor: 'primary', title: '9 Degree', description: 'CRM App application to HR efficiency', date: 'Mar 14, 2021', budget: '$605,100.00', progress: 70, users: users6 })),
            react_1.default.createElement("div", { className: 'col-md-6 col-xl-4' },
                react_1.default.createElement(Card2_1.Card2, { icon: '/media/svg/brand-logos/aven.svg', badgeColor: 'primary', status: 'In Progress', statusColor: 'primary', title: 'Buldozer CRM', description: 'CRM App application to HR efficiency', date: 'Mar 14, 2021', budget: '$605,100.00', progress: 70, users: users7 })),
            react_1.default.createElement("div", { className: 'col-md-6 col-xl-4' },
                react_1.default.createElement(Card2_1.Card2, { icon: '/media/svg/brand-logos/treva.svg', badgeColor: 'danger', status: 'Overdue', statusColor: 'danger', title: 'Aviasales App', description: 'CRM App application to HR efficiency', date: 'Mar 14, 2021', budget: '$605,100.00', progress: 10, users: users8 })),
            react_1.default.createElement("div", { className: 'col-md-6 col-xl-4' },
                react_1.default.createElement(Card2_1.Card2, { icon: '/media/svg/brand-logos/kanba.svg', badgeColor: 'success', status: 'Completed', statusColor: 'success', title: 'Oppo CRM', description: 'CRM App application to HR efficiency', date: 'Mar 14, 2021', budget: '$605,100.00', progress: 100, users: users9 }))),
        react_1.default.createElement("div", { className: 'd-flex flex-stack flex-wrap pt-10' },
            react_1.default.createElement("div", { className: 'fs-6 fw-bold text-gray-700' }, "Showing 1 to 10 of 50 entries"),
            react_1.default.createElement("ul", { className: 'pagination' },
                react_1.default.createElement("li", { className: 'page-item previous' },
                    react_1.default.createElement("a", { href: '#', className: 'page-link' },
                        react_1.default.createElement("i", { className: 'previous' }))),
                react_1.default.createElement("li", { className: 'page-item active' },
                    react_1.default.createElement("a", { href: '#', className: 'page-link' }, "1")),
                react_1.default.createElement("li", { className: 'page-item' },
                    react_1.default.createElement("a", { href: '#', className: 'page-link' }, "2")),
                react_1.default.createElement("li", { className: 'page-item' },
                    react_1.default.createElement("a", { href: '#', className: 'page-link' }, "3")),
                react_1.default.createElement("li", { className: 'page-item' },
                    react_1.default.createElement("a", { href: '#', className: 'page-link' }, "4")),
                react_1.default.createElement("li", { className: 'page-item' },
                    react_1.default.createElement("a", { href: '#', className: 'page-link' }, "5")),
                react_1.default.createElement("li", { className: 'page-item' },
                    react_1.default.createElement("a", { href: '#', className: 'page-link' }, "6")),
                react_1.default.createElement("li", { className: 'page-item next' },
                    react_1.default.createElement("a", { href: '#', className: 'page-link' },
                        react_1.default.createElement("i", { className: 'next' })))))));
}
exports.Projects = Projects;
var users1 = [
    { name: 'Emma Smith', avatar: '/media/avatars/150-1.jpg' },
    { name: 'Rudy Stone', avatar: '/media/avatars/150-2.jpg' },
    { name: 'Susan Redwood', initials: 'S', color: 'primary' },
];
var users2 = [
    { name: 'Alan Warden', initials: 'A', color: 'warning' },
    { name: 'Brian Cox', avatar: '/media/avatars/150-4.jpg' },
];
var users3 = [
    { name: 'Mad Masy', avatar: '/media/avatars/150-1.jpg' },
    { name: 'Cris Willson', avatar: '/media/avatars/150-2.jpg' },
    { name: 'Mike Garcie', initials: 'M', color: 'info' },
];
var users4 = [
    { name: 'Nich Warden', initials: 'N', color: 'warning' },
    { name: 'Rob Otto', initials: 'R', color: 'success' },
];
var users5 = [
    { name: 'Francis Mitcham', avatar: '/media/avatars/150-5.jpg' },
    { name: 'Michelle Swanston', avatar: '/media/avatars/150-13.jpg' },
    { name: 'Susan Redwood', initials: 'S', color: 'primary' },
];
var users6 = [
    { name: 'Emma Smith', avatar: '/media/avatars/150-1.jpg' },
    { name: 'Rudy Stone', avatar: '/media/avatars/150-2.jpg' },
    { name: 'Susan Redwood', initials: 'S', color: 'primary' },
];
var users7 = [
    { name: 'Meloday Macy', avatar: '/media/avatars/150-3.jpg' },
    { name: 'Rabbin Watterman', initials: 'S', color: 'success' },
];
var users8 = [
    { name: 'Emma Smith', avatar: '/media/avatars/150-1.jpg' },
    { name: 'Rudy Stone', avatar: '/media/avatars/150-2.jpg' },
    { name: 'Susan Redwood', initials: 'S', color: 'primary' },
];
var users9 = [
    { name: 'Meloday Macy', avatar: '/media/avatars/150-3.jpg' },
    { name: 'Rabbin Watterman', initials: 'S', color: 'danger' },
];
