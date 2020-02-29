// eslint-disable-next-line strict
'use strict';

class Node{
  constructor(value){ // need it to pass it on the linked list
    this.value = value;
    this.next = null;
  }
}

class LinkedList { // to pass it on the array
  constructor(){
    this.head = null;
  }
  add(value){ // if the list have multiply node keep walk until the last one and add anew node at the end
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }else {
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
  read(){ // to read my data in the linked list
    if(!this.head) console.log('the list is empty');
    else {
      let current = this.head;
      while(current){
        console.log('data() :' , current.value );
        current = current.next;
      }
      return;
    }
  }
}
class HashMap{
  constructor(size){
    this.size = size;
    this.map = new Array(size); // Insertion array
  }
  hash(key){ // I need to hash the key here
    return key.split('').reduce((sum , value , index) => {
      return sum + value.charCodeAt(0); // is a string method that is used to retrieve a Unicode value for a character at a specific position in a string (ASCII -->  character encoding standard for electronic communication)
    }, 0) * 599 % this.size;
  }
  add(key , value){
    let hashedKey = this.hash(key);
    if(!this.map[hashedKey]){
      let list = new LinkedList();
      list.add([key,value]);
      console.log('add in the function(_):' , list.add([key,value]));
      this.map[hashedKey] = list;
    } else {
      this.map[hashedKey].add([key,value]); // add a linked list in the two setuation to make it ready from the beginning
    }
  }
  get(key){ // so here I need to pass each key/value in the index of my Array
    if(!key) console.log('Error , Invalid Key');
    let index = this.hash(key);
    if(!this.map[index]) {
      return null;
    } // loop my array if there is no key return this value or return null
    return this.map[index].read(key);
  }
  contains(key){ // check if there is a key in the array or not and return a boolen
    if(!key) console.log('Invalid key');
    let index = this.hash(key);
    if(!this.map[index]) return null;
    return this.map[index].read ? true : false ; //
  }
}


module.exports = {LinkedList , HashMap};