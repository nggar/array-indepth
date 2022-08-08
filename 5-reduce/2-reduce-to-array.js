const numbers = [1, 2, 3, 4, 5];

let arr = [];
for (const number of numbers) {
    arr = [number, ...arr];
}
console.log(arr);

console.log(numbers.reduce((arr, number) => [...arr, number], []));

console.log(numbers.reduceRight((arr, number) => [...arr, number], []));

const groups = [
    [3, 2],
    [2, 5],
    [3, 7],
];

// we want [2,2,2, 5,5, 7,7,7]
const output = groups.reduce((arr, [count, value]) => {
    for (let index = 0; index < count; index++) {
        arr.push(value);
    }
    return arr;
}, []);
console.log(output);
// another way
const output2 = groups.reduce(
    (arr, [count, value]) => [...arr, ...Array(count).fill(value)],
    []
);
console.log(output2);
