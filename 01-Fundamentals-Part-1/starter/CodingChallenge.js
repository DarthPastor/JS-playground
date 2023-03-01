// CODING CHALLENGE #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using formula BMI = mass / height ** 2 = mass /(height * height) (mass in kg and height in meter).

// TASKS:

// 1. Store Mark's and John's mass and heigth in variables
// 2. Calculate both their BMIS's using the formula
// Create Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

//  TEST DATA

// Data 1: Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// Data 2: Mark weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// DATA 1

let markWeight = 78
let markHeight = 1.69
let markBMI = markWeight / markHeight ** 2
console.log('Mark BMI ' + markBMI)

let johnWeight = 92
let johnHeight = 1.95
let johnBMI = johnWeight / johnHeight ** 2
console.log('John BMI ' + johnBMI)

let markHigherBMI = markBMI > johnBMI

console.log(markHigherBMI)

let mWeight = 95
let mHeight = 1.88
let mBMI = mWeight / (mHeight * mHeight)
console.log('Mark BMI ' + mBMI)

let jWeight = 85
let jHeight = 1.76
let jBMI = jWeight / (jHeight * jHeight)
console.log('John BMI ' + jBMI)

let mHigherBMI = mBMI > jBMI

console.log(mHigherBMI)

//  CODING CHALLENGE #2

// Use the BMI example from Challenge #1, and the code you alredy wrote,and improve it.

//TASKS:

// 1. Print a nice output to the console, saying who has a higher BMI. The message is either "Marks's BMI Is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Us ethe template literal to ins=clude the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
}

if (mHigherBMI) {
    console.log(`M's BMI (${mBMI}) is higher than J's (${jBMI})`)
} else {
    console.log(`J's BMI (${jBMI}) is higher than M's (${mBMI})`)
}


// CODING CHALLENGE #3

// There are two gymnastics teams, Dolphins and Koalas They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your Tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winnwer of the competiton, and print it to the console. Don't foreget thet there can be Draw, so test for that as well (draw mwans they have same average score)
// 3. Bonus 1: INclude a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: use logical operators to test for minimum score, as well as multiple else-if blocks.
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens whenboth teams have same score and both have sa csore greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA
// DATA 1: Dolphiins score 96, 108, and 89. Koalas score 88, 91 and 110
// DATA Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// DATA Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const avgDolphins = (96 + 108 + 89) / 3
const avgKoalas = (88 + 91 + 110) / 3

console.log(avgDolphins, avgKoalas)

if(avgDolphins > avgKoalas) {
    console.log(`Dolphins Win!`)
} else if (avgDolphins === avgKoalas){
    console.log(`Draw!!!!`)
} else {
    console.log(`Koalas win!`)
}

// DATA BONUS 1

const avgDolphins1 = (97 + 112 + 101) / 3 
const avgKoalas1 = (109 + 95 + 123) / 3
console.log(avgDolphins1, avgKoalas1)
const avgScore = avgDolphins1 >= 100 || avgKoalas1 >= 100 
console.log(avgScore)

if (avgScore && avgDolphins1 > avgKoalas1) {
    console.log(`Doplhins 1 Win`)
} else if (avgScore && avgDolphins1 < avgKoalas1){
    console.log(`Koalas 1 Win`)
} else if (avgDolphins1 === avgKoalas1){
    console.log(`Draw!!!`)
}else {
    console.log(`No team scored minimum points to win`)
}

// DATA BONUS 2

const avgDolphins2 = (97 + 112 + 101) / 3 
const avgKoalas2 = (109 + 95 + 106) / 3
console.log(avgDolphins2, avgKoalas2)
const avgScore$ = avgDolphins2 >= 100 || avgKoalas2 >= 100 
console.log(avgScore$)

if (avgScore$ && avgDolphins2 > avgKoalas2) {
    console.log(`Doplhins 2 Win`)
} else if (avgScore$ && avgDolphins2 < avgKoalas2){
    console.log(`Koalas 2 Win`)
} else if (avgScore$ && avgDolphins2 === avgKoalas2){
    console.log(`Draw!!`)
}else {
    console.log(`No team scored minimum points to win`)
}

// CODING CHALLENGE #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%

// TASK:

// 1. Calculate the tip, depending on the bill value. Create variable called 'tip' for this. It's not allowed to use an if/else statement.
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: "The bill was 275, the tip was 41.25, and the total value 316.25"

// Test Data for bill values 275, 40, 430

// Test Data 1

const bill_1 = 275
const tip_1 = bill_1 >= 50 && bill_1 <= 300 ? bill_1 * 0.15 : bill_1 * 0.20
console.log(`The bill was ${bill_1}, the tip was ${tip_1}, the total value: ${bill_1 + tip_1}`)

// Test Data 2

const bill_2 = 40
const tip_2 = bill_2 >= 50 && bill_2 <= 300 ? bill_2 * 0.15 : bill_2 * 0.20
console.log(`The bill was ${bill_2}, the tip was ${tip_2}, the total value: ${bill_2 + tip_2}`)

// Test Data 3

const bill_3 = 430
const tip_3 = bill_3 >= 50 && bill_3 <= 300 ? bill_3 * 0.15 : bill_3 * 0.20
console.log(`The bill was ${bill_3}, the tip was ${tip_3}, the total value: ${bill_3 + tip_3}`)
