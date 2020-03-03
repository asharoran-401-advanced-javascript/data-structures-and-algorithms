// eslint-disable-next-line strict
'use strict';

const leftJoin = require('../left-join.js');
const Hashmap = require('../../hashtable/hashtable.js').HashMap;

describe('leftJoin functionality', () => {
  it('returns null if no maps are inputed', () => {
    expect(leftJoin()).toBe(null);
  });
  it('outputs an object that has values from matching keys from both inputs', () => {
    let leftTable = new Hashmap(10);
    let rightTable = new Hashmap(10);

    leftTable.add('fond', 'enamored');
    leftTable.add('wrath', 'anger');
    leftTable.add('diligent', 'employed');

    rightTable.add('fond', 'averse');
    rightTable.add('wrath', 'delight');
    rightTable.add('diligent', 'idle');

    let result = [ [ 'wrath', 'anger', 'delight' ],
      [ 'diligent', 'employed', 'idle' ],
      [ 'fond', 'enamored', 'averse' ] ];
    expect(leftJoin(leftTable, rightTable)).toEqual(result);
  });
});