const numbers = [1, 2, 3, 4, 5];

// Includes
const useIncludes = numbers.reduce(
    (Includes, value) => (Includes ? Includes : value === 5),
    false
);
console.log(useIncludes); // true

// Slice
const useSlice = numbers.reduce(
    (arr, value, index) => (index > 0 && index < 4 ? [...arr, value] : arr),
    []
);
console.log(useSlice); // [ 2, 3, 4 ]

// Map
const useMap = numbers.reduce((arr, value) => [...arr, value * 100], []);
console.log(useMap); // [ 100, 200, 300, 400, 500 ]
