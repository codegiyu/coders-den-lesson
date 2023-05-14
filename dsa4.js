// DSA DAY 3 - SORTING ALGORITHMS (Cont'd)

// MERGE SORT
// Pseudocode
// - Break up the array into halves until you have arrays containing
//   0 or 1 element.
// - Once you have smaller sorted arrays, merge them until you're back
//   at the full length of the original array.

//   TO MERGE ARRAYS....

// - Create an empty array
// - Take a look at the smallest values in both arrays // arr[0]
// - If the smallest value in arr1 is smaller than that in arr2, remove it from arr1 and push 
//   the smallest value into the new array and compare the next smallest value in
//   arr1 to the smallest in arr2
// - Continue in this way until all values in both have been pushed into
//   the new array
// - Return the new array

// - Rinse and repeat until the entire array is put back together, now sorted


// [5, 4, 2, 1, 3]
// [[5,4,2], [1,3]]
// [[5,4], [2], [1], [3]]
// [[5], [4], [2], [1], [3]]
// [[4,5], [1,2], [3]]
// [[1,2,4,5], [3]]
// [1,2,3,4,5]



// QUICK SORT
// Pseudocode
// - Pick a random item in the array
// - Create two separate arrays for left side and right side
// - Loop through the main array, skipping the selected index //arr[0]
// - Push any smaller values into the left side array, and larger values into the 
//   right side array
// - Return [...quicksort(left_array), arr[0], ...quicksort(right_array)]
// - The base case of this recursion is that if the length of the array is less
//   than 2, the array should be returned as it is


// [8,3,5,2,9,1,4,6]
// [...quicksort([3,5,2,1,4,6]), 8, ...[9]]
// [...[...quicksort([2,1]), 3, ...quicksort([5,4,6])], 8, ...[9]]
// [...[...[[1], 2, []], 3, ...[[4], 5, [6]], 8, ...[9]]
// [1,2,3,4,5,6,8,9]



// RADIX SORT
// Pseudocode
// - Loop through the array to find the longest length of digits in the items, n
//   That length would determine how many iterations would occur later
// - In each iteration, create an array of 10 buckets(arrays)
// - You'll be looping from 1 to n
// - Loop through the entire array, checking the ith digit from the end and push
//   each number into the corresponding bucket
// - At the end of each turn, concatenate all the arrays starting from the beginning
// - Return the array you have at the end.

// for (let i = 1; i <= n; i++) {
    // getDigit(num, i - 1)
    // buckets[getDigit(num, i - 1)].push(num)
// }

console.log(Math.floor(Math.log10(72528)) + 1)

function getDigit(num, position) {
    return Math.floor(num / Math.pow(10, position)) % 10
}
console.log(getDigit(7252, 0))
console.log(Math.floor(373783 / 1000000))
console.log(56760 % 10)

// 10 ^ 0 = 1
// 10 ^ 1 = 10
// 10 ^ 2 = 100
// 10 ^ 3 = 1000


// [2453, 7252, 89, 25782, 923, 37, 9]
// [[], [], [7252, 25782], [2453, 923], [], [], [], [37], [], [89, 9]]

// [7252, 25782, 2453, 923, 37, 89, 9]
// [[9], [], [923], [37], [], [7252, 2453], [], [], [25782, 89], []]

// [9,923,37,7252,2453,25782,89]
// [[9,37,89], [], [7252], [], [2453], [], [], [25782], [], [923]]

// [9,37,89,7252,2453,25782,923]
// [[9,37,89,923], [], [2453], [], [], [25782], [], [7252], [], []]

// [9,37,89,923,2453,25782,7252]
// [[9,37,89,923,2453,7252], [], [25782], [], [], [], [], [], [], []]

// [9, 37, 89, 923, 2453, 7252, 25782]




