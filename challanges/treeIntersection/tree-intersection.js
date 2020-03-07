

const Hashmap = require('../hashtable/hashtable.js').HashMap;
let hashtable = new Hashmap(10);
// let BinaryTree = require('../tree/tree.js').BinaryTree;
// let Node = require('../tree/node.js');

let result = [];
let output = [];

const treeIntersection = (treeOne , treeTwo) => {
  const _walk = (node) => {
    if(node.value) result.push(node.value);
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  };
  _walk(treeOne.root);
  _walk(treeTwo.root);
  console.log('result arr',result);

  for(let i = 0 ; i < result.length ; i++){
    let key = result[i].toString();// to convert the integer to string
    let hashKey = hashtable.hash(key);
    hashtable.add(key , result[i]);
    if(hashtable.map[hashKey].head.next !== null){
      console.log('hashtable keeey():',hashtable.map[hashKey].head );
      if(hashtable.map[hashKey].head.value && hashtable.map[hashKey].head.next.value){
        output.push(hashtable.map[hashKey].head.value[1]);
      }
    }
  }
  console.log('output(())',output);
  return output;
};

module.exports = treeIntersection;

