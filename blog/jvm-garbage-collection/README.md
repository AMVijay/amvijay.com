# Java/JVM Garbage Collection - Understanding 

## What is Garbage Collection in JVM
Garbage Collection is a process in JVM (Java Virtual Machine) to identify the unused objects in JVM Heap Space and clean up the objects to gain the memory back to Heap Space. If the process is not able to clean the garbage objects and gain memory back, then it will take the JVM to be Out Of Memory, and that is called JVM Crash, Memory Leak in Java Development World. In Java Program, N number of objects would have u.sed a method to implement logic. Each Objects would consume memory to hold as much as data in a method call. But once the method call completed, the memory occupied by objects won't be released immediatly. Those objects are identified in Garbage Collection Process by JVM and that objects memory references are deleted to gain the memory back for next method call execution.

This Garbage Collection implementation is being improved in each JVM releases over the years.

Before heading into various types Garbage Collection available in JVM, quick overview of JVM:

## JVM Architecture
![](https://amvijay.com/blog/jvm-garbage-collection/jvm-architecture.jpg)

### ClassLoader 
* ClassLoader is responsible to load java language classes into JVM Memory Area - Class and Method Area.

### Memory Area
* Class and Method Area is the place where all Java Classes, Method definitions, static variable, static methods stored.
* Heap Memory Area is the place where all run time objects are stored. In conjunction with Thread Stack and PCRegister Area, JVM Execution Engine uses Heap Memory. Garbage Collection work is identify the unused objects in this heap memory, and clean up.
* Thread Stack Area is the place where Thread execution hierarchy is stored. Based on this details, once method execution completed, JVM execution engine returns back to original caller thread.
* PC Register Area 
* Native Method Stack Area is the place where all Native Method call hierarchy stored. Native methods are OS specific method implementation.

### Execution Engine
* This controls the new thread invocation, accessing objects in memory, and communication with native interface for execution. 

### Native Interface and Libraries
* This is platform specific implementation for run time execution call.  

## JVM Heap Memory Overview

Below diagram describes JVM Heap Memory inside what it is ...

![](https://amvijay.com/blog/jvm-garbage-collection/jvm-heap-memory-architecture.jpg)

### New Generation Object Memory
* Any new Object created during Execution will be coming to Eden Memory Space of New Generation Memory Area.
* When Minor Garbage Collection completes its run, the object which are all survived in Eden will move it to Survivor 1 Area of New Generation Memory.
* Like this after each Garbage Collection run, Objects which are all survived will move it next survivor area from its previous state.
* Whichever objects survived till survivor 3 area, will move it to Old Generation Memory as the objects are surviving for longer period. 

### Old Generation Object Memory
* Here, all long survived objects would be present. During Full GC, Old Generation Objects 

## Types of Garbage Collection
Below are the types of Garbage Collection in JVM
* Serial GC
* Parallel GC
* Concurrent Mark Sweep GC
* G1 GC

## Serial GC

Serial GC iterates through all the objects in JVM Heap Space New Generation Memory Area one by one and marks which are all the objects unused. Once all the objects are marked, it will erase the content in memory and gain back the memory. When number of objects are less in JVM Heap Space New Generation Memory, then the Serial GC takes less time. Otherwise, Serial GC takes longer time to mark the unused objects.

`java -XX:+UseSerialGC`

## Parallel GC

Parallel GC segregates the JVM heap memory into multiple logic segments based on parallel thread configuration, and each thread marks the objects which are unused by iterating through the objects its memory segment. Once all the objects are marked, then it cleans the memory for reuse. It is efficient compared to Serial GC.

`java -XX:+UseParallelGC -XX:ParallelGCThreads=<x> -XX:+UseParallelOldGC `

## Concurrent Mark Sweep GC

Concurrent Mark Sweep GC is more efficient compared to Parallel GC, and causes less stop the world duation during Full GC Time. Here, minor GC still uses Parallel GC processes on New Generation Memory.

`java -XX:+UseConcMarkSweepGC -XX:ParallelCMSThreads=n -XX:UserParNewGC`

## G1 - Garbage First GC

G1 Garbage Collection is more efficient compared to Concurrent Mark Sweep GC. It provides less stop the world duration in Full GC time. G1 process separates the heap space into multiple regions approximately 2000, each region size is between 1 Mb to 32 Mb. Each region will have mix of Eden, survivor, old generation memory.

`java -XX:+UseG1GC -XX:MaxGCPauseMillis=<> -XX:InitiatingHeapOccupancyPercent=45`
