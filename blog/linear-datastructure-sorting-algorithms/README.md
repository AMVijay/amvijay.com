## Introduction 
There are lot of sorting algorithms available for linear datastructure (such as List, Array) sorting. In this post, will provide some level of details about each sorting algorithms and comparison

## Sorting Algorithms
* Insertion Sort
* Merge Sort
* Quick Sort

## Overview and Comparison
<table >
  <tr>
    <th>Insertion Sort</th>
    <th>Merge Sort</th>
    <th>Quick Sort</th>
  <tr>
  <tr>
    <td style="vertical-align: top; text-align: left;">
      <div>Steps</div>
      <ul>
        <li>Iterate through each element from the list</li>
        <li>Compare the element value with each of the element in the list until the index of the element value and swap it if element value is smaller than the list value. </li>
        <li>Loop through the same steps till reach last element.</li>
      </ul>
    </td>
    <td style="vertical-align: top; text-align: left;">
      <div>Steps</div>
      <ul>
        <li>Bisect the List into 2 sublist by mid index until each sublist has only one element</li>
        <li>Then, start merging the 2 sublists at a time by creating new one list with smallest and to biggest in the order until all the sublists merged</li>
      </ul>
    </td> 
    <td style="vertical-align: top; text-align: left;">
      <div>Steps</div>
      <ul>
        <li>Take an index (Ex: End index or mid index) value as partition index</li>
        <li>Iterate through the list fully till end, compare each element with partition index value until do below condition step. 
          <ul>
            <li>if the element value is greater than partition value and index is less than partition index, and move the element to right to partition index</li>
            <li>if the element value is smaller than partition value and index is greater than partition index, the move the element to left to the partition index</li>  
          </ul>
        <li>Perform same steps again in loop with 2 sublists, List 1: start index to partition index -1, List 2: partition index + 1 to end index</li>
      </ul>
    </td> 
  </tr>
  <tr>
    <td>
      <ul>
        <li>Best Case Time Complexity : O(n)</li>
        <li>Worst Case Time Complexity : O(n^2)</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Best Case Time Complexity : O(n)</li>
        <li>Worst Case Time Complexity : O(n)</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Best Case Time Complexity : O(n)</li>
        <li>Worst Case Time Complexity : O(n^2)</li>
      </ul>
    </td>
  </tr>
</table>
