// eslint-disable-next-line strict
'use strict';

function mergeArr(arr){
  if(arr.length <= 1){
    return arr;
  }

  let mid = Math.floor(arr.length / 2); // devided the arr by 2
  let left = mergeArr(arr.slice(0, mid)); // to slice the arr fom index 0 to index that befor the mid on this array
  let right = mergeArr(arr.slice(mid)); // from the mid to the end of this array

  function mergeSort(arrOne , arrTwo){
    let result = [];
    let i = 0;
    let j = 0;

    // I need to push the arr one first then array two
    while( i < arrOne.length && j < arrTwo.length){
      if(arrOne[i] < arrTwo[j]){
        // result.push(arrOne[i]);
        result[result.length] = arrOne[i]; // push
        i++;
      }else{
        // result.push(arrTwo[j]);
        result[result.length] = arrTwo[j]; // push
        j++;
      }
    }
    while(i < arrOne.length){ // to check if (i) is lower than the length of array one keep push
      result[result.length] = arrOne[i];
      //result.push(arrOne[i]);
      i++;
    }
    while( j < arrTwo.length){ // to check if (j) is lower than the length of array two keep push
      result[result.length] = arrTwo[j];
      //   result.push(arrTwo[j]);
      j++;
    }
    return result;
  }
  return mergeSort(left,right);
}

module.exports = mergeArr;