# javascript 기초_2 - 연산자

이전시간에는 변수의 값을 이용한 간단하고 다양한 내용을 익혀보았습니다.
이번시간에는 좀더 깊이있고 복잡하지만 꼭 알아야하는 **기본 연산자**에 대한 부분을 알아 보도록 하겠습니다.

---

[TOC]

---

## 연산자

자바스크립트는 다양한 연산자를 가지고 있습니다.

**연산자(Operator)**란, 부여된 변수/리터럴에 대하여 미리 결정된 어떠한 처리를 행하기 위한 기호입니다.
예를 들자면 `=`, `,`,`-`,`+` 등이 모두 연산자 라고 부릅니다. 
이때, 연산자에 의해 처리되는 [변수](b_javascript_beginners_04.md)/[리터럴](b_javascript_beginners_03.md)을 **오퍼랜드(Operand-피연산자)**라고 불립니다.

![operator](./img/operator.png)

---

## 연산자 종류

- 산술연산자
  - 사칙연산
  - 증감연산자
- 대입연산자
- 문자열 연산자
- 비교연산자
  - 등가연산자
  - 동치연산자
  - 조건연산자
  - 논리연산자
- 비트연산자
- 반대연산자
- 기타연산자


---

### 산술연산자

산술연산자는 대수 연산자라고도 하며, 표준적 사칙연산을 시작으로 수치와 관련된 연산을 행하는 것을 말합니다.

아래는 산술연산자의 연산 기호를 간단하게 표로 표현한 내용입니다.

| 연산자  |          개요          |         예시         | 예시결과      |
| :--: | :------------------: | :----------------: | --------- |
|  +   | 숫자의 덧셈(문자의경우 나열을 의미) |       3 + 5        | 8         |
|  -   |        숫자의 뺄셈        |       10 - 7       | 3         |
|  *   |        숫자의 곱셈        |       3 * 5        | 15        |
|  /   |       숫자의 나눗셈        |       10 / 5       | 2         |
|  %   | 숫자의 나머지연산(나누고 남은 값)  |       10 % 4       | 2         |
|  ++  |  전위/후위형 덧셈(1씩 더하기)   | x = 3; x++ \|  ++x | 3(4) \| 4 |
|  --  |   전위/후위형 뺄셈(1씩 빼기)   | y = 3; y-- \| --x  | 3(2) \| 3 |

---

#### 사칙연산자

**+** (더하기), **-** (빼기), ***** (곱하기), **/** (나누기), **%** (나머지)     

우리가 익히 알고 있는 **더하기, 빼기, 곱하기, 나누기**식을 포함한 것을 의미하며, 
여기에 **나머지**라는 하나의 연산을 추가합니다.

```javascript
var result;							// 변수 'result' 선언
result = 20 + 3;  					// 변수 'result' 계산값 부여(더하기)
console.log("값: ", result);  		// 변수 'result' 값 확인하기
result = 20 - 3;  					// 변수 'result' 계산값 부여(빼기)
console.log("값: ", result);  
result = 20 * 3;  					// 변수 'result' 계산값 부여(곱하기)
console.log("값: ", result);  
result = 20 / 3;  					// 변수 'result' 계산값 부여(나누기)- 정수로 변환시 parseInt()
console.log("값: ", result);  
result = 20 % 3;  					// 변수 'result' 계산값 부여(20에서 10을 나눈뒤 나머지값)
console.log("값: ", result);  
```

---

#### 문자열 연산자

---

#### 증감연산자

전위형 덧셈/뺄셈 , 후위형 덧셈/뺄셈으로 자기 자신에게 **1씩 더하거나, 1씩 뺄때** 주로 사용합니다.
작업과 동시에 값을 확인하는 경우,
**전위형**의 경우는 연산을 한 값을 도출하며, 
**후위형**의 경우는 값도출 후 연산한다는 차이를 볼 수 있습니다.

##### 전위형 덧셈

```javascript
var before = 0;
// 연산 후 확인
console.log('최초: ', before);
++before;
console.log('처음1더하기: ', before);
++before;
console.log('두번째1더하기: ', before);
//연산 자체를 확인
console.log('현재값: ', before);
console.log('바로1더하기:', ++before);
console.log('두번째 바로 1더하기:', ++before);
console.log('세번째 바로 1더하기:', ++before);
console.log('네번째 바로 1더하기:', ++before);
console.log('다섯번째 바로 1더하기:', ++before);
```



##### 후위형 덧셈

```javascript
var after = 20;
// 연산 후 확인
console.log('최초: ', before);
before--;
console.log('처음1더하기: ', before);
before--;
console.log('두번째1더하기: ', before);
//연산 자체를 확인
console.log('현재값: ', before);
console.log('바로1더하기: ', before--);
console.log('두번째 바로 1더하기:', before--);
console.log('세번째 바로 1더하기:', before--);
console.log('중간 확인하기:', before);
console.log('다시 바로 1더하기:', before--);
console.log('다시 두번째 바로 1더하기:', before--);
console.log('값 재확인:', before);
```



##### 전위형 뺄셈

```javascript
var before = 20;
// 연산 후 확인
console.log('최초: ', before);
--before;
console.log('처음1빼기: ', before);
--before;
console.log('두번째1빼기: ', before);
//연산 자체를 확인
console.log('현재값: ', before);
console.log('바로1빼기:', ++before);
console.log('두번째 바로 1빼기:', --before);
console.log('세번째 바로 1빼기:', --before);
console.log('네번째 바로 1빼기:', --before);
console.log('다섯번째 바로 1빼기:', --before);
```



##### 후위형 뺄셈

```javascript
var after = 0;
// 연산 후 확인
console.log('최초: ', before);
before--;
console.log('처음1빼기: ', before);
before--;
console.log('두번째1빼기: ', before);
//연산 자체를 확인
console.log('현재값: ', before);
console.log('결과도출 후1빼기: ', before--);
console.log('두번째 결과도출 후 1빼기:', before--);
console.log('세번째 결과도출 후 1빼기:', before--);
console.log('중간 확인하기:', before);
console.log('다시 결과도출 후 1빼기:', before--);
console.log('다시 두번째 결과도출 후 1빼기:', before--);
console.log('값 재확인:', before);
```



---

### 복합 대입 연산자

대입연산자란 지정된 변수에 값을  대입하는 연산자를 말합니다.
앞서 보던 `=`의 표기는 대입연산자의 일종입니다.

| 연산자  | 개요 (좌변값에 우변값을 대입하는 기능)                 | 예시               | 예시결과   | 뜻           |
| ---- | -------------------------------------- | ---------------- | ------ | ----------- |
| =    | 변수 등에 값을 대입한다.                         | x = 1            |        | x = 1       |
| +=   | 우변 값을 더한 값을 대입한다.                      | x = 3; x += 2    | // 5   | x = x + 2   |
| -=   | 우변 값을 뺀 값을 대입한다.                       | x = 3; x -= 2    | // 1   | x = x - 2   |
| *=   | 우변 값을 곱한 값을 대입한다.                      | x = 3; x *= 2    | // 6   | x = x * 2   |
| /=   | 우변 값을 나눈 값을 대입한다.                      | x = 3; x /= 2    | // 1.5 | x = x / 2   |
| %=   | 우변 값을 나눈 나머지 값을 대입한다.                  | x = 3; x %= 2    | // 1   | x = x % 2   |
| &=   | 우변 값을 비트 AND 연산한 값(논리곱)을 대입한다.         | x = 10; x &= 5   | // 0   | x = x & 5   |
| \|=  | 우변 값을 비트 OR 연산한 값(논리합)을 대입한다.          | x = 10; x \|= 5  | // 15  | x = x \| 5  |
| ^=   | 우변 값을 비트 XOR 연산한 값(배타논리합)을 대입한다.       | x = 10; x ^= 5   | // 15  | x = x ^ 5   |
| <<=  | 우변 값만큼 좌측 쉬프트(이동)한 결과를 대입한다.           | x = 10; x <<= 2  | // 20  | x = x << 2  |
| >>=  | 우변 값만큼 우측 쉬프트(이동)한 결과를 대입한다.           | x = 10; x >>=1   | // 5   | x = x >> 2  |
| >>>= | 우변 값만큼 우측 쉬프트한 결과를 대입한다. ([^Unsigned]) | x = 10; x >>>= 2 | // 2   | x = x >>> 2 |

\[^Unsigned]: 절대값

---

#### 구조해제

복잡한 대입 연산에서, [구조 해제 대입](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 문법은 배열의 구조나 객체를 반영하여, 
배열이나 객체에서 데이터를 추출할 수 있게 해주는 자바스크립트 표현입니다.

```javascript
var foo = ["one", "two", "three"];

// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;
```

------

#### 대입연산자 1: ( = )

자바스크립트의 연산자중 가장 많이 접하는 연산자는 대입연산자 입니다. 그중에서 가장 으뜸은 `=`기호입니다.

```
// 기본 전달방식(기본형)
var x = 1;
var y = x;
x = 2;
console.log(y);
// 참조 전달방식(참조형)
var ary1 = [0,1,2];
var ary2 = ary1;
ary1[0] = 5;
console.log(ary2);
```

자바스크립트의 데이터 형에는 크게 기본형과, 참조형으로 구분이 가능합니다.이때 위의 예시를 보면 하나는 기본형의 예시를, 또다른 하나는 참조형의 예시를 보여준 예입니다.

------

##### 기본형

기본형의 값은 변수에 직접 보관되는 값으로 변수 `x`의 값을 `y`에 인도할 경우 그 값이 복사 되도록 한 것입니다.이를 값에의한 전달 이라고 합니다.

위의 예시의 설명을 보자면 변수`x`에 1을 대입하고 `y`에 `x`를 다시 대입한 경우입니다.이럴 경우 `y`에는 1이라는 값이 대입되게됩니다. 이후 `x`의 값을 2로 변경처리하며, 이때 `y`는 2로 변경되지 않습니다.

이 대입방식은 `x`의 값을 복사한 값으로 처리된 것이기 때문에, 이후의 `x`의 값을 변경해도 `y`는 영향을 받지 않습니다.

------

##### 참조형

기본형의 내용에 비해 참조형의 경우는 좀 복잡합니다.배열 리터럴을 변수 `ary1`에 담고, 이를 다시 변수 `ary2`에 대입하고 있습니다. 이때, 참조형의 경우에는 값 자체를 담는 것이아닌 보관의 어드레스만 변수에 보관됩니다.

즉, `ary2 = ary1` 내용은 변수 `ary1`에 보관되어 있는 주소를 변수 `ary2`에 보관하고 있는 것입니다.

이러한 값의 전달방식을 **참조전달**이라고 합니다.즉, 이시점에서 `ary1`과 `ary2`는 쌍방이 모두 같은 값을 보고 있게 되는 것이기에, `ary1`의 변경은  `ary2`에도 영향을 미친다는 뜻입니다.

- **값 전달**: 값 그자체를 건네주는것
- **참조 전달**: 값을 보관하고 있는 참조 장소의 정보를 건네주는 것

------

### 비교연산자

비교연산자는 좌변/우변의 값을 비교하여 그 결과를 **true/false**(참/거짓)로 반환합니다.비교 연산자는 차후 배울 **if, do…while, while**과 같은 조건분기/반복문과 함께 처리의 분기나 종료 조건을 나타내기 위해 이용하는 것이 일반적입니다.

| 연산자 | 개요(좌변과 우변의 값을 비교)                                | 예             | 결과값   |
| ------ | ------------------------------------------------------------ | -------------- | -------- |
| ==     | 같을 경우, true                                              | 5 == 5         | true     |
| ===    | 같을 경우(데이터형 포함), true                               | 5 === 5        | true     |
| !=     | 같지 않을 경우, true                                         | 5 != 3         | true     |
| !==    | 같지 않을 경우(데이터형 포함), true                          | 5 !== 3        | true     |
| <      | 좌변이 작은 경우, true                                       | 5 < 3          | false    |
| <=     | 좌변이 작거나 같은경우, true                                 | 5 <= 5         | true     |
| >      | 우변이 작은 경우, true                                       | 5 > 3          | true     |
| >=     | 우변이 작거나 같은경우, true                                 | 5 >= 5         | true     |
| ?    : | '**조건식 ? 식1 : 식2**' 조건식이 true인경우 식1, false인경우 식2를 취한다. | (x==1) ? 1 : 0 | 1 또는 0 |

------

#### 등가연산자( == )

`==` 연산자는 좌변/우변의 값을 비교하여 같은 경우에는 true, 같지 않을 경우에는 false를 반환합니다.그러나 오퍼랜드의 데이터형에 따라 비교의 기준이 다르므로 주의가 필요합니다.

| 좌변과 우변의 형 | 데이터형           | 평가기준                                                     |
| ---------------- | ------------------ | ------------------------------------------------------------ |
| 동일             | 문자열/숫자/논리형 | 단순히 쌍방의 값이 동일한지 판단                             |
| 동일             | 배열/객체          | 참조 장소가 동일한지를 판단                                  |
| 동일             | null/undefined     | 쌍방이 모두 null/undefined 또는 null과 undefined의 비교는 모두 true |
| 틀림             | 문자열/숫자/논리형 | 문자열/논리형을 수치로 변환한 수에 판단                      |
| 틀림             | 객체               | 기본형으로 변환한 후에 판단                                  |

위의 표는 등가 연산자의 평가기준을 담은 것 입니다.

------

#### 동치연산자 ( === )

```
var a = 3, b = ' 3 ', c = '3';  

console.log( a == b ); // true, 강제 형변환  
console.log( b == c ); // false  
console.log( a == c ); // true, 강제 형변환  
  
console.log( a === b ); // false  
console.log( b === c ); // false  
console.log( a === c ); // false  
```

------

#### 조건연산자(삼항연산자)

[조건 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) 는 자바스크립트에서 3개의 항을 사용하는 유일한 연산자 입니다. <br />조건 연산자는 조건에 따라 2개의 값중 하나를 가질 수 있습니다. 문법은 다음과 같습니다:

```
조건 ? 값1 : 값2
```

`만약 조건이 참이라면, 조건 연산자는 값1을 값으로 갖습니다`.`그렇지 않은 경우 조건 연산자는 값2을 값으로 갖습니다`. <br />표준 연산자를 사용하는 어디든 조건연산자를 사용할 수 있습니다.

```
ar status = (age >= 18) ? "adult" : "minor";
```

이 구문은 age 변수가 18보다 같거나 클때 "adult" 값을 `status 변수에 대입합니다`. <br />그렇지 않은 경우, 이 구문은 "minor"값을`status`변수에 대입합니다.

------

#### 콤마 연산자

**좌우의 식을 계속해서 실행**

[콤마 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comma_Operator) (`,`)는 두 피연산자를 비교하고, 마지막 피연산자의 값을 반환합니다. 이 연산자는 주로 `for` 반복문 안에서 각각의 시간에 복수의 변수들을 갱신하기 위하여 사용합니다.

예를 들어, a는 각 변에 10개의 원소가 있는 2차원 배열일때, 다음의 코드는 콤마 연산자를 두 변수를 한번에 증가 시키기 위하여 사용하였습니다. 이 코드는 배열의 대각선에 위치한 원소를 출력합니다:

```
for (var i = 0, j = 9; i <= j; i++, j--){
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
}
```

------

### 논리연산자 (Logical Operators)

복수의 조건식(또는 논리 값)을 논리적으로 결합하여 그 결과를 true/false 값으로 건네는 방법입니다.보통 앞 항에서의 비교 연산자와 조합해서 사용하며, 보다 복잡한 조건식을 표현할 수 있습니다.

| 연산자 | 개요                                  | 예                         | 결과 |
| ------ | ------------------------------------- | -------------------------- | ---- |
| &&     | 좌우 식이 모두 true인 경우, true      | 100 == 100 && 1000 == 1000 | true |
| \|\|   | 좌우식의 어느 쪽이든 true인 경우 true | 100 == 100 \|\| 1000 == 50 | true |
| !      | 식이 false인 경우, true               | !(10 > 100)                | true |

위 표는 자바스크립트에서 이용 가능한 논리 연산자 입니다.

------

#### &&연산자

```
a1 = true  && true      // t && t returns true
a2 = true  && false     // t && f returns false
a3 = false && true      // f && t returns false
a4 = false && (3 == 4)  // f && f returns false
a5 = "Cat" && "Dog"     // t && t returns "Dog"
a6 = false && "Cat"     // f && t returns false
a7 = "Cat" && false     // t && f returns false
```

------

#### ||연산자

```
o1 = true  || true       // t || t returns true
o2 = false || true       // f || t returns true
o3 = true  || false      // t || f returns true
o4 = false || (3 == 4)   // f || f returns false
o5 = "Cat" || "Dog"      // t || t returns "Cat"
o6 = false || "Cat"      // f || t returns "Cat"
o7 = "Cat" || false      // t || f returns "Cat"
```

------

#### !(반대)연산자

```
n1 = !true              // !t returns false
n2 = !false             // !f returns true
n3 = !"Cat"             // !t returns false
```

------

다음 내용들은 동일한 결과물들 끼리의 내용들을 묶어놓은 것들입니다.한번씩 눈여겨 봐주시고 작업시 고려해서 진행한다면, 좋을듯 합니다. 

#### convert AND to OR

```
bCondition1 && bCondition2
!(!bCondition1 || !bCondition2)
```

#### convert OR to AND

```
bCondition1 || bCondition2
!(!bCondition1 && !bCondition2)
```

#### Converting between NOTs

```
!!bCondition
bCondition
```

#### 중첩 제거

```
bCondition1 || (bCondition2 && bCondition3)
bCondition1 || bCondition2 && bCondition3
```

#### Removing nested OR

```
bCondition1 && (bCondition2 || bCondition3)
!(!bCondition1 || !bCondition2 && !bCondition3)
```

---
### 비트연산자

[비트단위 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) 는 피연산자를 10진수, 16진수, 8진수처럼 취급하지 않고 32비트의 집합으로 취급합니다. 
간단하게 말하자면 2진수로 변환한 후 값을 계산하고 다시 원래의 진수로 전환하여 숫자값을 반환하는 방법입니다.
예를 들면, 10진수의 9는 2진수의 1001로 나타낼 수 있습니다. 
비트 단위 연산자는 이진법으로 연산을 수행하지만, 자바스크립트의 표준 숫자값을 반환합니다..

현시점에서 비트연산자에 대한 내용은 다루지 않습니다. 
비트연산자에 대해 상세하게 이해하고 싶다면 [이곳](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#비트단위_연산자)을 확인하세요.

---

### 기타연산자
| 연산자        | 개요                      |
| ---------- | ----------------------- |
| ,(콤마)      | 좌우의 식을 계속해서 실행          |
| delete     | 객체의 프로퍼티나 배열의 요소를 삭제    |
| instanceof | 객체가 지정된 클래스의 인스턴스인지를 판정 |
| new        | 새로운 인스턴스를 생성            |
| typeof     | 오퍼랜드의 데이터형을 취득          |
| void       | 미정의 값을 되돌림              |



---
### 연산자 우선순위 및 결합 순서

어떤 식 안에 복수의 연산자가 포함되어 있을 경우에는 "어떠한 순서로 처리할지?"를 판단할 필요가 있습니다.
이것을 결정하는 것이 연산자의 **우선 순위**와 **결합 순서**입니다.
특히, 복잡한 식을 기술하는 경우에는 이것을 잘 이해해 두지 않으면, 
생각지도 못한 곳에서 의도하지 않은 결과가 발생할 수도 있으니 주의가 필요합니다.

---

#### 우선순위

기본적인 우선순위는 이미 우리가 알고 있는 부분들입니다. 

```javascript
var result = 3+4*5;
console.log(result); 	// 23
```

곱셈 연산자( **\*** )는 덧셈 연산자( **+** ) 보다 높은 우선순위를 가지면서 먼저 실행되게 됩니다. 



---

#### 결합순서

결합성은 같은 우선순위를 가진 연산자들의 처리 순서를 결정하게 합니다.

```javascript
a 연산자 b 연산자 c
```

위 내용을 기반으로 **좌결합성**(왼쪽에서 오른쪽으로 결합한다.)의 형태인  `(a 연산자 b) 연산자 c`로 처리 방법과<br />
반면에 **우결합성**(오른쪽에서 왼쪽으로 결합한다.)의 형태인 `a 연산자 (b 연산자 c)`의 처리 방법을 알아 볼 수 있습니다. <br />
우리가 사용하는 **대입 연산자**는 우결합성을 띠므로 다음과 같이 쓸 수 있습니다.

```javascript
a = b = 5;
```

이 구문이 실행되면 `a`와 `b`는 5가 됩니다. <br />
이는 대입 연산자( **=** )가 대입한 값을 반환하기 때문입니다. <br />
처음에 `b`가 5로 설정되게 됩니다. <br />
그 다음에 `a`도 `b = 5`가 반환하는 값, 즉 그 대입 연산의 우측 피연산자인 5로 설정이 됩니다.



---

 다음 표는 **우선순위**를 기준으로 내림차순으로 정렬되었다.
(순위가 높은 숫자를 가진 것이 더 우선순위를 가집니다.)

| 우선순위 | 연산자 유형                                                  | 결합성                                  | 연산자           |
| -------- | ------------------------------------------------------------ | --------------------------------------- | ---------------- |
| 19       | [묶음(괄호)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping) | 없음                                    | `( … )`          |
| 18       | [멤버 접근](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Dot_notation) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… . …`          |
|          | [연산된 멤버 접근](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Bracket_notation) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… [ … ]`        |
|          | [객체 생성](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Special/new)(인수 목록 있음) | 없음                                    | `new … ( … )`    |
| 17       | [함수 호출](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… ( … )`        |
|          | [객체 생성](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)(인수 목록 없음) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `new …`          |
| 16       | [후위 증가](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment) | 없음                                    | `… ++`           |
|          | [후위 감소](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement) | 없음                                    | `… --`           |
| 15       | [논리적 NOT(논리 부정)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `! …`            |
|          | [비트 NOT(비트 반전)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `~ …`            |
|          | [수화(단항 플러스)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `+ …`            |
|          | [음수화(단항 부정)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `- …`            |
|          | [전위 증가](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `++ …`           |
|          | [전위 감소](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `-- …`           |
|          | [자료형 구하기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `typeof …`       |
|          | [반환 무시](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `void …`         |
|          | [제거](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `delete …`       |
| 14       | [거듭제곱](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `… ** …`         |
|          | [곱셈](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… * …`          |
|          | [나눗셈](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… / …`          |
|          | [나머지](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… % …`          |
| 13       | [덧셈](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… + …`          |
|          | [뺄셈](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… - …`          |
| 12       | [비트열 좌측 시프트](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… << …`         |
|          | [비트열 우측 시프트(산술 우측 시프트)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… >> …`         |
|          | [비트열 부호 없는 우측 시프트(논리 우측 시프트)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… >>> …`        |
| 11       | [작음](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… < …`          |
|          | [작거나 같음](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than__or_equal_operator) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… <= …`         |
|          | [큼](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… > …`          |
|          | [크거나 같음](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… >= …`         |
|          | [안](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… in …`         |
|          | [인스턴스 여부 판단](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… instanceof …` |
| 10       | [일치 판단(비교)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… == …`         |
|          | [비일치 판단(비교)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… != …`         |
|          | [엄밀한 일치 판단(비교)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… === …`        |
|          | [엄밀한 비일치 판단(비교)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… !== …`        |
| 9        | [비트 AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… & …`          |
| 8        | [비트 XOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… ^ …`          |
| 7        | [비트 OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… | …`          |
| 6        | [논리적 AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… && …`         |
| 5        | [논리적 OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… || …`         |
| 4        | [조건부](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `… ? … : …`      |
| 3        | [대입](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `… = …`          |
|          |                                                              |                                         | `… += …`         |
|          |                                                              |                                         | ` … -= …`        |
|          |                                                              |                                         | ` … **= …`       |
|          |                                                              |                                         | ` … *= …`        |
|          |                                                              |                                         | ` … /= …`        |
|          |                                                              |                                         | ` … %= …`        |
|          |                                                              |                                         | ` … <<= …`       |
|          |                                                              |                                         | ` … >>= …`       |
|          |                                                              |                                         | ` … >>>= …`      |
|          |                                                              |                                         | ` … &= …`        |
|          |                                                              |                                         | ` … ^= …`        |
|          |                                                              |                                         | ` … |= …`        |
| 2        | [넘김](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield) | 우결합성(오른쪽에서 왼쪽으로 결합한다.) | `yield …`        |
| 1        | [전개](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) | 없음                                    | `...` …          |
| 0        | [연속(쉼표)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator) | 좌결합성(왼쪽에서 오른쪽으로 결합한다.) | `… , …`          |

---

