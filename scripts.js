// TASK 1

let url = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'


let pasrUrl = function(url){
    let arr=[],
        regExp = /(https?:\/\/[a-zA-Z0-9-_.]*)(\/.*\/)?(\?[\w=&]*)?(#.*\/?)/,
        parsUrlArr = url.match(regExp)

        for(let i=1;i< parsUrlArr.length;i++){
            arr.push(parsUrlArr[i])
        }
        return arr

}
console.log(pasrUrl(url))


let number = '+375292222222'
let testNum = (str)=>{
    let expReg = /\+375\s?\(?[0-9]{2}\)?\s?-?\d{3}\s?-?\d{2}\s?-?\d{2}/,
    result = expReg.test(str)
    return result
}
console.log(testNum(number))  

// TASK 2


let firstName = 'Roman',
    secondName = 'Belousov',
    lastName = 'Stavislavovich'
    groupNumber = 'FE110';
let createPrint = (firstName,secondName,lastName,groupNumber) =>{
    let strOfHw = `* Домашняя работа: «Функции»`,
        infOfStudent = `* Выполнил: студент гр. ${groupNumber}`,
        fio = `* ${secondName}, ${firstName}, ${lastName}`,
        arrData = [strOfHw,infOfStudent,fio],
        max = 0,
        maxStr = '',
        stars = '';

        for(let i = 0;i< arrData.length;i++){
            if (max < arrData[i].length){
                max = arrData[i].length;
                maxStr = arrData[i]
            }
        }
        for(let i=0; i <= maxStr.length +1; i++){
            stars += '*'
        }

        for(let i=0; i < arrData.length; i++){
            for(let j = 0; j <= maxStr.length; j++){
                if(arrData[i][j] == undefined){
                    arrData[i] += " "
                }
            }
        }

        console.log(stars)
        console.log(arrData[0]+ ' *');
        console.log(arrData[1]+ ' *');
        console.log(arrData[2]+ ' *');
        console.log(stars)
}

createPrint(firstName, secondName, lastName,groupNumber)


// TASK 3

let email = 'tAest@gmail.com'
let check = (email) => {

    email = email.toLowerCase();
    
    let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
    
    let checkAlphabet = false;

    for(let i = 0; i < email.length; i++){
        if(arr_ru.includes(email[i])){
            checkAlphabet = true;
            break;
        }
    }
    return checkAlphabet
}
console.log(check(email))