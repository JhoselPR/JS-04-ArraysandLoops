/*
*Sum of Resistors in Series
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
*/

const resistors = [-10, 15, 17.6, 32];

const sumResistance = (res) => {
    let sum = 0;
    for (let i=0; i<res.length; i++){
        sum += Math.abs(res[i]);
    }
    return sum;
}
sum = sumResistance(resistors);
console.log(`La suma de los resistores conectados en serie es:\n|${resistors.join('| + |')}| = ${sum} ohms`);

//*Ejemplos del ejercicio
console.log(sumResistance([-1,5,6,3]));
console.log(sumResistance([14,3.5,6]));
console.log(sumResistance([8,15,100]));