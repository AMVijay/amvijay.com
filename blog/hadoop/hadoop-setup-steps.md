# Hadoop Installation and Setup
Last Updated On 02/21/2020

## Linux : Update the Package Version and Upgrade
Below commands can be used to update linux package version in local repository and upgrade:
* `sudo apt update`  
* `sudo apt upgrade`  
To know the list of packages upgradable in linux, use command `apt list --upgradable`

## Install SSH Service in Linux 
* Install using command `sudo apt install ssh` 
* To start/stop or restart the ssh service, use command `sudo service ssh restart`

## Download and Configure Hadoop Binaries Installation
* Install wget in linux using command `sudo apt install wget`, if not already installed.  
* Download the hadoop binaries using wget command `wget <hadoop tar http path>` 
	* Example `wget http://mirror.cogentco.com/pub/apache/hadoop/common/hadoop-3.2.1/hadoop-3.2.1.tar.gz --no-check-certificate`
	* If required perform checksum for reliability, if required add option `--no-check-certificate`  
* Extract the hadoop binaries using command `tar -xzvf hadoop-3.2.1.tar.gz`   
	* Here, x denotes EXTRACT, z denotes GZIP, v denotes VERBOSE, f denotes FILE.  
* Move the hadoop binaries folder to `/usr/local` directory using command `sudo mv hadoop-3.2.1 /usr/local/hadoop-3.2.1`
* Create softlink `/usr/local/hadoop` to the hadoop version using command `sudo ln -s /usr/local/hadoop-3.2.1 /usr/local/hadoop` 
	* In case if we install another version of hadoop, just need to update the softlink so that all scripts will retain intact. 

## Download And Configure JDK/JRE
`sudo apt install default-jre` - This normally installs the Java in /usr/lib/jvm/<jdk folder>, and updates the softlink of /usr/bin/java to the installable.
`sudo apt install default-jdk` -  
`sudo update-java-alternatives --list` or  `sudo update-alternatives --config java` - (This is list down all java installable and its path in the os, we can select default JRE in the OS for all users)   
Or   
To Install precise JDK 8 Version, follow the steps detailed below.  
* Download the latest JDK8 from AWS using command 
	`wget https://corretto.aws/downloads/latest/amazon-corretto-8-x64-linux-jdk.tar.gz --no-check-certificate `
* Extract the JDK 8 binary using command `tar -xzvf amazon-corretto-8-x64-linux-jdk.tar.gz`
* Move the JDK 8 binaries to `sudo mv amazon-corretto-8.242.07.1-linux-x64/ /usr/local/amazon-corretto-8.242.07.1-linux-x64`
* Create softlink as `sudo ln -s /usr/local/amazon-corretto-8.242.07.1-linux-x64 /usr/local/jdk8`

Update `sudo nano /etc/profile` as below, so that JAVA_HOME will set in OS level.
```bash
# JAVA PATH Settings
export JAVA_HOME=/usr/local/jdk8
export PATH=$PATH:$JAVA_HOME/bin
```

## Update .bashrc in user profile as below
```bash
# Added for HADOOP
export JAVA_HOME=/usr/local/jdk8
export PATH=$PATH:$JAVA_HOME/bin

export HADOOP_HOME=/usr/local/hadoop
export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
```
Execute command `source .bashrc` - This command will apply all the changes to current running bash session. Source command will make all the changes applied to current running session.

## Update hadeep-env.sh in Hadoop 
Update the hadoop environment setup file `sudo nano /usr/local/hadoop/etc/hadoop/hadoop-env.sh` with JAVA_HOME AND HADOOP_HOME as below
* `export JAVA_HOME=/usr/local/jdk8`
* `export HADOOP_HOME=/usr/local/hadoop/`  

Add the USER ID configuration parameter to `/usr/local/hadoop/etc/hadoop/hadoop-env.sh` as below
```bash
# HADOOP PROCESS USER ID
export HDFS_NAMENODE_USER=admin
export HDFS_DATANODE_USER=admin
export HDFS_SECONDARYNAMENODE_USER=admin
export YARN_RESOURCEMANAGER_USER=admin
export YARN_NODEMANAGER_USER=admin
```

## Run MapReduce Algorithm
`mkdir ~/input`  
`cp /usr/local/hadoop/etc/hadoop/*.xml ~/input`  
`/usr/local/hadoop/bin/hadoop jar /usr/local/hadoop/share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.2.jar grep ~/input ~/grep_example 'allowed[.]*'`  
	If ~/grep_example already exists, then delete the folder `rm -ef ~/grep_example`  
	
`cat ~/grep_example/*` to check the output of mapandreduce  

## SSH key Configuration 
`ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa`  
`cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys`  
`chmod 0600 ~/.ssh/authorized_keys`

## Modify Configuration
* Change `sudo nano /usr/local/hadoop/etc/hadoop/core-site.xml` as  
```xml
<configuration>
	<property>
		<name>fs.defaultFS</name>
		<value>hdfs://localhost:9000</value>
	</property>
</configuration>
```
* Change `sudo nano /usr/local/hadoop/etc/hadoop/hdfs-site.xml` as  
```xml
<configuration>
	<property>
		<name>dfs.replication</name>
		<value>1</value>
	</property>
	<property>
		<name>dfs.namenode.name.dir</name>
		<value>/home/admin/hadoop/data/namenode</value>
	</property>
	<property>
		<name>dfs.datanode.data.dir</name>
		<value>/home/admin/hadoop/data/datanode</value>
	</property>
</configuration>
``` 
* Change `sudo nano /usr/local/hadoop/etc/hadoop/yarn-site.xml` as 
```xml
<configuration>
	<property>
		<name>yarn.nodemanager.aux-services</name>
		<value>mapreduce_shuffle</value> 
	</property>
</configuration>
```
* Change `sudo nano /usr/local/hadoop/etc/hadoop/mapred-site.xml` as 
```xml
<configuration>
	<property>
		<name>mapreduce.framework.name</name>
		<value>yarn</value>
	</property>
	<property>
		<name>yarn.app.mapreduce.am.env</name>
		<value>HADOOP_MAPRED_HOME=${HADOOP_HOME}</value>
	</property>
	<property>
		<name>mapreduce.map.env</name>
		<value>HADOOP_MAPRED_HOME=${HADOOP_HOME}</value>
	</property>
	<property>
		<name>mapreduce.reduce.env</name>
		<value>HADOOP_MAPRED_HOME=${HADOOP_HOME}</value>
	</property>
</configuration>
```

## Start/stop the hdfs file system
`sudo /usr/local/hadoop/bin/hdfs namenode -format` - format the namenode   
`sudo /usr/local/hadoop/sbin/start-dfs.sh`  
`sudo /usr/local/hadoop/sbin/stop-dfs.sh`  

By default, HDFS NameNode can be accessed using http://localhost:9870/

## Start/Stop the YARN 
`sudo /usr/local/hadoop/sbin/start-yarn.sh`  
`sudo /usr/local/hadoop/sbin/stop-yarn.sh`

By default, yarn resource manager can be access in http://localhost:8088/

## Reference:
* https://www.digitalocean.com/community/tutorials/how-to-install-hadoop-in-stand-alone-mode-on-debian-9
* https://idroot.us/install-apache-hadoop-debian-9-stretch/