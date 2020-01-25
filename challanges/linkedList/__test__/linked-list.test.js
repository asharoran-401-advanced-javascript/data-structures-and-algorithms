'use strict';

const LL = require('../lib/linked-list.js');
//////////// fellow the demo
describe('Linked lis Module' , () =>{
    it('constructor' , () =>{
      let list = new LL();
      expect(list.head).toBeNull();
    })

    it(' insert()' , () =>{
       let list = new LL();
       let initialValue = 'first item';
       list.insert(initialValue);

       expect(list.head.value).toEqual(initialValue);

       let nextValue = 'second item';
       list.insert(nextValue);
       expect(list.head.value).toEqual(initialValue);
    })
    
    it('includes()' , () =>{

    })
    // it('toSting()' , () =>{

    // })
})
