## Introduction
* JDK 11 is the next release after JDK 8 came with Long Term Support (LTS).
---
## Comparison With JDK 8 in Installation Package
* Installation directory has major change in JDK11 compared to JDK8.
* [Changes] - JRE folder is removed, and its content moved to new location. 
    * `<JDK8>/jre/bin/*` dll files (windows) are moved to `<JDK11>/bin` folder.
    * Security and Management Configuraiton files `<JDK8>/jre/lib/` are moved to `<JDK11>/conf` folder.
* [Deletion] - rt.jar is removed from JDK installation package. This change happened since JDK9. 
* [New] - `jrt-fs.jar` is added to `<JDK11>\lib` folder. Class loader loads all the java base package class from `<JDK11>\lib\modules` files when `jrt.fs.jar` is parsed. Please refer [https://openjdk.java.net/jeps/220](https://openjdk.java.net/jeps/220) for more additional details.
---
## Important Features
* Java EE modules package , Applet `java.awt.*`, Java FX package are removed.
* `java` command will compile and execute the .java files, This reduces current 2 step process of compile separately and execute separately into one single step. Example `java HelloWorld.java` will compile and execute the program.
* TLS1.3 support implemented in `javax.net.ssl`
* New Cryptographic Algorithm implementation is added. It is called ChaCha20 and Poly1305.
* G1 Garbage Collection process pause time minimized.
* Introduced new Garbage Collection Process called Epsilon. `-XX:+UseEpsilonGC` is the parameter invokes EpsilonGC. In this process, there won't be any memory recovered back during GC process. Heap Utilization will be retained until program completion. This helps in performance testing, serverless program execution as it is short lived program and developer to create memory efficient program.
* Http Client Package is standardized in `java.net.http`. Removed the incubator implementation from `java.incubator.http` package.
* `-XX:+UseDynamicNumberOfCompilerThreads` is added for `javac` command which helps to control the number of threads created for compiling multiple source files.
* In `java.util.Collection`, new method `toArray(IntFunction<T[]> generator)` is added. This helps to create new Array from Collection easily with less coding, no need to use the method `toArray(T[] a)` which needs defined Array as input.

Sample Program With Before and After Code Pattern
```java
List<Integer> inputList = List.of(1,2,3,4,5,6);
		
// Before JDK 11
List<Integer> filterList = inputList.stream().filter(a->a>2).collect(Collectors.toList());
Integer[] filteredArray1 = new Integer[filterList.size()];
filterList.toArray(filteredArray1);
System.out.println(Arrays.toString(filteredArray1));

// After JDK 11
Integer[] filteredArray2 = inputList.stream().filter(a->a>2).toArray(Integer[]:: new);
System.out.println(Arrays.toString(filteredArray2));
```
Here, `Integer[]::new` is the functional interface.