/*Boolean
A boolean represents only one of two values: true, or false. Think of a boolean as an on/off or a yes/no switch.*/
var boo1 = true;
var boo2 = false;

/*Number
There is only one type of Number in JavaScript. Numbers can be written with or without a decimal point. A number can also be +Infinity, -Infinity, and NaN (not a number).*/
var num1 = 32;
var num2 = +Infinity;

/*String
Strings are used for storing text. Strings must be inside of either double or single quotes. In JS, Strings are immutable (they cannot be changed).*/
var str1 = 'hello, it is me';
var str2 = "hello, it's me";

/*Null
Null has one value: null. It is explicitly nothing.*/
var nothing = null;

/*Undefined
A variable that has no value is undefined.*/
var testVar;
console.log(testVar); // undefined

/*Symbol
Symbols are new in ES6. A Symbol is an immutable primitive value that is unique. For the sake of brevity, that is the extent that this article will cover Symbols.*/
const mySymbol = Symbol('mySymbol');
