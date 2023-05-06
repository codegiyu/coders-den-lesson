// SUM UP ALL NUMBERS UP TO N

function sumUp1(n) {
    let sum = 0
    for (let i = 1; i <=n; i++) { // 5n + 1
        sum += i
    }
    return sum
}
console.time("one")
console.log(sumUp1(10))
console.timeEnd("one")

function sumUp2(n) {
    return n * (n + 1) / 2 // 3
}
console.time("two")
console.log(sumUp2(10))
console.timeEnd("two")

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {

    }
}


// Constant Time - O(1)
// Linear Time - O(n)
// Quadratic Time - O(n^2) 
// O(logn) and O(nlogn)

// O(3n) => O(n)
// O(5n + 1) => O(n)
// O(n^2 + 2n + 7) => O(n^2)


// 7.4 Richter Scale

// 2.5
//          0  1  2  3  4  5
let nums = [1, 2, 3, 4, 5, 6, 7]

function binarySearch(arr, n){
    let halfIndex = Math.floor(arr.length / 2)

    if (arr[halfIndex] < n) {

    }
}

let sampleObj = {}
sampleObj.myKey = "Giyu"
console.log(sampleObj.myKey)
console.log(sampleObj)
// delete sampleObj.myKey
// console.log(sampleObj)

for (let key in sampleObj) {
    if (sampleObj[key] === "Giyu") {
        console.log(sampleObj[key])
    }
}

function frequency_function(arr1, arr2){  
   
    if(arr1.length !== arr2.length) return false;       // O(1)
    for(let i = 0; i < arr1.length; i++){               // O(n)
        let correctIndex = arr2.indexOf(arr1[i] ** 2)   // O(n) 
        if(correctIndex === -1) {             
        return false;         
        }         
        arr2.splice(correctIndex,1)                     // O(n)
    }     
    return true;
}

// for () {
//     for (){
//         for () {
        
//         }
//     }
// }

function newFrequencyFunction(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    let counter = {}

    for (let num of arr1) {
        let square = num ** 2
        counter[square] = (counter[square] || 0) + 1
    }
    console.log(counter)
    for (let num of arr2) {
        counter[num] = (counter[num] || 0) - 1
        if (counter[num] < 0) {
            return false
        }
    }

    return true
}

console.log(newFrequencyFunction([1,2,3,1,2,2,4], [1,4,4,4,1,16,9]))
console.log(newFrequencyFunction([1,2,3], [1,9]))