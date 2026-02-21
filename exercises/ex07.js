// Create a function called findMiddle that returns the middle node of a singly linked list
// Tip: Create two runners (one runner moves one node at a time, the other one moves two nodes at a time)

const SLL = require('../lib/SLL');

function findMiddle(list) {
  if(!list.head)
    return null;

  let oneNodeRunner = list.head;
  let twoNodeRunner = list.head;

  while (twoNodeRunner && twoNodeRunner.next) {
    oneNodeRunner = oneNodeRunner.next
    twoNodeRunner = twoNodeRunner.next.next
  }

  return oneNodeRunner.data
}

const list = new SLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(4);
list.insertAtBack(5);

console.log(findMiddle(list)); // Output: 3