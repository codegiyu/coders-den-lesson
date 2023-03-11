// // Loops, break, continue

// // For Loop
// // For loop structure
// // for(initialization, condition, increment/decrement){
// //     // code goes here
// // }

// // console.log 1 - 10
let char = 0;
for (char; char <= 10; char++) {
    // char = i
    console.log(char)    
}
console.log(char)

// // loop to print 5 - 0
for (let k = 5; k >= 0; k--) {
    console.log(k)
}

for (let j = 0; j <= 10; j++) {
    if (j === 5) {
        continue
    }
    console.log(j)    
}

for (let j = 0; j <= 10; j++) {
    if (j === 5) {
        break
    }
    console.log(j)    
} 

for (let j = 0; j <= 10; j++) {
    if (j % 2 !== 0 || j === 0) {
        continue
    }
    console.log(j)
}

for (let y = 7; y <= 5; y++) {
    console.log(y)
}

console.log(5%2 !== 0)


// While Loop

// initialise variable

// while(condition) {
//     code here

//     variable change
// }
let x = 0

while (x <= 10) {
    console.log(x)
    x++
}

let arr4 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr4.length)

while (arr4.length < 10) {
    arr4.push(arr4.length)
}

console.log(arr4)
let arr2 = []
for (let i = 0; i <= 2; i++){
    let k = 0;
    while (k <= 2) {
        arr2.push([i, k])  // 0 - 0, 1
        k++
    }
}
console.log(arr2)
// Do While Loop
const arr3 = ["a", "b", false, true, {}, []]
do {
    arr3.push(arr3.length)
} while (arr3.length < 5)

console.log(arr3)

// For Of Loop
let fruits = ['Banana', 'orange', 'apple', 'mango', 'corn'];
const capitalFruits = []
// It works only with strings and arrays
for (const fruit of fruits) {
    capitalFruits.unshift(fruit.toUpperCase())
}
console.log(capitalFruits)
// For In, ForEach, Map and others (just intros)


// Sample Exercise
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let cleanSentence = sentence.replace(/[%@#+;&?$!]/g, '');
console.log(cleanSentence);

// Further clean the sentence removing every symbol or quotation, and convert to Lower case
let furtherCleanSentence = cleanSentence.toLowerCase().replace(/[,.]/g, '')

// Break the Sentence into individual words
let eachWord = furtherCleanSentence.split(" ")


console.log(eachWord);

// Create an array of unique words in the sentence 
let uniqueWords = [];
for (const word of eachWord) {
    if(!uniqueWords.includes(word)){
        uniqueWords.push(word)
    }
}

console.log(uniqueWords);

//Find out how many times each word appears in the sentence
let wordCount = [];
for (let word of uniqueWords) {
    let count = 0;
    for (let i = 0; i < eachWord.length; i++) {
        if(word === eachWord[i]) {
            count++
        }
    }
    wordCount.push(count);
}

console.log(wordCount);

// Find the highest number and get the associated word
let highestNumber = Math.max(...wordCount)
console.log(highestNumber);

// Find the index of the highest Number
let wordIndex = wordCount.indexOf(highestNumber);
console.log(wordIndex);

// Find the value of the wordIndex
const answer = uniqueWords[wordIndex];
console.log(answer);





// Paulina's Code
/*
Remove the invalid characters using replace
then split the words into an array at the spaces
*/
let cleaned = sentence.replace(/[$%@;&#!?]/gi, "").split(" ");
console.log(cleaned);

// declare empty array to hold the words
let  arr = [];
// declare variable for default count
let count = 0;
// declare variable for the word with the maximum count
let maxWord = "";

// loop over all the words in the array
for (let word of cleaned) {
    if ( arr[word]) {
        // if a unique word is already in the array, increment it by 1
         arr[word]++;
        // when a word is found, check if it's greater than count
        if (arr[word] > count) {
            // if the word is larger, assign it as the word with the highest count
            count =  arr[word];
            // return the word that has the highest count
            maxWord = word;
        }
    }
    else {
        // if a unique word is not in the array, add it to the array
         arr[word] = 1;
    }
}
console.log(maxWord);


// Use the webTechs array to create the following array of arrays:
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
console.log([webTechs[1],webTechs[1].length])
console.log([webTechs])
let newArray = []
for (let i = 0; i < webTechs.length; i++) {
    newArray.push([webTechs[i], webTechs[i].length])
}
console.log(newArray)

let emptyArr = [[1, 3], [2, 4]]
console.log(emptyArr)