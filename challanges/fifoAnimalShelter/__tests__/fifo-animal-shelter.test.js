// eslint-disable-next-line strict
'use strict';

const Animal = require('../fifo-animal-shelter.js');

describe('Animal Shelter' , () =>{
  let newAnimal = new Animal();
  it('' , () =>{
    newAnimal.enqueue('cat');
    newAnimal.enqueue('dog');
    newAnimal.enqueue('cat');
    newAnimal.enqueue('cat');
    console.log('(((((( My animal Shellter Rear ))))))',newAnimal.rear);
    newAnimal.enqueue('dog');
    expect(newAnimal.rear.value).toEqual('dog');

  });
  it('dequeue():' , () =>{
    newAnimal.enqueue('cat');
    newAnimal.enqueue('dog');
    newAnimal.enqueue('cat');
    console.log('MY Front Shelter' , newAnimal.front.value);
    newAnimal.dequeue();
    console.log('MY Front Shelter after dequeue' , newAnimal.front.value);
    expect(newAnimal.front.value).toEqual('dog');
    newAnimal.dequeue();
    expect(newAnimal.front.value).toEqual('cat');

  });
});
