# Javascript - async, await, promise understanding

## Introduction
async, await and promise are the important features in Javascript programming language. Here, will explain what this feature is and how it can be implemented. 

Javascript file will be executed by Javascript engines (chrome, firefox, nodejs). Javascript engine architecture is Single Threaded, Event based, Event Loop methodology architecture. Below diagram explains this architecture: 
![](https://amvijay.com/blog/javascript-async-await-promise-understanding/nodejs_architecture.jpg)


### async
This keyword used in function definition. As the name stands for, this keyword tells javascript engine to make the defined function execution asynchronously. Javascript inbuilt functions (setTimeout, fetch) are executed asynchronously nby default without explicit mention. But a user defined function would expect async keyword to make the execution asynchronously.  

### await
This keyword used in the async function call. It tells the interpreter to wait for the async functional invocation. 


### promise
