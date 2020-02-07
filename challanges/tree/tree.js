// eslint-disable-next-line strict
'use strict';

// const Node = require('../tree/node.js');

class BinaryTree {
  constructor(root = null){
    // let myNode = new Node(value);
    // this.root = myNode;
    this.root = root;

  }
  preOrder(){ // DLR
    let output = [];
    let _walk = (myNode) =>{ //Arrow function
      output.push(myNode.value); // D (Read the data First)
      if(myNode.leftchild){
        _walk(myNode.leftchild); // call _walk function with node left arrgument
      }
      if(myNode.rightchild){
        _walk(myNode.rightchild); // call _walk function with node right arrgument
      }
    };
    _walk(this.root);
    return output;
  }

  inOrder() { // LDR
    let output = [];
    let _walk = (myNode) =>{ //Arrow function
      if(myNode.leftchild){
        _walk(myNode.leftchild); // call _walk function with node left arrgument
      }
      output.push(myNode.value); // D (Read the data )
      if(myNode.rightchild){
        _walk(myNode.rightchild); // call _walk function with node right arrgument
      }
    };
    _walk(this.root);
    return output;
  }

  postOrder(){ // LRD
    let output = [];
    let _walk = (myNode) =>{ //Arrow function
      if(myNode.leftchild){
        _walk(myNode.leftchild); // call _walk function with node left arrgument
      }
      if(myNode.rightchild){
        _walk(myNode.rightchild); // call _walk function with node right arrgument
      }
      output.push(myNode.value); // D (Read the data )
    };
    _walk(this.root);
    return output;
  }
}

class BinarySearchTree extends BinaryTree { // the node is less than root is in the left and the node greater than is on the right
  add(value){ // add node in the correct location
    // let newNode = new Node(value);
    let currentNode = this.root;
    if(value === currentNode.value){
      return this;
    }
    if(value > this.root.value && currentNode.rightchild === null ) {
      currentNode.rightchild = currentNode;
      console.log('*** My new Node *****',currentNode);
      return this;

    }
    if(value < currentNode.value && currentNode.leftchild === null){
      currentNode.leftchild = currentNode;
      return this;
    }
  }
  contains(value){ // to check if the node value is in the correct location or not so it return a boolean
    // let newNode = new Node(value);
    let currentNode = this.root;
    if(value > currentNode.value)  return true;
    if(value < currentNode.value) return true;
    return false;
  }
}

module.exports = {BinaryTree , BinarySearchTree};

