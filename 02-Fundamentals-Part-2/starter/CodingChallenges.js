// CODING CHALLENGE #1

//Back to two gymnastic teams, the Dolphins and the Koalas! There is new gymnnastuc discipline, which works differently. Each team competes 3 times, and then the average score of the 3 scores is calculated (so one avg score per team). A team ONLY wins if it has at least double the average score of the other team. Otherwise, no team wins!

// TASKS:

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate average for both teams
// 3. Create function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: 'Koalas win (30 vs 13)'
// 4. Use 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5. Ignore draws this time

//  Test Data:

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54,and 49
// Data 2: Dolphins score 85, 54 and 42. Koalas score 23, 34, and 27

//  Data 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const avgDolphins = calcAverage(44, 23, 71)
const avgKoalas = calcAverage(65, 54, 49)

const checkWinner = function (avgDolphins, avgKoalas) {
    if(avgDolphins >= avgKoalas * 2) {
        return console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)  
    } else if (avgKoalas >= avgDolphins * 2) {
        return console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)  
    } else {
        return console.log(`No Winner!!! (Dolphins: ${avgDolphins} vs Koalas: ${avgKoalas})`)
    }
}
checkWinner(avgDolphins, avgKoalas)

// Data 2

const calcAverage_ = (score1, score2, score3) => (score1 + score2 + score3) / 3

const avgDolphins_ = calcAverage_(85, 54, 42)
const avgKoalas_ = calcAverage_(23, 34, 27)

const checkWinner_ = function (avgDolphins_, avgKoalas_) {
    if(avgDolphins_ >= avgKoalas_ * 2){
        return console.log(`Dolphins win (${avgDolphins_} vs ${avgKoalas_})`)  
    } else if (avgKoalas_ >= avgDolphins_ * 2) {
        return console.log(`Koalas win (${avgKoalas_} vs ${avgDolphins_})`)  
    } else {
        console.log(`No Winner!! (Dolphins: ${avgDolphins_} vs Koalas: ${avgKoalas_})`)
    }
}
checkWinner_(avgDolphins_, avgKoalas_)


// CODING CHALLENGE #2

// Steven is building his tip calculator, using the same rules before: Tip 15% of the bill if the bill value is betrween 50 and 300, and if the valu is different, the tip is 20%

// Youre Tasks:

// 1. Write function 'calcTip' that takes any bill value as an input and returns the coresponding tip, calculated based on the rules above. Use the function type you like the most. Test the function using a bill value 100
// 2. Create array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tp value for each bill, calculated from the function you created before.
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

// Test Data: 125, 555 and 44

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300){
        return bill * 0.15
    } else {
        return bill * 0.20
    }
}

const bills = [125, 555, 44]
console.log(bills)

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])]
console.log(total)


// CODING CHALLENGE #3

// Let's go back to Mark and John comparing their BMI's! This time, let's use objects to implement the calculations! Remember: BMI = mass/height**2 or mass / (height * hight)(mass in kg and height in m)

// Your Tasks:

// 1. For each of them, create an object with properties for their full names, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on ceach object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the cnsole who has the higher BMI, together with full name and  the rspective BMI. Example: "John BMI (28.3) is higher than Mark's (23.9)

const markMiller = {
    name: 'Mark',
    surname: 'Miller',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.markBMI = this.mass / this.height**2
        return this.markBMI
    }
}
console.log(markMiller.calcBMI())

const johnSmith = {
    name: 'John',
    surname: 'Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.johnBMI = this.mass / (this.height * this.height)
        return this.johnBMI
    }
}
console.log(johnSmith.calcBMI())

const higherBMI = markMiller.markBMI > johnSmith.johnBMI ? `${markMiller.name}'s BMI (${markMiller.markBMI}) is higher than ${johnSmith.name}'s (${johnSmith.johnBMI})` : `${johnSmith.name}'s BMI (${johnSmith.johnBMI}) is higher than ${markMiller.name}'s (${markMiller.markBMI})`
console.log(higherBMI)



// CODING CHALLENGE #4

// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// 1. Create array 'bills' ontaining all 10 test values
// 2. Create empty arrys for the tips and the totals ('tips' and 'totals')
// 3. Use 'calcTip' function we wrote before to calculate tip and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform 10 calculations!

// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52

// Hints: Call 'calcTip' in the loop and use the push method to add values to the tips and total arrays.

const bill$ = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tip$ = []
const total$ = []

for (let i = 0; i < bill$.length; i++) {
    const tips_ = calcTip(bill$[i])
    tip$.push(tips_)
    total$.push(tips_ + bill$[i])
}
console.log(bill$)
console.log(tip$)
console.log(total$)

// BONUS CHALLENGE

// Write function 'calcAverage' which takes an array called arr as an argument. This function calculates the average of all numbers in the given array.
// 4.1 FIrst, you will need to add up values in array. To do the addition, start by creating variable 'sum' that starts at 0. Then loop over the arry using a for loop. In each iteratin, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values add together.
// 4.2 To calculate average, divide the sum you calculated before by the length of array
// 4.3 Call the function with the 'totals' array

const calcAverage$ = function(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum / arr.length
}
console.log(calcAverage$([2, 3, 4]))
console.log(calcAverage$(total$))





