
// BOOLEAN LOGIC --- AND, OR, & NOT  operators

// THEORY:

// a: Sarah has a driver's Licence
// b: Sarah has good vision

// a AND b --- only if BOTH a and b are true the result of the operation will be true. True whel ALL are true.

// a OR b --- OR operator will be true if just one of the variables (a OR b) are true. 

// NOT a, NOT b --- inverts true/false value. NOT operator has PRECEDENCE over AND and OR operators

// EXAMPLE:

// age = 16
// a: Age >= 20 --- false
// b: Age < 30 --- true

// !a --- true 
// a AND b --- false 
// a OR b --- true 
// !a AND b --- true
// a OR !b --- false

// LOGICAL OPERATORS

const hasDriversLicence = true // A
const hasGoodVision = true // B

console.log(hasDriversLicence && hasGoodVision) 
console.log(hasDriversLicence || hasGoodVision)
console.log(!hasDriversLicence)

const shouldDrive = hasDriversLicence && hasGoodVision

const isTired = true // C
console.log(hasDriversLicence && hasGoodVision && isTired)

if(hasDriversLicence && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`)
} else {
    console.log(`Sarah can't drive!`)
}