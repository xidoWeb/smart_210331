# javascript 기초_3-2 - 문법(반복문)

지난시간에는 제어명령어중 분기와 관련된 `if`와 `switch`에 대해 알아보았습니다.

---
조건분기 처리와 동일하게 자주 이용되는 것이 **반복문**입니다.
반복문에는 `for`, `for~in`, `while`, `do~while`등 비슷하면서 다른 문법들이 존재합니다.
이번시간에는 각각의 반복문이 하는 기능과 내용에대해 이해해 보도록 하겠습니다.

---

 프로그램의 구조는 3가지로 구분이 가능합니다.

- 기술된 순서대로 처리를 행하는 **순차** 구조
- 조건에 따라 처리를 분기하는 **선택** 구조
- 특정의 처리를 반복 실행하는 **반복** 구조

---

[TOC]

---

## 반복

- while / do~while : 반복문/최소 한번은 실행후 반복
- for : 반복문
- for~in : 객체를 순환할때 사용
- forEach : 각각 처리하는 구문
- break/continue : 상황에 따른 종료 및 건너띄기

---

### while

while 문은 어떤 조건문이 참이기만 하면 문장을 계속해서 수행합니다. while 문은 다음과 같습니다.

```javascript
while(조건식){
 // 조건식이 true일 때에 실행되는 명령
}
```

만약 조건문이 거짓이 된다면, 그 반복문 안의 문장은 실행을 멈추고 반복문 바로 다음의 문장으로 넘어갑니다.

---

조건문은 반복문 안의 문장이 실행되기 전에 확인 됩니다. 만약 조건문이 참으로 리턴된다면, 문장은 실행되고 그 조건문은 다시 판별됩니다. 만약 조건문이 거짓으로 리턴된다면, 실행을 멈추고 while문 바로 다음의 문장으로 넘어가게 됩니다.

이전 설명과 마찬가지로 `{ }`를 생략할 수 있습니다.

---
```javascript
while(조건식)
  // 조건식이 true일 때에 실행되는 명령
```

하지만 권하지는 않습니다. 

---

```javascript
var n = 0;								// 변수 'n' 의 값 0
var x = 0;								// 변수 'x' 의 값 0
while (n < 3) {							// while 진행, n의 값이 3보다 작을때 까지 진행
  n++;									// 변수 'n'의 값에 1씩 더하기
  x += n;								// 변수 'x'의 값에 'n'의 값을 계속 더하기
  console.log(n);
}
console.log(x);
```

위 내용은 `while`의 반복 코드를 진행하게 되는 간단한 예시 입니다.

---
변수 `n`의 값을 0부터 시작해서, 3의 값을 가질때 까지라는 조건을 가지고 있는 `while`문을 진행하라는 내용을 담고 있습니다.
이때 `n`의 값을 계속 조건의 값이 더이상 진행되지 않고 멈출 수 있는 조건값을 처리해 주어야합니다.
이를 작성하지 않으면, `while`은 무한으로 동작하도록 처리됩니다.

```javascript
var n = 0;								// 변수 'n' 의 값 0
var x = 0;								// 변수 'x' 의 값 0
while (n < 3) {							// while 진행, n의 값이 3보다 작을때 까지 진행
  n--;									// 변수 'n'의 값에 1씩 빽
  x += n;								// 변수 'x'의 값에 'n'의 값을 계속 더하기
  console.log(n);
}
console.log(x);
```

위 내용은 `n`의 값을 1씩 더하는 것이 아닌 빼도록 처리하고 있습니다.
이로인해 `while`은 멈출 수 없이 계속 동작하도록 됩니다.

결국 `while`은 무한반복을 하도록 만드는 요인이 되는 것 입니다. 

---

#### 무한루프

자바스크립트에서는 **무한루프**라는 것이 있습니다.
영원히 종료되지 않는(종료조건이 부합되지 않는 상태)루프를 말합니다.

```javascript
var n = 0;
while (true) {
  console.log("Hello, world_" + ++n);
}
```

위 내용은 과연 어떻게 될까요?
결과는 이전과 마찬가지로 무한 반복 처리됩니다. 
`while`의 조건식에서 무조건 `true`로 처리하였기 때문에 계속 진행 될 수 밖에 없는 결과를 만들어 내는 것 입니다.

---

간단한 문제를 만들어 보겠습니다.
1부터 100까지의 합이 무엇인지 만들어 보세요.

---

```javascript
var num = 0;
var max = 0;
while(num <= 100){
  //num ++;			// (num < 100) 조건일경우
  max += num;
  num ++;
}
console.log('1부터 100까지의 총 합은: ' + max + ' 입니다.');
```



---

### do ~ while

`do ~ while`문의 내용은 일단 한번은 실행한다! 라는 조건이 들어갑니다.
`while`의 내용은 상황에 따라 조건이 처음부터 실행이 안될 수도 있습니다.
간단한 표현 형태를 먼저 보도록 하겠습니다.

```javascript
do{
  // 처음한번은 무조건 실행, 
  // 이후, 조건식이 true일때에 실행되는 명령
} while(조건식);				// 필요한 조건식을 나중에 작성
```

위 내용을 보면 `do`의 표현식이 먼저 진행 하게 되어 있습니다.
우선 실행하는 내용을 담는 곳입니다. 

이후, 필요한 코드의 진행을 하고 `while`의 조건식을 이용하여, 내용의 조건을 진행하도록 처리하게 됩니다.

```javascript
var text = '';
var i = 10;
do {
    text += "The number is " + i;
    i++;
console.log(text);
} while (i < 10);
```

위 내용을 통해서 확인해보면 `i`는 **10**이라는 초기값을 가지고 있습니다.
내용상 마지막에 있는 `while`의 조건식을 확인해소면 `i<10`이라는 조건이 붙어있습니다.
**10보다 작을때(미만) 까지** 라는 조건이 들어가는 내용입니다.
하지만 이미 10이라는 값을 가지고 있는 상태이기 때문에 조건을 충족한 상태입니다. 
이전의 `while`이었다면, 실행하지 않았을 내용이지만, `do`라는 구문이 들어감으로 인하여,
1차 진행이 먼저 실행되게 되는 구문입니다. 

---

### for

조건식의 진위(true/false)에 대응하여 루프를 제어하는 반복문이 `while/do~while` 이라면,
미리 지정한 횟수만큼 반복처리를 행하는 명령이 `for` 문 입니다.

`for`는 가장 많이 사용하는 명령구문입니다. 
꼭 익혀두셔야 하는 내용이니 차근 차근 익혀보세요.

```javascript
for (초기화식; 루프 계속 조건식; 증감식){
  // 루프 내에서 실행하는 명령;
}
```

위 내용은 `for`문의 기본 내용입니다.
첫번째 줄에서 설명되어진 부분에서는 `초기화식`부분에 첫번째 최초의 실행할 값을 입력하게 합니다.
간단하게 말하자면 **0부터 10 미만이 될때까지 반복처리할 내용에서 0에 해당하는 값**이라고 판단하면 쉽습니다.
이후 **`초기화식`에서 조건이 만족할 때까지** 에 해당하는 부분이 `루프 계속 조건식`에 해당됩니다.
이러한 **조건을 만족할 때 까지 반복해서 1씩 더해라(혹은 빼라)**는 내용을 처리하는 것이 `증감식`인 것입니다.

위 과정이 진행되는 내용에서 **조건식이 만족할 때까지 `{  }`안의 내용은 반복적으로 진행**되게 되는점을 잊지 마세요.

```javascript
for (var i=0; i < 10; i++){
  console.log(i+'의 값을 도출합니다');
}
```

위 내용은 이전의 내용을 간단하게 처리한 내용입니다.
최초의 0을 설정하기 위해 
변수 `i`를 만들고, 
변수 `i`를 10미만이 될때까지 라는 조건을 생성,
변수 `i`에 1씩 더해서 반복 처리해라!라는 조건을 만든 것 입니다. 

이를 통해 `console.log( i + '의 값을 도출합니다');`라는 내용이 도출되게 됩니다.
이때 `i`는 변수 `i`의 값이 반복하는 상황에서 변하기 때문에 해당하는 값을 나타나게 처리하는 것입니다. 

```javascript
var array = ['포도', '사과', '바나나', '망고'];
 
for(var i=0; i<array.length; i++) {
    console.log(array[i]);
}
```

`for`는 위 내용처럼 배열형식의 내용을 반복해서 처리할 수도 있습니다.

내용의 표현식에서 작성되고 있는 변수를 잠시 보겠습니다.
`for`의 내용이 끝난 시점에서 `i`의 값은 무엇일까요?

```javascript
var array = ['포도', '사과', '바나나', '망고'];
 
for(var i=0; i<array.length; i++) {
  //  console.log(array[i]);
}
console.log(i);
```

결과는 숫자 `4`를 도출하게 됩니다.
`for`가 이미 끝난 시점인데도 불구하고 변수 `i`와 그값은 살아있게 됩니다.

바꿔 말하자면 `for`를 동작하는 내부에서 `i`는 지역변수로 동작하는 것이 아니라는 이야기 입니다. 
그렇기 때문에 아래처럼 표현을 바꿀 수도 있습니다. 

```javascript
var array = ['강동원', '이민기', '원빈', '정우성'];
var i = 0; 
for(; i<array.length; i++) {
    console.log(array[i]);
}
console.log(i);
```

위 내용을 작성하여도 결과는 문제 없이 처리되는 것을 알 수 있습니다. 
그렇기 때문에 반드시 변수의 값을 초기화 해야한다는 점을 기억해 주어야합니다

이런 문제를 해결하기 위해 `javascript`는 `ECMA6`로 넘어가게 되면서 새로운 변수를 두가지 추가하게 됩니다.
바로 `let`과, `const`입니다. 

```javascript
var array = ['소이현', '설현', '박보영', '소진'];

for(let i = 0; i<array.length; i++) {
    console.log(array[i]);
}
console.log(i);
```

위 내용을 보면 `for`문안에서 진행되는 내용은 문제없이 표기를 하지만, 
외부에서 작성된 변수 `i`의 코드는 에러를 발생하게 됩니다. 
이는 `i`를 인지하지 못한다는 뜻을 말합니다.

즉, `let`으로 작성되는 변수는 임시로 처리되는 변수의 역할을 하게 됩니다.
잠시 보여드린 변수명이지만 `var`로 작성되던 변수할당은 점점 사라지고 `let`의 표현이 늘어날 것이므로, 
미리 간단하게 보여드린 현재 내용을 기억하면 좋습니다. 

또한, 위에서 언급하지는 않았지만 `const`는 `let`과 같이 나온 변수할당시 필요한 표현으로 
정확하게 말하자면 변수가 아닌 **상수**에 속합니다.
본 내용은 `ECMA6`를 설명하는 장이 아니므로, 차후 **ECMA6**의 강의 내용에서 설명하겠습니다.

다소 특이한 식을 만들어 보겠습니다.

```javascript
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

for (;cars[i];) {
    console.log(text += cars[i]+' ');
    i++;
}
```

위 내용은 `for`문의 내용입니다만, 특이하게도 `초기화식`과 `증감식` 부분이 비어있습니다.
이는 아래에서 작성된 `while`문의 내용과 동일한 코드의 내용인 것을 알 수 있습니다.

```javascript
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

while (cars[i]) {
    console.log(text += cars[i]+' ');
    i++;
}
```

위 내용은 `while`문을 작성한 내용입니다. 
공통점을 찾으셨나요?

`for`는 이처럼 `증감식`을 조건식의 작성부분이아닌 내용의 말미에 작성할 수 도 있습니다.
단, `;`를 반드시 작성해 주어야 합니다.
이는 식의 구분을 위한 표기법 입니다.

`for`의 경우는 중첩처리되는 경우가 상당히 많습니다. 
연습으로 사용하는 몇가지 예시를 보도록 하겠습니다. 

```javascript
for(var i=0; i<=3; i++){
  for(var j=1; j<=3; j++){
    console.log("i: " + i, "j: "+j);
  }
}
```

위 내용을 통해 반복문이 어떻게 진행되고 있는지 이해해 보세요.
반복문의 중첩처리의 과정을 이해하게 됩니다.

```javascript
for(var i=0;i<5;i++){
   // console.log("*");
  documnet.write('*', '<br/>');					
  // chrome에서 동일코드 사용시(중첩) 숫자로 표기되어 나오는 혼돈을 막기위해 'document.write()'사용
  }
```

위 내용은 이전의 내용을 작성해 보셨으니 간단하게 이해할 수 있는 내용입니다. 

```javascript
for(var i=0;i<5;i++){
   var count = 1;
   var result = "";
   for(var j=0; j<count; j++){
    result+="*";
    document.write(result, '<br>');
  }
}
```

위 내용은 이전의 작성된 내용과 크게 다르지 않습니다.
왜 동일한 코드의 내용이 진행되는 것 일까요?
코드내용을 하나씩 작성하여 결과를 유추해 보세요.

```javascript
for(var i=0;i<5;i++){
   var count = 5;
   var result = "";
   for(var j=0; j<count; j++){
    result+="*";
    document.write(result, '<br>');
  }
}
```

이전의 내용과 동일하지만 변수  `count`의 값이 다릅니다.
결과는 어떻게 나오는지 확인하세요. 또한 어떻게해서 그런 결과물이 나오게 되는지 유추해 보세요.

```javascript
for(var i=0;i<5;i++){
   var count = i + 1;
   var result = "";
   for(var j=0; j<count; j++){
    result+="*"; 
   } 
   document.write(result,"<br>");  
}
```

위 내용이 최종적으로 만들려고 하는 코드의 내용입니다. 
이전의 코드와 마찬가지로 변수 `count`의 값이 다릅니다. 
내용을 분석해 보시고, 왜 그런 결과물이 나오게 되는지 판단해 보세요.

현재 화면의 크기값을 체크하는 내용을 만들어 보겠습니다.

```javascript
var screen = window.innerWidth;
console.log(screen);
```

위의 코드 내용을 통해 간단하게 화면의 크기값을 확인할 수 있습니다.

아래코드 내용을 통해 브라우저 화면의 크기값을 체크하는 내용을 만들어 보려합니다.

```javascript
var device = [480, 640, 768, 1024, 1280];
var level = ['mobile_1','mobile_2','tablet_1','tablet_2','pc_1','pc_2'];
var screen = window.innerWidth;
```

위 내용을 가지고 반복문과 조건문을 통해 화면의 크기를 판단하는 간단한 식을 만들어 보세요.

```javascript
// 기본 크기를 목록으로 설정
var device = [480, 640, 768, 1024, 1280];
// 크기별, 명칭
var level = ['mobile_1','mobile_2','tablet_1', 'tablet_2','pc_1','pc_2'];
// 화면 크기값 가져초기
var screen = window.innerWidth;
console.log('화면 크기: ', screen);
// 반복문을 통한 크기값 설정
for(var i = 0; i<device.length; i++){
// device 항목중 첫번째 항목 이내에 포함되는 경우
  if( screen <= device[0]){
    // console.log('현재 화면의 크기는 ' + device[0]+'보다 작은 크기 입니다.');
	console.log('view는 '+ level[i]+' 입니다');
  }

// device항목에 포함되는 경우
  if( device[i] < screen && screen <= device[i+1]){
    // console.log('현재 화면의 크기는 ' + device[i]+'보다 크고 '+ device[i+1]+' 보다 작은' + screen + '크기 입니다.');
	console.log('view는 '+ level[i]+' 입니다');
  }
}// for
// 목록 내에 들어있는 화면크기와 일치 하지 않는 경우
if(screen > device[device.length - 1]){
	console.log(
       '현재 화면의 크기는 ' 
       + device[i - 1] 
       + ' 보다 큰 화면입니다.');
}
```



---

### for ~ in

[`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)  문은 객체의 열거 속성을 통해 지정된 변수를 반복합니다.
 각각의 고유한 속성에 대해, JavaScript는 지정된 문을 실행합니다. for...in 문은 다음과 같습니다.

```javascript
for(가변수 in 배열/객체){
  // 루프 내에서 실행하는 명령;
}
```

```javascript
var member = ['에스프레소', '아메리카노', '아포가토'];
for (var i in memger){
  console.log('판매하는 커피는: '+ mamber[i]);
}
```

`for ~ in`루프문은 배열/객체 등의 기능을 간단하고 손쉽게 사용할 수 있다는 점에서 많은 분들이 사용하고 있으나,
실제로 배열의 내용을 `for ~ in`**루프문으로 사용해서는 안됩니다**.

- `for ~ in` 은 배열의 인덱스 번호를 취하기만 하므로 크다가 그다지 심플하게 되지 않습니다.
  (값에 대한 그 자체가 아니므로 오해를 불러일으킬 수 있습니다.)
- 코드에 따라 올바른 동작을 하지 않을 수 있습니다.
- 배열의 양이 많아질 경우 급격하게 느려지는 현상이 발생할 수 있습니다.
- `for ~ in`루프문을 사용하는 것은 연상배열(해시), 객체의 키를 조회하는 경우에 한하며, 
  일반 배열을 조회시 원칙적으로 for문을 이용하는 것이 좋습니다.

그렇다면 `for~in`은 어디에 사용하는 것일까요?

자바스크립트에서 `for…in` 문은 **객체의 프로퍼티를 순회**하는 데 사용되는 구문입니다.
문법은 다음과 같습니다.

```javascript
var triangle = {width: 30, height: 50};
for (var j in triangle){
  console.log(j + '=' + triangle[j]);
}
```

```javascript
var book ={};
book.title = 'Javascript기초이해하기';
book.publish = '아무개출판';
book.price = '24,000';

for (var k in book){
  console.log(k + '는' + book[k]);
}
```





------

### break/continue(루프 도중 Skip / 중단하기)

일반적으로 반복문의 명령인  `for`, `for~in`, `while`, `do~while`등은 
미리 정해진 종료 조건을 만족하는 타이밍에 루프를 종료합니다.

하지만, 특정 조건을 만족하는 경우에 루프를 강제적으로 중단하고 싶은 경우도 있습니다.
그러한 경우에 이용할 수 있는 것이 `break`([switch 참조](c_javascript_basics_03_1.md))입니다.

```javascript
for(var i = 1; i< 10; i++){
    if(i > 5){
      break;
    }
    console.log(i);
}
```

위 내용에서는 1부터 10까지 출력되게 만든 내용이지만, 실제로는 4까지만 출력되게 만들어버리는 구문입니다. 
`break`는 실제로 반복진행중인 내용을 강제로 정지시키는 기능을 처리할 수 있습니다.

그렇다면 일부를 건너띄고 나타나게 할 수 있는 방법은 무엇일까요?
`break`대신 `continue`를 사용하면 가능합니다. 

```javascript
for(var i = 1; i< 10; i++){
    if(i === 5){
      continue;
    }
    console.log(i);
}
```

위 내용으로 내용중 숫자 5는 건너띄고 결과물이 나타나는 것을 알 수 있습니다. 

```javascript
var result = 0;
for (var i = 0; i<= 100; i++){
  result += i;
  if(result > 1000){break;}
}
console.log('합계 값이 1000을 넘는 것은' + i);
```

```javascript
var result = 0;
for(var i = 0; i<100; i++){
  if( i % 2 == 0 ){continue;}
  result += i;
}
console.log('합계: ' + result);
```

두가지 예제를 만들어보세요.

생년월일을 작성하는 코드를 작성해보세요.
`html`의 `select`코드를 활용하여 작성하는 코드입니다. (최대 150살 까지 선택할 수 있다고 가정하겠습니다.)

두번째는 핸드폰번호를 선택하게 만들어보세요.
010부터 019까지 선택하게 만들어보세요.(015빼고는 모두 존재하는 번호입니다. )



------



##### 중첩된 루프를 한번에 빠져나오기(레이블 구문)

중첩된 루프안에서 `break/continue` 명령을 사용한 경우
`default`로 가장 안쪽의 루프를 빠져 나오게 됩니다.

```javascript
for(var i = 1; i< 10; i++){
  for(var j = 1; j<10; j++){
    var k = i * j;
    if(k > 30){break;}
    console.log(k);
  }
}
```

여기서 변수 `k`가 30이 넘는 경우에 `break` 명령을 실행하고, 있습니다.
이로인해 안쪽 루프(내부에 존재하는 for문)을 빠져 나오고 있으므로, 결과적으로 
**곱셈값이 30이하인 값만을 표시하는 구구단**이 생성되게 됩니다.

이것을 곱셈값이 30을 넘으면 구구단 출력 자체를 정지시키도록 만들고 싶다면, 아래의 내용을 참고하시면 됩니다.

```javascript
kuku:
for(var i=1; i<10; i++){
  for(var j = 1; j<10; j++){
    var k = i * j;
    if(k>30){break kuku;}
    console.log(k + '&nbsp');
  }
}
```



---

### forEach (javascript 5버전 이후사용 가능)

[forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) 문은 배열의 각 요소에 대해 지정된 작업을 수행합니다.

```javascript
arr.forEach(callback[, thisArg])
```

위 내용이 어떠한 의미를 가지고 있는지에대해 알아보도록 하겠습니다.

---

#### callback - 기본요소(매개변수)

```javascript
[배열요소].forEach(function(값, 순서, 배열요소){
   // 해당 배열요소를 통한 기능처리
});
```

```javascript
var arr = [2,5,9];
arr.forEach(function(value, index, ary){
    console.log(value, index, ary);
});

```

기본적으로 오름차순으로 처리된 배열에 있는 각 요소에 대해 한 번씩 제공한 `callback`을 실행합니다. <br />삭제 또는 비초기화된 인덱스 속성에 대해서는 호출되지 않습니다(즉 듬성듬성한 배열의).

```javascript
var arr = [2, 5, , 9];

function ArrElement(element, index, array) {
  console.log('a[' + index + '] = ' + element +' - array:'+'['+array+']');
}

arr.forEach(ArrElement);

// 인덱스 2는 배열의 그 위치에 항목이 없기에
// 건너뜀을 주의하세요.
```



---

`forEach()`는 오름차순으로 배열에 있는 각 요소에 대해 한 번씩 제공한 `callback`을 실행합니다. <br />삭제 또는 비초기화된 인덱스 속성에 대해서는 호출되지 않습니다(즉 듬성듬성한 배열의).

`callback`에는 다음 **세 인수**와 함께 호출됩니다:

- **요소 값**
- **요소 인덱스**
- **순회(traverse)될 배열**


------

```javascript
arr.forEach(callback[, thisArg])
```

매개변수에는 다음과 같은 의미를 가지고 있습니다.

- `arr`: 배열형식의 개체


- `callback`: 각 요소에 대해 실행할 함수, 인수의 갯수는 최대 3개를 받을 수 있습니다. 
  - `currentValue`: 배열에서 현재 처리 중인 요소. 
  - `index`: 배열에서 현재 처리 중인 요소의 인덱스.: 
  - `array`: `forEach()`가 적용되고 있는 배열.
- `thisArg`: 선택 사항, **this** 키워드가 *`callback`* 함수에서 참조할 수 있는 개체입니다. *thisArg*가 생략되면 **undefined**가 **this** 값으로 사용됩니다.

우리는 **callback**에 대한 내용만 파악했습니다. **thisArg**부분은 간단하게 보여드리고 넘어가도록 하겠습니다.
추후 자바스크립트에 대해 깊이 이해하신다면 더 쉽게 다가갈 수 있습니다. 

---

#### thisArg - 선택사항(참조변수)

다음 예는 배열의 각 항목에서 객체의 속성을 갱신합니다:

```javascript
var arr = [2, 5, , 9];

function ArrElement(element, index, array) {
  console.log('a[' + index + '] = ' + element +' - array:'+'['+array+']' + ' - ' + this);
}

arr.forEach(ArrElement, this);
```

달라진것은 **this** 뿐입니다.
this가 무엇일까요? 
간단하게 정의하자면 this는 두가지의 의미를 가지고 있습니다. 

1. window
2. object

위 내용에서는 어떤 의미를 가질까요?
이를 통해 다음과 같은 식을 만들 수 도 있습니다. 



---

```javascript
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- 주의
};

var obj = new Counter();
```

위 식은 배열형식을 별도로 첨부후 해당 첨부된 내용의 갯수를 파악하고 각각의 값을 더한 값을 도출하는 식입니다. 
아직은 어렵고 힘든 부분들이 많으므로, '저런식의 내용도 존재하는 구나' 라고만 파악하세요.

차후 `prototype`, `this`,`closure`에 대한 부분을 이해하시고 돌아와서 확인해 본다면
이해할 수 있는 부분입니다.

위의 식을 통해 다음과 같이 체크해 보겠습니다. 

```javascript
obj.add([2, 5, 9]);		 // 첫 배열혁식의 내용삽입 
obj.count		 // 삽입된 배열형식의 총 갯수 : 3
obj.sum 		// 삽입된 배열형식의 총 덧셈 : 16
```

