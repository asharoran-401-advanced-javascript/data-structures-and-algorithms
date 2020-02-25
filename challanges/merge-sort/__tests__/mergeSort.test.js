// eslint-disable-next-line strict
'use strict';
const mergeSort = require('../mergeSort.js');

describe('Merge Sort' , () =>{
  it('should sort the arr' , () => {
    const testArr = [8,4,23,42,16,15];
    let result = [4,8,15,16,23,42];
    expect(mergeSort(testArr)).toEqual(result);
  });
  it('should sort an array sorted from smallest to largest', () => {
    const testArr = [3, 57, 33, 9, 81];
    let result = [3, 9, 33, 57, 81];
    expect(mergeSort(testArr)).toEqual(result);
  });
  it('should work with an empty array', () => {
    const testArr = [];
    expect(mergeSort(testArr)).toEqual([]);
  });
});