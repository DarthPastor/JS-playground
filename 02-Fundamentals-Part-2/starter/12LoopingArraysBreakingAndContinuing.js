
const pastor = [
    'Pastor',
    'Don',
    2022 - 1991,
    'No job!',
    ['Iko', 'Dino', 'KokakuKidotai'],
    true
]

const types = [] // we are constructing new array from first array using iterration
const type$ = []
// console.log(pastor[0])
// console.log(pastor[1])
// ...
// console.log(pastor[4])

for(let i = 0; i < pastor.length; i++) {
    console.log(pastor[i], typeof pastor[i]) //reading from pastor array

    types[i] = typeof pastor[i] // we are constructing new array (that contains data types of pastor array) from first array using iterration
    
    type$.push(pastor[i]) // another way, but this time we ar basicaly copy properties from first array to second 
}

console.log(types)
console.log(type$)


const years = [1991, 2007, 1969, 2020]
const ages = []

for(let i = 0; i < years.length; i++) {
    2022 - years[i] 
    ages.push(2022 - years[i])
}
console.log(ages)

// CONTINUE STATEMENT - terminating curent iteration when condition is met for that iteration

const zivotinje = [
    100,
    'Koza',
    'Magare',
    ['puz', 'skakavac', 'bubamara'],
    'Ovan'
]

for(let i = 0; i < zivotinje.length; i++) {
    if(typeof zivotinje[i] !== 'string') continue // When loop through array log just strings or if it's not a string continue to next one
    console.log(zivotinje[i], typeof zivotinje[i])
}

// BREAK STATEMENT

const flora = [
    'Hrast',
    'Lipa',
    101,
    'Marihuana', 
    90
]

for(let i = 0; i < flora.length; i++) {
    if(typeof flora[i] === 'number') break
    console.log(flora[i], typeof flora[i])
}