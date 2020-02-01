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

  it('append()' , () =>{
    let list = new LL();
    let myList = list.head;
    expect(myList).toBeNull();
    // let newNode = this.head;/
    let newValue = 'test value';
    list.append(newValue);
    expect(list.head.value).toEqual(newValue);
    console.log('my list after append LLL' ,myList );

  });
  //////////// I have problem in my test I will fix it as soon as passible
  it(' insert a new node before  a spicific node', () => {
    let list = new LL() ;
    // let newList = list.head;
    list.insert(1);
    list.insert(2);
    list.insertBefore(2 , 3);
    expect(list.head.next.value).toEqual(2);
  });

  it(' insert a new node before the first node of a linked list', () => {
    let list = new LL() ;
    // let newList = list.head;
    list.insert(1);
    list.insert(2);
    list.insertBefore(1 , 3);
    expect(list.head.value).toEqual(1);
  });


  it(' insert  a new node after spicific node ', () => {
    let list = new LL() ;
    // let newList = list.head;
    list.insert(1);
    list.insert(2);
    list.insertAfter(2 , 3);
    expect(list.head.next.value).toEqual(2);
  });

  it(' insert new node at the end of list', () => {
    let list = new LL() ;
    // let newList = list.head;
    list.insert(1);
    list.insert(2);
    list.insertAfter(2 , 3);
    expect(list.head.next.value).toEqual(2);
  });

});
