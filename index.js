// Data => is the collection of information or details about a particular object or figure.
// Structure => is how you save, format, process the data
// Algorithm => This is a set of instruction or a step by step rule on how to solve a problem.
// The Big 0 => Time and Space complexity of an algorithm.
//The O of n
//The O of 1
//The O of log n
//The O of n^2
import {performance} from 'perf_hooks';

//Write an algorithm that adds 2 to every number in an array.

const num = [3, 7, 12, 6, 34, 19];

async function addTwo(sum){
  for (let i = 0; i < num.length; i++) {
  num[i] += sum;
}
return num;
}
console.log(addTwo(2));
console.log(addTwo(5));

async function fetchUser(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json()
}
fetchUser()

async function dotThen(){
  fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>{
    return data
  })
}
dotThen()

const normalizedPath =  `file:///${process.argv[1]}`.replace(/\\/g, '/');
console.log(normalizedPath);
console.log(import.meta.url);

if(import.meta.url === normalizedPath){
  const t0 = performance.now();
  addTwo().then(()=>
  console.log(`[time] ${((performance.now( ) - t0) / 1000).toFixed(4)}s`))

  fetchUser().then(()=>
  console.log(`[time] ${((performance.now( ) - t0) / 1000).toFixed(4)}s => Without then`))

  dotThen().then(()=>
  console.log(`[time] ${((performance.now( ) - t0) / 1000).toFixed(4)}s => dot Then`))
}
   

function isPalindrome(word) {
    let reversed_word = "";
    let i = word.length - 1
    while (i >= 0){
      if (word[i] == " ") {
        i--
      continue;
   
    }
    reversed_word += word[i];
      i--;      
}
console.log(reversed_word);
    
return word.replaceAll(" ", "").toLowerCase().trim() === reversed_word.toLowerCase()
}
console.log(isPalindrome("race car")); 
// console.log(isPalindrome("hello")); 
// console.log(isPalindrome("MAdam")); 

function rightAngleTrinagle(num){
  let star = "";
  for (let i = 0; i < num; i++){
    star += "*";
    console.log(star);
  }

}
rightAngleTrinagle(3)

// min
// max
// sort in alphabetical order => ascending
// sort alphabetical order => descending
// lexicographical order
let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Da", "oluwadarasimi", "oluwadarasimi", "oluwadarasimi", "oluwadarasimih", "oluwadarasimijr"];



function findName(targetName) {
    for (let i = 0; i < names.length; i++) {
        if (names[i] === targetName) {
            return `${targetName} found at position ${i}`;
        }
    }
    return `${targetName} not found in the array`;
}

function maxLength() {
    let maxLen = 0;
    let maxName = "";
    let count = 0;
    
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > maxLen) {
            maxLen = names[i].length;
            maxName = names[i];
            count = 1;
        } else if (names[i].length === maxLen) {
            count++;
        }
    }
    
    return `${maxName} is the name with the longest character, we have ${count} cop${count === 1 ? 'y' : 'ies'} of ${maxName}`;
}


function minLength() {
    let minName = names[0];
    
    for (let i = 1; i < names.length; i++) {
        if (names[i].length < minName.length) {
            minName = names[i];
        }
    }
    
    return `${minName} is the name with the smallest character (${minName.length} letters)`;
}

function sortAscending() {
    let sorted = [...names];
    
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - i - 1; j++) {
            if (sorted[j] > sorted[j + 1]) {
               
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    
    return sorted;
}

function sortDescending() {
    let sorted = [...names]; 
    
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - i - 1; j++) {
            if (sorted[j] < sorted[j + 1]) {
              
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    
    return sorted;
}


console.log(findName("Charlie"));
console.log(findName("Precious")); 
console.log(maxLength()); 
console.log(minLength()); 
console.log("Ascending:", sortAscending()); 
console.log("Descending:", sortDescending()); 
