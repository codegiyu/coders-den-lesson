// a callback function, the name of the function could be any name

const callback = (n) => {
    return n ** 2
}
// function that takes other function as a callback
const cube = (callback, n) => {
    return callback(n) * n
}

console.log(callback(3) * 3)
  
console.log(cube(callback, 3))

console.log(4 + a)
var a = 5

// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        return m*n
    }
    return doSomething
}
  console.log(higherOrder(2)(3))



const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0, idx = 1
    const callback = function(element, outdex) {
      sum += element
      idx *= outdex
    }
    arr.forEach(callback)
    return [sum, idx]
  
}
console.log(sumArray(numbers))
  15


let sum = 0
numbers.forEach((el, idx, arr) => {
 sum += idx
 console.log(arr)
})
console.log(sum)

// setTimeout(() => {
//  console.log(2 + 2)   
// }, 5000)

function intervals(n) {
    const four = setTimeout(() => {
        console.log(2 + 2)  

    }, n)
    
    const five = setTimeout(() => {
        console.log(2 + 3)   
    }, n * 2)
}

// intervals(2000)

// const four = setInterval(() => {
//     console.log(2 + 2)   
// }, 2000)

// clearInterval(four)

// multiply all elements in numbers by 2

const newNumbers = numbers.map((el, idx, arr) => {
    if (idx % 2) {

        return el * 2
    }
})

console.log(newNumbers)

let countries = ["ALB", "BOL", "BOT", "CAN", "DEN", "ETH", "FIN", "FRA", "GER", "HUN", "IRE", "JAP", "KEN"]


// [1, 2, 3, 4, 5]
let filteredNums = numbers.filter((el, idx) => el % 6 === 0)

console.log(filteredNums)

const newCountries = countries.map((letter) => letter.charAt(0).toLowerCase())
console.log(newCountries)

let filteredCountries = countries.filter(element => element.includes("E"))
console.log(filteredCountries)

console.log(numbers.every((el) => el % 2 === 0))
console.log(numbers.some((_,idx) => idx % 2 === 0))

const names = ['Asabeneh', 'Mathias-Man', 'Elias', 'Brooke']
const ages = [24, 22, 25, 32, 35, 18, 6]

const result = names.find((name) => name.length > 7)
console.log(result)

const age = ages.findIndex((age) => age > 30)
console.log(age) 

ages.sort((a, b) => b - a)
console.log(ages)

countries.sort()
console.log(countries)

names.sort((a, b) => b.length - a.length)
console.log(names)

console.log([].map((el) => el))
console.log([].filter((el) => el))
console.log([].every((el) => el))
console.log([].some((el) => el))
console.log([].find((el) => el))
console.log([].sort((a, b) => a - b))
console.log([].findIndex((el) => el))
console.log([1].reduce((acc, curr) => el))

// const numbers = [1, 2, 3, 4, 5]
const sum2 = numbers.reduce((acc, cur, idx, arr) => acc + cur, 0)
console.log(sum2)

const APC = "APC", PDP = "PDP", LP = "LP", ADP = "ADP", AA = "AA"
const votes = [APC, PDP, PDP, LP, APC, ADP, AA, AA, APC, PDP, PDP, LP, LP,
     AA, APC, LP, PDP, APC, LP, LP, PDP, PDP, LP, LP, LP, APC, LP, ADP, ADP]

const results = votes.reduce((acc, curr) => (acc[curr] ? acc[curr]++ : acc[curr] = 1, acc),{})

//     // if (!acc[curr]) {
//     //     acc[curr] = 1
//     // } else {
//     //     acc[curr]++
//     // }

//     // acc[curr] ? acc[curr]++ : acc[curr] = 1
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc
// }, {})

console.log(results)

const obj = {av: 2}
console.log(obj["av"] + 1)
// console.log(undefined["PDP"])

function test() {
    return 4,5,6
}

console.log(test())