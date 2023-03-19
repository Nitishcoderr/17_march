// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties. 

function extractNameAddress({person:{name},address:{street}}){
    return {name,street};
}

const person ={
    person:{
        name:'Nitish',
        age:'20',
        gender:'male',
    },
    address:{
        street:'sector-15',
        state:'uttar pradest',
    },
}
const result = extractNameAddress(person);
console.log(result);