class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class ArrayQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }



enqueue(value){
  const newNode = new Node (value)
  if(!this.first){
      this.first = this.last = newNode

  }else{
      this.last.next = newNode
      this.last = newNode
  }
  this.length ++
}

dequeue(){
  if (!this.first) return "Queue is empty";
  const removed = this.first.value;
  console.log(`Dequeue: ${removed}`);
  this.first = this.first.next;
  if (!this.first) this.last = null;
  this.length--;
  return removed;

}

print() {
  let curr = this.first, result = [];
  while (curr) {
    result.push(curr.value);
    curr = curr.next;
  }
  console.log(result.join(" <- "));
}

reverse(k){
    if(k > this.length) return
    let prev = null
    let curr = this.first;
    this.last = curr
    for(let i = 0; i < k; i++){
     curr.next = this.first;
     console.log(curr, `Reversing ${k} times`);
     
     }
 }

}





const myQueue =  new ArrayQueue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.enqueue(5)
console.log(myQueue);

myQueue.print()

console.log(myQueue.reverse(7));

//Implement a circular queue(fixed size)

class CircularQueue{
  constructor(size){
    
    this.queueList = new Array(size)
    this.size= size
    this.first = -1
    this.last = -1 


  }

    enqueue(element) {
    if ((this.last + 1) % this.size === this.first) {
      console.log(`Queue is FULL, ${element} cannot be added to the queue`);
      return;
    } 
    
    if (this.first === -1) this.first = 0
    this.last = (this.last + 1) % this.size

    this.queueList[this.last] = element


  }

  dequeue(){
    if (this.first === -1) return null;

    const element = this.queueList[this.first]
    this.queueList[this.first] = null;
    console.log(`${element} was removed`);

    if(this.first === this.last){
      this.first = -1
      this.last = -1

    } else{
      this.first = (this.first + 1) % this.size
    }
    

  }
}

const circular = new CircularQueue(4)


circular.enqueue(10)
circular.enqueue(11)
circular.enqueue(12)
circular.dequeue()
circular.enqueue(13)



console.log(circular);






