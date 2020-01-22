'use strict ';

/////// we work as group in the code challange  (me and Abd(Danty))

// to get the summition of arrays in the array
function sumationArr(arrOfArrays) {
    let result = new Array(arrOfArrays.length);
    for (let i = 0; i < arrOfArrays.length; i++) {
        let sum = 0;
        for (let x = 0; x < arrOfArrays[i].length; x++) {
            sum += arrOfArrays[i][x];
        }
        result[i] = sum;
    }
    return result;
}
// to find the Fibonacci number at spacific index 
function FibonacciSequence(target) {
    let result = 0;
    let n1 = 0;
    let n2 = 1;
    let count = 0;
    if (target === 0) {
        return 0;
    } else if (target === 1) {
        return 1;
    }
    while (count < target) {
        result = n1 + n2;
        n1 = n2
        n2 = result;
        count++;
    }
    return n1;
}
module.exports = {sumationArr , FibonacciSequence}