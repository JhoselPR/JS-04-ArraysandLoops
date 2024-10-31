/*
*Positive dominance in Array
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/

const positiveDom = (array) => {
    const positives = array.filter((number) => number>0);
    const negatives = array.filter((number) => number<0);
    if (positives.length>negatives.length){
        return true;
    }else if (positives.length<negatives.length){
        return false;
    }else{
        return 'El arreglo no tiene dominancia positiva ni negativa.'
    }
}
const numbers = [12, -23, 234, 15, -9];
console.log(positiveDom(numbers));

const numbers2 = [12, -23, 234, 15, -9, -1];
console.log(positiveDom(numbers2));

//*Ejemplo del ejercicio
console.log(positiveDom([-1, -3, -5, 4, 6767]));