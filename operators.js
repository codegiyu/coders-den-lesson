// Booleans, Operators, Window and Date Methods

// Booleans
// Truthy values & Falsy Values

// Falsy Values - 0, null, undefined, '', NaN, false
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(!!undefined)
console.log(!![])
console.log(Boolean([]))
console.log(Boolean(NaN))
console.log(Boolean(false))
console.log(Boolean(0n))


// Operators
// Assignment Operators - (=, +=, -=, /=, *=, %=, **=)
let ex = 5;
console.log(ex += 2) // ex = ex + 2
console.log(ex)
ex -= 3 // ex = ex - 3
console.log(ex)
ex *= 3 // ex = ex * 3
console.log(ex)
ex /= 2 // ex = ex / 2
console.log(ex)
ex %= 4 // ex = ex % 4
console.log(ex)
ex **= 3 // ex = ex ** 3
console.log(ex)

ex = "gee"

let why = 7
why++ // why += 1 // why = why + 1
console.log(why)
// why--
why = "ged"
console.log(why)


// Arithmetic Operators - (+, - , /, *, %, **)
const myNum = red = blue =  11
console.log(myNum + 3)
console.log(myNum - 3)
console.log(myNum / 3)
console.log(red * 3)
console.log(myNum % 3)
console.log(myNum ** 2)
console.log(Math.pow(myNum, 2))

// Comparison Operators - (==, ===, !=, !==, <, >, <=, >=)
console.log(Math.ceil(9.8) == '10')
console.log(38 == '38')

console.log(Math.ceil(9.8) === '10')
console.log(38 === '38')

console.log(Math.floor(9.8) != '10')
console.log(38 != '38')

console.log(Math.ceil(9.8) !== '10')
console.log(38 !== '38')

console.log(ex, why, typeof ex, typeof why)
console.log(ex < why)
console.log(ex > why)
console.log(ex == why)
console.log(ex >= why)
console.log(ex <= why)
console.log(ex.localeCompare(why))
console.log("too" == "too")
console.log("too" === "too")
console.log(4 == 4)
console.log(4 === 4)
console.log(null == null)
console.log(null === null)
console.log(undefined == undefined)
console.log(undefined === undefined)
console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(["too", 4] == ["too", 4])
console.log(["too", 4] === ["too", 4])
console.log({"too": 4} == {"too": 4})
console.log({"too": 4} === {"too": 4})

// Logical Operators - (&&, ||, !, ??)
console.log(true && "s" && 'null' && [] && {})
console.log(false || "t" || null || 0 || undefined)
console.log(null ?? null ?? 0 ?? null ?? undefined) //not null or not undefined
console.log(!!"0")

// ?? - Nullish Coalescing Operator
// ??=
// &&=
// ||=

// why = null
const arr = [1,3,5,7]
arr.push(9)
console.log(arr)
console.log(why)
const result = why ? arr.push(11, 13) : arr.push(13)
console.log(result)

// Window Methods
// alert, prompt, confirm

// window.alert("Hi, how are you doing?")
// const name = window.prompt("What is your name?")
// console.log(name)
// const shouldProceed = window.confirm("Are you sure you want to proceed?")
// console.log(shouldProceed)

// Date Methods
const today = new Date(), miliToday = Date.now()
console.log(miliToday, today.getTime());
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDate())
console.log(today.getDay())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())
console.log(today.getMilliseconds())

const thatDay = new Date(1576736544629)
console.log(thatDay)

console.log((today - thatDay))
