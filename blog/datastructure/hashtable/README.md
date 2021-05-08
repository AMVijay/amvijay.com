## Introduction
HashTable is a non-linear data structure, uses key-value design to organize the data as a collection. It can depicted as below in high level: 

![](https://amvijay.github.io/images/20200906-hashtable-1.jpg)

---

## Implementation
To implement the HashTable, require 
* an array for keys
* an array for values 
* a function with hashing algorithm which helps to create unique index from a key to get actual value from value array. 

![](https://amvijay.github.io/images/20200906-hashtable-2.jpg)

Here, Hasing Algorithm is very key important, and its efficieny will help to create unique index always for a key. 

---

## Pseudo Code for HashTable

```
class HashTable: 

    private valueArray : any[];
    private keyArray : any[];

    public function get(key){
        index = hashing(key);
        return valueArray[index];
    }

    public function put(key, value){
        index = hashing(key);
        valueArray[index] = value;
    }

    private function hashing(key){

    }

```



---