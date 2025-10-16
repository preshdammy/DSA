class DNode{
  constructor(value){
    this.valuev= value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(value){
  const node = new DNode (value)
  if(!this.head){
    this.head = node
    this.tail = node
  }else{
    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }
  this.length++
  return this
}


}


let dList = new DoublyLinkedList()
dList.append(10)
dList.append(15)
dList.append(20)
console.log(dList);

g7tygy