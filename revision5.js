// let finArr = []

// function isHappy(n, pow, finArr = [], finObj = {}){
// 	finArr.push(n)
//     finObj[n] = true
// 	let sum = 0
// 	String(n).split('').forEach((elem)=>{
// 		sum += (+elem)**pow
// 	});
	
// 	if(sum===1){
// 		return [1]
// 	} else if(finObj[sum]){
// 		finArr.push(sum)
//         let firstIndex = finArr.indexOf(sum)
// 		return finArr.slice(firstIndex)
// 	}else{
// 		return isHappy(sum, pow, finArr, finObj)
// 	}
	
// }

// const isHappy = (n, pow) => {
//     const finalArr = [n], finalObj = {}
//     let sum = 0, index = 0
    
//     while (sum !== 1 && !finalObj[sum]) {
//         sum = 0
//         finalObj[finalArr[index]] = true
//         String(finalArr[index]).split("").forEach(num => sum += (+num) ** pow)
//         finalArr.push(sum)
//         index++
//     }
    
//     if (sum === 1) {
//         return [1]
//     } else {
//         let firstIndex = finalArr.indexOf(sum)
//         return finalArr.slice(firstIndex)
//     }
// }

const isHappy = (n, pow) => {
    // let newStringNum = n.toString().split('')
    // console.log(newStringNum)
    console.log(n, pow)

    let saveArr = [n];
    function run(z) {
        let m = z.toString().split('').reduce((acc, curr) => acc += Math.pow(curr, pow), 0)
        // console.log(saveArr.includes(m))
        saveArr.push(m)
        // console.log(saveArr)

        if (m === 1) {
            saveArr = [1]
            return
        }

        if (saveArr.indexOf(m) !== saveArr.lastIndexOf(m)) {
            // can also use unshift
            console.log(m)
            let firstIndex = saveArr.indexOf(m)
            saveArr = saveArr.slice(firstIndex)
            return
        }
        run(m)

    }

    run(n)
    

    return saveArr

}

console.log(isHappy(7, 2))
console.log(isHappy(42, 2))
console.log(isHappy(7, 3)) 

console.log(isHappy(42, 2)) 
console.log(isHappy(7, 4)) 
console.log(isHappy(7, 3)) 
console.log(isHappy(7, 2)) 

let sum = 0, n = 7, pow = 2

String(n).split("").forEach(num => sum += (+num) ** pow)
console.log(sum)
n = sum
sum = 0
String(n).split("").forEach(num => sum += (+num) ** pow)
console.log(sum)
n = sum
sum = 0
String(n).split("").forEach(num => sum += (+num) ** pow)
console.log(sum)
n = sum
sum = 0
String(n).split("").forEach(num => sum += (+num) ** pow)
console.log(sum)
n = sum
sum = 0
String(n).split("").forEach(num => sum += (+num) ** pow)
console.log(sum)


// O(1)
// O(logn)
// O(n)
// O(nlogn)
// O(n^2)
let obj = {}
console.log(obj)
obj[55] = true
console.log(obj)

// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

// sum === 1  && finalObj[sum]

// sum !== 1  && finalObj[sum]


// sum === 1  && !finalObj[sum]


// sum !== 1  && !finalObj[sum]