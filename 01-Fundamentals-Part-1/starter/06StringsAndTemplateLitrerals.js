
const firstName = 'Pastor'
const job = 'ne radin nista'
const birthYear = 1991
const year = 2022

const pastor = "I'am " + firstName  + ", a " + (year - birthYear) + " years old, i " + job + "!"
console.log(pastor)

const pastorNew = `I'm ${firstName}, a ${year - birthYear} years old, i ${job}!`
console.log(pastorNew)

console.log(`Samo String sinko`)

// MULTILINE STRING

// Old way
console.log('String with \n\
multiple \n\
lines')

// New way

console.log(`String with
multiple
lines`)