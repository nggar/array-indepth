const numbers = [10, 20, 30, 40, 50];
numbers;

const copyOfNumbers = [...numbers];
copyOfNumbers;
copyOfNumbers[0] = 100;
copyOfNumbers;
numbers;

const people = [{ name: 'john' }, { name: 'Jane' }];
people;
const copyOfPeople = [...people];
copyOfPeople;

copyOfPeople[0].name = 'Jack';
copyOfPeople;
// poeple value also change, because both reference to the same object
people;
