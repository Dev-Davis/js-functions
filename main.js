//Sean Davis
//Britney Spears
//Ellen Page
//Sam Smith
//John Doe

// const firstName = 'Sean';
// const lastName = 'Davis';

// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);

// const firstName1 = 'Britney';
// const lastName1 = 'Spears';

// console.log(`${firstName1} ${lastName}`);
// console.log(`${firstName1} ${lastName1}`);

const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};

namePrinter ('Sean', 'Davis');
namePrinter ('Mike', 'Jones');

const nuggetizer = (animal) => {
    return `processed ${animal}`;
};

console.log(nuggetizer('pig'));
console.log(nuggetizer('chicken'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('student'));