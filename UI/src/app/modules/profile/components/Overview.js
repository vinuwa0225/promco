"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overview = void 0;
var react_1 = require("react");
var widgets_1 = require("../../../../_metronic/partials/widgets");
function Overview() {
    return (react_1.default.createElement("div", { className: 'row g-5 g-xxl-8' },
        react_1.default.createElement("div", { className: 'col-xl-6' },
            react_1.default.createElement(widgets_1.FeedsWidget2, { className: 'mb-5 mb-xxl-8' }),
            react_1.default.createElement(widgets_1.FeedsWidget3, { className: 'mb-5 mb-xxl-8' }),
            react_1.default.createElement(widgets_1.FeedsWidget4, { className: 'mb-5 mb-xxl-8' }),
            react_1.default.createElement(widgets_1.FeedsWidget5, { className: 'mb-5 mb-xxl-8' }),
            react_1.default.createElement(widgets_1.FeedsWidget6, { className: 'mb-5 mb-xxl-8' })),
        react_1.default.createElement("div", { className: 'col-xl-6' },
            react_1.default.createElement(widgets_1.ChartsWidget1, { className: 'mb-5 mb-xxl-8' }),
            react_1.default.createElement(widgets_1.ListsWidget5, { className: 'mb-5 mb-xxl-8' }),
            react_1.default.createElement(widgets_1.ListsWidget2, { className: 'mb-5 mb-xxl-8' }))));
}
exports.Overview = Overview;
