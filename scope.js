// //global variable
// var a = 2;

// //global function
// function b() {
//   console.log(a); //access global variable
// }
// b(); //execute global function.
var a = 2; 
function b(){
   var d = 21; //local variable
   console.log(d); //can access it inside the function
}
b();  // 21

console.log(d); //ReferenceError: d is not defined



