// js_012_closure.js

function outerFunc(){
  var x = 10000;
  var innerFunc = function(){ 
    console.log( x ); 
  }
  innerFunc();
}
var a = outerFunc();

// -------------------------------------------
function outerFunc2(){
  var x = 10;
  var innerFunc = function() { console.log ( x ); }
  return innerFunc;
}

var myInner = outerFunc2();
myInner();

