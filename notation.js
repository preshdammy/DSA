// The 0 of n
// It signifies that the execution time of the algorithm grows LINEARLY in proportion to the size of te input data(n)
// i.e if we have an array of length 5, it takes faster time to execute information than an array of length 100.
let names = ["Alice", "Bob", "Charlie"];

function searchName(name){
    for (let i = 0; i < names.length; i++){
        const element = names[i];
        if (element === name){
          return name;
        }
}
}
searchName("Bob");

// The 0 of 1
// Also known as constant time, signifies that the execution time of an algorithm remains constant regardless of the size of the input data(n).
// i.e if we have an array of length 5, it takes the same time to execute information as an array of length 100.

// The 0 of n^2
// Indicates that the execution time of the algorithm grows QUADRATICALLY with the size of the input data(n).


for (let i = 0; i < 10; i++) {
  // console.log(i)
  for (let j = 0; j < 10; j++) {
    console.log(`Finding pairs: ${i}: ${j}`);
  }
  
}
