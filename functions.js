// Declaration function
let variable
// function square(numb) {
//     let sq = numb * numb
//     return sq 
// }

// console.log(square(3))
console.log(variable)

function addTwoNums(num1, num2) {
    return num1 + num2
}

let num1 = 13, num2
console.log(addTwoNums(num1))

function aboutMe(name = "Doris", city = "Lagos") {
    return `My name is ${name} and I live in ${city}`
}

console.log(aboutMe("Giyu" ,"Abuja"))

// function with multiple parameters
// function functionName(parm1, parm2, parm3,){
//     //code goes here
//   }
//   functionName(parm1,parm2,parm3) // during calling or invoking three arguments needed
  
  
  // this function takes array as a parameter and sum up the numbers in the array
  function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [5, 8, 1, 9, 3];
console.log(numbers[2])
let sum = 0
sum += 5
console.log(sum)
sum += 8
console.log(sum)
      //calling a function
console.log(sumArrayValues(numbers));


const areaOfCircle = (radius = 7) => {
    return (Math.PI * radius * radius).toFixed(2) + "sqm"
}
console.log(areaOfCircle())

// function declaration

function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    // sum += arguments[i]
    sum = sum + arguments[i]
  }
  return sum
}

// console.log(Math.max(9, 4, 10))

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// Expression function

// Anonymous function

const cube = (n) => {
    return Math.pow(n,3)
}
let hd = cube(4)
console.log(hd)

// console.log((2.334).toFixed())

// Self-Invoking Function or Immediately Invoked Function Expression (IIFE)
const cd = ((a, b) => {
    return a * b
    // console.log(a * b)
})(5,6)

console.log(cd)


// Arrow function
function square(numb) {
    let sq = numb * numb
    return sq 
}
// console.log(sq)

// const square = (numb) => numb * numb

console.log(square(7))

var a = 10, b = 5 // Global scope

function test () {
    let b = 15, c = 20, e = 1 // local scope
    console.log(`a: ${a}, b: ${b}, c: ${c}, e: ${e}`)

    if (true) {
        b = 25
        let d = 30
        c = 200 // local scope
        a = 70
        console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}, e: ${e}`)
    }
    
    console.log(`a: ${a}, b: ${b}, c: ${c}, e: ${e}`)
}
test()
console.log(`a: ${a}, b: ${b}`)