
// EXPRESION is peace of code that produces VALUE (no mater of the type)

// Example: 

3 + 4; 
1991; 
true && false && !false


// STATEMENT is bigger piece of code that is executed ant which does NOT produce a VALUE on itself!!!

// Example:

if (23 > 10) {
    const str = '23 is bigger'
}

//  JS expect expresions and statements in diferent places
// For example: in a template literal we can only insert expresions but not statements.

const me = 'Pastor'
console.log(`I'm ${me} ${2037 - 1991} yeas old`) // 2037 - 1991 is expresion, variable me also --- because it produces value 

