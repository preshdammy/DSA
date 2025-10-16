// Write a short program that prints each number from 1 to n on a new line. 

// For each multiple of 3, print "Fizz" instead of the number. 

// For each multiple of 5, print "Buzz" instead of the number. 

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzBuzz(n){
  for (let index = 0; index <= n; index++) {
    if (index % 3 === 0 && index % 5 === 0){
      console.log("Fizzbuzz");
      continue;
    } else if(index % 5 === 0){
      console.log("Buzz");
      continue;
    }else if(index % 3 === 0){
      console.log("Fizz");
      continue;
    }
    console.log(index);
    
  }
}

// fizzBuzz(50)

// SENTENCE CAPITALIZATION

function capitt(sentence){
  let new_sentence = sentence.split(" ")
  for (let index = 0; index < new_sentence.length; index++) {
    let element = new_sentence[index]
    new_sentence[index] = element[0].toUpperCase() + element.substr(1) 
  }
  // console.log(new_sentence, "-----");
  
  return new_sentence.join(" ");
  
}

console.log(capitt("hello world from oluwadarasimi"));
 // Hello World From Oluwadarasimi


 //ASSIGNMENT
 // input; 20 - twenty
 //ARRAY CHUNK

 function chunckingArr(arr, div){
  // [1,2,3,4,5,6,7,8,9] => arr
  // 3 => div

  // Out => [[1,2,3], [4,5,6], [7,8,9]]
 }

 chunckingArr([], 3)