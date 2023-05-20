// Latin Squares

// {
//     1: [1,2,3,4],
//     2: [1,2,3,4],
//     3: [1,2,3,4],
//     4: [1,2,3,4],
// }

// [[3,2,1,4],
//  [2,1,4,3],
//  [1,4,3,2],
//  [4,3,2,1]]

const arr = Array(5).fill(0).map((_,idx) => ++idx) //Array.from({length: 5}, (_,idx) => ++idx) //
console.log(arr)
let numsArr = [1,2,3,4]
console.log([...numsArr.slice(1), numsArr[0]])

// [[1,2,3,4], ]

// Create an empty array called result
// Loop from 0 to n - 1
// At index 0 in the loop,
// Create a single array with numbers 1 to n as items and push the array into arr
// On subsequent turns of the loop, take arr[i - 1], 
// Slice from the first index, spread it in a new array, 
// and push in the first item in arr[i -1]
// Push that new array into arr

// At the end of the loop, return arr

function makeLatinSquare(n) {
    // const arr = []

    // const nums = Array(n).fill(0).map((_,idx) => ++idx)
    // arr.push(nums)
    // for (let i = 1; i < n; i++) {
    //     let prev = arr[i -1]
    //     let nextArr = [...prev.slice(1), prev[0]]
    //     arr.push(nextArr)
    // }

    // return arr
    const range = [...Array(n).keys()].map(x=> x + 1);
    console.log(range)
  return range.map(y=> range.map(x=> ((y + x) % n) + 1));
}
console.log(4%4)
console.log(makeLatinSquare(4))