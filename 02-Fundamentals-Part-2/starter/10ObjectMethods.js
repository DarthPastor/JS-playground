
const pastor = {
    firstName: 'Pastor',
    lastName: 'Don',
    birthYear: 1991,
    job: 'No job!',
    friends: ['Iko', 'Dino', 'KokakuKidotai'],
    hasDriversLicence: true,

    calcAge: function (birthYear){
        return 2022 - birthYear
    }
}
//  Method is property that holds function value

console.log(pastor.calcAge(1991)) // 31
console.log(pastor['calcAge'](1991)) //31

// Using this. keyword - this allways point to object in which method is called

const pastor$ = {
    firstName: 'Pastor',
    lastName: 'Don',
    birthYear: 1990,
    job: 'No job!',
    friends: ['Iko', 'Dino', 'KokakuKidotai'],
    hasDriversLicence: true,

    calcAge: function (){
        return 2022 - this.birthYear
    }
}

console.log(pastor$.calcAge())


const pastor_$ = {
    firstName: 'Pastor',
    lastName: 'Don',
    birthYear: 1989,
    job: 'No job!',
    friends: ['Iko', 'Dino', 'KokakuKidotai'],
    hasDriversLicence: true,

    calcAge: function (){
        this.age = 2022 - this.birthYear
        return this.age
    }
}
console.log(pastor_$.calcAge())

console.log(pastor_$.age)
console.log(pastor_$.age)
console.log(pastor_$.age)


//Challenge : method get summary
// 'Pastor is a 46-year old teacher, and he has a driver's licence'

const pastor$_$ = {
    firstName: 'Pastor',
    lastName: 'Don',
    birthYear: 1991,
    job: 'No job!',
    friends: ['Iko', 'Dino', 'KokakuKidotai'],
    hasDriversLicence: true,

    calcAge: function (){
        this.age = 2022 - this.birthYear
        return this.age
    },

    summary: function () {
        return `${this.firstName} is a ${this.calcAge()}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence`
    }
}

console.log(pastor$_$.summary())