/*
*Array of Multiples
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
*/

const arrayMultiplos = (n, length) => {
    const multiplos = [];
    for (i=0; i<length; i++){
        multiplos[i] = n*(i+1);
    }
    return multiplos;
}
multiplos = arrayMultiplos(5,7);
console.log(`Los multiplos del 5 hasta el 7 son: ${multiplos}`);

//*Ejemplos del ejercicio
console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));