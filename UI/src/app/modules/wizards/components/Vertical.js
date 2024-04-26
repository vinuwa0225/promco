"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vertical = void 0;
var react_1 = require("react");
var helpers_1 = require("../../../../_metronic/helpers");
var Step1_1 = require("./steps/Step1");
var Step2_1 = require("./steps/Step2");
var Step3_1 = require("./steps/Step3");
var Step4_1 = require("./steps/Step4");
var Step5_1 = require("./steps/Step5");
var components_1 = require("../../../../_metronic/assets/ts/components");
var formik_1 = require("formik");
var CreateAccountWizardHelper_1 = require("./CreateAccountWizardHelper");
var Vertical = function () {
    var stepperRef = (0, react_1.useRef)(null);
    var stepper = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(CreateAccountWizardHelper_1.createAccountSchemas[0]), currentSchema = _a[0], setCurrentSchema = _a[1];
    var initValues = (0, react_1.useState)(CreateAccountWizardHelper_1.inits)[0];
    var loadStepper = function () {
        stepper.current = components_1.StepperComponent.createInsance(stepperRef.current);
    };
    var prevStep = function () {
        if (!stepper.current) {
            return;
        }
        stepper.current.goPrev();
        setCurrentSchema(CreateAccountWizardHelper_1.createAccountSchemas[stepper.current.currentStepIndex - 1]);
    };
    var submitStep = function (values, actions) {
        if (!stepper.current) {
            return;
        }
        setCurrentSchema(CreateAccountWizardHelper_1.createAccountSchemas[stepper.current.currentStepIndex]);
        if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
            stepper.current.goNext();
        }
        else {
            stepper.current.goto(1);
            actions.resetForm();
        }
    };
    (0, react_1.useEffect)(function () {
        if (!stepperRef.current) {
            return;
        }
        loadStepper();
    }, [stepperRef]);
    return (react_1.default.createElement("div", { ref: stepperRef, className: 'stepper stepper-pills stepper-column   d-flex flex-column flex-xl-row flex-row-fluid', id: 'kt_create_account_stepper' },
        react_1.default.createElement("div", { className: 'd-flex justify-content-center bg-white rounded justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9' },
            react_1.default.createElement("div", { className: 'px-6 px-lg-10 px-xxl-15 py-20' },
                react_1.default.createElement("div", { className: 'stepper-nav' },
                    react_1.default.createElement("div", { className: 'stepper-item current', "data-kt-stepper-element": 'nav' },
                        react_1.default.createElement("div", { className: 'stepper-line w-40px' }),
                        react_1.default.createElement("div", { className: 'stepper-icon w-40px h-40px' },
                            react_1.default.createElement("i", { className: 'stepper-check fas fa-check' }),
                            react_1.default.createElement("span", { className: 'stepper-number' }, "1")),
                        react_1.default.createElement("div", { className: 'stepper-label' },
                            react_1.default.createElement("h3", { className: 'stepper-title' }, "Account Type"),
                            react_1.default.createElement("div", { className: 'stepper-desc fw-bold' }, "Setup Your Account Details"))),
                    react_1.default.createElement("div", { className: 'stepper-item', "data-kt-stepper-element": 'nav' },
                        react_1.default.createElement("div", { className: 'stepper-line w-40px' }),
                        react_1.default.createElement("div", { className: 'stepper-icon w-40px h-40px' },
                            react_1.default.createElement("i", { className: 'stepper-check fas fa-check' }),
                            react_1.default.createElement("span", { className: 'stepper-number' }, "2")),
                        react_1.default.createElement("div", { className: 'stepper-label' },
                            react_1.default.createElement("h3", { className: 'stepper-title' }, "Account Settings"),
                            react_1.default.createElement("div", { className: 'stepper-desc fw-bold' }, "Setup Your Account Settings"))),
                    react_1.default.createElement("div", { className: 'stepper-item', "data-kt-stepper-element": 'nav' },
                        react_1.default.createElement("div", { className: 'stepper-line w-40px' }),
                        react_1.default.createElement("div", { className: 'stepper-icon w-40px h-40px' },
                            react_1.default.createElement("i", { className: 'stepper-check fas fa-check' }),
                            react_1.default.createElement("span", { className: 'stepper-number' }, "3")),
                        react_1.default.createElement("div", { className: 'stepper-label' },
                            react_1.default.createElement("h3", { className: 'stepper-title' }, "Business Info"),
                            react_1.default.createElement("div", { className: 'stepper-desc fw-bold' }, "Your Business Related Info"))),
                    react_1.default.createElement("div", { className: 'stepper-item', "data-kt-stepper-element": 'nav' },
                        react_1.default.createElement("div", { className: 'stepper-line w-40px' }),
                        react_1.default.createElement("div", { className: 'stepper-icon w-40px h-40px' },
                            react_1.default.createElement("i", { className: 'stepper-check fas fa-check' }),
                            react_1.default.createElement("span", { className: 'stepper-number' }, "4")),
                        react_1.default.createElement("div", { className: 'stepper-label' },
                            react_1.default.createElement("h3", { className: 'stepper-title' }, "Billing Details"),
                            react_1.default.createElement("div", { className: 'stepper-desc fw-bold' }, "Set Your Payment Methods"))),
                    react_1.default.createElement("div", { className: 'stepper-item', "data-kt-stepper-element": 'nav' },
                        react_1.default.createElement("div", { className: 'stepper-line w-40px' }),
                        react_1.default.createElement("div", { className: 'stepper-icon w-40px h-40px' },
                            react_1.default.createElement("i", { className: 'stepper-check fas fa-check' }),
                            react_1.default.createElement("span", { className: 'stepper-number' }, "5")),
                        react_1.default.createElement("div", { className: 'stepper-label' },
                            react_1.default.createElement("h3", { className: 'stepper-title' }, "Completed"),
                            react_1.default.createElement("div", { className: 'stepper-desc fw-bold' }, "Woah, we are here")))))),
        react_1.default.createElement("div", { className: 'd-flex flex-row-fluid flex-center bg-white rounded' },
            react_1.default.createElement(formik_1.Formik, { validationSchema: currentSchema, initialValues: initValues, onSubmit: submitStep }, function () {
                var _a, _b, _c, _d;
                return (react_1.default.createElement(formik_1.Form, { className: 'py-20 w-100 w-xl-700px px-9', noValidate: true, id: 'kt_create_account_form' },
                    react_1.default.createElement("div", { className: 'current', "data-kt-stepper-element": 'content' },
                        react_1.default.createElement(Step1_1.Step1, null)),
                    react_1.default.createElement("div", { "data-kt-stepper-element": 'content' },
                        react_1.default.createElement(Step2_1.Step2, null)),
                    react_1.default.createElement("div", { "data-kt-stepper-element": 'content' },
                        react_1.default.createElement(Step3_1.Step3, null)),
                    react_1.default.createElement("div", { "data-kt-stepper-element": 'content' },
                        react_1.default.createElement(Step4_1.Step4, null)),
                    react_1.default.createElement("div", { "data-kt-stepper-element": 'content' },
                        react_1.default.createElement(Step5_1.Step5, null)),
                    react_1.default.createElement("div", { className: 'd-flex flex-stack pt-10' },
                        react_1.default.createElement("div", { className: 'mr-2' },
                            react_1.default.createElement("button", { onClick: prevStep, type: 'button', className: 'btn btn-lg btn-light-primary me-3', "data-kt-stepper-action": 'previous' },
                                react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr063.svg', className: 'svg-icon-4 me-1' }),
                                "Back")),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("button", { type: 'submit', className: 'btn btn-lg btn-primary me-3' },
                                react_1.default.createElement("span", { className: 'indicator-label' },
                                    ((_a = stepper.current) === null || _a === void 0 ? void 0 : _a.currentStepIndex) !==
                                        ((_b = stepper.current) === null || _b === void 0 ? void 0 : _b.totatStepsNumber) - 1 && 'Continue',
                                    ((_c = stepper.current) === null || _c === void 0 ? void 0 : _c.currentStepIndex) ===
                                        ((_d = stepper.current) === null || _d === void 0 ? void 0 : _d.totatStepsNumber) - 1 && 'Submit',
                                    react_1.default.createElement(helpers_1.KTSVG, { path: '/media/icons/duotune/arrows/arr064.svg', className: 'svg-icon-3 ms-2 me-0' })))))));
            }))));
};
exports.Vertical = Vertical;
