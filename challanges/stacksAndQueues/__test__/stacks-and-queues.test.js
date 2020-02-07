

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

  it('pop() in empty Stack:' , () =>{
    let newStack = new stackAndQueue.Stack();
    newStack.pop();
    expect(newStack.top).toEqual(null);
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
    newQueue.enqueue(4);
    console.log('=========' , newQueue.front.value);
    expect(newQueue.front.value).toEqual(4);
  });

  it('Dequeue() :' , () =>{
    let newQueue = new stackAndQueue.Queue();
    newQueue.enqueue(5);
    newQueue.enqueue(4);
    newQueue.dequeue();
    // newQueue.dequeue();
    console.log('+++++++' , newQueue.front);
    expect(newQueue.front).toEqual(null);
  });

  it('Dequeue()  in empty Queue :' , () =>{
    let newQueue = new stackAndQueue.Queue();
    newQueue.dequeue();
    expect(newQueue.front).toEqual(null);
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

describe('PseudoQueue' , ()=>{
  it('enqueue() : in my PseudoQueue function' , () =>{
    let newQueue = new stackAndQueue.PseudoQueue();
    let values = [3,8,5,16];
    newQueue.enqueue(values[2]);
    newQueue.enqueue(values[1]);
    newQueue.enqueue(values[0]);
    expect(newQueue.stackOne.top.value).toEqual(values[0]);
    expect(newQueue.stackOne.top.next.value).toEqual(values[1]);
    expect(newQueue.stackOne.top.next.next.value).toEqual(values[2]);
  });
  it(' dequeue() : in my PseudoQueue function' , () =>{
    let newQueue = new stackAndQueue.PseudoQueue();
    let values = [8,5,16];
    newQueue.enqueue(values[2]);
    newQueue.enqueue(values[1]);
    newQueue.enqueue(values[0]);
    let values2 = [
      newQueue.dequeue(),
      newQueue.dequeue(),
      newQueue.dequeue(),
    ];
    console.log('==================' , values2);
    expect(values[0]).toEqual(8);
    expect(values[1]).toEqual(5);
    expect(values[2]).toEqual(16);

  });
});