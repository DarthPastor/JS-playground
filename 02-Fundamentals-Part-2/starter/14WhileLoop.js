// for loop

// for(let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repetitions ${i}!`)
// }

// WHILE LOOP

let n = 1
while (n <= 5) {
    console.log(`While I'm lifting weights: repetition ${n}!`)
    n++
}

// Random number 

let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice)

while(dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice == 6) console.log(`Loop ended`)
}
