// js/src/js_004_operator.js

var n1 = 10;
var n2 = 3;
console.log( n1, n2 );

// 덧셈
var plus = n1 + n2;
console.log( 'plus: ', plus );

// 뺄셈
var minus = n1 - n2;
console.log( 'minus: ', minus );

// 곱셈
var multi = n1 * n2;
console.log('multi: ', multi );

// 나눗셈
var divide = n1 / n2;
console.log( 'divide: ', divide );
// 숫자 -> parseInt() / parseFloat()
// Math.ceil() / Math.floor() / Math.round()
// Mth.random()

// 나머지 : 나눈 후 나눌 수 없는 값을 파악하는 것
var remain = n1 % n2; 
console.log('remain: ', remain );
// 홀수/짝수, 일주일중에 3일째, .....

//--------------------------------------------
// Math함수를 이용한방법
var divide2 = n2 / n1; // 0.3
var divideR = Math.round( divide2 );
console.log( divideR );

// ----------------------------------------
var n3 = 7;
console.log( 'n3: ', n3 );
    n3 = n3 + 1;
console.log( 'n3: ', n3 );
    n3 = n3 + 7;
console.log( 'n3: ', n3 );
    n3 += 5 ;// n3 = n3 + 5;
console.log( 'n3: ', n3 );
    n3 += 10;
console.log( 'n3: ', n3 );
    n3 -= 2; // n3 = n3 -2;
console.log( 'n3: ', n3 );
    n3 *= 2; // n3 = n3 * 2
console.log( 'n3: ', n3 );
    n3 /= 2; // n3 = n3 / 2
console.log( 'n3: ', n3 );
    n3 %= 3; // n3 = n3 % 3
console.log( 'n3: ', n3 );

// -----------------------------
// 증감연산자
n3 += 1; // n3 = n3 + 1;
console.log( 'n3: ', n3 );
  n3++; // n3 += 1
console.log( 'n3: ', n3 );

console.log( n3 );
console.log( n3++ );
console.log( n3++ );
console.log( n3++ );
console.log( n3++ );
console.log( n3++ );
console.log( n3++ );
console.log( n3 );
console.log( ++n3 );
console.log( ++n3 );
console.log( ++n3 );
console.log( ++n3 );
console.log( ++n3 );
console.log( ++n3 );
console.log( ++n3 );
console.log( ++n3 );
console.log( ++n3 );
console.log( ++n3 );
console.log( ++n3 );
console.log( n3 );
console.log( --n3 );
console.log( --n3 );
console.log( --n3 );
console.log( --n3 );
console.log( n3 );
console.log( n3-- );
console.log( n3-- );
console.log( n3-- );
console.log( n3-- );
console.log( n3 );
// 1을 더하거나 빼는 기능

// 디자인 작업시 디자이너 본인의 관점이아닌 
// 프로그램언어 사용시 개발자 본인의 관점이아닌
// 협업, 관리용으로 제작
// 차후 사용자가 쓰기편하게/ 유지보수가 용이하게