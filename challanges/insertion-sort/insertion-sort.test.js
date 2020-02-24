// eslint-disable-next-line strict
'use strict';

const insertionSort = require('../insertion-sort/insertion-sort.js');

describe('Insertion Sort' , () => {
  it('to Sort an array' , () =>{
    let testArr = [8,4,23,42,16,15];
    let result = [4,8,15,16,23,42];
    console.log('### test 1() :###' , insertionSort(testArr));
    expect(insertionSort(testArr)).toEqual(result);
  });

  it('to Sort an array' , () =>{
    let testArr = [20,18,12,8,5,-2];
    let result = [-2,5,8,12,18,20];
    console.log('### test 2() :###' , insertionSort(testArr));
    expect(insertionSort(testArr)).toEqual(result);
  });

  it('to Sort an array' , () =>{
    let testArr = [5,12,7,5,5,7];
    let result = [5,5,5,7,7,12];
    console.log('### test 3() :###' , insertionSort(testArr));
    expect(insertionSort(testArr)).toEqual(result);
  });

  it('to Sort an array' , () =>{
    let testArr = [2,3,5,7,13,11];
    let result = [2,3,5,7,11,13];
    console.log('### test 4() :###' , insertionSort(testArr));
    expect(insertionSort(testArr)).toEqual(result);
  });
});
