// eslint-disable-next-line strict
'use strict';

const HashMap = require('../hashtable/hashtable.js').HashMap;
let hashtable = new HashMap();

function repeatedWord(string){
  let input = string.toLowerCase();
  let splitInput = input.split(' ');
  let count = 0;
  let temp;

  for (let j = count ; j < splitInput.length ; j++ ){
    temp = splitInput[j];
    for(let i = count + 1 ; i < splitInput.length ; i++){
      if(temp === splitInput[i]) return temp;
    }
    count++;
    hashtable.add(temp, temp);
  }
//   console.log('hash table' , hashtable.add(temp , temp));
}

// console.log(repeatedWord(testString));

module.exports = repeatedWord;