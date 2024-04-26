"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsWidget9 = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var bootstrap_1 = require("bootstrap");
var StatsWidget9 = function (_a) {
    var className = _a.className, _b = _a.innerPadding, innerPadding = _b === void 0 ? '' : _b, children = _a.children;
    var carouselRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var element = carouselRef.current;
        if (!element) {
            return;
        }
        var carousel = new bootstrap_1.Carousel(element);
        return function cleanUp() {
            carousel.dispose();
        };
    }, []);
    return (react_1.default.createElement("div", { className: "card ".concat(className) },
        react_1.default.createElement("div", { className: "card-body ".concat(innerPadding) },
            react_1.default.createElement("div", { id: 'kt_stats_widget_9_carousel', className: 'carousel carousel-custom slide', "data-bs-ride": 'carousel', "data-bs-interval": '8000', ref: carouselRef },
                react_1.default.createElement("div", { className: 'd-flex align-items-center justify-content-between flex-wrap' },
                    react_1.default.createElement("span", { className: 'text-muted fw-bolder pe-2' }, "Today\u2019s Schedule"),
                    react_1.default.createElement("ol", { className: 'p-0 m-0 carousel-indicators carousel-indicators-dots' },
                        react_1.default.createElement("li", { "data-bs-target": '#kt_stats_widget_9_carousel', "data-bs-slide-to": '0', className: 'ms-1 active' }),
                        react_1.default.createElement("li", { "data-bs-target": '#kt_stats_widget_9_carousel', "data-bs-slide-to": '1', className: 'ms-1' }),
                        react_1.default.createElement("li", { "data-bs-target": '#kt_stats_widget_9_carousel', "data-bs-slide-to": '2', className: 'ms-1' }))),
                react_1.default.createElement("div", { className: 'carousel-inner pt-9' },
                    react_1.default.createElement("div", { className: 'carousel-item active' },
                        react_1.default.createElement("div", { className: 'flex-grow-1' },
                            react_1.default.createElement("h3", { className: 'fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer' }, "UI/UX Design Updates"),
                            react_1.default.createElement("p", { className: 'text-primary fs-1 fw-bolder pt-3 mb-0' }, "11:15AM - 12:30PM"))),
                    react_1.default.createElement("div", { className: 'carousel-item' },
                        react_1.default.createElement("div", { className: 'flex-grow-1' },
                            react_1.default.createElement("h3", { className: 'fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer' }, "UI/UX Design Updates"),
                            react_1.default.createElement("p", { className: 'text-primary fs-1 fw-bolder pt-3 mb-0' }, "16:15AM - 11:20PM"))),
                    react_1.default.createElement("div", { className: 'carousel-item' },
                        react_1.default.createElement("div", { className: 'flex-grow-1' },
                            react_1.default.createElement("h3", { className: 'fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer' }, "UI/UX Design Updates"),
                            react_1.default.createElement("p", { className: 'text-primary fs-1 fw-bolder pt-3 mb-0' }, "13:15AM - 14:30PM")))))),
        react_1.default.createElement("div", { className: 'card-footer border-0 d-flex align-items-center justify-content-between pt-0 pb-10' }, children)));
};
exports.StatsWidget9 = StatsWidget9;
