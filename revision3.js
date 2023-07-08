// // 7283 => "7000 + 200 + 80 + 3"

const splitForm = (num) => {
    // const arr = String(num).split("").map((n, idx, array) => n * Math.pow(10, array.length - idx - 1)).join(" + ")
    const arr = String(num).split("")//.map((n, idx, array) => n.padEnd(array.length - idx, 0)).join(" + ")
    // let result = ""

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].padEnd(arr.length - i, 0)
    }

    arr[4] = 9
    arr[7] = "03"
    // for (let i = 0; i < arr.length; i++) {
    //     if (i !== arr.length - 1) {
    //         result += arr[i].padEnd(arr.length - i, 0) + " + "
    //     } else {
    //         result += arr[i].padEnd(arr.length - i, 0)
    //     }
    // }

    return arr
}
console.log(splitForm(7283))

function findXmasSunday(start, end) {
    const results = []
    
    for (let i = start; i <= end; i++) {
        console.log(new Date(`${start}-12-25`).toDateString())
        if (new Date(`${i}-12-25`).toDateString().startsWith("Sun")) {
            results.push(i)
        }
    }

    return results;
}
console.log(findXmasSunday(1980, 2017))
console.log(findXmasSunday(1970, 2017))

// // 1970-12-25
// const persons = ["Alucard", "Jane", "Oluwatoyin", "Reed"]
// let randomPerson = persons[Math.floor(Math.random() * persons.length)]
// // console.log(randomPerson)

// function growingPlant(upSpeed, downSpeed, desiredHeight) {
//     let plantHeight = 0
//     let i = 1

//     while (plantHeight < desiredHeight) {
//         if (i % 2 == 0) {
//             plantHeight -= downSpeed
//         } else {
//             plantHeight += upSpeed
//         }
//         console.log(plantHeight)
//         i++
//     }

//     return i / 2
// }
// // console.log(growingPlant(100, 10, 910))
// console.log(growingPlant(10, 2, 14))
// console.log(1 % 2)

// function solution(frank, sam, tom) {
//   if (frank[2] > sam[1] && frank[2] > tom[1]) {
//     return true
//   } else return false
// }
// console.log(solution([2, 5, 8, 11], [1, 4, 7, 10] , [0, 3, 6, 9]))
// console.log(solution([2, 3, 7, 8], [1, 4, 5, 6] , [0, 9, 10, 11]))
// console.log(solution([1, 2, 3, 4], [5, 6, 7, 8] , [0, 9, 10, 11]))

// // 0, 7, 1
// // 9, 8

// const oneTime = setTimeout(() => {
//     console.log("Timeout works")
// }, 3000)

// clearTimeout(oneTime)

// let num = 0

// const forever = setInterval(() => {
//     console.log(num+=2)
// }, 2000)

// setTimeout(() => {
//     clearInterval(forever)
//     console.log("Forever is no longer")
// }, 11000)

// const secondsText = document.getElementById("time-in-seconds")
// const random = document.getElementById("random")
// const lastTime = document.getElementById("last-time")

// const runRandomIntervals = (min, max) => {
//     return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000
// }
// console.log(runRandomIntervals(5, 12))

// let timeInSeconds = 0
// let time = runRandomIntervals(5, 12)

// const secondsTime = setInterval(() => {
//     secondsText.innerHTML = timeInSeconds++
// }, 1000)

// const interval = setTimeout(() => {
//     random.innerHTML = `I ran after ${time} seconds`
//     lastTime.innerHTML = timeInSeconds
//     time = runRandomIntervals(5, 12)
    
// }, time)

const num = "24"

function isNumber(num) {
    return typeof num === "number"
}
console.log(isNumber(num))
console.log(Number.isInteger("24"))

function toIndustrial(time){
    if (Number.isInteger(time)) {
        return Number((time / 60).toFixed(2))
    } else {
        const [hours, minutes] = time.split(":")
        let total = (hours * 60) + Number(minutes)
        return Number((total / 60).toFixed(2))
    }
}
  
function toNormal(time){
    let [hours, minutes] = String(time).split(".")
    console.log(hours, minutes)
    minutes = String(Math.round(minutes.padEnd(2, 0) * 0.6)).padStart(2, 0)
    return `${hours}:${minutes}`;
}

console.log(toIndustrial(105))
const [a,b] = "1:45".split(":")
console.log(a * 60 + Number(b))
console.log(String(Math.round(9 * 0.6)).padStart(2, 0))
console.log((9 * 0.6).toFixed())
console.log(String(1.50).split("."))

console.log(toNormal(1.33))