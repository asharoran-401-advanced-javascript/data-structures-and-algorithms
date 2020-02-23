// eslint-disable-next-line strict
'use strict';
// let numbers = [8,4,23,42,16,15];

function InsertionSort(array) {
  let arrIsDone = false; // I need value to check the arr if it false or true
  while (!arrIsDone) {
    arrIsDone = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        arrIsDone = false; // because there is issue between 16 , 15 so I need to put false 
        let current = array[i - 1];
        array[i - 1] = array[i];
        array[i] = current;
        console.log('index', array[i] , array);
      }
    }
  }

  return array;
}

module.exports = InsertionSort;
// console.log('result',insertArr(numbers));