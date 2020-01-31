// eslint-disable-next-line strict
'use strict';

const Node = require('../lib/node.js');

class LinkList {
  constructor(){
    this.head = null;
  }

  // ====== insert() : add a new node in the begging of list
  insert(value){
    let node = new Node(value);
    this.head = node.next;
    node = this.head;
    console.log('my newwwww head' , this.head);
    return this.head;
  }
  /// so in include we check if the value is in the list or not and return true/false depend of the result of checking
  include(value){
    let targetValue = this.head;
    while(targetValue){
      if(targetValue.value === value){
        return true;
      }
      targetValue = targetValue.next;
    }
    return false;
  }
  // ====== to print out our list values /////
  toString(){
    let node = this.head;
    let values = [];
    while(node){
      values.push(node.value);
      node = node.next;
    }
    for (let i = 0; i < values.length; i++) {
      let printValues =  values[i] + '->';
      console.log('prinnnnnnnnnnt' , printValues);
      return printValues;
    }
    console.log('my vaaaalue' , values);
    return values;
  }
}


module.exports = LinkList;