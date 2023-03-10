
function cutFruitPieces(fruit) {
    return fruit * 5
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`
    return juice
}

console.log(fruitProcessor(2, 3))



// FUNCTION REVIEW

const calcAge = function (birthYear) {
    return 2022 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age

    if(retirement > 0) {
        return `${firstName} retires in ${retirement} years!`
    }else{
        return `${firstName} is already in pension.`
    } // after return function stop executing

    // return `${firstName} retires in ${retirement} years!`
}


console.log(yearsUntilRetirement(1991, 'Pastor'))
console.log(yearsUntilRetirement(1950, 'Mike'))

