const names = ['alice', 'bob', 'tiff', 'bruce', 'alice'];

console.log(names.find((value) => value === 'alice')); // alice

const people = [{ name: 'John' }, { name: 'Jane' }];
const person = people.find((p) => p.name === 'Jane');
person;
person.name = 'Sally';
person;
people;
