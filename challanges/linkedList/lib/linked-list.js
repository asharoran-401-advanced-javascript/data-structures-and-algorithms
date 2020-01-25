'use strict';

const Node = require('../lib/node.js');

class LinkList {
    constructor(){
        this.head = null;
    }

   insert(value){
       let node = new Node(value);
      
       if (!this.head) {
           this.head = node;
       }
       let currentNode = this.head;
       while(currentNode.next){
           currentNode = currentNode.next
       }
       currentNode.next = node;
       return this;

   } 

//    includes(vlaue){

//    }

//    toString(){

//    }
}

module.exports = LinkList;