// js/src/js_010_object_method_01.js

var drink;
// drink = new Object;
// drink = new Array;
    drink = [];
    drink[0] = 'orange';
    drink[1] = 'grape';
    
    // push(뒤에추가), pop():뒤빼기 unshift(앞추가),  shift(): 앞 빼기
    drink.push('banana');
    drink.push('kiwi');
    drink.push('avocado');
    drink.push('lemon');

    drink.pop();
    drink.pop();
    drink.pop();

    drink.shift();
    drink.shift();

    drink.unshift('americano');
    drink.unshift('milk');

console.log( drink );

var url = 'https://en.dict.naver.com/#/search?query=check';
// split(name)  : name을 기준으로 배열로 처리
// indexOf(value)  : value값이 내용에서 존재하는지, 몇번째 위치해 있는지 파악

var conUrl = url.split('/');
var urlIndex = url.indexOf('naver');
console.log( urlIndex );

// -=--------------------------------------

var tel = ['010', '7777','5667'];
// join('기호') : 배열로 되어있는 요소들을 기호형태를 기준으로 묶어주는 기능
var telNum = tel.join('-');
console.log(telNum);

var list = ['coffee', 'drink', 'juice', 'fruits', 'vitamin'];
list.sort(); // 정렬
list.reverse(); // 순서를 뒤집기
console.log( list );

//메소드 :  무엇을.기능수행() 


// 변수값 처리방법

var rel = "값";
var rel2 = rel;
console.log(rel, rel2);
rel = '바꿔보면?';
console.log(rel, rel2);

var arrRel = ['값1'];
var arrRel2 = arrRel;
console.log( arrRel, arrRel2 );
arrRel.push('값2');
console.log( arrRel, arrRel2 );

var objRel = { 'a': 1 };
var objRel2 = objRel;
console.log( objRel, objRel2 );
objRel.a = 5;
objRel.b = 15;
console.log( objRel, objRel2 );

