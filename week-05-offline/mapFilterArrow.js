// Map , Filter and Arrow Function

// function sum(a , b){
//     return a+b
// }

// const sum = (a , b) => {
//     return a+b
// }

// Problem Statement :- Given an array , give me back a new array in which every value is multiplied by 2

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = numbers.map(num => num * 2)

console.log(doubledNumbers) // [2, 4, 6, 8, 10]

// Filtering
// Uses

// what if I tell you , given an input array , give me backa all even values

const li = [1, 2, 3, 4, 5, 6, 10, 33, 44]

const evenArr = li.filter(li => li % 2 == 0)

console.log(evenArr)
console.log("End")