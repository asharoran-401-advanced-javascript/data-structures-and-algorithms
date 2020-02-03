# Stacks and Queues
first I create three classes one for node and Stack and Queue
then attach it proparty 
and write prparty for stack and queue

## Challenge
the repeting and writing classes and the test 

## Approach & Efficiency
#### Stack : (FILO)
- Search about node Or access we need time it slowly so it's take O(n)
- when I do push (add) or pop (remove) it take the first node so it's quick so it's take O(1)
#### Queue : (FIFO)
- Search about node Or access we need time it slowly so it's take O(n)
- when I do push (add) or pop (remove) it take the first node so it's quick so it's take O(1)

## API
#### Stack :
* push () : Nodes or items that are put into the stack are pushed
* pop() :  Nodes or items that are removed from the stack are popped
* peek () : When you peek you will view the top Node in the stack.
* top :  This is the top of the stack
#### Queue :
* Enqueue () :  Nodes or items that are added to the queue.
* Dequeue () : Nodes or items that are removed from the queue.
* peek () : When you peek you will view the top Node in the queue.
* front : This is the front/first Node of the queue
* Reae : This is the rear/last Node of the queue.

====================================================
## Code Challange 11 - Queue By Using Stack

## Summary
- Create a brand new PseudoQueue class. Do not use an existing Queue.
- this PseudoQueue class will implement (the two methods listed below),
-  but will internally only utilize 2 Stack objects. 
- Ensure that you create your class with the following methods:

* enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
* dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.
The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor. 