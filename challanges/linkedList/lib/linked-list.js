'use strict';

const Node = require('../lib/node.js');

class LinkList {
    constructor(){
        this.head = null;
    }
//// we use insert() to add node at head of list /// I got some help from google to understand the conspet of insert
   insert(value){
       let node = new Node(value);
      node.next = this.head;
      this.head =node;
      // return the new list after insert values
      return this.head;
   } 
/// I got some help from google to understand the consepet of include ==== https://www.geeksforgeeks.org/search-an-element-in-a-linked-list-iterative-and-recursive/ ===
////* Checks whether the value x is present in linked list */
// bool search(Node* head, int x)  
// {  
//     Node* current = head; // Initialize current  
//     while (current != NULL)  
//     {  
//         if (current->key == x)  
//             return true;  
//         current = current->next;  
//     }  
//     return false;  
// }  

/// so in include we check if the value is in the list or not and return true/false depend of the result of checking 
   includes(value){
 let currentvalue = this.head;
 while(currentvalue){
     if(currentvalue.value === value){
         return true;
     }
     currentvalue = currentvalue.next;
 }
 return false;
   }

//    toString(){

//    }
}

module.exports = LinkList;