// eslint-disable-next-line strict
'use strict';

const tree = require('../../tree/tree.js');
const Node = require('../../tree/node.js');
const fizzBuzzTree = require('../fizz-buzz-tree.js');

describe('FizzBuzzTree' , () =>{
  let myTree = null;
  beforeAll(()=>{
    let one = new Node(3);
    let two = new Node(10);
    let three = new Node(15);
    let four = new Node(8);

    one.leftchild = two;
    one.rightchild = three;
    two.leftchild = four;

    myTree = new tree.BinaryTree(one);
    console.log('My tree () :' , myTree);
    fizzBuzzTree(myTree).postOrder();
    console.log('pleeeease',fizzBuzzTree(myTree).postOrder());
  });

  it(' If the value is divisible by 3, replace the value with “Fizz' , () =>{
    let testTree = fizzBuzzTree(myTree);
    expect(testTree.root.value).toEqual('Fezz');
  });

  it(' If the value is divisible by 5, replace the value with “Buzz”' , () =>{
    let testTree = fizzBuzzTree(myTree);
    // expect(testTree.root.leftchild.value).toEqual('Buzz');
  });

  it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”' , () =>{
    let testTree = fizzBuzzTree(myTree);
    // expect(testTree.root.rightchild.value).toEqual('FezzBuzz');
  });
});