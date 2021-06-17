// js/src/js_dom_test_01_result.js

// var procuctArea = document.querySelector('.product_area');
//.product_area .product {}
var procuctArea = document.getElementsByClassName('product_area')[0];
var product = procuctArea.getElementsByClassName('product')[0];


// 1차 목표 : li요소를 생성하여, product내부에 삽입 (여러개)
// 생성 - createElement()
// 삽입 - appendChild()

var makeLiFn = function (){
  var makeLi = document.createElement('li');
  product.appendChild(makeLi);
}

makeLiFn();
makeLiFn();
makeLiFn();
makeLiFn();
makeLiFn();
makeLiFn();
makeLiFn();