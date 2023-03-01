
// FUNCTIONS

// 1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population', and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 diferent countries. Store returned values in 3 diferent variables, and log them in the console.

function describeCountry(country, population, capitalCity){
    const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}`
    return countryInfo
}

const Fin = describeCountry('Finland', 5.5, 'Helsinki')
console.log(Fin)

const Cro = describeCountry('Croatia', 3.8, 'Zagreb')
console.log(Cro)

const Aut = describeCountry('Austria', 8.9, 'Vienna')
console.log(Aut)



// FUNCTION EXPRESSIONS AND DECLARATIONS

// 1. The world population is 7900 million people. Create a function declartaion called 'percentageOfWorld' which recieves a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2 of the world population.
// 2. To calculate percentage, divide the given 'population' vlaue by 7900 and then multiply by 100
// 3. Call 'percentageOfWOrld' for 3 population countries of our choice, store the results into variables, and log them to the console
// 4. Create a function expression which does exact same thing, called 'percentageOfWOrld2', and also call it with 3 counrty populations (can be the same as first three)

// Data 1 - function declaration

function percentageOfWOrld(population) {
    const percentage = `${(population / 7900) * 100}`
    return percentage 
}

const suomi = percentageOfWOrld(5.5)
const hrvatska = percentageOfWOrld(3.8)
const osterreich = percentageOfWOrld(8.9)
console.log(suomi, hrvatska, osterreich)


// Data 2 - function expression

const percentageOfWOrld2 = function (population){
    const percentage2 = `Population of ${population} million, is ${(population / 7900) * 100}% of world population!`
    return percentage2
}

const usa = percentageOfWOrld(332)
const canada = percentageOfWOrld(40)
const brasil = percentageOfWOrld(215)
console.log(usa, canada, brasil)



// ARROW FUNCTIONS

// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

const percentageOfWorld3 = population => `Population of ${population} million, is ${(population / 7900) * 100}% of world population!`

const argentina = percentageOfWorld3(143)
const rossiya = percentageOfWorld3(46)
const nippon = percentageOfWorld3(125)
console.log(argentina,rossiya, nippon)



// FUNCTIONS CALLING OTHER FUNCTIONS 

// 1. Create function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and ' population', and returns string like this: 'China has 1441 million people, which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of youre choice 

function describePopulation(country, population){
    const percentage = percentageOfWOrld(population)
    return `${country} has ${population} million people, which is about ${percentage}% of the world`
}

const france = describePopulation('France', 67)
const egypt = describePopulation('Egypt', 109)
const mexico = describePopulation('Mexico', 126)
console.log(france, egypt, mexico)



// INTRODUSCTION TO ARRAYS

// 1. Create an array  constaining 4 population values of 4 countries of youre choice. You may use the values you have been using previously. Store this into a varable called 'populations'
// 2. LOg to the console whether the array has 4 elements of not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use function 'percentageOfWorld1' that you created earlier to computed the 4 percentage values

const populations = [3.8, 5.5, 8.9]

console.log(populations.length > 4)

function percentageOfWOrld(population) {
    const percentage = `${(population / 7900) * 100}`
    return percentage 
}

const percentageCro = percentageOfWOrld(populations[0])
const percentageFin = percentageOfWOrld(populations[1])
const percentageOst = percentageOfWOrld(populations[3]) 


const percentages = [percentageOfWOrld(populations[0]), percentageOfWOrld(populations[1]), percentageOfWOrld(populations[2])]
console.log(percentages)



// BASIC ARRAY OPERATIONS (METHODS)

// 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at leat 2 or 3 neighbours. Store the array into a variable called 'neighbours'
// 2. At seom point, a new country called 'Utopia is created in the neighbourhood of youre selected country. So add it to the end of 'neighbours array.
// 3. Unfortunately, after some time, the new country is dissolved. SO remove it from the end of the array
// 4. If the 'neighbours' array does not include country 'Germany', log t the console: 'Probably not a central European country :D'
// 5. Change the name of one of youre neigbouring countries. To do taht, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For examl=ple, you can search for 'Sweden' in the arrray, amd then replace it with 'Republic of Sweden'.

const neighbours = ['Spain', 'France', 'Portugal', 'Andora']

neighbours.push('Utopia')
console.log(neighbours)
neighbours.pop(neighbours.length - 1)
console.log(neighbours)

if (neighbours.includes('Germany')) {
    console.log('Central European country :D')
} else {
    console.log(`Probably not a central European country :D`)
}

console.log(neighbours.indexOf('Spain'))
neighbours[0] = 'Kingdom of Spain'
console.log(neighbours)



// INTRODICTION TO OBJECTS

// 1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like like we used in previous assingnemnt)

const myCountry = {
    country: 'Norway',
    capital: 'Oslo',
    language: 'Norwegian',
    population: 5.4,
    neighbours: ['Finland', ['Sweden'], ['Danmark'], ['Russia']],
    describe: function() {
        return `${this.country} has ${this.population} million Norwegian-speaking people, ${this.neighbours.length} neighbouring countries and a capital named ${this.capital}`
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length <= 0 ? true : false
        return this.isIsland 
    }
}



// DOT VS BRACKET NOTATION 

// 1. Using the object from previous assignment, loga string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries anda  capital called Helsinki.'
// 2. Increse the country's population by two milion using dot notation, and then decrease it by two million using bracket notation

console.log(`${myCountry.country} has ${myCountry.population} million Norwegian-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital named ${myCountry.capital}`)

console.log(myCountry.population + 2)
console.log(myCountry['population'] - 2)



// OBJECT METHODS 

// 1. Add a method called describe to the myCountry object. This methid will log string to the console, similar to the string logged in the previous assignment, but this time using 'this' keyword.
// 2. Call 'describe' method
// 3. Add a method called 'checkIsIsland' to the 'myCountry object. This methid will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countryes,and false if there are. Use the ternary operator to set he property.

console.log(myCountry.describe())
console.log(myCountry.checkIsland())



// ITERATION: THE FOR LOOP

// 1. There are elections in youre country! In a small town, there are ony 50 voters. Use a for loop to simulate 50 people voting, by logging a string like this to the console (for numbers 1 to 150): 'Voter number 1 is currently voting'

for(let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting!`)
}



// LOOPING ARRAYS, BREAKING AND CONTINUING

// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld' that you created earlier.
// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages array that we cratred manually and reflect on how much better the solution is.

// const populations = [3.8, 5.5, 8.9]
const percentages2 = []

for(let i =0; i < populations.length; i++){
        const perc = percentageOfWOrld(populations[i])
        percentages2.push(perc)
    }
console.log(percentages2)


// LOOPING BACKWARDS AND LOOPS IN LOOPS 

// 1. Store this array of arrays into variable called 'listOfNeighbours' [['Canada', ['Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Log only the neighbouring countries to th console, one by one, not the entire array. Log a string like 'Neighbour: Canada' for each country
// 3. You will need loop inside loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you!

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]

for(let i = 0; i < listOfNeighbours.length; i++){
    console.log(listOfNeighbours[i])
    for(let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`)
}


// THE WILE LOOP

// 1. Recreate the callenge from lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for the task: the foor loop or the while loop?

// const populations = [3.8, 5.5, 8.9]
const percentages3 = []

let i = 0
while (i < populations.length){
    const percent2 = percentageOfWOrld(populations[i])
    percentages3.push(percent2)
    i++
}

console.log(percentages3)

