// Q.1 Write a JavaScript function that takes an array of strings and returns a new array with each string capitalized.
const arr = ["sadhvi", "shivangi","pooja"];  //declaring array

function capital(arr) {   //writing a function with name capital
    return arr.map(str=>str.charAt(0).toUpperCase()+str.slice(1))  //mapping over each string as an array
}
console.log(capital(arr))   //displaying output


// Q.2 Create a function that returns the second largest element in an array.
const num = [10, 20, 30, 40];  //declaring array
function secondlargestnum(arr) {  //writing the function with name secondlargestnum
    if(arr.length < 2) {     //comparing if the length of array is less than 2
        return 'invalid input';   //if the conditio is true than it will show following output
    }
    arr.sort((a,b) => a-b);   //sorting the array
    return 'the second largest element is ' +arr[arr.length-2];  //returning the string with second largest number
}
console.log(secondlargestnum(num))  // displaying the output


// Q.3 Write a JavaScript function that takes an array of objects and a key, and returns an array of values corresponding to that key.
const d = [            //declaring the array of object
    {
        name: 'cherry',
        price: 299,
    },
    {
        name: 'mango',
        price: 350,
    },
    {
        name: 'apple',
        price: 150,
    },
]
function fruits(d,name) {          //writing the function
    return(d.map(obj => obj[name]));  //creates a new array with the help of map method
}
const e = fruits(d,'name');  //stores the returned array in variable
console.log(e)     //printing the array


// Q.4 Calculate the factorial of every element in an array and store it in a new array.
function calculate(arr) {       //declaring the function
    let result = [];            //initializing the empty array

    for (let i = 0; i < arr.length; i++) {     //Iterate through each element in the input array arr
        let factorial = 1;                     //Initialize factorial to 1 for calculating factorial of arr[i]
        for (let j = 1; j <= arr[i]; j++) {    //calculate factorial of array[i]
            factorial *= j;                    
        }
        result.push(factorial);                //push the factorial in result
    }

    return result;                             //return the array contaning the factorial result
}

const arr1 = [3, 5, 2, 4];                    // Define an array arr1 with numbers for which factorials will be calculated
const b = calculate(arr1);                    // Call the calculate function with arr1 as the argument and store the returned array in variable b
console.log(b);                               //displaying the output


// Q.5 Create a function to find the intersection of two arrays.
function intersection(arr1, arr2) {    //declaring a functio with 2 arrays
    return arr1.filter(value => arr2.includes(value));   //using the filter method on arr1 to iterate elements
  }
  
  const array1 = [1, 2, 3, 4];    //declaring array1
  const array2 = [3, 4, 5, 6];    //declaring array2
  
  console.log(intersection(array1, array2));   //displaying the output