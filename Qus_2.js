// 2. Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.
function removeDuplicateNumber (arr){
    return Array.from(new Set(arr))
}

let numbers = [1,2,3,4,5,6,7,8,9,0,1,2,3,3,4,5,6,7,7,8,8,6,34,3434,45]
console.log(removeDuplicateNumber(numbers));