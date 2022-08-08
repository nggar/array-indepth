const numbers = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
];
console.log(numbers.flat());

const deepNumbers = [[[[10, 20, 30]]], [[[40, 50, 60]]], [[[70, 80, 90]]]];
console.log(deepNumbers.flat());
console.log(deepNumbers.flat(2));
console.log(deepNumbers.flat(Infinity));

const values = [10, 20, 30, 40, 50];
console.log(values.map((v, i) => [v, i]));
console.log(values.flatMap((v, i) => [v, i]));
