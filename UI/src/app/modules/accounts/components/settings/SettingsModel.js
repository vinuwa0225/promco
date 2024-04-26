"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateAccount = exports.notifications = exports.emailPreferences = exports.connectedAccounts = exports.updatePassword = exports.updateEmail = exports.profileDetailsInitValues = void 0;
exports.profileDetailsInitValues = {
    avatar: '/media/avatars/150-2.jpg',
    fName: 'Max',
    lName: 'Smith',
    company: 'Keenthemes',
    contactPhone: '044 3276 454 935',
    companySite: 'keenthemes.com',
    country: '',
    language: '',
    timeZone: '',
    currency: '',
    communications: {
        email: false,
        phone: false,
    },
    allowMarketing: false,
};
exports.updateEmail = {
    newEmail: 'support@keenthemes.com',
    confirmPassword: '',
};
exports.updatePassword = {
    currentPassword: '',
    newPassword: '',
    passwordConfirmation: '',
};
exports.connectedAccounts = {
    google: true,
    github: true,
    stack: false,
};
exports.emailPreferences = {
    successfulPayments: false,
    payouts: true,
    freeCollections: false,
    customerPaymentDispute: true,
    refundAlert: false,
    invoicePayments: true,
    webhookAPIEndpoints: false,
};
exports.notifications = {
    notifications: {
        email: true,
        phone: true,
    },
    billingUpdates: {
        email: true,
        phone: true,
    },
    newTeamMembers: {
        email: true,
        phone: false,
    },
    completeProjects: {
        email: false,
        phone: true,
    },
    newsletters: {
        email: false,
        phone: false,
    },
};
exports.deactivateAccount = {
    confirm: false,
};
