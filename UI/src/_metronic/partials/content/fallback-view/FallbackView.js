"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallbackView = void 0;
var helpers_1 = require("../../../helpers");
function FallbackView() {
    return (React.createElement("div", { className: 'splash-screen' },
        React.createElement("img", { src: (0, helpers_1.toAbsoluteUrl)('/media/logos/logo-compact.svg'), alt: 'Start logo' }),
        React.createElement("span", null, "Loading ...")));
}
exports.FallbackView = FallbackView;
