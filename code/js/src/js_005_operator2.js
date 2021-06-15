// js/src/js_005_operator2.js

// 크다(>), 작다(<), 크거나같다(>=), 작거나같다(<=)

var n = 10;
var n2 = 20;
var result = n > n2;
console.log( result );

result = n < n2;
console.log( result );

result = n <= n2;
console.log( result );

// 삼항연산자

// (조건) ? 조건의참 : 조건의거짓 ;
var k;
( result ) ? k = 'good' : k = 'sad' ;
console.log( k );

// &&, || 
// & : and -> 좌/우를 비교해서 모두 참인지 여부
// | : or -> 좌/우를 비교해서 둘중 하나라도 참인지 여부 파악
var l;
// (false & true) ? l='good'  : l='bad' ;
(false && true) ? l='good'  : l='bad' ;
console.log( l );
(true || false) ? l='good'  : l='bad';
console.log( l );

// 구현의 속도를 높이기위해, 
// &&는 거짓의 상태가 먼저 오는것을 ,
// || 참의 상태가 먼저 오는 것을 
// 코드가 짧은것/가독성이 좋은것을 먼저

// ==, ===
// !=, !==
