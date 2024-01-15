/** Adds all items in an array and returns the average.
 * @param {number[]} array - an array of numbers to calculate
 * @returns {number} the average of numbers in the array.
 */

const getAverage = (array) => {
let total = 0;
for(const element of array){
    total += element;
}
return total/array.length;
}

export { getAverage };
