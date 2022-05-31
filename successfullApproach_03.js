// https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1/?page=1
// ******Question*****
// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

// Example 1:
// Input: 
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation:
// 0s 1s and 2s are segregated 
// into ascending order.

// Example 2:
// Input: 
// N = 3
// arr[] = {0 1 0}
// Output:
// 0 0 1
// Explanation:
// 0s 1s and 2s are segregated 
// into ascending order.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function sort012() that takes an array arr and N as input parameters and sorts the array in-place. 

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= N <= 10^6
// 0 <= A[i] <= 2

// ******My answer*******


/**
 * Make three blank array.
 * Creat a loop.
 * Put all three values separately in three different variable by using if else condition.
 * So First variable has all Zeros.
 * Second variable has all ones.
 * Third variable has all twos.
 * Now merge these three variable by using concat.
 * Now convert these object into array.
 */


let arr = [0,2,1,2,0]     
let arr_01 = [], arr_02 = [], arr_03 = [];

 for (let i=0; i<arr.length; i++){
    if (arr[i]===0){
        arr_01.push(arr[i]);
    }
    else if (arr[i]===1){
        arr_02.push(arr[i]);
    }
    else{
        arr_03.push(arr[i]);
    }
}
var res_01 = [...arr_01, ...arr_02, ...arr_03];
for (let j=0; j<arr.length; j++){
    arr[j]=res_01[j];
}
console.log(arr);