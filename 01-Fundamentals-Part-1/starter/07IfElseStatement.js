
const age = 15

if(age >= 18) {
    console.log(`Mani can start driving licence :)`)
} else {
    const yearsLeft = 18 - age
    console.log(`Mani is too young. Wait another ${yearsLeft} years!`)
}

const birthYear = 2001
let century

if(birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(century)