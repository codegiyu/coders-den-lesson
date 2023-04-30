//  REGULAR EXPRESSION

// "tree fiddy" "3.50" "three fifty"

// test match search replace

function isLockNessMonster(s) {
    
    // return !!s.match(/tree fiddy|3.50|three fifty/gi)
    return /(tree fiddy|3.50|three fifty)/gi.test(s)
    // return s.search(/tree fiddy|3.50|three fifty/gi) !== -1
}

console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"))
console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."))
console.log(isLockNessMonster("Yo, I heard you were on the lookout for 3.50. Let me know if you need assistance."))

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
function validatePIN (pin) {
    return /^([0-9]{4}|[0-9]{6})$/.test(pin)
}
console.log(validatePIN("123a"))
console.log(validatePIN("12345"))
console.log(validatePIN("1234567"))
console.log(validatePIN("-1234"))
console.log(validatePIN("1234"))
console.log(validatePIN("123564"))

// {4,6} {4,} {4} (cat|dog)

function duplicateEncode(word){
    word = word.toLowerCase()
    return word.replace(/./g, (item) => word.indexOf(item) === word.lastIndexOf(item) ? "(" : ")")
}
console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))
console.log(duplicateEncode("(( @"))

console.log("Somev78792^(@(#".match(/./g))


function createPhoneNumber(numbers){
    let pattern = new RegExp("([0-9]{3})([0-9]{3})([0-9]{4})", "g")
    let string = numbers.join("")

    return string.replace(pattern, (_, p1, p2, p3) => `(${p1}) ${p2}-${p3}`)
}
console.log("\\d")
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([0, 8, 0, 3, 4, 5, 9, 0, 2, 1]));

// (123) 456-7890