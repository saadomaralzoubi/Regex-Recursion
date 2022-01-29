"use strict";

function division(x, y) {
  if (y == 0) return 0;
  else if (x - y == 0) return 1;
  else if (x < y) return 0;
  else return 1 + division(x - y, y);
}

/* Write a function that implement Math.pow(x,n) but using recursion
Example:
pow(2,4) = 16
*/

function pow(n, x) {
  if (x == 0) return 1;
  else if (n && x == 0) return 1;
  else return n * pow(n, x - 1);
}

/* The Fibonacci Series is a numeric series starting with the integers 0 and 1. In this series,
the next integer is determined by summing the previous two. This gives us:
0, 1, 1, 2, 3, 5, 8, 13, ...
Write a function that take n as parameter and return the nth element in the Fibonacci Series
Example: n = 4 ==> 3, n= 0 ==> 0, n = 3 ==> 2 */

function fibonacci(n) {
  if (n == 0 || n == 1) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

/* Optional 
The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.
Example: 
Input: n = 3, k = 3
Output: ["123", "132", "213", "231", "312", "321"] */

function permutations(n, k) {
  let arr = [];
  // Write you logic here.
  return arr;
}
