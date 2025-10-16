class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    prepend(value) {
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
            
        }
        this.length++
        return this
    }
    getAtIndex(index) {
        
        if (index < 0 || index >= this.length ) {
            return null
        };
        let i = 0
        let current = this.head
        console.log(current, "Current head");
        
        while (i < index) {
            current = this.head.next
            i++;
        }
        return current
    }

    insertAt(index, value) {
        if (index < 0 || index >= this.length ) {
            return null
        };
        if (index == 0) this.prepend();
        if (index === this.length) this.append();

        const prev = this.getAtIndex(index - 1);
        if (!prev) return false;
        const node = new Node(value);
        node.next = prev.next;
        prev.next = node;
        this.length++;
        return true;


        // prevNode = this.getAtIndex(index-1)
        // let newNode = new Node(value)
        // newNode.next = prevNode.next
        // prevNode.next = newNode
        

    }

     // Remove head
  shift() {
    if (!this.head) return null;
    const removed = this.head;
    this.head = this.head.next;
    removed.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
    return removed;
  }

  // Remove tail
  pop() {
    if (!this.head) return null;
    if (this.length === 1) {
      const removed = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removed;
    }
    // iterate to second last
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const removed = this.tail;
    current.next = null;
    this.tail = current;
    this.length--;
    return removed;
  }

   toArray() {
    const res = [];
    let cur = this.head;
    while (cur) {
      res.push(cur.value);
      cur = cur.next;
    }
    return res;
  }


  reverse(){
    if(!this.head || this.length == 1) return this;
    let prev = null;
    let current = this.head;
    this.tail = this.head;
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
    return this;

  }
}

let mylist = new LinkedList()
mylist.append(10)
mylist.append(20)
mylist.append(30)
mylist.prepend(5)
mylist.insertAt(2, 15)
console.log(mylist);
console.log(mylist.toArray().reverse());  


function reverseRecursive(node, prev = null){
  if (!node) return prev;
  let next = node.next;
  node.next = prev;

  return reverseRecursive(next, node);
}

let myArr= mylist.toArray()

