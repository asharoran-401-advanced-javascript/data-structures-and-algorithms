// eslint-disable-next-line strict
'use strict';

const LL = require('../lib/linked-list.js');
const Node = require('../lib/node.js');
//////////// fellow the demo
describe('Linked lis Module' , () =>{
  it('constructor the head will be null' , () =>{
    let list = new LL();
    expect(list.head).toBeNull();
  });

  let newValue = 'some value';
  let newNode = new Node();
  newNode.value = newValue;
  it('insert()' , () =>{
    let  list = new LL();
    let newList = list.head;
    console.log('newwwwwwww Node' , newList);
    expect(newList).toBeNull();
    let values = [];
    for (let i = 0; i < values.length; i++) {
      /// we do the check here too
      expect(newList.value).toBe(values[i]);
    }
    console.log('value of new node ' , newNode.value);
    expect(newNode.value).toEqual(newValue);
  });
  describe('include()' , () =>{
    let list = new LL();
    // let currentNode = list.head;
    it(' return true' , () =>{
      // let newValue = 'some value';
      // let newNode = new Node();
      // newNode.value = newValue;
      // console.log('My current value' , newNode.value);
      // expect(list.include()).toBeTruthy();
    });
    it('return False' , () =>{
      expect(list.include('test value')).toBeFalsy();
    });
  });
  it('toString()' , () =>{
    let list = new LL();
    let values = [];
    // let newValue = 'test value';
    // values.push(newValue);
    // let printValue = this.head;
    expect(list.toString()).toEqual(values);
  });
});
