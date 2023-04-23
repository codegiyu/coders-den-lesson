// Sets and Maps

// Sets
const companies = new Set()
console.log(companies)

// .size, .add, .delete, .has, .clear
console.log(companies.size)
console.log(companies.add("Okomo Oil"))
console.log(companies.add("ABC Transport"))
console.log(companies.add("Flutterwave"))
console.log(companies.add("Ibeto"))
console.log(companies.size)
companies.delete("Okomo Oil")
console.log(companies)
console.log(companies.has("Ibetoo"))
companies.clear()
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const langSet = new Set(languages)
console.log(langSet) 
console.log(langSet.size)

const arr = []
for (let lang of langSet) {
    let count = languages.filter((item) => item === lang).length
    let langObj = { "lang": lang, count }
    arr.push(langObj)
}
console.log(arr)
// [
//     { lang: 'English', count: 3 },
//     { lang: 'Finnish', count: 1 },
//     { lang: 'French', count: 2 },
//     { lang: 'Spanish', count: 1 },
// ]

let a = [1, 2, 3, 4, 4, 5]
let b = [3, 4, 5, 6, 4]
let c = new Set(a.concat(b))
// console.log(a.concat(b))
console.log(c)
console.log([...c])

// let A = new Set(a)
// let B = new Set(b)

console.log(a.includes(1))
c = a.filter((num) => b.includes(num))
console.log(c)
let C = new Set(c)

console.log(C)

c = b.filter((num) => !a.includes(num))
let D = new Set(c)

console.log(D)

let obj = {
    Finland: "Helsinki",
    [9]: "Stolkholm",
    Norway: "Oslo"
}
console.log(obj)
let countries = [ 
    [ 'Finland', 'Helsinki' ],
    [ 'Sweden', 'Stolkholm' ],
    [ 'Norway', 'Oslo' ],
]
console.log(countries)
let countriesMap = new Map(countries)
console.log(countriesMap)
countriesMap.set('Nigeria', 'Abuja')
console.log(countriesMap)

console.log(countriesMap.get('Finland'))
console.log(countriesMap.has('Finlands'))

for (const [country, city] of countriesMap) {
    console.log(country)
    console.log(city)
}


// let strArr = ["Earth", "Milky Way", "Universe"]
// let [planet, galaxy] = strArr
let strArr = [planet, galaxy] = ["Earth", "Milky Way", "Universe"]
console.log(planet)
console.log(galaxy)
console.log(strArr)

console.log(Boolean(1))
console.log(Number(false))




// Maps

