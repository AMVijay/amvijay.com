#title "Cloud to On-Premise Sync Solution Options"
#author "Vijayaraaghavan Manoharan"

## Introduction 
Now a days, most of the enterprise application would have some portion in cloud (AWS or Azure) and some portion would in on-premise. In this architecture, the unavoidable use case is to sync cloud and on-premise database. Here, will explore the possible design solution for implementing this use case. 

## Solution Option 1
**Design Concept Diagram**  

![](https://amvijay.com/images/onprem-cloud-datasync-solution1.jpg)

* This solution design uses microservice architecture. Idea is to have CRUD Services for each business entity in cloud and on-premise and invoke these services when required.
* If the sync data structure is small and very few business entities need to sync, then this solution approach will be good. 

**Pros**
* This solution would fit with any cloud provider (either AWS or Azure) and on-premise.

**Cons**
* Cost might be high as it required too many cloud services and might have too many network calls.

## Solution Option 2 (AWS)
**Design Concept Diagram**  

![](https://amvijay.com/images/onprem-cloud-datasync-solution2.jpg)

* This solution is for AWS and On-premise infrastructure alone. Here, AWS Datapipeline service is used for syncing the cloud and on-prem data. 
* This approach will be good if data structure is complex and more number of business entities need to be synced.

**Pros**
* Cost Effective for complex data structure and more number of business entities sync requirement. 
* Easy to maintain compared to solution 1 for the above stated point.

**Cons**
* For small entity, this implementation is little overhead for maintenance as it involves in pipeline structure maintenance and update.

One example AWS data pipeline definition screenshot to export AWS RDS data to S3 location and invoke Onpremise Service to process the data. 
![](https://amvijay.com/images/aws-datapipeline-cloud-onpremise-sync.jpg)
Actual Pipeline definition source is available in https://github.com/AMVijay/aws-learning/blob/main/datapipeline/cloud-onprem-sync.json.  

Here, If we compare AWS datapipeline against microservice solution, the microservice based solution need multiple services and resources in AWS cloud like API Gateway, lambda/container based microservices. But Datapipeline is simple to create and maintain for any complex data structures. 

