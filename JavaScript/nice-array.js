/*
A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

example:

[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.
*/

function isNice(arr){
 return !arr.length ? false : arr.every(e => arr.some(el => e === el - 1 || e === el + 1));
}
