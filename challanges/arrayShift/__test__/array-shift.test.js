// eslint-disable-next-line strict
'use strict';

const shiftedArr = require('../array-shift.js');

describe('list', () => {

  it('the input is array of number', () => {
    let testArray = [1, 2, 3];
    expect(shiftedArr(testArray, 4).length).toEqual(4);

  });

  it('when you add a value the array lenght will increase by one ', () => {
    let testArray = [1, 2, 3];
    expect(shiftedArr(testArray, 4).length).toEqual(4);
  });

  it('inputs can be string also ', () => {
    let testArray = ['a', 'b', 'c'];
    expect(shiftedArr(testArray, 'd').length).toEqual(4);
  });
});
