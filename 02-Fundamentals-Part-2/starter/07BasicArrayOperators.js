
const friends = ['Michael', 'Steven', 'Peter']

// PUSH METHOD - add element into the end of array

friends.push('Jay') // function that add new element into array
console.log(friends)
const newLength = friends.push('Pastor') // now we can see new length of elemnts in array
console.log(newLength) // now we can see new length of elemnts in array

// UNSHIFT - add element on the beginning of the array

friends.unshift('John')
console.log(friends)

// POP - Remove last element of array

friends.pop()
console.log(friends)
const popped = friends.pop()
console.log(popped) // pop function returns to us a removed element from array

// SHIFT - remove first element of array

friends.shift()
console.log(friends)

// INDEX OF - returns an index to which element is located in array

console.log(friends.indexOf('Steven'))

// INCLUDES - return true if element is in array, and false if it's not

console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))

if (friends.includes('Bob')) {
    console.log(`You have a friend called Peter`)
}else{
    console.log(`Jebi ga sinko`)
}