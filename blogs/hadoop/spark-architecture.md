## What is Apache Spark
Apache Spark is a Distributed Data Processing framework in real-time, batch. Spark RDD object is a input for any Spark Framework Processing. Spark Programming starts in creating RDD Object from any data it reads. This RDD object is partitioned into multiple chunks and processed in worker nodes in parallel. Any task execution in Spark will be on RDD object only, and task will be either transformation, action and persistence.  

## Apache Spark Architecture
![](https://amvijay.github.io/images/apache-spark-architecture.jpg)

* Spark Master Node manages the task distribution to the worker nodes, and worker nodes life cycle. 
* Spark Worker Node performs task execution and updates it status back to Master Node.

## Apache Spark Components
![](https://amvijay.github.io/images/apache-spark-component.jpg)
* Spark Core 
	* It is the base, fundamental component for Spark. 
	* It contains functional implementation to manage RDD and task scheduling, RDD distribution, I/O Operations in various programming languages Java, Scala, Python, and R.
* Spark SQL 
	* As name denotes, it provides SQL feature for Spark on RDD.
	* It has functional implementation of SQL Support in various languages Java, Scala, Python, and R.
* Spark Streaming
	* It is Streaming Service implementation of Spark in various languages Java, Scala, Python and R.
	* Streaming Service is mini-batch scheduling, execution.
* Spark MLib
	* It contains Machine Learning implementation in Spark on RDD in various languages Java, Scala, Python, and R.
* Spark GraphX
	* It contains implementation based on Graph Processing in Spark.


## Acronyms
* RDD - Resilient Distributed DataSet
