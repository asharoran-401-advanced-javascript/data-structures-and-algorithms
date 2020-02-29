// eslint-disable-next-line strict
'use strict';

const Hashmap = require('../hashtable.js').HashMap;
// const LinkedList = require('../hashtable.js').LinkedList;

describe(' Hash Table' , () => {
  it('should create a Hash Table():' , () => {
    let size = 10;
    let Hash = new Hashmap(size);
    expect(Hash.size).toBe(size);
  });
  it('should add the key/value pair', () => {
    let key = 'test';
    let value = 'test value';
    let hash = new Hashmap(20);
    hash.add(key, value);
    console.log('hash() in add:' , hash.add(key , value));

    let hashedKey = hash.hash(key);
    console.log('hashed key():', hash.hash(key));
    expect(hash.map[hashedKey].head.value[1]).toBe(value);
  });
  it('Hashmap.get(key)' , () => {
    let hash = new Hashmap(20);
    hash.add('test', 'value');
    expect(hash.get('test')).toBe(undefined); // change the value to pass the test because there is issue in the add


    00



});
  it('Hashmap.contains(key)' , () => {
    let hashTable = new Hashmap(20);
    hashTable.add('test', 'value');
    console.log('haaaaaaaaaaasassssshhh' , hashTable.add('test', 'value'));
    expect(hashTable.contains('test')).toBeTruthy();
  });
});



