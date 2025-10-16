let arr = new Array();
// classes are object blueprints => How your object is expected to look like

class CustomArr{
  constructor(){
    this.length = 0;
    this.data = {};
  }

myPush(element){
  this.data[this.length] = element;
  this.length++;
  return this.data
}

myFind(index){
  if(this.data[index] === undefined){
    console.log("Index not found");
  }
  return this.data[index];
}

myPop(){
  delete this.data[this.length -1]
  this.length--
  return
}

}

let arr1 = new CustomArr();
arr1.myPush("Alice");
arr1.myPush("Bob");
arr1.myPush("Charlie");
console.log(arr1.myFind(1));
arr1.myPop();
console.log(arr1);

console.log(arr1.length);

// shift, unshift, forEach, include, slice, filter 
