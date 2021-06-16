// js/src/js_009_loop_02.js

// 중복으로 처리되는 반복문
var i = 0; 
for( ; i < 10 ; i += 1 ){
  console.log( 'i: ' , i );
  if(i === 5){
    console.log('find it!!!');
    break;
  }
}
var line = function(){
  console.log( ' --------------------------- ');
}
line();

i = 0;
for( ; i < 10; i += 1 ){
  console.log('i-', i);

  var j = 0;
  for( ; j <= i; j += 1){
    console.log( 'j: ', j );
  }
}
line();

var a = 1;
var b, rel;
for(; a <10; a++){
  console.log(a + '단');
  b = 1;
  for(; b <10; b++){
    rel = a + ' * ' + b + ' = ' + (a*b);
    console.log( rel );
  }
}


line();

// for-in
var fruits = [
  '바나나', '포도', '오렌지', '자두', '키위'
];
/*
  var i = 0;
  for(; i < 5 ; i += 1){
    console.log( fruits[i] );
  }
*/

// 배열을 for-in 문에 사용하는 것은 성능에 매우 영향을 미치므로 X
// for (i in fruits) {  console.log( fruits[i] ); }
// for-in은 배열용이 아니라 {객체} 용




// forEach