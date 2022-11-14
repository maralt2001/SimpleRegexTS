"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgxCheckEmail = exports.rgxSingleString = exports.rgxStringArray = void 0;
//Check a string array on given regex condition
const rgxStringArray = (values, pattern) => {
    let result = new Array();
    values.map(i => {
        if (pattern.test(i)) {
            result.push(i);
        }
    });
    return result;
};
exports.rgxStringArray = rgxStringArray;
//Check a single string on given regex condition
const rgxSingleString = (value, pattern) => {
    let output = [];
    let result = pattern.exec(value);
    if (result == null) {
        return [];
    }
    else {
        result.map(i => output.push(i));
        return output;
    }
};
exports.rgxSingleString = rgxSingleString;
const rgxCheckEmail = (value) => {
    let pattern = new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$');
    return pattern.test(value);
};
exports.rgxCheckEmail = rgxCheckEmail;
