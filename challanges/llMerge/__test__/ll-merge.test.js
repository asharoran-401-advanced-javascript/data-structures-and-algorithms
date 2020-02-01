// eslint-disable-next-line strict
'use strict';

const LL = require('../lib/11-merge.js');
const Node = require('../lib/node.js');

describe('Linked lis Module', () => {
  it('constructor the head will be null', () => {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  let newValue = 'some value';
  let newNode = new Node();
  newNode.value = newValue;

  it('insert()', () => {
    let list = new LL();
    let newList = list.head;
    console.log('newwwwwwww Node', newList);
    expect(newList).toBeNull();
    let values = [];
    for (let i = 0; i < values.length; i++) {
      /// we do the check here too
      expect(newList.value).toBe(values[i]);
    }
    console.log('value of new node ', newNode.value);
    expect(newNode.value).toEqual(newValue);
  });

  describe('include()', () => {
    let list = new LL();
    // let currentNode = list.head;
    it(' return true', () => {
      // let newValue = 'some value';
      // let newNode = new Node();
      // newNode.value = newValue;
      // console.log('My current value' , newNode.value);
      // expect(list.include()).toBeTruthy();
    });

    it('return False', () => {
      expect(list.include('test value')).toBeFalsy();
    });
  });

  it('toString()', () => {
    let list = new LL();
    let values = [];
    // let newValue = 'test value';
    // values.push(newValue);
    // let printValue = this.head;
    expect(list.toString()).toEqual(values);
  });

  it('append()', () => {
    let list = new LL();
    let myList = list.head;
    expect(myList).toBeNull();
    // let newNode = this.head;/
    let newValue = 'test value';
    list.append(newValue);
    expect(list.head.value).toEqual(newValue);
    // console.log('my list after append LLL' ,myList );

  });
  //////////// I have problem in my test I will fix it as soon as passible
  it(' insertBefore ():add  a new node before  a spicific node', () => {
    let list = new LL();
    // let newList = list.head;
    list.insert(1);
    list.insert(2);
    list.insertBefore(2, 3);
    expect(list.head.next.value).toEqual(2);
  });

  it(' insertBefore() : add  a new node before the first node of a linked list', () => {
    let list = new LL();
    // let newList = list.head;
    list.insert(1);
    list.insert(2);
    list.insertBefore(1, 3);
    expect(list.head.value).toEqual(1);
  });


  it(' insertAfter () :add  a new node after spicific node ', () => {
    let list = new LL();
    // let newList = list.head;
    list.insert(1);
    list.insert(2);
    list.insertAfter(2, 3);
    expect(list.head.next.value).toEqual(2);
  });

  it('insertAfter() : inser t new node at the end of list', () => {
    let list = new LL();
    // let newList = list.head;
    list.insert(1);
    list.insert(2);
    list.insertAfter(2, 3);
    expect(list.head.next.value).toEqual(2);
  });
  it('nthFromEn() :', () => {
    var list = new LL();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    // eslint-disable-next-line no-unused-expressions
    list.nthFromEnd(1).value;
    console.log('===== nthFromEn =====', list.nthFromEnd(1).value);
    expect(list.nthFromEnd(1).value).toEqual(5);
  });


  it('Where the linked list is of a size 1', () => {
    var list = new LL();
    // list = list.head;
    console.log('===== nthFromEn size 1 =====', list.nthFromEnd(0));
    expect(list.nthFromEnd(0)).toEqual('not Exist');

  });
  it('Where k is greater than the length of the linked list', () => {
    var list = new LL();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    console.log('===== nthFromEn greater than the length =====', list.nthFromEnd(6).value);
    // eslint-disable-next-line no-undefined
    expect(list.nthFromEnd(6).value).toEqual(undefined);
  });
  it('ll-merge() : zipped two linked list togather' , () =>{
    let listOne = new LL();
    let listTwo = new LL();
    let zippedList = new LL();
    listOne.insert(1);
    listOne.insert(2);
    listOne.insert(3);
    listTwo.insert(5);
    listTwo.insert(9);
    listTwo.insert(10);
    zippedList.mergeLists(listOne ,listTwo);
    console.log('========= my first list ' , listOne.head.value);
    console.log('========= my second list' , listTwo.head.value);
    // expect(listOne.mergeLists(listOne ,listTwo).head.next.next.next.value).toEqual(5);
  });

});

