"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card1 = void 0;
var helpers_1 = require("../../../helpers");
var Card1 = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '' : _b, _c = _a.avatar, avatar = _c === void 0 ? '' : _c, _d = _a.online, online = _d === void 0 ? false : _d, name = _a.name, job = _a.job, avgEarnings = _a.avgEarnings, totalEarnings = _a.totalEarnings;
    return (React.createElement("div", { className: 'card' },
        React.createElement("div", { className: 'card-body d-flex flex-center flex-column p-9' },
            React.createElement("div", { className: 'mb-5' },
                React.createElement("div", { className: 'symbol symbol-75px symbol-circle' },
                    color ? (React.createElement("span", { className: "symbol-label bg-light-".concat(color, " text-").concat(color, " fs-5 fw-bolder") }, name.charAt(0))) : (React.createElement("img", { alt: 'Pic', src: (0, helpers_1.toAbsoluteUrl)(avatar) })),
                    online && (React.createElement("div", { className: 'symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3' })))),
            React.createElement("a", { href: '#', className: 'fs-4 text-gray-800 text-hover-primary fw-bolder mb-0' }, name),
            React.createElement("div", { className: 'fw-bold text-gray-400 mb-6' }, job),
            React.createElement("div", { className: 'd-flex flex-center flex-wrap mb-5' },
                React.createElement("div", { className: 'border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3' },
                    React.createElement("div", { className: 'fs-6 fw-bolder text-gray-700' }, avgEarnings),
                    React.createElement("div", { className: 'fw-bold text-gray-400' }, "Avg. Earnings")),
                React.createElement("div", { className: 'border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3' },
                    React.createElement("div", { className: 'fs-6 fw-bolder text-gray-700' }, totalEarnings),
                    React.createElement("div", { className: 'fw-bold text-gray-400' }, "Total Sales"))),
            React.createElement("button", { className: 'btn btn-sm btn-light-primary fw-bolder', id: 'kt_drawer_chat_toggle' }, "Send Message"))));
};
exports.Card1 = Card1;
