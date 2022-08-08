const numbers = [10, 20, 30, 40, 50];

const numbersTimes10 = numbers.map((n) => n * 10);
console.log(numbersTimes10);

const numbersTimes10Object = numbers.map((n) => ({ value: n * 10 }));
console.log(numbersTimes10Object);

const numberWithNegative = [-10, 20, 30, -40, -50];
const postiveBy10 = numberWithNegative.filter((v) => v > 0).map((v) => v * 10);
console.log(postiveBy10);

const people = [
    { first: 'Jane', last: 'Smith', address: { city: 'Oakland' } },
    { first: 'Sally', last: 'Joe', address: { city: 'Foster City' } },
];

const cheapClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

const fullNames = people.map((p) =>
    cheapClone({
        ...p,
        fullName: `${p.first} ${p.last}`,
    })
);
console.log(fullNames);

fullNames[0].first = 'Penny';
fullNames[0].address.city = 'San Jose';

console.log(fullNames);

console.log(people);
