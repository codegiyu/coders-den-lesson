// DSA LESSON 2

// PROBLEM SOLVING APPROACH

// Understand the Problem
// Explore Concrete Examples
// Break it Down
// Solve/Simplify
// Look Back and Refactor

// Write a function to add 2 numbers

// What are the inputs to this function



// PROBLEM SOLVING PATTERNS

// 1. Frequency Counter
// Write a function that takes two strings and checks if they are anagrams of each other

// takes stake

// Split and Sort

// if both strings don't have the same length, return false
// Split the string to an array
// Sort the array in ascending alphabetical order
// Loop through one array while checking that both arrays have the same characters at the same index. If both characters at the same index are not the same we return false
// At the end of the loop return true

function anagramChecker(str1, str2) {
    if (str1.length !== str2.length) return false

    let splittedStr1 = str1.split("").sort().join("")    // O(n^2) O(nlogn)
    let splittedStr2 = str2.split("").sort().join("")

    // for (let i = 0; i < str1.length; i++) {
    //     if (splittedStr1[i] !== splittedStr2[i]) {
    //         return false
    //     }
    // }

    return splittedStr1 === splittedStr2
}

// if both strings don't have the same length, return false
// create an empty object to store frequencies of str1
// loop through str1, store the characters as keys and record their frequencies
// loop through str2, reduce the frequencies for every character you meet
// if the frequency of any character drops below 0 return false
// At the end of the loop return true

function anagramChecker2(str1, str2) {
    if (str1.length !== str2.length) return false

    const obj = {}

    for (let i = 0; i < str1.length; i++) {
        obj[str1[i]] = (obj[str1[i]] || 0) + 1
    }
    console.log(obj)

    for (let i = 0; i < str2.length; i++) {
        obj[str2[i]] = (obj[str2[i]] || 0) - 1
        if (obj[str2[i]] < 0) return false
    }

    return true
}
console.log(anagramChecker2("takesz", "stakez"))


// 2. Multiple Pointers
// Given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.
function isPairSum(A, N, X){
    for (let i = 0; i < N-1; i++){
        for (let j = i+1; j < N; j++){
            // as equal i and j means same element
            if (i == j)
                continue;

            // pair exists
            if (A[i] + A[j] == X)
                return true;

            // as the array is sorted
            if (A[i] + A[j] > X)
                break;
        }
    }

    // No pair found with given sum.
    return false;
}
                // i  j
let arr=[ 3, 5, 9, 2, 8, 10, 11 ];
    
// value to search
let val = 17;

// size of the array
let arrSize = 7;

function isPairSum2(A, N, X){
 
    // represents first pointer
    var i = 0;
 
    // represents second pointer
    var j = N - 1;
 
    while (i < j) {
 
        // If we find a pair
        if (A[i] + A[j] == X)
            return true;
 
        // If sum of elements at current
        // pointers is less, we move towards
        // higher values by doing i++
        else if (A[i] + A[j] < X)
            i++;
 
        // If sum of elements at current
        // pointers is more, we move towards
        // lower values by doing j--
        else
            j--;
    }
    return false;
}

console.log(isPairSum(arr, arrSize, val))

// 3. Sliding Window
// Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array

function maxSum( arr, n, k){
 
    // Intiallizing the max_sum variable
  let max_sum = 0;
   
      // Runs a Loop from i to K
     
    for(let i = 0; i < k; i++){
        max_sum += arr[i];
    }
     
    // Initallize the Window_sum & assign that max_sum for the window_sum
    // arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
    let window_sum = max_sum;
    for(let i = k; i < n; i++){
        window_sum = window_sum - arr[i-k] + arr[i];
        console.log(window_sum)
        max_sum = Math.max(max_sum,window_sum);
    }
    return max_sum
}
 
// Driver code
let arr2 = [ 0];
console.log(arr2.slice(1).length)
let k = 4;
let n = arr2.length;

// console.log(maxSum(arr2, n, k))


// 4. Divide And Conquer 

// function binarySearch(arr, n){
//     let array = [...arr]
//     let halfIndex = Math.floor(array.length / 2)
//     console.log(halfIndex)

//     while (array.length !== 0) {
//         if (array[halfIndex] === n) {
//             return halfIndex
//         } else if (array[halfIndex] < n) {
//             array = array.slice(halfIndex + 1)
//         } else {
//             array = array.slice(0, halfIndex)
//         }
//         console.log(array)
//     }

//     return null
// }
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5))
// the above code has a logical error because the halfIndex is calculated only once before the while loop starts.

// here is my recommendation
function binarySearch(arr, n) {
  let array = [...arr];
  let startIndex = 0;
  let endIndex = array.length - 1;
  
  while (startIndex <= endIndex) {
    let halfIndex = Math.floor((startIndex + endIndex) / 2);
    if (array[halfIndex] === n) {
      return halfIndex;
    } else if (array[halfIndex] < n) {
      startIndex = halfIndex + 1;
    } else {
      endIndex = halfIndex - 1;
    }
  }

  return null;
}

// SEARCHING ALGORITHMS

// 1. Linear Search 
// 2. Binary Search


// https://medium.datadriveninvestor.com/javascript-algorithm-2-sliding-window-66622c7cb4f8
// https://www.tutorialspoint.com/implement-divide-and-conquer-logic-in-javascript-to-implement-quicksort
// https://www.geeksforgeeks.org/window-sliding-technique/
// https://www.geeksforgeeks.org/javascript-program-for-two-pointers-technique/
// https://www.geeksforgeeks.org/divide-and-conquer/
