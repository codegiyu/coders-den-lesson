import rando from "./data.js"
import { countries2 } from "./data.js"

console.info(rando())
console.log(countries2)

// countries2 = ["Hello"];
// console.log(countries2)

console.group("console group")
console.log('30 Days of JavaScript')
console.log('%d %s of JavaScript %s', 30, 'Days', "here we come")
console.log('%d %s of JavaScript %s', true, 'Days', 20)
console.log('%s %s of JavaScript %s', true)
console.groupEnd()

let myError = {}
console.log("Error: ", myError)
console.log(20,40, "three")

console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %c%cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color: yellow',
  'font-family: serif',
  ''
)

console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error', "Hello world")

console.error('This is an error message')
console.error('We all make mistakes')

const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(user)

const user2 = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250,
    hobbies: ["reading", "coding", "music"]
}
console.table(user2)

const user3 = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250,
    hobbies: {
        first: "reading",
        second: "coding",
        third: "music"
    }
}
console.table(user3)

const user4 = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250,
    languages: ["JavaScript", "NodeJS", "PHP"],
    hobbies: {
        first: "reading",
        second: "coding",
        third: "music"
    },
    skills: ["cooking", "dancing", "singing", "writing"],
    music: {
        afrobeat: "Unavailable",
        second: "Reason",
        RnB: "Obvious"
    }
}
console.table(user4)

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)

const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22,
      trouble(){}
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28,
      hobby: 'reading'
    }
]
console.table(users)

console.info(names)
console.log('30 Days Of fullStack challenge might be released')
console.info('%d Days Of HTML and CSS challenge might be released', 30)

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, "")

// console.clear("jas")