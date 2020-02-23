// eslint-disable-next-line strict
'use strict';

const insertionSort = require('../insertion-sort/insertion-sort.js');

describe('Insertion Sort' , () => {
  it('to Sort an array' , () =>{
    let testArr = [8,4,23,42,16,15];
    let result = [4,8,15,16,23,42];
    console.log('######' , insertionSort(testArr));
    expect(insertionSort(testArr)).toEqual(result);
  });
});
