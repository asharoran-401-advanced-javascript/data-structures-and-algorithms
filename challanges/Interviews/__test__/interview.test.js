'use strict';

const challeges = require('../interview.js');

describe('List of test' , () =>{
 
    it(' test sumation of inner Arrays inside Outer Array' , ()=>{
        let arrOffArrs = [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ];
        expect(challeges.sumationArr(arrOffArrs)).toEqual([6, 15, 18]);
    })

})

describe('testing fibo' , () => {
    it('if input equal 1 or zero it should give the right answer', () => {
        let test = 0 ; 
        expect(challeges.FibonacciSequence(test)).toEqual(0);
        test = 1; 
        expect(challeges.FibonacciSequence(test)).toEqual(1);
    })

    it('input and output of Fibonacci function should be integer' , () => {
        let test = 5;
        expect(challeges.FibonacciSequence(test)).toEqual(5);
    })

    it('Output of Fibonacci function should be true' , () => {
        let test = 14;
        expect(challeges.FibonacciSequence(test)).toEqual(377);
    })
})