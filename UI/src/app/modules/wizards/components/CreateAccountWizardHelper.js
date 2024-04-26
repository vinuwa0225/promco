"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inits = exports.createAccountSchemas = void 0;
var Yup = require("yup");
var createAccountSchemas = [
    Yup.object({
        accountType: Yup.string().required().label('Account Type'),
    }),
    Yup.object({
        accountName: Yup.string().required().label('Account Name'),
    }),
    Yup.object({
        businessName: Yup.string().required().label('Business Name'),
        businessDescriptor: Yup.string().required().label('Shortened Descriptor'),
        businessType: Yup.string().required().label('Corporation Type'),
        businessEmail: Yup.string().required().label('Contact Email'),
    }),
    Yup.object({
        nameOnCard: Yup.string().required().label('Name On Card'),
        cardNumber: Yup.string().required().label('Card Number'),
        cardExpiryMonth: Yup.string().required().label('Expiration Month'),
        cardExpiryYear: Yup.string().required().label('Expiration Year'),
        cardCvv: Yup.string().required().label('CVV'),
    }),
];
exports.createAccountSchemas = createAccountSchemas;
var inits = {
    accountType: 'personal',
    accountTeamSize: '50+',
    accountName: '',
    accountPlan: '1',
    businessName: 'Keenthemes Inc.',
    businessDescriptor: 'KEENTHEMES',
    businessType: '1',
    businessDescription: '',
    businessEmail: 'corp@support.com',
    nameOnCard: 'Max Doe',
    cardNumber: '4111 1111 1111 1111',
    cardExpiryMonth: '1',
    cardExpiryYear: '2025',
    cardCvv: '123',
    saveCard: '1',
};
exports.inits = inits;
