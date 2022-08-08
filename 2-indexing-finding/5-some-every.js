const numbers = [10, -20, 30, -40, 50];

console.log(numbers.includes(10)); // true

console.log(numbers.some((n) => n > 0)); // true

console.log(numbers.every((n) => n > 0)); // false
