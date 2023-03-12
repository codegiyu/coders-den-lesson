
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle) // {length: 20, width: 20}


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
    isMarried: true
}
let age = "city"

console.log(person.age)
console.log(person["age"])

let name = "Giyu"

let me = {
    name: name,
    phone: "08012345678",
    aboutMe: () => {
        return `My name is ${me.name}`
    },
    contactMe: function() {
        return `Reach me at ${me.phone}`
    }
}
console.log(me)
console.log(me.contactMe())

let name2 = "Doris", city2 = "Lagos"

console.log(window.name2)

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