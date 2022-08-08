const numbers = [12, 4, 3, 3, 4, 12, 5, 12, 4];

const lookup = {};
for (const number of numbers) {
    lookup[number] = (lookup[number] ?? 0) + 1;
}
console.log(lookup);

// with reduce
numbers.reduce(
    (lookup, value) => ({
        ...lookup,
        [value]: (lookup[value] ?? 0) + 1,
    }),
    {}
);
console.log(lookup);

const findMinMax = numbers.reduce(
    ({ min, max }, value) => ({
        min: Math.min(min, value),
        max: Math.max(max, value),
    }),
    { min: Infinity, max: -Infinity }
);
console.log(findMinMax);
