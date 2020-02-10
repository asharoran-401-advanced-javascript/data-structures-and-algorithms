/* eslint-disable strict */
'use strict';

const Node = require('../../tree/node.js');
const Breadthfirst = require('../breadthFirst.js');

describe('Breadth First Traversal Tree ()', ()=>{
  let tree = null;
  beforeAll(()=>{
    let one = new Node(2);
    let two = new Node(7);
    let three = new Node(5);
    let four = new Node(2);
    let five = new Node(6);
    let six = new Node(9);
    let seven = new Node(5);
    let eight = new Node(11);
    let nine = new Node(4);


    one.leftchild = two;
    one.rightchild = three;
    two.leftchild = four;
    two.rightchild = five;
    five.leftchild = seven;
    five.rightchild = eight;
    three.rightchild = six;
    six.leftchild = nine;

    console.log(tree);

    tree = new Breadthfirst(one);
  });
  it('traversal breadth in BinaryTree', ()=>{
    expect(tree.breadthTraversal()).toEqual([2,7,5,2,6,9,5,11,4]);
  });
  it('return null because I dont have tree ', ()=>{
    let FailTree = new Breadthfirst();
    expect(FailTree.breadthTraversal()).toBeNull();
  });

});