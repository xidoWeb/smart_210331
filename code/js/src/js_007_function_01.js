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

// 함수기억해야하는 부분
// 1. 함수 이름지정위치
// 2. return
// 3. 전역변수/지역변수 차이
// 4. 매개변수(인수,인자)
// 5. 함수는 해당함수를 호출하지 않으면 동작하지 않는다.

// 기명함수-선언식
// function 함수의이름(){}

// 익명함수 - 1. 표현식
var myFn = function(a,b){
  var k = a * b;
  console.log( k );
  return k;
};

myFn(5, 5);
myFn(50, 2);
myFn(50, 0);

// -------------------------------
var fn = function(a){
  console.log(a + '함수 수행');
};
fn('지금 바로 ');

// 즉시실행함수 ( IIFE )
(function(a){
  console.log(a + '동작할까?');
})('지금 ')

// ------------------------------
// 생성자 함수

function fnSet(n, contry){
  this.n = n;
  this.make = '우리 부모님';
  this.contry = contry;
  this.future = 'happy';
}

var myName = new fnSet('xido', 'korea');
console.log(myName.contry);

// var myName = { n:'xido'}
// myName.n