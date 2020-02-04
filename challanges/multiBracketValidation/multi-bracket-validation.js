// eslint-disable-next-line strict
'use strict';

// eslint-disable-next-line semi
class MultiBracketValidation{
  constructor(input){
    this.input = input;
  }

  checkString(input){
    let count = 0;
    let splitString = input.split('');
    for(let i = 0 ; i < splitString.length ; i++){
      if(splitString[i] === '(' || splitString[i] === ')' || splitString[i] === '{' || splitString[i] === '}' || splitString[i] === '[' || splitString[i] === ']'){
        count++;
      }
    } // end of forloop
    // console.log('------' , count);
    if(count % 2 === 0){
      return true;
    }
    else{
      return false;
    }
  }


}
module.exports = MultiBracketValidation;