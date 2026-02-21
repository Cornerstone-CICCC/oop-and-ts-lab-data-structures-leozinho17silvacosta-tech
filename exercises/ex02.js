// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(stack, a, b) {
  const tempStack = new Stack();

  let findFirstElement = false;
  let findSecondElement = false;
  let skip = false;

// MAIN STACK:

  while (!stack.isEmpty()) {
    const removed = stack.pop()

    if(removed === a || removed === b) {
      if(!findFirstElement) {
        findFirstElement = true;
        skip = true;
        tempStack.push(removed)

      } else if (!findSecondElement) {
        findSecondElement = true;
        skip = false;
        tempStack.push(removed)
      }
    } else if (!skip) 
      tempStack.push(removed)
    }

// TEMP STACK:

  while (!tempStack.isEmpty()) {
    const removed = tempStack.pop()
    if(removed !== undefined) {
      stack.push(removed)
    }
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween(fruits, "Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry