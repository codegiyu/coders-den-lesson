let myNum = 123456

myNum = 654321

myNum[3] = 8 // 654821
myNum = undefined
console.log(myNum)

const Array = [5, 6, 7, 0]
Array[2] = "rey"
console.log(Array)

console.log(Math.PI)

console.log(Math.abs(-8.4))
console.log(Math.floor(-1.4))
console.log(Math.ceil(8.4258))
console.log(Math.round(8.4))
console.log(Math.round(8.55))
console.log(Math.random())
console.log(Math.random() * 10)
console.log((Math.floor(Math.random() * 10)));;;;;;;;;;;;;;;;; // 10 - 19

// 10 - 19
// 10 - 100
// 0 - 90  Math.floor(Math.random() * 91) + 10 // 10 - 100

// 20 - 150
// 0 - 130 

// Math.floor(Math.random() * 131) + 20

const num = 9.4562
console.log(num.toExponential())
console.log((97762).toExponential())
console.log(num.toFixed(1))
console.log(typeof num)
console.log(num.toString())

// 97762 = 9.7762 * 10^4
console.log(Math.min(-5, 3, -20, -4, 5, -10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, -20, 4, 5, 10))
 
const myWeirdString = "68.j12&%$(LWL|?~!"
console.log(myWeirdString + true)

const name = "Giyu"
const address = "Abuja"
const about = "My name is" + " " + name + " "  + "and I stay in" + " "  + address
const about2 = `My name is ${name + "ed"} and  I\` stay in ${address}`
console.log(about2)

const paragraph = "My name is Asabeneh Yetayeh. \
I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph[paragraph.length - 4])

const slash = "bla\n\tbla\\\\"
console.log(slash)

const notMyName = 'My name ain\'t Iuyg'
console.log(notMyName)

const reportedSpeech = "He said, \"Aren't you coming?\""
console.log(reportedSpeech)

const tick = `blabla \`rd`
console.log(tick)

console.log(tick.length)

const js = "javaScript"
console.log(js[1])
console.log(js.charAt(1))
console.log(js.toLowerCase())
console.log(js.toUpperCase())

console.log(js.substring(0,4))
// console.log(js.substring(0,5))
// console.log(js.substring(0,3))
// console.log(js.substring())

const jsArray = js.split("")
const repArray = reportedSpeech.split(" ")
console.log(jsArray)
console.log(repArray)
console.log(jsArray.join(", "))
console.log(repArray.join(" "))

const untrimmed = "   bla bla"
console.log(untrimmed.trim())

let string = '30 Days Of JavaScript'
console.log(string.replace('Script', 'Python')) 
console.log(string.concat(untrimmed, "haha"))

let string2 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string2.search('Love'))          // 2
console.log(string2.search(/i/gi))
console.log(string2.match(/love/gi))
console.log(string2.replace(/loved/gi, "hated"))

// parseInt(), parseFloat(), Number(), + sign, str()
const integer = '24'
const float = "20.6"

console.log(typeof parseInt(integer))
console.log(typeof parseInt(float))
console.log(typeof parseFloat(float))
console.log(typeof parseFloat(integer))

console.log(typeof Number(float))
console.log(typeof String(36))
console.log(Boolean(36))
// console.log(str(36))

let thisVar;

console.log(+"2" + +"5")

let string3 = '30'
console.log(string3.concat("Days"))
console.log(string3 + "Days" + "Of" + "JavaScript")


// Type Coercion
// Type Conversion

const rep = (str) => {
    const mirror = {A: "T", T: "A", C: "G", G: "C"}
    return str.replace(/[ATCG]/g, (char) => mirror[char])
}

console.log(rep("ATTCBG"))

const fey = [0, 5]
const fad = ((fey[1] += 8), fey)
console.log(fad)