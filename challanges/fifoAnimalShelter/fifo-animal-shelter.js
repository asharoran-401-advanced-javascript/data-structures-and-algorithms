// eslint-disable-next-line strict
'use strict';

const Node = require('../linkedList/lib/node.js');

class AnimalShelter{
  constructor(){
    this.front = null ;
    this.rear = null;

  }
  //---------------- FIFO -------------------//
  enqueue(animal){
    let newAnimal = new Node(animal);
    if(!animal) return null;
    if(this.front){
      this.rear.next = newAnimal;
      this.rear = newAnimal;
      console.log('my new Animal' , newAnimal);
      return this.front;
    }
    this.front = newAnimal;
    this.rear = newAnimal;
    return this.front;

  }
  dequeue(pref){
    if (pref === this.front.animal) {
      let actualAnimal = this.front;
      this.front = this.front.next;
      return actualAnimal.animal;
    }

  }
}

module.exports = AnimalShelter;