'use strict';
///////// we work as group in this to get the Idea 
function insertShiftArray(arr, val) {
    let divideArr = Math.ceil(arr.length / 2);
    //// we need to increase the arr one index to the new value (arr.length + 1)
    let newArr = new Array(arr.length + 1);
    for (let i = 0; i <= divideArr.length; i++) {
        if (i === divideArr) {
            newArr[i] = val;
        } else {
            newArr[i] = arr[i];
        }
    }
    ////////// then take the divideArr part 2 
    for (let j = divideArr; j <= arr.length - 1; j++) {
        newArr[j + 1] = arr[j];
    }
    return newArr;
}

module.exports = insertShiftArray;
//////// I will do another solution by my self in weekend after I solve the jest installation