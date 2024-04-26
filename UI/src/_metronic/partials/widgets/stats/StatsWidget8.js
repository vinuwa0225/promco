"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsWidget8 = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
var react_1 = require("react");
var bootstrap_1 = require("bootstrap");
var StatsWidget8 = function (_a) {
    var className = _a.className, _b = _a.innerPadding, innerPadding = _b === void 0 ? '' : _b;
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
    return (react_1.default.createElement("div", { className: "card card-custom ".concat(className) },
        react_1.default.createElement("div", { className: "card-body ".concat(innerPadding) },
            react_1.default.createElement("div", { className: 'carousel carousel-custom slide', id: 'widget8_carousel', "data-bs-ride": 'carousel', "data-bs-interval": '8000', ref: carouselRef },
                react_1.default.createElement("div", { className: 'd-flex align-items-center justify-content-between flex-wrap' },
                    react_1.default.createElement("span", { className: 'fs-6 text-muted fw-bolder pe-2' }, "Projects"),
                    react_1.default.createElement("ol", { className: 'p-0 m-0 carousel-indicators carousel-indicators-dots' },
                        react_1.default.createElement("li", { className: 'ms-1 active', "data-bs-target": '#widget8_carousel', "data-bs-slide-to": '0' }),
                        react_1.default.createElement("li", { className: 'ms-1', "data-bs-target": '#widget8_carousel', "data-bs-slide-to": '1' }),
                        react_1.default.createElement("li", { className: 'ms-1', "data-bs-target": '#widget8_carousel', "data-bs-slide-to": '2' }))),
                react_1.default.createElement("div", { className: 'carousel-inner pt-8' },
                    react_1.default.createElement("div", { className: 'carousel-item active' },
                        react_1.default.createElement("div", { className: 'd-flex flex-column justify-content-between h-100' },
                            react_1.default.createElement("h3", { className: 'fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer' }, "Admin Launch Day"),
                            react_1.default.createElement("p", { className: 'text-gray-600 fw-bold pt-3 mb-0' }, "To start a blog, think of a topic about and first brainstorm ways to write details"))),
                    react_1.default.createElement("div", { className: 'carousel-item' },
                        react_1.default.createElement("div", { className: 'd-flex flex-column justify-content-between h-100' },
                            react_1.default.createElement("h3", { className: 'fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer' }, "Reached 50,000 Sales"),
                            react_1.default.createElement("p", { className: 'text-gray-600 fw-bold pt-3 mb-0' }, "To start a blog, think of a topic about and first brainstorm ways to write details"))),
                    react_1.default.createElement("div", { className: 'carousel-item' },
                        react_1.default.createElement("div", { className: 'd-flex flex-column justify-content-between h-100' },
                            react_1.default.createElement("h3", { className: 'fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer' }, "Close 300 support tickets"),
                            react_1.default.createElement("p", { className: 'text-gray-600 fw-bold pt-3 mb-0' }, "Each Leaflet map instance has its own React context.")))))),
        react_1.default.createElement("div", { className: 'card-footer border-0 pt-0 pb-10' },
            react_1.default.createElement("div", { className: 'd-flex text-muted fw-bold fs-6 pb-4' },
                react_1.default.createElement("span", { className: 'flex-grow-1' }, "Progress"),
                react_1.default.createElement("span", { className: '' }, "78%")),
            react_1.default.createElement("div", { className: 'progress h-6px  bg-light-danger' },
                react_1.default.createElement("div", { className: 'progress-bar bg-danger', role: 'progressbar', style: { width: '70%' }, "aria-valuenow": 24, "aria-valuemin": 0, "aria-valuemax": 100 })))));
};
exports.StatsWidget8 = StatsWidget8;
