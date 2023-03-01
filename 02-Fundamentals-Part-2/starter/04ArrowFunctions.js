
// Arrow Function - return happens impicitly but ony if we have one line function

const calcAge = birthYear => 2022 - birthYear

const age = calcAge(1991)
console.log(age)

// more parameters and more code logic

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear
    const retirement = 65 - age
    // return retirement
    return `${firstName} retires in ${retirement} years!`
}

console.log(yearsUntilRetirement(1991, 'Pastor'))
console.log(yearsUntilRetirement(1995, 'Mani'))