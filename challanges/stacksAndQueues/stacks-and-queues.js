

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
//============= LIFO ============//
class Stack {
  constructor(){
    this.top = null;
  }
  push(value){
    let newNode = new Node(value);
    if(this.top === null){
      this.top = newNode;
    }
    newNode.next = this.top;
    this.top = newNode;
  }
  pop(value){
    if(this.top === null){
      return null;
    }
    let lastNode = this.top;
    this.top = this.top.next ;
    return lastNode ;

  }
  peek(){
    if(this.top === null){
      return null ;
    }
    return this.top.value;
  }
  isEmpty(){
    if(this.top === null){
      return true ;
    }else{
      return false ;
    }
  }
}

//============= FIFO ================//
class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(value){
    let newNode = new Node(value);
    if(this.front === null){
      this.front = newNode;
      this.rear = newNode;
    }
    this.front.next = newNode;
    this.front = newNode;
  }
  dequeue(){
    if(this.front === null && this.rear === null){
      return null;
    }
    let deletedNode = this.front.value; // i delete the first node
    this.front = this.front.next;
    return deletedNode;
  }
  peek(){
    if(this.front === null){
      return null ;
    }else{
      return this.front.value;
    }
  }
  isEmpty(){
    if(this.front === null && this.rear === null){
      return true ;
    }else{
      return false ;
    }
  }
}
//========= PseudoQueue =========//
class PseudoQueue {
  constructor(){
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }
  enqueue(value){
    let myStackOne = this.stackOne;
    while(myStackOne !== null){
      this.stackOne.push(value);
      return myStackOne.top;
    }
    return null;
  }
  dequeue() {
    if (this.stackOne.peek()) {
      while (this.stackOne.next) {
        let temp = this.stackOne.pop();
        this.stackTwo.push(temp);
      }
      const dequeued = this.stackOne.pop();
      while (this.stackTwo.peek()) {
        let temp = this.stackTwo.pop();
        this.stackOne.push(temp);
      }
      return dequeued;
    } else {
      return null;
    }
  }
}


module.exports = {Stack ,Queue ,PseudoQueue};