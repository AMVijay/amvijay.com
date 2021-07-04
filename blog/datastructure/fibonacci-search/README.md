# Fibonacci Search
Fibonacci Search algorithm uses fibonacci series numbers to determine the index of the element in traversel of the linear data structure until found the matched element.

## Algorithm Steps 
* Step 1. Find the length of the linear data structure.
* Step 2. Find the smallest fibonacci number which is greater than or equal to the length determined in step 1.
* Step 3. Declare the fibonacci number determined in step 2 as fibonacciM and find the next 2 smallest fibonacci number and define it as fibonacciM1, fibonnacciM2.
* Step 4. Initialize variable called offset as -1. 
* Step 5. Determine index value using formulae minimum value of offset + fibonacciM2 and length -1 of linear data structure.
* Step 6. Check whether calcualted index value is less than the length of linear data structure.
* Step 7. If yes, Check whether value at the index matches the search element. 
	* Step 7.1. If yes, return the index value. 
	* Step 7.2. If no, then check whether value at the index is less than search element value. 
		* Step 7.2.1. If yes, then shift the fibonicci numbers one left from higher value, that reinitializes the variable as below 
			* Step 7.2.1.1 fibonacciM = fibonacciM1 
			* Step 7.2.1.2 fibonacciM1 = fibonacciM - fibonacciM1
			* Step 7.2.1.3 fibonacciM2 = fibonacciM - fibonacciM1
			* Step 7.2.1.4 offset = index
		* Step 7.2.1. If no, then check whether value at the index is greater than the search element value. 
		* Step 7.2.2.  If yes, then shift the fibonacci numbers two left from higher value, that  reinitializes the variable as below
			* Step 7.2.2.1  fibonacciM = fibonacciM2
			* Step 7.2.2.2  fibonacciM1 = fibonacciM - fibonacciM1
			* Step 7.2.2.3   fibonacciM2 = fibonacciM - fibonacciM2
	* Step 7.3 Repeat the step 5 to 7.3.
* Step 8. If no, stop the iteration and return -1.

