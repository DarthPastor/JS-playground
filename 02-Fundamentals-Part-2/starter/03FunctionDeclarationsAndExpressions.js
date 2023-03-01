
// FUNCTION DECLARATION --- can be called in code before we define it

function calcAge1(birthYear) { 
    return 2022 - birthYear
}

const age1 = calcAge1(1991)
console.log(age1)


// FUNCTION EXPRESION

const calcAge2 = function (birthYear) {
    return 2022 - birthYear
}

const age2 = calcAge2(1991)
console.log(age2)

