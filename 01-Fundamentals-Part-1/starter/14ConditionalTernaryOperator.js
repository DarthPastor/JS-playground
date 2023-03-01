
const age = 21
// age >= 18 ? console.log('I like to drink vine!') : console.log("You can't drink vine legaly")

// CONDITION ? IF part : ELSE part --- operator is expresion (produces value), so we can asign variable to it.

const drink = age >= 18 ? 'WINE' : 'NO WINE'
console.log(drink)

// Simmilar: but we need to declare variable outside if-else block
let drink2
if(age >=18) {
    drink2 = 'WINE'
} else {
    drink2 = 'NO WINE'
}
console.log(drink2)

// We can use ternary operator in template literal

console.log(`I like to drink ${age >= 18 ? 'WINE' : 'NO WINE'}`)

// TERNARY OPERATOR is perfect when is needed to take a quick decision!!!

