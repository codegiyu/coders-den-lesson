function log(num){
    if(num > 5){
        console.log(num)
        return;
    }
    console.log(num);
    log(num + 1);
}

log(1);

// Randomly select a number between 1 to 10 until you get the number 5.

function rando(count = 0) {
    let randNum = Math.floor(Math.random() * 10) + 1
    if (randNum === 5) {
        console.log(randNum, count)
        return
    }
    console.log(randNum)
    count++
    rando(count)
}
console.log(rando());;

function randomUntilFive(result = 0, count = 0){
    if(result === 5){
        console.log(`The random result: ${result}`);
        console.log(`How many times random is executed: ${count}`);
        return;
    }
    result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    count++;
    randomUntilFive(result, count);
}
randomUntilFive(5)

const countUp = (num) => num > 10 ? [] : [num, ...countUp(num+1)]

console.log(countUp(8))

// [8, ...countUp(9)]
// [8, ...[9, ...countUp(10)]]
// [8, ...[9, ...[10, ...countUp(11)]]]
// [8, ...[9, ...[10, ...[]]]]

// [8, 9, 10]

const countDown = (num) => num < 1 ? [] : [num, ...countDown(num - 1)]


console.log(countDown(10))
console.log(countDown(-1))

const countDownTwo = number => number === 1 ? [number] : [number, ...countDownTwo(number - 1)]
    
console.log(countDownTwo(5))

let array = [3,4]
array.push(5)
console.log(array)

console.log([...array, 6])

// n!   4! = 4 * 3 * 2 * 1 = 24

const factorial = (num) => num in [5, 6] ? 1 : num * factorial(num -1)

console.log(factorial(5))

let obj = {
    name: "Giyu",
    location: "Makurdi",
    country: "Nigeria"
}

let arr = ["Giyu", "Makurdi", "Nigeria"]

for (let prop in obj) {
    console.log(prop)
}

for (let prop of arr) {
    console.log(prop)
}

for (let prop in arr) {
    console.log(prop)
}

// return 2 * undefined  0! = 1

const factorialString = (num) => num in [7,3] ? 1 : `${num} * ${factorialString(num - 1)}`

console.log(factorialString(4))

function reverseString(str) {
    if (str.length === 0) return ""

    return str.slice(-1) + reverseString(str.slice(0, str.length -1))
}
console.log(reverseString("string"))

const fib = (num) => num in [0,1] ? num : fib(num - 1) + fib(num - 2)

console.log(fib(6)) // 5 [0, 1, 1, 2, 3, 5, 8]

// fib(6) = fib(5) + fib(4)
// fib(5) = fib(4) + fib(3)
// fib(4) = fib(3) + fib(2)
// fib(3) = fib(2) + fib(1)
// fib(2) = fib(1) + fib(0)
// fib(1) = 1
// fib(0) = 0

// fib(6) = fib(5) + fib(4)
    //   = fib(4) + fib(3) + fib(3) + fib(2)
    //   = fib(3) + fib(2) + fib(2) + fib(1) + fib(2) + fib(1) + fib(1) + fib(0)
    //   = 1 + 0 + 1 + 1 + 0 + 1 + 0 + 1 + 1 + 0 + 1 + 1 + 0

// [1, 2, [3, 4, [5], [6, 7]], [8,[9,[10]]]]

// const addNums = (arr) => {
//     if () {
//         return arr.reduce((acc, curr) => acc + curr, 0)
//     }

//     return addNums(arr.flatMap())
// }

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);

function totalIntegers(array, count = 0){
	if(array.length === 0) return 0;
    console.log(array, count)
	let total = 0;
	let first = array.shift();
    count++

	if (Array.isArray(first)){
		total += totalIntegers(first, count); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array, count);
}

// The function should return an array containing repetitions of the number argument. 
// For instance, replicate(3, 5) should return [5,5,5]. 
// If the times argument is negative, return an empty array.

const replicate = (len, num) => len < 1 ? [] : [num, ...replicate(len - 1, num)]


console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

function fibonacci_iterative(n) {
    if (n <= 1) {
        return n;
    }

    let fib_n_minus_1 = 1;
    let fib_n_minus_2 = 0;

    for (let i = 2; i <= n; i++) {
        let fib_n = fib_n_minus_1 + fib_n_minus_2; // 1, 2, 3
        fib_n_minus_2 = fib_n_minus_1; // 1, 1, 2
        fib_n_minus_1 = fib_n; // 1, 2, 3
    }

    return fib_n_minus_1;
}
//[fib_n_minus_1, fib_n_minus_2] [1, 1], [2, 1], [3, 2], [5, 3]
console.time('iterative');
console.log(fibonacci_iterative(30))
console.timeEnd('iterative')

// [0,1]
console.time('recursion')
console.log(fib(30))
console.timeEnd('recursion')

function fibronaci(n){
    const fib=[0,1]
     for(let i=2; i<n; i++){
     fib[i]=fib[i-1]+fib[i-2]
     }
    return fib
}
console.log(fibronaci(10))

let newArr = [0,1]
newArr[5] = 2
console.log(newArr)

function mygcd(x,y){
    // let divisorsArr = []
    
    // for (let i = 2; i <= Math.min(x,y); i++) {
    //     if (x % i === 0 && y % i === 0) {
    //         divisorsArr.push(i)
    //     }
    // }
    // return divisorsArr.length === 0 ? 1 : Math.max(...divisorsArr)

    let lcf = 1
    for (let i = 2; i <= Math.min(x,y); i++) {
        if (x % i === 0 && y % i === 0) {
            lcf = i
            break;
        }
    }

    if (lcf === 1) {
        return 1
    }

    return lcf * mygcd(x/lcf, y/lcf)
}
console.log(mygcd(30, 12))
console.log(mygcd(36, 12))
console.log(mygcd( 8,  13))
console.log(13 % 8)

// 30, 12  - 2
// 15, 6   - 3
// 5, 2    - 1

// return y == 0 ? x : mygcd(y, x % y)

// mygcd(12, 6)
// mygcd(6, 0)

// mygcd(13, 8)
// mygcd(8,5)
// mygcd(5, 3)
// mygcd(3, 2)
// mygcd(2, 1)
// mygcd(1, 0)
