# Javascript - async, await, promise understanding

## Introduction
async, await and promise are the important features in Javascript programming language. Here, will explain what this feature is and how it can be implemented. 

Javascript file will be executed by Javascript engines (chrome, firefox, nodejs). Javascript engine architecture is Single Threaded, Event based, Event Loop methodology architecture. Below diagram explains this architecture: 
![](https://amvijay.com/blog/javascript-async-await-promise-understanding/nodejs_architecture.jpg)

### async
This keyword used in function definition. As the name stands for, this keyword tells javascript engine to execute the defined function asynchronously. Javascript inbuilt functions (setTimeout, fetch) are executed asynchronously by default without explicit async keyword. But a user defined function would expect async keyword to execute asynchronously.  

### await
This keyword is used inside the async function call where another function call happens. await keyword is needed to tell javascript engine wait for the function invocation completes and return. Till then, it holds the thread to wait.

### promise
This keyword is used inside async function. Async function should return Promise to the parent method where it is called. Promise end state would be either be resolved as successful completion or rejected with some exception.


