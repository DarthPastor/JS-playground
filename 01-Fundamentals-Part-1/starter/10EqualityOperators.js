
// === STRICT EQQUALITY OPERATOR (does not preform type coercion)
const age = 18
if(age === 18) console.log(`You are adult!`)

console.log(age === 18) //true
console.log(age === 19) //false
console.log(age === '18') //false

// == LOOSE EQUALITY OPERATOR (preform type coercion)
const year = 1991
console.log(year == '1991') //true


// playground

const favourite1 = prompt("What's your favourite number?")
console.log(favourite1)
console.log(typeof favourite1) // string

if(favourite1 == 21){ // '21' == 21
    console.log(`Cool Num!`)
}

const favourite2 = Number(prompt("What's your favourite number?"))
console.log(favourite2)
console.log(typeof favourite2) // number

if(favourite2 === 21){ // 21 === 21
    console.log(`Cool Num!`)
} else if(favourite2 === 7) {
    console.log(`7 is also a cool numb`)
} else if (favourite2 === 10) {
    console.log(`10 is ok number`)
} else {
    console.log(`nOT a vALID nUMBER`)
}

// !== logical NOT or diferent
if(favourite2 !== 23) console.log(`why not 23`)