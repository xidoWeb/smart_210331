// ../js/src/js_003_dataType.js


// 이름()  -> 함수 호출
// 이름(매개변수) ->  함수를 호출할 때에는 매개체가 되는 변수를 넣는다.
// 매개변수(parameter) -> 인수(argument) , 인자(parameter)  사실 같은아이를 지칭

var type;

// 숫자: number
var n = 10;
type = typeof(n);
console.log(n, type);

// 문자: string
var t = 'text';
type = typeof(t);
console.log(t, type);

// 불리언(boolean): true, false
var bool = false; 
type = typeof(bool);
console.log( bool, type );

var nn = null;
type = typeof(nn);
console.log(nn, type);

console.log('my: ', my);


var und = undefined;
type = typeof(und);
console.log(und, type);





var my;