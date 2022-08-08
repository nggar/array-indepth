const numbers = [10, 20, 30, 40, 50];

let sum = 0;
for (const number of numbers) {
    sum += number;
}
sum;

// with reduce
numbers.reduce((sum, value) => {
    sum += value;
    return sum;
}, 0);

numbers.reduce((sum, value) => (sum += value), 0);

// get avg
const getAvg = numbers.reduce(
    (avg, value, _, array) => avg + value / array.length,
    0
);
getAvg;

const names = ['LG', 'Mimi', 'Sadie', 'Ripley'];
const namesReduce = names.reduce(
    (str, name, index) => str + (index > 0 ? ', ' : '') + name,
    ''
);
console.log(namesReduce);
console.log(names.join(', '));
