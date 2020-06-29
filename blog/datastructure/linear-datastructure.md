# Linear Data Structure

## What is Linear Data Structure
Linear Data Structure is about how collection of data stored and retrieved in sequencial way. Array, List, Stack and Queues are of linear data structure types. Each of these has its own way of linear data structure implmentation. 

## Array
* Array uses sequential index for each element added to the data collection, and it retrives the data using the same index value quickly.
* If Array is created for the data collection ["apple","ball","cat","dog"], then it will look like 
	* 1 -> apple
	* 2 -> ball
	* 3 -> cat
	* 4 -> dog

## List
* List uses the pointers (memory location address in which data stored in memory) to organize the data as collection. 
* Compared to Array, Stack and List, adding new data to anywhere in the List will be efficient as the pointers of sequence need to be updated as required. 

**Reference Implementation**
```python
# Class - List is linear datastructure List implementation
class List:
    # List Data
    __data = []

    # Add Method to insert after last node
    def add(self,element):
        self.__data.append(element)

    # Add Method to insert after specific index
    def addAtIndex(self,index,element):
        self.__data.insert(index,element)

    # Method to delete element by index
    def remove(self,index):
        return self.__data.pop(index)

    # Method to return size value
    def size(self):
        return len(self.__data)

    def fetchAllElements(self):
        return self.__data

# Test  
list = List()
list.add("10")
list.add(5)
list.addAtIndex(1,"hello")

print("Size of list :: " + str(list.size()))
print("List Values :: " + str(list.fetchAllElements()))
```
Source code - https://github.com/AMVijay/datastructure/blob/master/linear-datastructure/list.py 

## Stack
* Stack uses the LIFO (Last In First Out) method to add and retrive the data as collection. 
* Here, index or pointers are not used to organize the sequence. 
* The order in which elements are added will be maintained. 
* But Last Element will be the first one to be retrieved from collection, can't traverse to any other elements by skipping the last element. 

**Reference Implementation**
```python
# Stack - LIFO data structure type implementation 
class Stack:
    __data = []

    # Adds element to Stack
    def push(self,element):
        self.__data.append(element)

    # Fetch and Deletes element from stack.
    def pop(self):
        return self.__data.pop()

# Test
stack = Stack()
stack.push("10")
stack.push(5)
stack.push("hello")

print(stack.pop())
print(stack.pop())
print(stack.pop())
```
Source code - https://github.com/AMVijay/datastructure/blob/master/linear-datastructure/stack.py

## Queue
* Queue uses the FIFO (First In First Out) method to add and retrive the data as collection.
* Here, index or pointers are not used to organize the sequence. 
* The order in which elements are added will be maintained. 
* But First Element will be the first one to be retrieved from collection, can't traverse to any other elements by skipping the first element. 

**Reference Implementation** 
```python
# Queue - is a FIFO data structure implementation.
class Queue:
    __data = []

    # Add data into queue
    def enqueue(self,element):
        self.__data.append(element)
    
    # Fetch and Deletes data from Queue
    def dequeue(self):
        return self.__data.pop(0)

# Test
queue = Queue()
queue.enqueue("10")
queue.enqueue(5)
queue.enqueue("hello")

print(queue.dequeue())
print(queue.dequeue())
print(queue.dequeue())
```
Source code - https://github.com/AMVijay/datastructure/blob/master/linear-datastructure/queue.py




