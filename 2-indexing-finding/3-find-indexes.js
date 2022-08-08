const names = ['alice', 'bob', 'tiff', 'bruce', 'alice'];

// find index
console.log(names.indexOf('alice')); // 0
console.log(names.indexOf('alice', 1)); // 4
console.log(names.indexOf('Sally')); // -1

console.log(names.lastIndexOf('alice')); // 4

console.log(names.findIndex((name) => name === 'bruce')); // 3
