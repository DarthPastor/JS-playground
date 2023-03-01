
// VALUES AND VARIABLES

// 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to youre own country (population in milions).
// 2. Log their values to the console.

const country = "Croatia"
const continent = "Europe"
let population = 3.8

console.log(country, continent, population)

// DATA TYPES

// 1. Declare variable called 'isIsland' and set its value according to your country. THe variable should hold a Boolean value. Also declare a variable 'language', but dont assign it any value yet.
// 2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console.

const isIsland = false
let language

console.log(typeof isIsland) // boolean
console.log(typeof language) // undefined
console.log(typeof country)
console.log(typeof continent)
console.log(typeof population)

// LET, CONST, VAR

// 1. Setthe value of 'langugage' to the language spoken where you live
// 2. Think about which variables should be const variables, then change it to const
// 3. Try to change one of the changed variables now, and observe what happens

language = 'Croatian'
// country = 'Danmark' // CAN'T DO THIS
// continent = 'Asia' // CAN'T DO THIS
// isIsland = true // CAN'T DO THIS

// BASIC OPERATORS

// 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
// 2. Increse th population of your country by 1 and log the result in the console?
// 3. FInland has population of 6 million. DOes youre country have more people than Finland?
// 4. The average population of a country is 33 milion people. Does your country have less people than the average country?
// 5. Based on the variables you created, create new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portugese'

console.log(population /2) // 1.9 milion

// population ++ 
// console.log(population)

let finlandPopulation = 6
console.log(population > finlandPopulation) // false

let avgPopulation = 33
console.log(population < avgPopulation) // true

let description = country + ' is in Europe, and its ' + population + ' milion people speak ' + language + '.'
console.log(description) 

// STRINGS AND TEMPLATE LITERALS

// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax

description = `${country} is in Europe, and its ${population} milion people speak ${language}`
console.log(description)

//  TAKING DECISIONS: IF / ELSE STATEMENTS

// 1. If youre country's population is greater than 33 milion, log string like this to the console: 'Portugal's population is above average'. Otherwise, log string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
// 2. After cheking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

if(population > 33) {
    console.log(`Croatia's population is above average`)
} else {
    console.log(`Croatia's population is ${avgPopulation - population} million below average.`)
}

// TYPE CONVERSION AND TYPE COERCION

// 1. predict the results of these 5 operations without executing them
// 2. Execute the operations to check if ou were right

let a = '9' - '5' // 4 number
console.log(a)
let b = '19' - '13' + '17' // '617' string 
console.log(b)
let c = '19' - '13' + 17 // 23 number
console.log(c)
let d = '123' > 57 // false - coercion string '123' to number 
console.log(d)
let e = 5 + 6 + '4' + 9 - 4 -2 // 1143 number  
console.log(e) 

// EQUALITY OPERATORS

// 1. Declare a variable 'numNughborous' based on prompt input like this: prompt ('How many neighbour countries does your country have?)
// 2. If there is only one neigbour, log to the console 'Only 1 border!' (use loose equality for now)
// 3. Use and else-if block to log 'More than 1 border' in case  'numNeighbours' is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when 'numNeghbours' is 0 or any other value)
// 5. Test the code with diferent values of 'numNeigbours', including 1 and 0
// 6. Change == to === and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is tiihs happening? ----- It is happening because number 1 that we input in prompt is convertet to string and 1 === '1' is false hence else block is executed
// Finaly, convert 'numNeigbours' to a number, and watch what happens now when you input 1 --- if block is executed because 1 === 1 after type conversion with Number() function
// Reflect on why we should use the === operator  and type conversion in this situation --- === operator, alongside NUmber() function is better to use because we dont neet to check type of value when we input prompt

// const numNeghbours = Number(prompt(`How many neighbour countryes does your country have?`))

// if(numNeghbours === 1) {
//     console.log(`Only one border!`)
// }else if(numNeghbours > 1){
//     console.log(`More than one border!`)
// }else{
//     console.log(`No borders!`)
// }

// LOGICAL OPERATORS

// 1. Let's say Sarah is looking for new country to live in. She wants to live in a country that speaks eaglish, has less than 50 million people and is not an island.
// 2. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarh criteria. Take your time with this, and check part of the solution if necessary.
// 3. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('
// 4. Probabliyyoure country does not meet all the criteria.So go back and temporarily change some variables in order to make the condition tru (unless you live in Canada).

if(language === "English" && population === 50 && isIsland){
    console.log(`You should live in Croatia :)`)
} else {
    console.log(`Croatia does not meet your criteria :(`)
}

// THE SWITCH STATEMENT 

// 1. Use SWITCH statement to log the folowong string for the given 'language': chinese or mandarin: 'MOST number of native speakers!'; Spanish: '2nd place in number of native speakers'; English: '3rd place'; Hindi: 'Number 4'; Arabic: '5th most spoken language'; for all other simply log 'Great language too :D'

switch(language){
    case 'Chinese or Mandarin':
        console.log('MOST number of native speakers!')
        break
    case 'Spanish':
        console.log('2nd place in number of native speakers')
        break
    case 'English':
        console.log('3rd place')
        break
    case 'Hindi':
        console.log('Number 4')
        break
    case 'Arabic':
        console.log('5th most spoken language')
        break
    default:
        console.log('Great language too :D')
}

// THE CONDITIONAL (TERNARY) OPERATOR

// 1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average. Notice how only one word chages between these sentences!
// 2. After cheking the result, change population temporarily t o13 and then to 130. See the diferent results, and set the population back to original.

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`)