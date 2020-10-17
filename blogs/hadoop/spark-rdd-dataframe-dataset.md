## Introduction
Spark has 3 important objects to represent data collection to perform operations on data in distributed computing. It is called RDD, Dataframe, Dataset.

## RDD - Resilient Distributed Dataset
* Spark RDD is a immutable object, created from SparkContext object as below. Once RDD object is created, the object data can't be modified. However new RDD can be created from existing RDD in data operations.
* map(), flatMap() are critical function in RDD 

## Spark - Dataframe
* Spark Dataframe object is created from Spark SQL-SparkSession Object.
* Spark Dataframe is a collection of multiple column data having same data type in each column. It can compared to a table data in relational database.
* Spark Dataframe is immutable object. That means, once dataframe is created from a source (CSV, Relational database through JDBC, Hive, RDD), then the data inside the dataframe object can't be modified. But can create another dataframe object using filter, where function available in dataframe or using any SQL query execution against the dataframe object using view.
* Available operation in Spark Dataframe objects are 
	* filter()
	* where()
	* groupBy()
	* agg()
	* min()
	* max()
*  Spark Dataframe provides the ability to execute SQL query against the data and fetch the same results.