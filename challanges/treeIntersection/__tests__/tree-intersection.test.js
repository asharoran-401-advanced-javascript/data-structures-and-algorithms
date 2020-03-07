const treeIntersection = require('../tree-intersection.js');
let BinaryTree = require('../../tree/tree.js').BinaryTree;
const Node = require('../../tree/node.js');

describe('Tree Intersection Module',()=>{
  let nodeOne = new Node(6);
  let nodeTwo = new Node(4);
  let nodeThree = new Node(3);

  let nodefout = new Node(6);
  let nodeFive = new Node(2);
  let nodesix = new Node(3);

  nodeOne.left = nodeTwo;
  nodeOne.right = nodeThree;

  nodefout.right = nodeFive;
  nodefout.left = nodesix;

  let tree1 = new BinaryTree(nodeOne);
  let tree2 = new BinaryTree(nodefout);
  it('should return the similar node value in the two binary tree ',()=>{
    // console.log('treee():',treeIntersection(tree1,tree2));
    expect(treeIntersection(tree1,tree2)).toEqual([6,3]);
  });
});