// eslint-disable-next-line strict
'use strict';

const Node = require('../lib/node.js');

class LinkList {
  constructor(){
    this.head = null;
  }

  // ====== insert() : add a new node in the begging of list =======//
  insert(value){
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this ;
    }
    let currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    console.log('my newwwww head' , node);
    return this;
  }
  // ===== so in include(): we check if the value is in the list or not and return true/false depend of the result of checking
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
  // ========= toString() : to print out our list values =========== //
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
  //======== append(): add a new node in the end of the list  ======//
  append(value){
    let newNode = new Node(value);
    if(!this.head){ // if the node is empty
      this.head = newNode;
      return this.head;
    }
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    console.log('my list after add new node append()' , currentNode);
    return this;

  }
  // ========= insertBefore() : add a new node before spicific node in the list  ========//
  insertBefore(value, newVal){
    let newNode = new Node(value);
    let currentNode = this.head;
    while(currentNode.next){
      if(this.head.value === value){
        currentNode = newNode;
        currentNode.next = currentNode;
      }
      currentNode = currentNode.next;
    }
    return this;

  }
  // ======= insertAfter() : add a new node after spicific node in the list ==========//
  insertAfter(value, newVal){
    let newNode = new Node(value);
    let currentNode = this.head;
    while(this.head.value !== newVal){
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    newNode.next = currentNode.next.next;
    console.log('-------------' , currentNode.next.next);
    return this;
  }
}


module.exports = LinkList;