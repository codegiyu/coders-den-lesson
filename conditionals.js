// Conditionals
// If

const num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}

if (5) {
    console.log("yay")
}

if (0) {
    console.log("yay")
}

const string = "e"

if (string) {
    console.log("do something")
}
console.log("do nothing")

const rando = "pythonjargon"

if (rando) {
    console.log("Rando exists")
}
if (rando.includes("on")) {
    console.log("rando has 'on' in it")
}

// If Else 

if (string) console.log("do something") 
else console.log("do nothing")

// If Else If Else
const today = "Wednesday"
const time = "evening"

if (today === "Sunday" && time === "evening") {
    console.log("Yay, it's a weekend")
} 
else if (today.includes('day')) {
    console.log("Ugh, another week")
} 
else if (today === "Wednesday") {
    console.log("midweek")
} 
// {
//     console.log("Invalid day")
// }

let num2 = 3;

if (num2 > 2 && num2 < 1) {
    console.log("The boy is good")
} else if (num2 > 25) {
    console.log("The boy is great")
} else if (num2 > 50) {
    console.log("The boy is super great")
}

// Switch 

switch (true) {
    case (today === "Sunday" && time === "evening") || true :
        console.log("Yay, it's a weekend")
        break;
    case today === "Monday":
    case today === "Tuesday":
        console.log("Ugh, another week")
        break;
    case today === "Wednesday":
        console.log("midweek")
        break;
    default:
        console.log("Invalid day")
        break;
}


// Ternary Operator

const key = 10

if (key < 10) {
    console.log("less than 10")
} else {
    console.log("not less than 10")
}

key < 10 
    ? console.log("less than 10")
    : console.log("not less than 10")

today === "Sunday" 
    ? console.log("Yay, it's a weekend")
    : today === "Monday"
    ? console.log("Ugh, another week")
    : today === "Wednesday"
    ? console.log("midweek")
    : console.log("Invalid day")

let myArray = ["a", "b", "c"]

myArray = 7 > 6 ? myArray.push("d") : myArray.shift()

console.log(myArray)