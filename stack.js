class Stack {
  constructor() {
    this.items = [];
  }

  // Add item
  push(element) {
    this.items.push(element);
  }

  // Remove item
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  // See top item
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }

  // Is stack empty?
  isEmpty() {
    return this.items.length === 0;
  }

  // Number of items
  size() {
    return this.items.length;
  }

  // Print stack
  print() {
    console.log(this.items.join(" <- "));
  }
}

// Example
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // 10 <- 20 <- 30

console.log("Top element:", stack.peek()); // 30
stack.pop();
stack.print(); // 10 <- 20


class UndoStack {
  constructor() {
    this.stack = [];
    this.popped = [];
  }

  perform(action) {
    this.stack.push(action);
    console.log(`Performed: ${action}`);
  }

  undo() {
    if (this.stack.length === 0) {
      console.log("Nothing to undo");
      return;
    }
    const lastAction = this.stack.pop();
    console.log(`Undid: ${lastAction}`);
  }

  showHistory() {
    console.log("Action History:", this.stack.join(" -> "));
  }

  redo(){
    if(this.popped.length === 0) return
    let redone = this.popped.pop()
    console.log(`Redid ${redone}`);
    this.stack.push(redone)
    return this.stack
  }
}

let doings = new UndoStack()
doings.perform("Write")
doings.perform("This")
doings.perform("Again")

doings.showHistory()
doings.undo()
doings.showHistory()
doings.redo()
doings.showHistory()