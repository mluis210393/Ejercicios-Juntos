/*Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.*/

/*

/*var arr = [3,5,7,1,6];
function largeNumb(arr){
    if (arr[0] > arr[1] && arr[0] > arr[2] && arr[0] > arr[3] && arr[0] > arr[4])
        console.log(arr[0])
    else if (arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3] && arr[1] > arr[4])
        console.log(arr[1])
    
    else if (arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3] && arr[2] > arr[4])
        console.log(arr[2])
    else if (arr[3] > arr[0] && arr[3] > arr[1] && arr[3] > arr[2] && arr[3] > arr[4])
        console.log(arr[3])
    else if (arr[4] > arr[0] && arr[4] > arr[1] && arr[4] > arr[2] && arr[4] > arr[3])
        console.log(arr[4])
largeNumb(arr);
}

*/


/*Write a program to sort a list of numbers in descending order (from highest to lowest).*/

/*  var valores = [-23,15,7,1,-16];
    valor = valores.sort(function(x,y){
        return y-x
});

console.log(valor);  

*/


/*Write a program that takes in two lists and returns the greatest number out of the two lists. Hint: call the function from Class Exercise #1 (Exercise #1 should return a single number - the greatest number in the list).*/

var arr = [23,35,47,11,36];
var arr1=[26,31,28,23,27];
var mayor1=0;
var mayor2=0;
function largeNumb(arr){
    if (arr[0] > arr[1] && arr[0] > arr[2] && arr[0] > arr[3] && arr[0] > arr[4])
        mayor1=arr[0]
    else if (arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3] && arr[1] > arr[4])
    mayor1=arr[1]
    
    else if (arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3] && arr[2] > arr[4])
    mayor1=arr[2]
    else if (arr[3] > arr[0] && arr[3] > arr[1] && arr[3] > arr[2] && arr[3] > arr[4])
    mayor1=arr[3]
    else if (arr[4] > arr[0] && arr[4] > arr[1] && arr[4] > arr[2] && arr[4] > arr[3])
    mayor1=arr[4]

}
function largeNumb1(arr){
    if (arr[0] > arr[1] && arr[0] > arr[2] && arr[0] > arr[3] && arr[0] > arr[4])
        mayor1=arr[0]
    else if (arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3] && arr[1] > arr[4])
    mayor1=arr[1]
    
    else if (arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3] && arr[2] > arr[4])
    mayor1=arr[2]
    else if (arr[3] > arr[0] && arr[3] > arr[1] && arr[3] > arr[2] && arr[3] > arr[4])
    mayor1=arr[3]
    else if (arr[4] > arr[0] && arr[4] > arr[1] && arr[4] > arr[2] && arr[4] > arr[3])
    mayor1=arr[4]
largeNumb(arr);
}