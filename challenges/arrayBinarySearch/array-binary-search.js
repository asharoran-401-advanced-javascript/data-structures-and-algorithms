'use strict';

function  BinarySearch(arr , value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
        value = i;
        }
    } 
        if(value>= 0){
          return value;   
        }else{
          return -1 ;
        } 
}
module.exports = BinarySearch;