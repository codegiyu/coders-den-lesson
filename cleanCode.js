const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// iterating an array using regular for loop
let len = names.length;
for(let i = 0; i < len; i++){
    console.log("name:", names[i].toUpperCase())
}

let isRaining = true
isRaining
 ? console.log('You need a rain coat.')
 : console.log('No need for a rain coat.')