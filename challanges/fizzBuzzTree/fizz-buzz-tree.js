// eslint-disable-next-line strict
'use strict';
function FizzBuzzTree(tree){

  let _walk = (node) => {
    if(node.value % 3 === 0 && node.value % 5 === 0){ return node.value = 'FizzBuzz';
    }else if(node.value % 3 === 0){ return node.value = 'Fizz';
    }else if(node.value % 5 === 0){return node.value = 'Buzz';
    }else{ node.value = `${node.value}`; }
    if(node.leftchild)_walk(node.leftchild);
    if(node.rightchild)_walk(node.rightchild);
  };

  _walk(tree);
  return tree ;
}

module.exports = FizzBuzzTree;