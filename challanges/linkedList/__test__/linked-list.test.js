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
        let values = [];
        let currentList = list.head;
        for (let i = 0; i < values.length; i++) {
            /// we do the check here too 
          expect(currentList.value).toBe(values[i]); 
          currentList = currentList.next;
        }
    })
    
    describe('includes()' , () =>{
        
    //     it('Will return true ', () => {
    //      let list = new LL();
    //      let currentList = list.head;
    //      expect(list.includes(currentList)).toEqual(list.head);
    // });

        it('Will return false when searching for a value in the linked list that does not exist', () => {
        let list = new LL();
        let currentList = list.head;
        expect(list.includes(currentList)).toBeFalsy();
    });      
    })
    // it('toSting()' , () =>{

    // })
    it('append()' , ()=>{
      let list = new LL();
      //  list = list.head;
      let intialtList ='first item';
      console.log( 'current Listtttt ' , intialtList)
      // currentList.next = value;
      list.append(intialtList)
      // console.log( 'listt consoleeeeeeeee after ()' ,list)
      expect(list.head.value).toEqual(intialtList)
      // console.log('list head next' , list.head.next)
      let secandlist = 'secand item ';
      list.append(secandlist)
      console.log( 'listt consoleeeeeeeee ()' ,list)
      expect(list.head.value).toEqual(intialtList)
    });
})
