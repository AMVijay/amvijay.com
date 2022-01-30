# GraphQL 

## Introduction 
* GraphQL is a framework to develop HTTP Rest API endpoints with functional logic to fetch the data from database. 
* It can also be defined as API based on query language to fetch the data from database. 
* Developer work would be to define the data structure, data type, API endpoint name, and type of operation (select, insert/update). Then, Client has the flexiblity in determining what data is needed from the defined data structure and end point.
* Here, development time would be faster compared to typical REST API Endpoint development.


## GraphQL Framework Architecture


## GraphQL Components

Below are the key configurations to define a GraphQL enabled REST API Endpoint Server:

* Type Definition (Schema)
	* Define the data types and data structure.
	* Data types are Scalar types (String, int, boolean, float) and Object of a type, Operations (Query, Mutation Subscription). 
	* Example:
```javascript
type Person{
	name: String
	address: String
	phone: int
	dept: Department
}

type Department{
	name: String
}

type Query{
	persons: [Persons]
}
```	

* Resolver
	* API Endpoint name, mapping to the type defined in Type Defintion.


## Sample GraphQL Implementation in Javascript

## Sample GraphQL Implementation in Java 

## Conclusion
