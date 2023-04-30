//  REDUCE

// map filter reduce every some find findIndex sort foreach

function invert(array) {
    // return array.reduce((acc, curr) => (acc.push(curr * -1), acc), []);
    return array.reduce((acc, curr) => [...acc, curr * -1], []);
}

console.log(invert([1,2,3,4,5]))
console.log(invert([1,-2,3,-4,5]))
console.log(invert([]))

function test() {
    let a = 2
    return a += 2,a
}
console.log(test())

function allNonConsecutive (arr) {
    // if (arr.length <= 1) return []
    // return arr.reduce((acc, curr, idx, array) => {
    //     if (idx !== 0) {
    //         if (curr - array[idx - 1] !== 1) {
    //             acc.push({ i: idx, n: curr })
    //         }
    //     }
    //     return acc
    // }, [])
    return arr.reduce((acc, curr, idx) => idx && curr - 1 !== arr[idx - 1] ? [...acc, {i: idx, n: curr}] : acc, []);
}
console.log(allNonConsecutive([1,2,3,4,6,7,8,15,16]))
console.log(allNonConsecutive([1,2,3,4,5,]))
console.log(allNonConsecutive([2]))
console.log(allNonConsecutive([]))

let arr = [1,2,3]
console.log(2 && false)
console.log(5 !==arr[-1])
console.log(1 - 1 !== arr[0 - 1])

var array = [
    ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
    ["name2", 110, ["B", "A", "A", "A", "A"]], //  name2 point is right
    ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
    ,
    ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
];

function findHack(arr) {
    const gradesTable = {
        "A": 30,
        "B": 20,
        "C": 10,
        "D": 5
    }
    
    return arr.reduce((acc, curr) => {
        const [name, total, grades] = curr
        if (total > 200) {
            acc.push(name)
        } else {
            const finalScore = grades.reduce((accum, item, index, array) => {
                if (index === array.length - 1) {
                    accum.total += gradesTable[item] || 0
                    if (accum.isBAndAbove && "AB".includes(item) && array.length >= 5) {
                        accum.total += 20
                    }
                    return accum.total > 200 ? 200 : accum.total
                }

                accum.total += gradesTable[item] || 0
                if (accum.isBAndAbove !== false && "AB".includes(item)) {
                    accum.isBAndAbove = true
                } else {
                    accum.isBAndAbove = false
                }
                
                return accum
            }, { isBAndAbove: true, total:0 })
            console.log(finalScore)

            if (finalScore !== total) {
                acc.push(name)
            }
        }
        return acc
    }, [])
}
console.log(findHack(array)) // ["name1", "name3"]
console.log("AB".includes("E"))