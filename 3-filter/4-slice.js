const numbers = [10, 20, 30, 40, 50];

const middleThree = numbers.filter((_, i) => i > 0 && i < 4);
middleThree; // [20,30,40]

const easierMiddleThree = numbers.slice(1, 4);
easierMiddleThree; // [20, 30, 40]

numbers.slice(); // [10,20,30,40,50]
numbers.slice(1); // [20,30,40,50]
numbers.slice(-2); // [40, 50]
