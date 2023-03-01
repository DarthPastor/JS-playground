
const pastor = {
    firstName: 'Don',
    lastName: 'Pastor',
    age: 2022 - 1991,
    job: 'No job!',
    friends: ['Iko', 'Dino', 'KokakuKidotai']
}

console.log(pastor)


// Getting property from an Object - DOT NOTATION

console.log(pastor.lastName) //Don

// Getting property from an Object - BRACKET NOTATION

console.log(pastor['lastName']) //Don 

// We can put any expresion in the square brackets

const nameKey = 'Name'
console.log(pastor['first' + nameKey]) // Don

const interestedIn = prompt(`What do you want to know about Pastor? Choose between firstname, lastname, age, job and friends`)

if(pastor[interestedIn]) {
    console.log(pastor[interestedIn])
} else {
    console.log(`Wrong request!`)
}

// ADDING NEW PROPERTY TO THE OBJECT

pastor.location = 'Croatia'
pastor['facebook'] = 'Marcus Tulius Cicero'

console.log(pastor)

// Challenge:
// Log to console this string without hardcoding: 'Pastor has 3 friends and his best friend is called Iko'

console.log(`${pastor.firstName} has ${pastor.friends.length} friends, and his best friend is ${pastor.friends[0]}`)

