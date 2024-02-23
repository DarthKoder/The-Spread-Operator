/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
/**
 * create variable arr1 with values [1, 2, 3]
 * create arr2 variable with the value of arr1 log second array - has same [1, 2, 3] values as arr1
 * push(4) to arr2 but this also pushes it to our first array, arr1
 * this is because our second array is not actually a copy of the first, 
 * it is a whole new variable that points to the same objects as the other 
 * because of this, anything thing we do in the second array will happen in the first, and vice versa
 * We can resolve this issue using the spread operator 
 * 
 */
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("second array:", arr2);
console.log("first array:", arr1);

// Copying an array
/**
 * create a new array, array 3,and give it the values 4, 5 and 6. 
 * To make a copy of it, create a new variable, array 4,
 * and then "spread" the first array into it, using this three dots syntax. 
 * This operator “spreads” the values of the third array into the fourth, giving you a simple way to create an entirely new object.
 * If you push a new element, like 7, into the fourth array, you can see by logging both arrays to the console that the third remains untouched. 
 * This syntax also works for copying objects. 
 */
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);


// Copying an object
/**
 * Define an object with three properties, a, b and c, and give them values of 1, 2, and 3 respectively.  
 * To make a copy of the object, simply “spread” object 1 into a new object, called object 2.
 * I can then add a new property to the  second object, and the first remains untouched. 
 * If you want to change one of the values in the original object, you can do that  
 * by simply overwriting it in the new object. 
 * In this object 3, I’m first spreading object 1, and then overwriting b from 2 to 5. 
 * log this to the console, the first object is still untouched, 
 * and the third object has the same property values, except for b which has been overwritten.
 */
let obj1 = {a: 1, b: 2, c: 3,};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 5};

console.log("first object:", obj1);
console.log("second object:", obj2);
console.log("Third object:", obj3);


// Copying only part of an array/object
/**
 * the spread operator doesn't need to make up the entirety of the object or array you create with it. 
 * In other words, if I  wanted to combine several of the objects we've worked with so far into a new object, 
 * you can define something like array 5, and inside it I can spread the first array, the first object by spreading it within curly braces,  
 * the third array, and three arbitrary values like x, y, and z.  
 * Log this new array to the console, you'll see it contains all the elements of the first and third arrays as well as a copy of  the first object, and our three new elements.
 */
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);
