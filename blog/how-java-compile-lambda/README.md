# How Java compiles the Lambda implementation into Class Files 

## Introduction
In this blog post, will analyze how Java compiler creates byte code of Lambda Implementation.

## Analysis
* As per definition, Lambda is nothing but functional implementation code block. 
* So does java compiler creates new anonymous method in bytecode for execution.? Answer is No. 
* Instead, java compilier creates the lambda implementation into `java.util.function.Consumer` implementation. As per Java Source code, `java.util.function.Consumer` is the functional implementation interface.
* Example: below lines of lambda code 
```java
inputList.forEach( element -> {System.out.println("Element Value" + element);});
```
will be converted into as 
```java
Consumer<String> element = elementValue -> System.out.println("Element Value" + elementValue);
inputList.forEach(a-> element.accept(a));
```
* Every Lambda Implementation will have line of `java.util.function.Consumer` implementation.
