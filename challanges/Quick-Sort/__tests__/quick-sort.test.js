// eslint-disable-next-line strict
'use strict';

const quickSort = require('../quick-sort.js');

describe('insertion sort functionality', () => {
  it('should work with an empty array', () => {
    const arr = [];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([]);
  });
  it('should sort an array sorted from smallest to largest', () => {
    const arr = [8,4,23,42,16,15];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([4,8,15,16,23,42]);
  });
});