//  REGULAR EXPRESSIONS

// without flag
let pattern = 'love'
let regEx = new RegExp(pattern, "g")
console.log(regEx)

let lovePattern = /o/i
console.log(lovePattern)

console.log("I LoVe you".match(lovePattern))

let wordArr = ["string", "fourfive", "words", "cat", "one"]
for (let word of wordArr) {
    let pattern = new RegExp(word.substring(0, 2))
    console.log(pattern)
}

// pattern.test(string)
// string.match(pattern)
// string.search(pattern)
// string.replace(pattern)

console.log(/123/g.test("87iih8hjwuu1 23"))
console.log("87iih8hjwuu123".match(/123/g))
console.log("87iih8hjwuu123".search(/123/g))
console.log("87ii123h8hjwuu123".replace(/123/g , "321"))

// whatever word/substring in perfect order

let pat = /\w+(?!ing)/gi
let testString = "regular this that understanding driving"
console.log(testString.match(pat))

let [annual, monthly, bonus] = testString.match(pat)
console.log(annual, monthly, bonus)

// \d = digits
// \D = non-digits
// \w = alphanumeric and _
// \W = non-alphanumeric and _
// \s = whitespace
// \S = non-whitespace

// X(?=Y) = Positive lookahead - X is followed by Y
// X(?!Y) = Negative lookahead - X is not followed by Y
// (?<=Y)X = Positive lookbehind - X is preceeded by Y
// (?<!Y)X = Negative lookbehind - X is not preceeded by Y

let passPattern = /^[a-zA-Z_0-9$\-#%!@^&*()?<>.,]{8,}$/g
let password1 = "Mypassword1#"
let password2 = "mypassword"
let password3 = "M"
let password4 = "My@3dhdjjdjduey"

let one = passPattern.test(password1)
let two = passPattern.test(password2)
let three = passPattern.test(password3)
let four = passPattern.test(password4)

console.log(one)
console.log(two)
console.log(three)
console.log(four)

// Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

function is_valid_variable(str) {
    let pattern = new RegExp("^[a-zA-Z_][a-zA-Z_0-9]*$", "")
    console.log(pattern)
    return pattern.test(str)
}
console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))

let first_name = "Sky"