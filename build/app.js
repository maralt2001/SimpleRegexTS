"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./libs/functions");
const names = ["markus", "stefan", "alexander"];
let check = (0, functions_1.rgxStringArray)(names, new RegExp('^[a-m]')).sort();
console.log(check);
let toCheck = (0, functions_1.rgxSingleString)("20221105", new RegExp('[^3-9]*'));
console.log(toCheck);
//check a email
let isEmail = (0, functions_1.rgxCheckEmail)('mmll.test@gmail.de');
console.log(isEmail);
