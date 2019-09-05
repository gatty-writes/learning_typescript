"use strict";
//string
var userName = 'Ajith';
console.log(userName);
// number
var someNumber = 34;
console.log(someNumber);
//boolean
var isBoolean = false;
console.log(isBoolean);
// Array of strings
var stringArray = ['reading', 'cooking'];
console.log(stringArray);
//Array of numbers
var numberArray = [1, 2, 4];
console.log(numberArray);
// Array of type any
var anyArray = ['typescript', 'testing'];
console.log(anyArray);
anyArray = [3, 4, 5, 6];
console.log(anyArray);
// tuples
var address = ['bangalore', 43];
console.log(address);
// enum types
var myColor;
(function (myColor) {
    myColor[myColor["Blue"] = 0] = "Blue";
    myColor[myColor["Red"] = 1] = "Red";
    myColor[myColor["Black"] = 2] = "Black";
})(myColor || (myColor = {}));
var color = myColor.Black;
console.log(color);
// enum with custom values
var customValues;
(function (customValues) {
    customValues[customValues["value1"] = 5] = "value1";
    customValues[customValues["value2"] = 2] = "value2";
})(customValues || (customValues = {}));
var cus = customValues.value1;
console.log(cus);
// function returns string
function returnUsername() {
    return userName;
}
console.log(returnUsername());
// function which retruns void
function samppleVoidFunction() {
    console.log('this is a void function');
}
// calling the void function
samppleVoidFunction();
// specifying the types to the arguments
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(4, 5));
// Objects 
var userData = {
    name: 'ajith',
    age: 28
};
console.log(userData);
//complex objects
var complex = {
    data: [1, 2, 4],
    output: function (all) {
        return this.data;
    }
};
console.log(complex);
var complex2 = {
    data: [4, 5, 6],
    output: function (all) {
        return this.data;
    }
};
console.log(complex2);
// union types
var myAge = 27;
myAge = '27';
// check the types
var str = 45;
if (typeof str == 'string') {
    console.log('str is a string');
}
else {
    console.log('str is not a string');
}
