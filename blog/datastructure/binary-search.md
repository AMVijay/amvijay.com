# Binary Search

Binary Search is a search algorithm to find the data in a sorted data structure collection.  
Algorithm steps are :
* Step 1: Find the middle element in a sorted data structure and check whether middle element matches the search data.
* Step 2: If matched, exit the algorithm.
* Step 3: If not matched, check whether search element value is greater than the middle element
	* Step 3.1 : If yes, then follow the Step 1 to 3 with data collection trimmed to the element after the middle element and till the end of collection.
	* Step 3.2 : If no, then follow the Step 1 to 3 with data collection trimmed to the starting of data collection till the element before middle element.
	
**Reference Implementation 1**
```python
# Method to perform binary search
def binarySearch(searchElement, startIndex, endIndex, sortedList):
    # print("Mid Index :: " + str(midIndex))
    if(endIndex > startIndex):
        midIndex = int((endIndex + startIndex) / 2)
        if(searchElement == sortedList[midIndex]):
            return midIndex
        else:
            if(searchElement<sortedList[midIndex]):
                return binarySearch(searchElement, startIndex,midIndex-1,sortedList)
            else:
                return binarySearch(searchElement, midIndex+1, endIndex, sortedList)
    elif(startIndex == endIndex and searchElement == sortedList[startIndex]):
        return startIndex
    else:
        return Exception("Not Found")

# Test Case
datacollection = [1,2,3,4,5,6,7,8,9,10]

matchedElementIndex = binarySearch(3,0, len(datacollection)-1, datacollection)
print("Element :: " + str(3) + " is at index :: " + str(matchedElementIndex))

matchedElementIndex = binarySearch(8,0, len(datacollection)-1, datacollection)
print("Element :: " + str(8) + " is at index :: " + str(matchedElementIndex))

matchedElementIndex = binarySearch(6,0, len(datacollection)-1, datacollection)
print("Element :: " + str(6) + " is at index :: " + str(matchedElementIndex))

matchedElementIndex = binarySearch(11,0,len(datacollection)-1,datacollection)
print("Element :: " + str(11) + " is at index :: " + str(matchedElementIndex))
```

**Reference Implementation 2**
```python
# Method to perform binary search
def binarysearch(searchElement,sortedList):
    midIndex = int(len(sortedList)/2)
    if(midIndex > 0):
        if(searchElement == sortedList[midIndex]):
            return searchElement
        else:
            if(searchElement<sortedList[midIndex]):
                sublist = sortedList[0:midIndex]
                return binarysearch(searchElement, sublist)
            else:
                sublist = sortedList[midIndex+1:len(sortedList)]
                return binarysearch(searchElement, sublist)
    elif(midIndex == 0 and searchElement == sortedList[midIndex]):
        return searchElement
    else:
        return Exception("Not Found")

# Test Case
datacollection = [1,2,3,4,5,6,7,8,9,10]
matchedElement = binarysearch(3, datacollection)
print("Matched Element value :: " + str(matchedElement))

matchedElement = binarysearch(8, datacollection)
print("Matched Element value :: " + str(matchedElement))

matchedElement = binarysearch(6, datacollection)
print("Matched Element value :: " + str(matchedElement))

matchedElement = binarysearch(11, datacollection)
print("Matched Element value :: " + str(matchedElement))
```
