// DSA DAY 3 - SORTING ALGORITHMS 

// BUBBLE SORT
// Pseudocode
// - Loop through the array with values of i going from the end to the beginning 
// - Start an inner loop with j going from the beginning to i - 1
// - if arr[j] is greater than arr[j + 1], swap both values
// - Return the sorted array

function swap(arr, x, y) {
    let val = arr[y]
    arr[y] = arr[x]
    arr[x] = val
    return arr
}

function bubbleSort(arr) {

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr = swap(arr, j, j+1)
            }
        }
    }

    return arr
}
 // smallest = 4
//                  i     j
let arr = [5, 3, 4, 1, 2], j = 2, i = 3
console.log(bubbleSort(arr))

// let x = arr[i]
// arr[i] = arr[j]
// arr[j] = x
swap(arr,1, 4)
// [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

console.log(arr)
// i = 4
// [3, 5, 4, 1, 2]
// [3, 4, 5, 1, 2]
// [3, 4, 1, 5, 2]
// [3, 4, 1, 2, 5]

// i = 3
// [3, 4, 1, 2, 5]
// [3, 1, 4, 2, 5]
// [3, 1, 2, 4, 5]

// i = 2
// [1, 3, 2, 4, 5]
// [1, 2, 3, 4, 5]

// i = 1
// [1, 2, 3, 4, 5]


// SELECTION SORT
// Pseudocode
// - Loop through the array from beginning to end
// - Store the first index in a variable for the smallest value
// - Loop again from i to the end of the array
// - Check if arr[j] is smaller than the value at the index stored in smallest
// - if it is, use j to replace the value in the variable and continue until the end of the array
// - if the minimum is not the value(index) you started with, swap the two values
// - Rinse and repeat until end of array
// - Return the sorted array

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j
            }
        }

        if (i !== smallest) {
            arr = swap(arr, i, smallest)
        }
    }

    return arr
}

console.log(selectionSort([3,9,5,17,10,16,27, -1,-5]))
// [5, 3, 4, 1, 2]   i = 0
// sm = 0
// sm = 3

// [1, 3, 4, 5, 2]   i = 1
// sm = 1
// sm = 4

// [1, 2, 4, 5, 3]   i = 2
// sm = 2
// sm = 4

// [1, 2, 3, 5, 4]   i = 3
// sm = 3
// sm = 4

// [1, 2, 3, 4, 5]   i = 4


// INSERTION SORT
// Pseudocode
// - Start by picking the second element in the array
// - Compare the second element with the one before it and swap if necessary
// - Continue to the next element and if it is in the incorrect order iterate through from behind to place it in the correct order
// - Return the sorted array

//  -
// [5, 3, 4, 1, 2]

//     -
// [3, 5, 4, 1, 2]

//        -
// [3, 4, 5, 1, 2]

//           -
// [1, 3, 4, 5, 2] insertionIndex = 4, j= 3

//              -
// [1, 2, 3, 4, 5]

function insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        let insertionIndex = i
        for (j = i - 1; j >= 0; j--) {
            if (arr[i] < arr[j]) {
                insertionIndex = j
            } else {
                break
            }
        }
        num = arr.splice(i,1)[0] // [3]
        arr.splice(insertionIndex,0,num)

        console.log(arr)
    }

    return arr
}

console.log(insertionSort([5,3,4,1,2]))