const numbers = [10, -20, 30, -40, 50];

const allPositive = numbers.filter((v) => v > 0);
allPositive; // [10, 30, 50]

const allNegative = numbers.filter((v) => v < 0);
allNegative; // [-20, -40]

const positiveUnder50 = numbers.filter((v) => v > 0).filter((v) => v < 50);
positiveUnder50; // [10, 30]
