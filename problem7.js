/*
*Antipodal Average
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/

const array = [1, 2, 3, 4, 5, 6, 7];

const antipodalAverage = (array) => {
    let middleIndex = Math.floor(array.length / 2);
    if (array.length % 2 != 0) {
        array.splice(middleIndex, 1);
    }
    firstPart = array.slice(0, array.length / 2);
    secondPart = array.slice(array.length / 2, array.length);
    secondPart.reverse();
    let sum = [];
    for (i = 0; i < middleIndex; i++) {
        sum[i] = firstPart[i] + secondPart[i];
    }
    const result = sum.map((e) => e / 2);
    return result;
}
result = antipodalAverage(array);
console.log(`El promedio antípoda del arreglo [${array}] es:\n[${result}]`);

//*Ejemplo del ejercicio
console.log(antipodalAverage([1,2,3,5,22,6]));