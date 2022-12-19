// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let value = false;
for (let i = 0; i < array.length; i++) {
  for (let a = 0; a < array.length; a++) {
    if (i !== a) {
      if (array[i] + array[a] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)
