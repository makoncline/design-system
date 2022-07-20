"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Alert = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Headings_1 = require("./Headings");
function Alert(_a) {
    var type = _a.type, children = _a.children, props = __rest(_a, ["type", "children"]);
    var backgroundColors = {
        success: "--success--transparent",
        danger: "--danger--transparent",
        info: "--info--transparent"
    };
    var borderColors = {
        success: "--success",
        danger: "--danger",
        info: "--info"
    };
    var style = {
        "--border-color": "var(".concat(borderColors[type], ")"),
        "--background-color": "var(".concat(backgroundColors[type], ")")
    };
    return (<StyledAlert style={style} {...props}>
      {children}
    </StyledAlert>);
}
exports.Alert = Alert;
var AlertHeading = function (_a) {
    var children = _a.children;
    return <Headings_1.Heading level={3}>{children}</Headings_1.Heading>;
};
Alert.Heading = AlertHeading;
var StyledAlert = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid var(--border-color);\n  background-color: var(--background-color);\n  padding: var(--size-4) var(--size-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-4);\n  max-width: var(--max-width-form);\n"], ["\n  border: 1px solid var(--border-color);\n  background-color: var(--background-color);\n  padding: var(--size-4) var(--size-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-4);\n  max-width: var(--max-width-form);\n"])));
Alert.Body = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
Alert.Actions = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  gap: var(--size-2);\n"], ["\n  display: flex;\n  gap: var(--size-2);\n"])));
var templateObject_1, templateObject_2, templateObject_3;
