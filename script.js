//ZADANIE 1
const hello = 'Hello';
const world = 'World';
console.log(`${hello} ${world}`);

//ZADANIE 2
const multiply = (x, y = 1) => x * y
console.log(multiply(9));
console.log(multiply(9,2));

//ZADANIE 3
let total = 0;
let avg;
const average = (...args) => {
    args.forEach(arg => (total += arg));
    avg = total / args.length;
    return avg;
}
console.log(average(1,2,3,4));

//ZADANIE 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//ZADANIE 5
const error = [1, 4, 'Iwona', false, 'Nowak'];
const [, , ,firstName, ,lastName];