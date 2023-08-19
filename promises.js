// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback(skills)
//     }, 2000)
// }

// const callback = (result) => {
//     if (!result.length) {
//       return console.log("Something went wrong")
//     }
//     return console.log(result)
// }

// doSomething(callback)

// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = []
//       if (skills.length > 0) {
//         resolve(skills)
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })

//   doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.log(error))
// let allCountries = []
// const url = 'https://restcountries.com/v3.1/all' // countries api
// fetch(url)
//     .then(response => {
//         console.log(response)
//         return response.json()
//     }) // accessing the API data as JSON
//     .then(data => {
//         // getting the data
//         console.log(data)
//         allCountries = [...data]
//     })
//     .catch(error => console.error(error))

// console.log(allCountries)

// Asynchronous Functions

// async function doSomething() {

// }

// const numberPromise = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(2)
//     }, 2000)
// })

// const doSomething = async () => {
//     let num = 4

//     let num2 = await numberPromise + num

//     return console.log(num2)
// }

// // doSomething()

const getCountries = async () => {
    const url = 'https://restcountries.com/v3.1/all'
    // let data = []

    try {
        const response = await fetch(url)

        console.log(response)

        const data = await response.json()

        console.log(data)
        return data
    } catch (error) {
        console.log(error.message)
    }

}

// console.log(allCountries)
getCountries()
// console.log(allCountries)
// const square = async function (n) {
//     return n * n
// }

// console.log( await square(2))

// const myCountry = allCountries.filter(item => item.cca3 == "NGA")
// console.log(myCountry)


// Create a promise where a random number is generated and if the number is 
// greater than or equal to 0.75, "Yay, I passed!" is returned. Else 
// "Aww, I failed" is returned. Also console log the number

// const randomNumber = () => {
//     return new Promise((resolve, reject) => {
//         Math.random() >= 0.75 
//         ? resolve("Yay, I passed!") 
//         : reject("Aww, I failed")
//     })
// }

// const numbro = async () => {
//     const num = await randomNumber()
//     console.log(num)
// }

// numbro()

const randomFailure = new Promise((resolve, reject) => {
    const rando = Math.random()
    console.log(rando)

    rando >= 0.75
        ? resolve("Yay, I passed!")
        : reject("Aww, I failed")
})

randomFailure
    .then(result => console.log(result))
    .catch(cries => console.log(cries))

const doubleFetch = async () => {
    const url1 = 'https://restcountries.com/v3.1/all'
    const url2 = 'https://jsonplaceholder.typicode.com/posts'

    const [countries, posts] = await Promise.all([fetch(url1), fetch(url2)])

    console.log(countries, posts)

    const [data, data1] = await Promise.all([countries.json(), posts.json()])

    console.log(data, data1)
}

doubleFetch()