// Destructuring and Spreading

// Destructuring
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree, numFour] = [1, 2, 3,4,5]

console.log(numOne, numTwo, numThree, numFour)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

// const frontEnd = fullStack[0]
// const backEnd = fullStack[1]
// let frontEnd = fullStack[0]
const [,mongo] = fullStack

console.log(frontEnd)
console.log(backEnd)
console.log(mongo)
// console.log(node)

// Default values in destructuring arrays
const names = [undefined, 'Brook', 'David']
console.log(names[3])
// let [firstPerson = 'Asabeneh', secondPerson, thirdPerson, fourthPerson = 'John' ] = names
let firstPerson = names[0] === undefined ? "Asabeneh" : names[0]
let secondPerson = names[1]
let thirdPerson = names[2]
let fourthPerson = names[3]


console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) 

function name(first, last = "Tomioka") {
    return first + " " + last
}
console.log(name("Eddy", null))

// Spread operator while destructuring
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...giyu] = nums

console.log(num1, num2, num3)
console.log(giyu)

let newNums = [...giyu]

console.log(newNums)

const fullStack2 = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
  
for(const [num1, num2,, num4] of fullStack2) {
  console.log([num1, num2,, num4])
}

// Destructuring Objects
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width, height, area, perimeter = 60 } = rectangle
// // let width = rectangle.width
// // let heght = rectangle.height
  
console.log(width, height, area, perimeter)

let { width: w, height: h, area: a, perimeter: p = 60 } = rectangle

console.log(w, h, a, p)
// console.log(width)

const rect = {
    width: 20,
    height: 10
}
const calculatePerimeter = ({width, height}) => {
    return 2 * (width + height)
}
  
console.log(calculatePerimeter(rect))

const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]
    
for (const {task, time, completed} of todoList){
    console.log(task)
}

let obj1 = {name: "Eddy"}
let obj2 = {...obj1, name: "Abj"}
console.log(obj2)
console.log(obj1 === obj2)

const sumAllNums = (...args) => {
    console.log(args)
    return args.reduce((acc, curr) => acc + curr ,0)
}
  
console.log(sumAllNums(1, 2, 3, 4, 5))
// [1, 2, 3, 4, 5]

// let [fir]