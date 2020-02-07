// eslint-disable-next-line strict
'use strict';

const MultiBracketValidation = require('../multi-bracket-validation.js');

describe('MultiBracketValidation() :' , () =>{
  it('retutn True {}' , () =>{
    let string = '{}';
    let multi = new MultiBracketValidation(string);
    console.log('swewrgrt' , multi);
    expect(multi.checkString(string)).toBe(true);

  });

  it('return True {}(){}' , () =>{
    let string = '{}(){}';
    let multi = new MultiBracketValidation(string);
    console.log('swewrgrt' , multi);
    expect(multi.checkString(string)).toBe(true);
  });
  it('return True ()[[Extra Characters]]' , () =>{
    let string = '()[[Extra Characters]]';
    let multi = new MultiBracketValidation(string);
    expect(multi.checkString(string)).toBe(true);

  });
  it('return True (){}[[]]' , () =>{
    let string = '(){}[[]]';
    let multi = new MultiBracketValidation(string);
    expect(multi.checkString(string)).toBe(true);

  });
  it('return True {}{Code}[Fellows](())' , () =>{
    let string = '{}{Code}[Fellows](())';
    let multi = new MultiBracketValidation(string);
    expect(multi.checkString(string)).toBe(true);

  });

  it('return True [({}]' , () =>{
    let string = '[({}]';
    let multi = new MultiBracketValidation(string);
    expect(multi.checkString(string)).toBe(false);

  });

  it('return True (](' , () =>{
    let string = '(](';
    let multi = new MultiBracketValidation(string);
    expect(multi.checkString(string)).toBe(false);

  });

  it('return True {(})' , () =>{
    let string = '{(})';
    let multi = new MultiBracketValidation(string);
    expect(multi.checkString(string)).toBe(true);

  });
});
