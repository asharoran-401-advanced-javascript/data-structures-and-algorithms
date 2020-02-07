/* eslint-disable no-undef */
// eslint-disable-next-line strict
'use strict';

const Tree = require('../tree.js');
const Node = require('../node.js');

describe('Binary Tree' , () =>{
  let myTree = null;

  beforeAll(() =>{
    let one = new Node(1);
    let two = new Node(2);
    let tree = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);

    one.leftchild = two;
    two.leftchild = tree;
    two.rightchild = four;
    one.rightchild = five;
    five.leftchild = six;
    five.rightchild = seven;

    myTree = new Tree.BinaryTree(one); // the root node
    console.log('my cute tree' , myTree);
  });
  it('Pre Order () :', () =>{
    let testOutput = [1, 2, 3, 4, 5, 6, 7];
    console.log('=====|||| pre order ||||======' , myTree.preOrder());
    expect(myTree.preOrder()).toEqual(testOutput);
    expect(Array.isArray(myTree)).toBe(Array.isArray());
  });
  it('In Order () :' , () =>{
    let testOutput = [ 3, 2, 4, 1, 6, 5, 7];
    console.log('=====|||| in order ||||======' , myTree.inOrder());
    expect(myTree.inOrder()).toEqual(testOutput);
  });
  it('Post Order () :' , () =>{
    console.log('=====|||| post order ||||======' , myTree.postOrder());
    let testOutput = [3, 4, 2, 6, 7, 5, 1];
    expect(myTree.postOrder()).toEqual(testOutput);
  });
});

describe('Binary Search Tree' , () =>{
//   let mySearchTree = null;
  beforeAll(() =>{
    let mySearchTree = null;

    // eslint-disable-next-line no-unused-vars
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);

    // mySearchTree.add(one);
    // mySearchTree.add(two);
    // mySearchTree.add(four);
    // mySearchTree.add(five);
    // mySearchTree.add(six);
    // mySearchTree.add(seven);


    mySearchTree = new Tree.BinarySearchTree(three);
    console.log('my Search tree' , mySearchTree.preOrder());
  });
  it('Add () :' , () =>{

    // console.log('====***===' , mySearchTree.add(two));
  });
  it('Contains () :' , () =>{
    // console.log('====***===' , mySearchTree.add());

  });
});