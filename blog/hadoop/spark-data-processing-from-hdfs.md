# Apache Spark Data Processing From HDFS
* Last Updated on 2020-01-26
## Use Case Requirement
* Load a file with large dataset into hdfs.
* Use Spark to read the file from hdfs.
* Process the data and create another dataset.
* Write the processed new dataset into hdfs again.

## Load a Large Data Set into HDFS
* Load the Flight Details data from https://www.kaggle.com/open-flights/flight-route-database. 
	* Required Kaggle Login Account to download this public data set.
* Make Sure HDFS is up and running. Otherwise refer https://amvijay.github.io/hadoop/hadoop-setup-steps/ to bring HDFS.
* Load the dataset into HDFS, Command reference: 
	* `hdfs dfs -ls /` - List the files inside root directory
	* `hdfs dfs -mkdir /admin`- Create directory 
	* `hdfs dfs -mkdir /admin/input` - Create directory
	* `hdfs dfs -put /home/admin/routes.csv /admin/input` - Copy the files from local to hdfs
	* `hdfs dfs -mkdir /admin/output` - Create directory

## Use Spark to read the large dataset file from HDFS
Below python code will read the data set from HDFS
```
from pyspark import SparkConf, SparkContext

conf = SparkConf().setAppName("Test Application").setMaster("spark://127.0.1.1:7077")
spark_context = SparkContext(conf=conf)

lines = spark_context.textFile("hdfs://localhost:9000/admin/input/routes.csv")

for line in lines:
    print(line)

```

## Process the dataset and create another dataset Using Spark
Added map() and filter() method call with lambda implementation to read the CSV file and filter the data to create new RDD data set by applying filter to get flights details has destination as LAX.
```
from pyspark import SparkConf, SparkContext

conf = SparkConf().setAppName("Test Application").setMaster("spark://127.0.1.1:7077")
spark_context = SparkContext(conf=conf)

lines = spark_context.textFile("hdfs://localhost:9000/admin/input/routes.csv").map(lambda line: line.split(",")).filter(lambda column: column[4] == 'LAX').collect()

for line in lines:
    print(line)

print("Ended the Execution")
```

## Write the new dataset into HDFS
Added saveAsTextFile() method to write the new RDD in hdfs.
```
from pyspark import SparkConf, SparkContext

conf = SparkConf().setAppName("Test Application").setMaster("spark://127.0.1.1:7077")
spark_context = SparkContext(conf=conf)

lines = spark_context.textFile("hdfs://localhost:9000/admin/input/routes.csv").map(lambda line: line.split(",")).filter(lambda column: column[4] == 'LAX').saveAsTextFile("hdfs://localhost:9000/admin/output/lax-routes")

for line in lines:
    print(line)

print("Ended the Execution")
```

## Execute this python script file using spark-submit
Execute the the python file using spark-submit
`sudo /usr/local/spark/bin/spark-submit --master spark://LP0039973:7077 /mnt/c/Users/amvij/Vijay/github/hadoop-learning/spark/spark-context.py`
