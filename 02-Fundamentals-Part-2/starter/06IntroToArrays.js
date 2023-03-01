
const friend1 = "Michael"
const friend2 = "Steven"
const friend3 = "Peter"

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020)
console.log(years)

console.log(friends[0]) // finding data in array, place 0 -- Micahael
console.log(years[0]) // finding data in array, place 0 --- 1991

console.log(friends.length) // number of elements in the array - length is not zero based
console.log(years.length) // number of elements in the array

console.log(friends[friends.length - 1]) // catching last element od array -- Peter

friends[2] = 'Jay' 
console.log(friends)

const firstName = 'Pastor'
const pastor = [firstName, 'Ljubicic', 2022 - 1991, 'KokakuKidotai', friends]

console.log(pastor)
console.log(pastor.length)


// Exercise 

const calcAge = function (birthYear) {
    return 2022 - birthYear
}

const years_ = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years_[0])
const age2 = calcAge(years_[1])
const age3 = calcAge(years_[2])
const age4 = calcAge(years_[3])
const age5 = calcAge(years_[years_.length - 1])
console.log(age1, age2, age3, age4, age5)

const ages = [calcAge(years_[0]), calcAge(years_[1]), calcAge(years_[2]), calcAge(years_[3]), calcAge(years_[years_.length - 1])]
console.log(ages)