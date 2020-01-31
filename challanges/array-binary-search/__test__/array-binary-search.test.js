// eslint-disable-next-line strict
'use strict';

const binaryArr = require('../array-binary-search.js');

describe(' list of test to check if it search about specific index', () => {
  it('the input is array of number', () => {
    let testArray = [1, 2, 3];
    expect(binaryArr(testArray, 4)).toEqual(-1);
  });

  it('when the value is not in the array it will return -1 ', () => {
    let testArray = [1, 2, 3];
    expect(binaryArr(testArray, 4)).toEqual(-1);
  });

  it('inputs can be string if the value is exist it will return the index of it ', () => {
    let testArray = ['a', 'b', 'c'];
    expect(binaryArr(testArray, 'c')).toEqual(2);
  });
});