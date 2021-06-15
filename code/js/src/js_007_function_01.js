// js/src/js_007_function_01.js

var i = 10;
var j = 3;

// var k = i + j;
// console.log(k);


function plusFn(a, b){
  var k = a + b;
  console.log( k );
  return k;
}




var r = plusFn(1, 5);
plusFn(4, 3);
plusFn(i, j);
plusFn(j, j);
plusFn(i, i);
plusFn(500, 500);

// console.log( k );