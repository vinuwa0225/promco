"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePageData = exports.PageDataProvider = exports.PageTitle = exports.PageDescription = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
var react_1 = require("react");
var PageDataContext = (0, react_1.createContext)({
    setPageTitle: function (_title) { },
    setPageBreadcrumbs: function (_breadcrumbs) { },
    setPageDescription: function (_description) { },
});
var PageDataProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(''), pageTitle = _b[0], setPageTitle = _b[1];
    var _c = (0, react_1.useState)(''), pageDescription = _c[0], setPageDescription = _c[1];
    var _d = (0, react_1.useState)([]), pageBreadcrumbs = _d[0], setPageBreadcrumbs = _d[1];
    var value = {
        pageTitle: pageTitle,
        setPageTitle: setPageTitle,
        pageDescription: pageDescription,
        setPageDescription: setPageDescription,
        pageBreadcrumbs: pageBreadcrumbs,
        setPageBreadcrumbs: setPageBreadcrumbs,
    };
    return react_1.default.createElement(PageDataContext.Provider, { value: value }, children);
};
exports.PageDataProvider = PageDataProvider;
function usePageData() {
    return (0, react_1.useContext)(PageDataContext);
}
exports.usePageData = usePageData;
var PageTitle = function (_a) {
    var children = _a.children, description = _a.description, breadcrumbs = _a.breadcrumbs;
    var _b = usePageData(), setPageTitle = _b.setPageTitle, setPageDescription = _b.setPageDescription, setPageBreadcrumbs = _b.setPageBreadcrumbs;
    (0, react_1.useEffect)(function () {
        if (children) {
            setPageTitle(children.toString());
        }
        return function () {
            setPageTitle('');
        };
    }, [children]);
    (0, react_1.useEffect)(function () {
        if (description) {
            setPageDescription(description);
        }
        return function () {
            setPageDescription('');
        };
    }, [description]);
    (0, react_1.useEffect)(function () {
        if (breadcrumbs) {
            setPageBreadcrumbs(breadcrumbs);
        }
        return function () {
            setPageBreadcrumbs([]);
        };
    }, [breadcrumbs]);
    return react_1.default.createElement(react_1.default.Fragment, null);
};
exports.PageTitle = PageTitle;
var PageDescription = function (_a) {
    var children = _a.children;
    var setPageDescription = usePageData().setPageDescription;
    (0, react_1.useEffect)(function () {
        if (children) {
            setPageDescription(children.toString());
        }
        return function () {
            setPageDescription('');
        };
    }, [children]);
    return react_1.default.createElement(react_1.default.Fragment, null);
};
exports.PageDescription = PageDescription;
