// Last Survivors Ep. 2

function lastSurvivors(str) {
    const strArr = [...str], strObj = {}
    let result = ""

    const replaceAlpha = (char) => {
        if (strObj[char] < 2) return

        delete strObj[char]
        let newLetter = char === 'z' ? 'a' :  String.fromCharCode(char.charCodeAt(0) + 1) 
        
        strObj[newLetter] = (strObj[newLetter] || 0) + 1

        return replaceAlpha(newLetter)
    }

    for (let char of strArr) {
        strObj[char] = (strObj[char] || 0) + 1

        replaceAlpha(char)
    }
    
    for (let key in strObj) {
        result += key
    }

    return result
}

console.log(lastSurvivors("zzzab"))
// console.log(lastSurvivors("xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh")) // acdeghlmnqrvyz

// {z: 1, a: 0, b: 0, c:1}

const j = {g: "r", variable: 9}
j["t"] = 1
let variable = "t"

console.log(j["variable"])

// Luhn Algorithm

// Reverse the order of the digits in the number.
// Take the first, third, ... and every other odd digit in the reversed digits and sum them to form the partial sum s1
// Taking the second, fourth ... and every other even digit in the reversed digits:
// Multiply each digit by two and sum the digits if the answer is greater than nine to form partial sums for the even digits.
// Sum the partial sums of the even digits to form s2.
// If s1 + s2 ends in zero then the original number is in the form of a valid credit card number as verified by the Luhn test.

function luhnTest(str) {
    str = str.split("").reverse().join("")
    let s1 = 0, s2Arr = [], s2 = 0
    const twoDigits = {10: 1, 12: 3, 14: 5, 16: 7, 18: 9}
    
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            s1 += Number(str[i])
        } else {
            let product = str[i] * 2
            s2 += product > 9 ? twoDigits[product] : product
        }
    }

    return String(s1 + s2).endsWith("0")
}

console.log(luhnTest("49927398716")) // 6 + 7 + 9 + 7 + 9 + 4
// console.log(luhnTest("1234567897654321"))
let test = +"1" + +"6"
console.log(test)
// 6 + 7 + 9 + 7 + 9 + 4
// 12 14   18 14   18 8
// 3  5     9  5   9  8

// console.log([..."thre"])