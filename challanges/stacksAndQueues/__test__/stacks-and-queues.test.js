

const stackAndQueue = require('../stacks-and-queues.js');

describe('Stack data Structure' , () =>{
  it('Push() :', ()=>{
    let newStack = new stackAndQueue.Stack();
    newStack.push(5);
    expect(newStack.top.value).toEqual(5);
    newStack.push(4);
    expect(newStack.top.value).toEqual(4);
  });

  it('pop() :' , () =>{
    let newStack = new stackAndQueue.Stack();
    newStack.push(5);
    newStack.push(4);
    newStack.pop();
    expect(newStack.top.value).toEqual(5);
    newStack.pop();
    // expect(newStack.top.value).toEqual(null);
  });
  it('peek():' , ()=>{
    let newStack = new stackAndQueue.Stack();
    newStack.push(5);
    newStack.push(4);
    expect(newStack.peek()).toEqual(4);

  });
  it('isEmpty():' , () =>{
    let newStack = new stackAndQueue.Stack();
    expect(newStack.isEmpty()).toBe(true);

  });
});

describe('Queue data structure' , () =>{
  it('Enqueue() :', ()=>{
    let newQueue = new stackAndQueue.Queue();
    newQueue.enqueue(5);
    expect(newQueue.front.value).toEqual(5);
  });

  it('Dequeue() :' , () =>{
    let newQueue = new stackAndQueue.Queue();
    newQueue.enqueue(5);
    newQueue.dequeue();
    expect(newQueue.front.value).toEqual(5);

  });
  it('peek():' , ()=>{
    let newQueue = new stackAndQueue.Queue();
    newQueue.enqueue(5);
    newQueue.enqueue(4);
    expect(newQueue.peek()).toEqual(4);

  });
  it('isEmpty():' , () =>{
    let newQueue = new stackAndQueue.Queue();
    expect(newQueue.isEmpty()).toBe(true);

  });
});