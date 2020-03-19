# Apache Flume Architecture and Setup Guide
* Last Modified on 2020-03-17

## What is Apache Flume

## Architecture


## Setup Guide
* Download the flume from [http://apache.mirrors.pair.com/flume/1.9.0/apache-flume-1.9.0-bin.tar.gz](http://apache.mirrors.pair.com/flume/1.9.0/apache-flume-1.9.0-bin.tar.gz)
* Extract the content `tar -xvzf apache-flume-1.9.0-bin.tar.gz`
	* Here, x for Extract, v for Verbose, z for gzip, f for file.
* Move the extracted folder to /usr/local/ `sudo mv apache-flume-1.9.0-bin /usr/local/`
* Create softlink for flume as `sudo ln -s /usr/local/apache-flume-1.9.0-bin /usr/local/flume`

## Configure an Agent


* Start the flume 
