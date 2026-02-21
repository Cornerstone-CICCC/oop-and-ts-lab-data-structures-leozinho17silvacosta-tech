// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
  const tempQueue = new Queue();
  const arr = [];
  const n = queue.size();

  for (let i = 0; i < n; i++) {
    const item = queue.dequeue();
    arr.push(item);
    tempQueue.enqueue(item);
  }

  while(!tempQueue.isEmpty()) {
    const removed = tempQueue.dequeue();
    queue.enqueue(removed)
  }

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (arr[i] !== arr[n - 1 - i]) {
      return false;
    }
  }

  return true;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true