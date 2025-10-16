let arr = [1,2,3,4,5,6,7,8,9]
let number = ""

function chunkingArray(arr, num){
  const chunked = [];
  for(let i = 0; i < arr.length; i += num){
      chunked.push(arr.slice(i, i + num));
  }
  return chunked
}
console.log(chunkingArray(arr, 2))
