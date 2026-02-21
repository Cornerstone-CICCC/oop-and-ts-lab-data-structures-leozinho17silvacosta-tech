// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack')

function calcDistance(stack, a, b) {
  const tempStack = new Stack();
  
  let position = 0;
  let positionA = null;
  let positionB = null;

// MAIN STACK:

  while (!stack.isEmpty()) {
    const removed = stack.pop()

    if(removed === a)
      positionA = position

    if(removed === b)
      positionB = position

    tempStack.push(removed)
    position++
  }

// TEMP STACK:

  while (!tempStack.isEmpty()) {
    const removed = tempStack.pop()
    if(removed !== undefined) {
      stack.push(removed)
    }
  }
  return Math.abs(positionA - positionB)
}

const students = new Stack()
students.push("John")
students.push("Joe")
students.push("Jane")
students.push("Jill")
students.push("Jim")

const distance = calcDistance(students, "Joe", "Jim")
console.log(distance) // 3
const distance2 = calcDistance(students, "Joe", "Jill")
console.log(distance2) // 2