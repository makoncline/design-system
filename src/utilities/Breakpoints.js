"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.below = exports.above = void 0;
var styled_components_1 = require("styled-components");
var size = {
    sm: 640,
    md: 768,
    lg: 1024
};
var mediaQueryKeys = Object.keys(size);
exports.above = mediaQueryKeys.reduce(function (acc, label) {
    acc[label] = function (literals) {
        var placeholders = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            placeholders[_i - 1] = arguments[_i];
        }
        return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      @media (min-width: ", "em) {\n        ", "\n      }\n    "], ["\n      @media (min-width: ", "em) {\n        ", "\n      }\n    "])), size[label] / 16, styled_components_1.css.apply(void 0, __spreadArray([literals], placeholders, false))).join("");
    };
    return acc;
}, {});
exports.below = mediaQueryKeys.reduce(function (acc, label) {
    acc[label] = function (literals) {
        var placeholders = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            placeholders[_i - 1] = arguments[_i];
        }
        return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      @media (max-width: ", "em) {\n        ", "\n      }\n    "], ["\n      @media (max-width: ", "em) {\n        ", "\n      }\n    "])), size[label] / 16, styled_components_1.css.apply(void 0, __spreadArray([literals], placeholders, false))).join("");
    };
    return acc;
}, {});
var templateObject_1, templateObject_2;
