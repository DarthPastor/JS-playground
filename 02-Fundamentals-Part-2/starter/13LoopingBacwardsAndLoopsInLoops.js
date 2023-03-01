
const pastor = [
    'Pastor',
    'Don',
    2022 - 1991,
    'No job!',
    ['Iko', 'Dino', 'KokakuKidotai'],
    true
]

// Looping backwards 4 ... 0

for(let i = pastor.length - 1; i >= 0; i--) {
    console.log(i, pastor[i])
}


// LOOP INSIDE LOOP 

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---Starting exercise ${exercise}`)

    for (let repetition =1; repetition < 6; repetition ++)
    console.log(`Lifting weight repetition ${repetition}`)
}