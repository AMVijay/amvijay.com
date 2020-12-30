## Introduction 
Now a days, most of the enterprise application would have some portion in cloud (AWS or Azure) and some portion would in on-premise. In this architecture, the unavoidable use case is to sync cloud and on-premise database. Here, will explore the possible design solution for implementing this use case. 

## Solution Option 1
**Design Concept Diagram**


* This solution design uses microservice architecture. Idea is to have CRUD Services for each business entity in cloud and on-premise and invoke these services when required.

**Pros**
* This solution would fit with any cloud provider (either AWS or Azure) and on-premise.

**Cons**
* Cost might be high as it required too many cloud services and might have too many network calls.

## Solution Option 2 (AWS)
**Design Concept Diagram**


* This solution is for AWS and On-premise infrastructure alone. Here, AWS Datapipeline service is used for syncing the cloud and on-prem data. 
