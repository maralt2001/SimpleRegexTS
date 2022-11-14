
//Check a string array on given regex condition
const rgxStringArray = (values:string[],pattern:RegExp):string[] => {

    let result = new Array<string>()
    values.map(i => {
        if (pattern.test(i)) {
            result.push(i)
        }
    })
    return result
}

//Check a single string on given regex condition
const rgxSingleString = (value:string, pattern:RegExp):string[] => {

    let output = [] as string[]
    let result = pattern.exec(value)
    if(result == null) {
        return []
    }
    else {
       result.map(i => output.push(i))
        return output
    }


}

const rgxCheckEmail = (value:string):boolean => {
    let pattern:RegExp = new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$')
    return pattern.test(value);
}

export {rgxStringArray, rgxSingleString, rgxCheckEmail}

