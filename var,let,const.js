/*var: The scope of a variable defined with the keyword “var” is limited to the “function” within which it is defined. If it is defined outside any function, the scope of the variable is global.
var is “function scoped”.

let: The scope of a variable defined with the keyword “let” or “const” is limited to the “block” defined by curly braces i.e. {} .
“let” and “const” are“block scoped”.

const: The scope of a variable defined with the keyword “const” is limited to the block defined by curly braces. However if a variable is defined with keyword const, it cannot be reassigned.
“const” cannot be re-assigned to a new value. However it CAN be mutated.*/


{
  var a=10;
  console.log(a);
} //block 1
{
  a++;
  console.log(a);
} //block 2
/* Since we are using "var a=10", scope of "a" is limited to the function within which it is defined. In this case it is within the global function scope */

{
 let a=10;
 console.log(a);
} //block 1
{
  
  a++;
  console.log(a);
} //block 2
/* Since we are using "let a=10", scope of "a" is limited to block 1 and "a" is not recognized in block 2 */



{
 const PI=3.14;
 console.log(PI);
} //block 1
{
  const PI=3.14;
  console.log(PI);
} //block 2
/* Since we are using "const PI=3.14", scope of "PI" is limited to block 1 and "PI" is not recognized in block 2 */