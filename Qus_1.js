// 1. Count the occurrences.
// You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.
function countWord(text){
    const words = text.split(" ");
    const map = new Map()

    for(const word of words){
        const count = map.get(word) || 0;
        map.set(word,count+1)
    }
    return map;
}

let text = `nitish is here nitish is there nitish is everywhere`;
console.log(countWord(text));