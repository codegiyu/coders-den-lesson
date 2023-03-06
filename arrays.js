// Create an array
const array1 = [1, false, 2, 3, 4, "yes", false]
const array2 = Array(5)
const myString = "it is iz at"
myString[2] = "e"
mySplitString = myString.split(" ")
console.log(mySplitString)
array1[2] = 9
// array1 = false

console.log(array1)
console.log(array2)
console.log(myString.split(''))

// Access an array
console.log(array1[4])

// Modify an array

// -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6
// Manipulate an array
console.log(myString.split('').concat(array1))
console.log(array1.indexOf(false))

console.log(array1.slice(1,7))
console.log(array1)

const newArray1 = [...array1]
console.log(newArray1)
console.log(newArray1.splice(1,7))
console.log(newArray1)

console.log(newArray1.splice(3,0,10,true))
console.log(newArray1)

console.log(array1.splice(3,0,10))
console.log(array1)

// push, pop, shift, unshift
console.log(array1.push(5,3))
console.log(array1)

console.log(array1.pop())
console.log(array1)

console.log(array1.shift())
console.log(array1)

console.log(array1.unshift(2))
console.log(array1)

const arr3 = Array(6).fill(0)

console.log(arr3.concat(myString.split('')))
console.log(arr3)

console.log(array1.includes(6))

const scores = [["a", 70], ["b", 60], ["c", [55, 50]]]
console.log(scores[2][1][0])
console.log(scores.flat(2))

console.log(mySplitString.join(", "))

const myVar = undefined
console.log(myVar)

console.log(Array.isArray(scores))

const numbers = [1, 2, 3, 4, 5, 12]
console.log(typeof numbers.toString())
console.log(numbers.reverse())

console.log(numbers.sort())
console.log(numbers.sort((a, b) => a - b))
console.log(mySplitString.sort((a, b) => b.localeCompare(a)))
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  webTechs.push("\"")
  webTechs.unshift("\"")

console.log(`${webTechs.join(" ")}`)