/*
*Number divided into halves
Given a number, return the number divided into its halves in an array.
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
*/

const numDiv = (n) => {
    const halves = [];
    let half = n/2;
    halves.push(half, half);
    return halves;
}
const halves = numDiv(30);
console.log(halves);

//*Ejemplos del ejercicio
console.log(numDiv(4));
console.log(numDiv(10));