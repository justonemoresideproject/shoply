export function round(num, decimalPlaces = 0) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces).toFixed(decimalPlaces);
}

export function capitalizeEachWord(string){
    const stringArr = Array.from(string)

    let isFirstLetter = true;
    let newString = ''
    for(let i = 0; i < stringArr.length; i++){
        let letterAdded = false
        if(isFirstLetter){
            isFirstLetter = false;
            newString = newString + stringArr[i].toUpperCase()
            letterAdded = true
        }
        if(stringArr[i] === ' '){
            isFirstLetter = true;
        }
        if(!letterAdded){
            newString = newString + stringArr[i].toLowerCase()
        }
    }

    return newString
}