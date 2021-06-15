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



// ==, ===
// !=, !==
