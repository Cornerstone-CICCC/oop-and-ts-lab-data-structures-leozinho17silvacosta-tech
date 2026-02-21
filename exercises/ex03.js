// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function insertAfterTarget(stack, target, newElement) {
  const tempStack = new Stack();

  let insertAfter = false;

// MAIN STACK:

  while (!stack.isEmpty()) {
    const removed = stack.pop()

    if(removed === target && !insertAfter) {
      tempStack.push(newElement)
      tempStack.push(removed)
      insertAfter = true;
      
    } else {
      tempStack.push(removed)
    }
  }

// TEMP STACK:

  while (!tempStack.isEmpty()) {
    const removed = tempStack.pop()
    if(removed !== undefined) {
      stack.push(removed)
    }
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget(stack, "B", "X");
console.log(stack.printStack()); // A B X C D