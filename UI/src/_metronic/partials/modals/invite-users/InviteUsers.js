"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteUsers = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var helpers_1 = require("../../../helpers");
var InviteUsers = function () {
    var users = [
        {
            avatar: '/media/avatars/150-1.jpg',
            name: 'Emma Smith',
            email: 'e.smith@kpmg.com.au',
            access: '1',
        },
        {
            state: 'danger',
            name: 'Melody Macy',
            email: 'melody@altbox.com',
            access: '1',
        },
        {
            avatar: '/media/avatars/150-2.jpg',
            name: 'Max Smith',
            email: 'max@kt.com',
            access: '3',
        },
        {
            avatar: '/media/avatars/150-2.jpg',
            name: 'Sean Bean',
            email: 'sean@dellito.com',
            access: '2',
        },
        {
            avatar: '/media/avatars/150-15.jpg',
            name: 'Brian Cox',
            email: 'brian@exchange.com',
            access: '3',
        },
        {
            state: 'warning',
            name: 'Mikaela Collins',
            email: 'mikaela@pexcom.com',
            access: '2',
        },
        {
            avatar: '/media/avatars/150-8.jpg',
            name: 'Francis Mitcham',
            email: 'f.mitcham@kpmg.com.au',
            access: '3',
        },
        {
            state: 'danger',
            name: 'Olivia Wild',
            email: 'olivia@corpmail.com',
            access: '2',
        },
        {
            state: 'info',
            name: 'Neil Owen',
            email: 'owen.neil@gmail.com',
            access: '1',
        },
        {
            avatar: '/media/avatars/150-6.jpg',
            name: 'Dan Wilson',
            email: 'dam@consilting.com',
            access: '3',
        },
        {
            state: 'danger',
            name: 'Emma Bold',
            email: 'emma@intenso.com',
            access: '2',
        },
        {
            avatar: '/media/avatars/150-7.jpg',
            name: 'Ana Crown',
            email: 'ana.cf@limtel.com',
            access: '1',
        },
        {
            state: 'primary',
            name: 'Robert Doe',
            email: 'robert@benko.com',
            access: '3',
        },
        {
            avatar: '/media/avatars/150-17.jpg',
            name: 'John Miller',
            email: 'miller@mapple.com',
            access: '3',
        },
        {
            state: 'success',
            name: 'Lucy Kunic',
            email: 'lucy.m@fentech.com',
            access: '2',
        },
        {
            avatar: '/media/avatars/150-10.jpg',
            name: 'Ethan Wilder',
            email: 'ethan@loop.com.au',
            access: '1',
        },
        {
            avatar: '/media/avatars/150-7.jpg',
            name: 'Ana Crown',
            email: 'ana.cf@limtel.com',
            access: '3',
        },
    ];
    return (react_1.default.createElement("div", { className: 'modal fade', id: 'kt_modal_invite_friends', "aria-hidden": 'true' },
        react_1.default.createElement("div", { className: 'modal-dialog mw-650px' },
            react_1.default.createElement("div", { className: 'modal-content' },
                react_1.default.createElement("div", { className: 'modal-header pb-0 border-0 justify-content-end' },
                    react_1.default.createElement("div", { className: 'btn btn-sm btn-icon btn-active-color-primary', "data-bs-dismiss": 'modal' },
                        react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr061.svg', className: 'svg-icon-1' }))),
                react_1.default.createElement("div", { className: 'modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15' },
                    react_1.default.createElement("div", { className: 'text-center mb-13' },
                        react_1.default.createElement("h1", { className: 'mb-3' }, "Invite a Friend"),
                        react_1.default.createElement("div", { className: 'text-muted fw-bold fs-5' },
                            "If you need more info, please check out",
                            react_1.default.createElement("a", { href: '#', className: 'link-primary fw-bolder' },
                                ' ',
                                "FAQ Page"),
                            ".")),
                    react_1.default.createElement("div", { className: 'btn btn-light-primary fw-bolder w-100 mb-8' },
                        react_1.default.createElement("img", { alt: 'Logo', src: (0, helpers_1.toAbsoluteUrl)('/media/svg/brand-logos/google-icon.svg'), className: 'h-20px me-3' }),
                        "Invite Gmail Contacts"),
                    react_1.default.createElement("div", { className: 'separator d-flex flex-center mb-8' },
                        react_1.default.createElement("span", { className: 'text-uppercase bg-body fs-7 fw-bold text-muted px-3' }, "or")),
                    react_1.default.createElement("textarea", { className: 'form-control form-control-solid mb-8', rows: 3, placeholder: 'Type or paste emails here' }),
                    react_1.default.createElement("div", { className: 'mb-10' },
                        react_1.default.createElement("div", { className: 'fs-6 fw-bold mb-2' }, "Your Invitations"),
                        react_1.default.createElement("div", { className: 'mh-300px scroll-y me-n7 pe-7' }, users.map(function (user, i) {
                            return (react_1.default.createElement("div", { className: 'd-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed', key: i },
                                react_1.default.createElement("div", { className: 'd-flex align-items-center' },
                                    react_1.default.createElement("div", { className: 'symbol symbol-35px symbol-circle' },
                                        user.avatar && react_1.default.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)(user.avatar) }),
                                        user.state && (react_1.default.createElement("div", { className: 'symbol symbol-35px symbol-circle' },
                                            react_1.default.createElement("span", { className: "symbol-label bg-light-".concat(user.state, " text-").concat(user.state, " fw-bold") }, user.name.charAt(0))))),
                                    react_1.default.createElement("div", { className: 'ms-5' },
                                        react_1.default.createElement("a", { href: '#', className: 'fs-5 fw-bolder text-gray-900 text-hover-primary mb-2' }, user.name),
                                        react_1.default.createElement("div", { className: 'fw-bold text-muted' }, user.email))),
                                react_1.default.createElement("div", { className: 'ms-2 w-100px' },
                                    react_1.default.createElement("select", { defaultValue: '2', className: 'form-select form-select-solid form-select-sm select2-hidden-accessible' },
                                        react_1.default.createElement("option", { value: '1' }, "Guest"),
                                        react_1.default.createElement("option", { value: '2', "data-select2-id": 'select2-data-12-vz6w' }, "Owner"),
                                        react_1.default.createElement("option", { value: '3' }, "Can Edit")))));
                        }))),
                    react_1.default.createElement("div", { className: 'd-flex flex-stack' },
                        react_1.default.createElement("div", { className: 'me-5 fw-bold' },
                            react_1.default.createElement("label", { className: 'fs-6' }, "Adding Users by Team Members"),
                            react_1.default.createElement("div", { className: 'fs-7 text-muted' }, "If you need more info, please check budget planning")),
                        react_1.default.createElement("label", { className: 'form-check form-switch form-check-custom form-check-solid' },
                            react_1.default.createElement("input", { className: 'form-check-input', type: 'checkbox', value: '1' }),
                            react_1.default.createElement("span", { className: 'form-check-label fw-bold text-muted' }, "Allowed"))))))));
};
exports.InviteUsers = InviteUsers;
