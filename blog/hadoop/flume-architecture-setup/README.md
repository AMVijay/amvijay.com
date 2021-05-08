## What is Apache Flume
Apache Flume is a service framework to collect data from source (could be log files, twitter api, kafka, unix command), and store it in log files or HDFS.

## Architecture
![](https://amvijay.github.io/images/20200401-apache-flume-architecture.jpg)


## Setup Guide
* Download the flume from [http://apache.mirrors.pair.com/flume/1.9.0/apache-flume-1.9.0-bin.tar.gz](http://apache.mirrors.pair.com/flume/1.9.0/apache-flume-1.9.0-bin.tar.gz)
* Extract the content `tar -xvzf apache-flume-1.9.0-bin.tar.gz`
	* Here, x for Extract, v for Verbose, z for gzip, f for file.
* Move the extracted folder to /usr/local/ `sudo mv apache-flume-1.9.0-bin /usr/local/`
* Create softlink for flume as `sudo ln -s /usr/local/apache-flume-1.9.0-bin /usr/local/flume`

## Use Case 1: Configure an Agent to collect data from Netcat Source into Memory, HDFS
**NetCat** is a network utility to establish TCP or UDP connections between two computers and communicate in a specific port. Basically netcat will create a server in a specified port, and client start communicating to the server in that port and host in which netcat is running. 

```properties
# The configuration file needs to define the sources,
# the channels and the sinks.
# Sources, channels and sinks are defined per agent,
# in this case called 'agent'

agent.sources = netcat
agent.channels = memoryChannel
agent.sinks = loggerSink

# For each one of the sources, the type is defined
agent.sources.netcat.type = netcat
agent.sources.netcat.bind = 13.107.18.11
agent.sources.netcat.port = 52138

# The channel can be defined as follows.
agent.sources.seqGenSrc.channels = memoryChannel

# Each sink's type must be defined
agent.sinks.loggerSink.type = logger

#Specify the channel the sink should use
agent.sinks.loggerSink.channel = memoryChannel

# Each channel's type is defined.
agent.channels.memoryChannel.type = memory

# Other config values specific to each type of channel(sink or source)
# can be defined as well
# In this case, it specifies the capacity of the memory channel
agent.channels.memoryChannel.capacity = 100

agent.sources.netcat.channels = memoryChannel
agent.sinks.loggerSink.channel = memoryChannel

```
**Start the Flume agent with above stated configuration**  
From the directory, /usr/local/flume execute the command 
`./bin/flume-ng agent --conf ./conf/ --conf-file ./conf/flume-netcat-conf.properties --name agent -Dflume.root.logger=INFO,console`


## Use Case 2: Configure an Agent to process bulk of log files from a directory and dumpt it in HDFS
Here, Use case is to load the bulk of log files into HDFS using flume. So used flume source type as spooldir and sink as hdfs. 


**Flume Property File flume-spool-hdfs-conf.properties**
```properties
# The configuration file needs to define the sources,
# the channels and the sinks.
# Sources, channels and sinks are defined per agent,
# in this case called 'agent'

agent.sources = spoolSource
agent.channels = memoryChannel
agent.sinks = hdfsSink

# For each one of the sources, the type is defined
agent.sources.spoolSource.type = spooldir
agent.sources.spoolSource.spoolDir = /home/admin/flume-spool-dir

# The channel can be defined as follows.
agent.sources.spoolSource.channels = memoryChannel

# Each sink's type must be defined
agent.sinks.hdfsSink.type = hdfs
agent.sinks.hdfsSink.hdfs.path = hdfs://localhost:9000/flume/20200406

#Specify the channel the sink should use
agent.sinks.hdfsSink.channel = memoryChannel

# Each channel's type is defined.
agent.channels.memoryChannel.type = memory

# Other config values specific to each type of channel(sink or source)
# can be defined as well
# In this case, it specifies the capacity of the memory channel
agent.channels.memoryChannel.capacity = 100
```

** Start the flume agent
Navigate to the directory /usr/loca/flume and execute command 
`./bin/flume-ng agent --conf ./conf/ --conf-file ./conf/flume-spool-hdfs-conf.properties --name agent -Dflume.root.logger=INFO,console`

**Fixes for HDFS sink to work**
* Set the HADOOP_HOME as `/usr/local/hadoop` where hadoop installed. For HDFS sink to work, it needs all the hadoop common jar files available in /usr/local/hadoop/share/hadoop/common/*
* Removed the /usr/local/flume/lib/guava-11.0.2.jar as it conflicts with HADOOP guava-jar file.
