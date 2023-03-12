
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle) // {length: 20, width: 20}
console.log(Object.entries(rectangle))


const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    isMarried: true,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}
let age = "city"

console.log(person.age)
console.log(person["age"])
console.log(person.fullName())

let name = "Giyu"

let me = {
    name: name,
    phone: "08012345678",
    country: "Nigeria",
    languages: ["HTML", "CSS", "Javascript"],
    aboutMe: () => {
        return `My name is ${this.name}`
    },
    contactMe: function() {
        return `Reach me at ${this.phone}`
    },
    addLanguage: function(language) {
        console.log(this.languages)
        this.languages.push(language)
    },
    name: "Tomioka",
    age: undefined
}
// Expression functions are preferable in objects because they accurately recognise 'this' to
// be the object calling the function
me.city = "Abuja"
me.phone = "090"

// delete me.city
console.log(me)

console.log(me.city)

console.log(me)
console.log(me.aboutMe())
console.log(me.contactMe())

console.log(me.languages)
console.log(me.addLanguage("React"))
console.log(me.languages)

const you = Object.assign(person, {})

console.log(you)

const keys = Object.keys(me)
const values = Object.values(me)
const entries = Object.entries(me)
console.log(me["age"])
console.log(Boolean(undefined))
console.log(Boolean(me["age"]))
console.log(me.hasOwnProperty("age"))

console.log(keys)
console.log(entries)
console.log(values)









let name2 = "Doris", city2 = "Lagos"

// console.log(window.name2)

function about() {
    return `I'm ${name} from ${city}`
}
const thisAbout = function() {
    console.log(this)
    return `I'm ${this.name} from ${this.city}`
}
const object = {
    name: "Giyu",
    city: "Abuja"
}

function square(n) {
    return n * n
}

console.log(square(2))
console.log(window.square(3))