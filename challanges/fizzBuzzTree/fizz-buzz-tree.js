// eslint-disable-next-line strict
'use strict';

// const Node = require('../tree/node.js');
// const tree = require('../tree/tree.js');



// If the value is divisible by 3, replace the value with “Fizz”
// If the value is divisible by 5, replace the value with “Buzz”
// If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
// If the value is not divisible by 3 or 5, simply turn the number into a String.
function FizzBuzzTree(tree){
  let fBTree = tree;
  function fizzBuzzCheck(node){
    if(node.value % 3 === 0 ){
      return node.value = 'Fezz';
    }
    if(node.value % 5 === 0){
      return  node.value = 'Buzz';
    }
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      return node.value = 'FizzBuzz';
    }
    else{
      return node.value = node.value.toString();
    }
  }
  function _walk(node){
    if(node.left)  _walk(node.left);
    fizzBuzzCheck(node);
    if(node.right)_walk(node.right);
  }
  _walk(fBTree.root);
  return fBTree;
}
// FizzBuzzTree.inOrder();

module.exports = FizzBuzzTree;
