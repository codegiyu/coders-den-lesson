import notUsers from "./example.json" assert {type: 'json'};

console.log(notUsers)
// const obj = {
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       firstName:"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
// } 
// // console.log(JSON.stringify(obj, undefined, 2))
// // let stringObj = JSON.stringify(obj, ["users", "firstName", "lastName"], 2)
// // console.log(stringObj)
// // console.log(JSON.parse(stringObj, (key, value) => {
// //     if (key === "firstName") return value.toUpperCase()
// //     return value
// // }))

// const betaObj = {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//     // Alex: {
//     //   email: 'alex@alex.com',
//     //   skills: ['HTML', 'CSS', 'JavaScript'],
//     //   age: 20,
//     //   isLoggedIn: false,
//     //   points: 30
//     // },
//     // Asab: {
//     //   email: 'asab@asab.com',
//     //   skills: [
//     //     'HTML',
//     //     'CSS',
//     //     'JavaScript',
//     //     'Redux',
//     //     'MongoDB',
//     //     'Express',
//     //     'React',
//     //     'Node'
//     //   ],
//     //   age: 25,
//     //   isLoggedIn: false,
//     //   points: 50
//     // },
//     // Brook: {
//     //   email: 'daniel@daniel.com',
//     //   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     //   age: 30,
//     //   isLoggedIn: true,
//     //   points: 50
//     // },
//     // Daniel: {
//     //   email: 'daniel@alex.com',
//     //   skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     //   age: 20,
//     //   isLoggedIn: false,
//     //   points: 40
//     // },
//     // John: {
//     //   email: 'john@john.com',
//     //   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     //   age: 20,
//     //   isLoggedIn: true,
//     //   points: 50
//     // },
//     // Thomas: {
//     //   email: 'thomas@thomas.com',
//     //   skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     //   age: 20,
//     //   isLoggedIn: false,
//     //   points: 40
//     // },
//     // Paul: {
//     //   email: 'paul@paul.com',
//     //   skills: [
//     //     'HTML',
//     //     'CSS',
//     //     'JavaScript',
//     //     'MongoDB',
//     //     'Express',
//     //     'React',
//     //     'Node'
//     //   ],
//     //   age: 20,
//     //   isLoggedIn: false,
//     //   points: 40
//     // }
// }

// const stringBeta = JSON.stringify(betaObj, (key, value) => {
//     if (key == "skills") return undefined;
//     else return value
// }, 1)
// console.log(stringBeta)

// let parsedBeta = JSON.parse(stringBeta, (key, value) => {
//     if (["email", "isLoggedIn", "points", "age"].includes(key)) {
//         return value + 1
//     } 
//     return value
// })
// console.log(parsedBeta)


// const arr = ["hello", true, 89, {"yes": "I am"}]
// const stringArr = JSON.stringify(arr, [], 1)
// // console.log(stringArr)
// // console.log(JSON.parse(stringArr))

// // console.log([{"yes": "I am"}] + "1")
// // console.log(false + 1)

// function replacer(key,value)
// {
//     if (key=="privateProperty1") return undefined;
//     else if (key=="privateProperty2") return undefined;
//     else return value;
// }

// let x = {
//     x:0,
//     y:0,
//     divID:"xyz",
//     privateProperty1: 'foo',
//     privateProperty2: 'bar'
// };

// console.log(JSON.stringify(x, replacer))