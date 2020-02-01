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
    // console.log('my newwwww head' , node);
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
      // console.log('prinnnnnnnnnnt' , printValues);
      return printValues;
    }
    // console.log('my vaaaalue' , values);
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
    // console.log('my list after add new node append()' , currentNode);
    return this;

  }
  // ========= insertBefore() : add a new node before spicific node in the list  ========//
  insertBefore(value, newVal){
    let newNode = new Node(value);
    let currentNode = this.head;
    if(currentNode.value === newVal){
      this.head = newNode ;
      this.head.next = currentNode;
      return this;
    }
    while(currentNode.next){
      // let storeNode= currentNode.next;
      if(currentNode.next.value === newVal){
        currentNode.next = newNode;
      }
      currentNode = currentNode.next;
    }
    // storeNode = currentNode.next;
    // console.log('my thiiiiiiiiiiiis' , this);
    return this;

  }
  // ======= insertAfter() : add a new node after spicific node in the list ==========//
  insertAfter(value, newVal){
    let newNode = new Node(value);
    let currentNode = this.head;
    while(currentNode.next){
      if (currentNode.value === newVal) {
        currentNode.next = newNode;
        newNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }
    // console.log('-------------' , this.head.next);
    return this;
  }

  nthFromEnd(k){  // step 1 : callcolate the list length
    let currentNode = this.head;
    let counter = 1;
    let kthNode;
    //if 0 or negative value of k
    if(k <= 0) return 'not Exist';

    while(currentNode){
      if(counter === k) {
        kthNode = this.head; // equal 1
      }
      else if(counter - k > 0){
        kthNode = kthNode.next;
      } else if (k > counter) {
        return 'Exception';
      }
      counter++;
      currentNode = currentNode.next;
    }
    return kthNode;
  }
  // }
  ////////// --------- another solution I work on it ---------- ///////
  // let listArr = [];
  // let reverseArr = []
  // let myDirectList = this.head;
  // while(myDirectList.next !== null){
  //   listArr.push(myDirectList.value);
  //   myDirectList = myDirectList.next;
  // }
  // for( let k = listArr.length -1 ; k >= 0 ; k--){
  //  reverseArr.push(listArr[k]);
  // }
  // return reverseArr;


  mergeLists(list1, list2){
    let listOneLength = list1.head;
    let listTwoLength = list2.head;
    let list2Next;
    let list1Next;
    while(listOneLength.next && listTwoLength.next ){
      list1Next = listOneLength.next;
      list2Next = listTwoLength.next;
      // at the end of each list we add the head to another list
      listOneLength.next = listTwoLength;
      listTwoLength.next = listOneLength;

      listOneLength = list1Next;
      listTwoLength = list2Next;
    }
    console.log('======My ZIPPED list =======' , listOneLength);
    return listOneLength;
  }

}


module.exports = LinkList;