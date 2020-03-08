# Apache Spark Installation in Linux
Last updated : 01/20/2020

## Install Python 3.x version 
* Check whether Python is installed already in machine using command `python3 -V` or ` python3 --version`, if not install the python 3.x version using command `sudo apt install python3`. If need to check what version of python available now in repository, command `apt search python3` can be used to check the version.
* Check whether PIP is installed already in machine using command `pip3 --version` or `python3 -m pip --version`. If not, install using command `sudo apt install python3-pip`.
	* PIP can be upgraded to latest version using `sudo python3 -m pip install --user --upgrade pip`
* Create Python Virutal Environment using command `python3 -m venv /home/admin/virualenv`, Here m denotes execute python module.
	* Python3.4 and above comes with venv (virtualenv) library in-built. User can create virutalenv using above stated command.
* To know the the package version installed in python, use command `pip3 show <package_name>`, ex: `pip3 show virtualenv`
* Activate the python virutal env using command `source /home/admin/virtualenv/bin/activate`

## Install PySpark 
After activating the virtualenv as Stated Above, 
* Install PySpark using command `pip install pyspark`. PySpark would be installed in the virutalenv.
* Check the installed package and its version using command `pip list`
* Upgrade pip version in virtual env using command `pip install --upgrade pip`

## Install Apache Spark
* Use command `wget --no-check-certificate https://archive.apache.org/dist/spark/spark-2.4.4/spark-2.4.4-bin-hadoop2.7.tgz`
	* `no-check-certificate` is to ignore SSL Certificate verification.
* Extract the spark binary from tar.gz file using command `tar -xzvf spark-2.4.4-bin-hadoop2.7.tgz`
* Move this spark directory to `sudo mv spark-2.4.4-bin-hadoop2.7 /usr/local/spark-2.4.4-bin-hadoop2.7`
* Create softlink using command `sudo ln -s /usr/local/spark-2.4.4-bin-hadoop2.7/ /usr/local/spark`
* Update below listed environment path to user home directory `.bashrc`
```bash
export SPARK_HOME=/usr/local/spark
export PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin
```

## Launching Apache Spark Master and Worker Nodes
* Add JAVA_HOME in `sudo nano /usr/local/spark/sbin/spark-config.sh`
```bash
export JAVA_HOME=/usr/local/jdk8
``` 
* Use command to run master node `sudo /usr/local/spark/sbin/start-master.sh`. Once started successfully, we can access master web ui using command http://localhost:8080/
* Use command to run worker node `sudo /usr/local/spark/sbin/start-slave.sh spark://LP0039973.tmm.na.corp.toyota.com:7077 --memory 2G`. Once started successfully, check the master webui. Now worker section will show the new worker with IP address and memory.


# Acronyms
* apt - Advanced Packing Tool
* pip - PIP Installs Package
