/* eslint-disable strict */
'use strict';
// const Node = require('../tree/node.js');

class Breadthfirst {
  constructor(root = null){
    this.root = root;
  }
  breadthTraversal(){

    let result = [];
    let queue = [];
    if(this.root !== null){
      queue.push(this.root);
      while(queue.length > 0){
        let node = queue.shift();
        result.push(node.value);
        if(node.leftchild !== null){
          queue.push(node.leftchild);
        }
        if(node.rightchild !== null){
          queue.push(node.rightchild);
        }
      }
      console.log('resullllt' , result);
      return result;
    }else return null;
  }
}



module.exports = Breadthfirst;