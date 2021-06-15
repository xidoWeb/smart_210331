// js/src/js_006_condition.js

// 삼항연산자

var boxColor = 'black';
var fontColor = 'white';
var borderRadius = 0;

// ----
boxColor = "lightGray";
// (boxColor === 'black') ? fontColor = 'white' : fontColor='red'; borderRadius='10px' ;

// 단수 분기
  /*
      if(조건){
        // 조건이 참일 경우 수행
      }else{
        // 조건이 거짓이면 수행
      }
  */
if(boxColor === 'black'){
  fontColor = 'white';
  borderRadius = 0;
}else{
  fontColor = 'red';
  borderRadius = '10px';
}
console.log( fontColor, borderRadius );

/*
#testBox_01 { 
  width:250px; height:auto; 
  color:#151515; font-size:2rem;
  background-color: #dda; 
}
 */

var tBox1 = document.getElementById('testBox_01');
// var tBox1 = document.querySelector('#testBox_01');

// tBox1.style.width = '250px';
// tBox1.style.height = 'auto';
// tBox1.style.color = '#151515';
// tBox1.style.fontSize = '2rem';
// tBox1.style.backgroundColor = '#dda';

tBox1.style = "width:250px; height:auto; color:#151515; font-size:2rem; background-color: #dda;";

// console.log( tBox1.style.width );
var tBoxW = tBox1.style.width;
if(tBoxW >= '400px'){
  tBox1.style.backgroundColor = '#dda';
  tBox1.style.color = '#fda';
}else{
  tBox1.style.backgroundColor = '#adf';
  tBox1.style.color = '#f00';
}
// ------------------------------------
/*
if(조건){
  // 조건 참
}else if(새로운 조건){
  // 새로운 조건 참
}else if(또다른 조건){
  // 또다른 조건 참
}else {
 // 거짓 
}
*/

var dataN = '50';
var result;
if(dataN > 80){
  result = '당신의 점수는 A입니다.';
}else if(dataN <= 80 && dataN > 70){
  result = '당신의 점수는 B입니다.';
}else if(dataN <= 60){
  result = '당신의 점수는 마음속의 A입니다.';
}else {
  result = '당신의 점수는 당신의 생각대로 입니다.';
}
console.log( result );


// ------------------------------------------
// 다수 분기