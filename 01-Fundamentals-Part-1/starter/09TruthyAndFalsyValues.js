
// FALSEY VALUES are values that are not exactly false but will become false when we try to convert them to boolean
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Pastor'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 0
if(money) {
    console.log(`Don't spend it all ;)`)
} else {
    console.log(`You should get a job!`)
}

// We can test is the variable defined or undefined, except when value is 0, because 0 is falsey
let height
if(height){
    console.log(`is defined`)
} else {
    console.log(`Is not defined`) // this block is executed because height is undefined (so false)
}