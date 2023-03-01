
// MATH OPERATORS

const yearNow = 2022
const agePastor = yearNow - 1991
const ageMani = yearNow - 1995
console.log(agePastor, ageMani)

console.log(agePastor * 2, agePastor / 2, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 (2 x 2 x 2)

const firstName = 'Pastor'
const lastName = 'Ljubicic'
console.log(firstName + ' ' + lastName)

// ASSIGNMENT OPERATORS (=)

let x = 10 + 5 //15
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x /= 2 // x = x / 2 = 50
x++ // x + 1 = 51
x-- // x - 1 = 50
console.log(x)

// COMPARISON OPERATORS

console.log(agePastor > ageMani)  // >, <, >=, <=
console.log(ageMani >= 18)
console.log(ageMani <= 18)

const isFullAge = ageMani >= 18

console.log(yearNow - 1991 > yearNow - 2022)