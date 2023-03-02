var ourArray = [["the universe", 42], ["everything", 101010]];

//ourArray[0][0] = "the universe"
//ourArray[0][1] = 42
//ourArray[1][0] = "everything"
//ourArray[1][1] = 101010

var myArray = [["Shannen Nazareno", 20], ["Clint Englis", 21]];

//myArray[0][0] = "Shannen Nazareno"
//myArray[0][1] = 20;
//myArray[1][0] = "Clint Englis"
//myArray[1][1] = 21;

//MODIFYING ARRAYS
//tip: use their index number

var arr = [1, 2, 3, 4, 5];
arr[arr.length-1] = 100; //changing the value of the last element

console.log(arr[arr.length-1]); //printing the last element of the array


/****************************************************************** */
//ACCESSING MULTIDIMENSIONAL ARRAYS

var arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

var data = arr1[0][0];

console.log(data);

//getting the value of 8:

data = arr1[2][1];

console.log(data);