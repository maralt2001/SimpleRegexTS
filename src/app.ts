
import {rgxStringArray,rgxSingleString,rgxCheckEmail} from "./libs/functions";


const names:string[] = ["markus", "stefan", "alexander"]

let check = rgxStringArray(names,new RegExp('^[a-m]')).sort()
console.log(check)


let toCheck = rgxSingleString("20221105", new RegExp('[^3-9]*'))
console.log(toCheck)

//check a email
let isEmail = rgxCheckEmail('mmll.test@gmail.de')
console.log(isEmail)

