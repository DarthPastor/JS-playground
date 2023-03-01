
// TYPE CONVERSION - Manualy convert type of value 

const inputYear = "1991"
console.log(Number(inputYear), inputYear) // change string value into number
console.log(inputYear + 18) // concatonate string as 199118

console.log(Number('Pastor')) // NaN means invalid number 
console.log(typeof NaN) // number

console.log(String(23)) // JS can only convert to a number, string and boolean


//  TYPE COERCION - is happening when operator is dealing with two values that are different types

console.log('I am ' + 23 + ' years old') // String + Number = coercion into String + String (+ operator)
console.log('I am ' + '23' + ' years old') // same result as an upper line of code

console.log('23' - '10' - 3) // String - Number = coercion into Number - Number (- operator)

console.log('23' * '2') // String * String = coercion into Number * Number (* operator, same for / operator) 

// exercise

let n = '1' + 1 // '11'
n = n -1 
console.log(n) // 10 number type

let z = 2 + 3 + 4 + '5'
console.log(z) // '95' string type

let y = '10' - '4' - '3' - 2 + '5'
console.log(y) // '15' string

// (< and > operators coerse string and numbers to booleans - true, false)



