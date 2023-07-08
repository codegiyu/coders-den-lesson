// Assume we have a set of boxes, all unlocked except the first box. The boxes can 
// be referred to by their indexes, and they all contain keys to themselves 
// or other boxes in the set. The keys are represented by numbers. 
// So essentially, we have an array of arrays of numbers.
// Finding a number in an unlocked array means we can unlock the box with that index
// and pick out the keys in it to unlock others
// Write a function that will take in an array of boxes and determine whether
// they can all be unlocked or not

//    0    1    2    3    4   5
//    -    -    -    -    -   -
// [ [1], [2], [3], [4], [5], [] ]


// [ [1], [2, 3], [0, 3], [1, 3], [2], [4] ]

const canAllBoxesBeOpened = (arr) => {
    const store = {0: true}; 
    let keys = [...arr[0]];
//queue
    let i = 0;
    while (i < keys.length) {
        console.log([keys, i])
        let key = keys[i] // 1
        // console.log(store[1])
        if (!store[key]) {
            store[key] = true
            console.log(arr[key])
            console.log(keys)
            // keys = [...keys, ...arr[key]]
            keys.push(...arr[key]);
        }
        i++;
        console.log([i, keys.length])
    }
    console.log(store)
    return Object.keys(store).length === arr.length
    // for (let box of arr) {
    //     for (let i = 0; i < box.length; i++) {
    //         if (!store[i]) {
    //             store[box[i]] = true
    //         }
    //     }
    // }
    // console.log(store)
} 
// console.log(canAllBoxesBeOpened([ [1], [2, 3], [0, 3], [1, 3], [5], [4] ]))
console.log(canAllBoxesBeOpened([ [1], [2, 3], [0,3], [1, 3, 5], [2], [4] ]))
// console.log(canAllBoxesBeOpened([ [1], [2, 3], [3], [1, 3], [2, 5], [] ]))
// [1,2,3,0,3,1,3,5]
console.log([ [1], [2, 3], [0, 3], [1, 3, 5], [2], [4] ].flat())

let array = [2,4]
console.log([...array])