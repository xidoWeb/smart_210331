# javascript Array (배열) , Array-method

지난시간까지 문법에대한 내용을 진행하여 보았습니다.
실제 문서에서 사용하는 방법을 이해하려면 배열,객체,함수 등을 이해하고, 
DOM구조를 진행하면서 원하는 만큼 진행하실 수 있습니다.
이번시간에는 이전에 간단하게 배웠던 배열에대해 배워보도록 하겠습니다.

---

[TOC]

## 배열이란?

**배열이란**? 여러내용을 나열하는 경우에 사용하는 것을 말한다고 알려드린 적이 있습니다.
좀더 정리하자면 다른 자바스크립트의 데이터 값을 하나의 목록으로 만드는 것을 배열 이라고 합니다.

**여러 데이터를 하나로 묶어서 처리하는 방법(리스트)**

---

### 배열을 사용하는 이유

우리가 웹에서 사용하는 기초 언어 3가지는 무엇인가요?
바로 **html**, **css**, **javascript** 입니다. 
우리는 이를 이렇게 작성합니다.

```javascript
웹구성1 = html
웹구성2 = css
웹구성3 = javascript
```

위 내용을 변수형식으로 정리하자면 우리는 이렇게 만들 수 있습니다.

---

```javascript
var webp_01 = html;
var web_02 = css;
var web_03 = javascript;
```

하지만 이를 작성하여 관리하기에는 생각보다 많은 부분을 차지하게 됩니다. 
그래서 우리는 아래처럼 정리할 수 있습니다.

---

```javascript
웹구성 = html,css,javascript
```

간편하면서도 정리하기 쉬운 형태입니다.

사실, 위 내용은 자바스크립트의 형태는 아닙니다. 
우리가 실제로 사용하는 형태의 내용으로 요약하는 그림입니다. 
하지만 위 내용과 동일한 형태로 자바스크립트의 구조로 처리할 수 있습니다 그것이 배열입니다.

```javascript
var web = ['html', 'css', 'javascript'];
```

위 내용은 배열의 형태로 변경처리하여 사용한 내용입니다. 
이전의 내용과 비교해 보았을 때 크게 달라지지는 않은 것을 알 수 있습니다.
다만, 배열은 여러개의 목록을 하나로 요약하는 형태이기 때문에 이를 그룹처럼 묶어주어야 합니다.
그룹의 형태로 만들어 내는 것을 `[ ]` 입니다.

---
다른 예시를 더 만들어 보겠습니다.

```javascript
var makePhoneCompany1 = 'samsung';
var makePhoneCompany2 = 'lg';
var makePhoneCompany3 = 'apple';
var makePhoneCompany4 = 'htc';
var makePhoneCompany5 = 'google';
var makePhoneCompany6 = 'nokia';
var makePhoneCompany7 = 'shaomi';
```

위 내용은 핸드폰 제조사에 대한 목록을 만드는 내용입니다.
실제로 존재하는 회사는 매우 많습니다.
모든 회사의 이름을 매번 변수로 지정하는 것은 사실상 무리가 있습니다. 이럴때 우리는 하나의 변수에 담아 사용합니다.

```javascript
var makePhoneCompany = ['samsung','lg','app;le', 'htc','google','nikia','shaomi'];
```

아주 간단하면서도 사용하기 쉬운 형태입니다.

그렇다면 변수의 값을 사용할때는 어떻게 처리할까요?

---
### 배열원소 접근하기

```javascript
var makePhoneCompany = ['samsung','lg','apple', 'htc','google','nikia','shaomi'];
console.log(makePhoneCompany[0]);
```

위의 내용처럼 첫번째를 `0`으로 표기하고 이후 **1,2,3,4,5 ...**의 순서로 작성하면 원하는 결과를 얻어 낼 수 있습니다.

모든 목록을 모두 한번에 보고싶다면?



---

```javascript
for (var i=0; i<= makePhoneCompany.length; i++){
  console.log('핸드폰제조사_' + i + ': ' + makePhoneCompany[i]);
}
```

이전에 배웠던 반복문을 사용하면 간단하게 모두 확인해 볼 수 있습니다.
위 내용에서 `makePhoneCompany.length`내용은 무엇일까요? 
변수 `makePhoneCompany`의 갯수를 파악하는 것입니다.

---

### 배열 만들기

배열을 만들때에는 각 괄호(대괄호) `[ ]`를 사용합니다. 빈 배열은 다음과 같이 한쌍의 각 괄호로 이루어져 있습니다.

```javascript
[];
```

즉, `[ ]`로 감싸져 있다면 이는 배열로 만들어져 있다고 생각하면됩니다.
이제 배열안에 내용을 담아 보겠습니다.
배열 안에 값을 넣으려면 괄호안에 값을 입력하되, 쉽표로 나눠주면 간단하게 해결됩니다.
배열 안에 들어간 개별값을 **원소(element)**라고 합니다.

```javascript
var graphicProgram = ['illustrator', 'photoshop', 'coreldraw', 'saitool','indesign','affinityDesign','affinityPhotoshop','autoCad','gimp'];
```

위 내용처럼 원하는 값(원소)를 작성하면 됩니다.
하지만 실제 가독성에는 다소 부족해 보입니다. 
결과가 같다면, 이왕이면 좀더 이쁘게 정렬해 놓는것이 나을것 같습니다.

```javascript
var graphicProgram = [
                  'illustrator', 
                  'photoshop', 
                  'coreldraw',
                  'saitool',
                  'indesign',
                  'affinityDesign',
                  'affinityPhotoshop',
                  'autoCad',
                  'gimp'
                ];
```

위 내용처럼 정리하여 작업한다고 하더라도 `;`기호가 나타나기전 까지는 한줄로 인지가 됩니다.
우리가 작업하는 내용을 가독성이 좋게 작업하는 것이 좋습니다.



---

### 배열 원소 설정 및 바꾸기

이제 각 괄호의 내용을 변수의 값에 정하고 작업할 수 있게되었습니다.
하지만 작업중 배열원소의 내용 중 일부를 수정하거나 변경처리해야 하는 경우가 발생할 수 있습니다.
이럴때는 어떻게 해야할까요?

이전에 사용했던 변수 `graphicProgram`를 이용해 진해 보도록 하겠습니다.

```javascript
console.log('변경전: ' + graphicProgram[0]);
graphicProgram[0] = 'adobe Illustrator cc 2017';
console.log('변경후: ' + graphicProgram[0]);
```

위내용을 확인해보면 변수 `graphicProgram`의 첫 배열원소의 값은 **illustrator**입니다.
이후 첫배열원소의 값을 '**adobe Illustrator cc 2017**으로 변경처리하면, 변경된 값으로  처리가 되는 것을 알 수 있습니다.

만일, 위 내용에서 현재 9가지의 내용이 존재하는데, 실제 존재하지 않는 20번째의 값을 입력하면 어떻게 될까요?

```javascript
console.log(graphicProgram);
graphicProgram[19] = 'more graphic';
console.log(graphicProgram);
```

배열상에서 입력을 하지 않았더라도 이후의 값을 존재하게 만들려면 무언가 내용이 입력되어야합니다.
하지만 그 무언가의 값을 임으로 적용할 수는 없기 때문에 javascript는 이를 정의하지 않는 값으로 대처하게 만들어 버립니다.
즉 9번째 내용부터 18번째 까지의 값은 모두 `undefined`로 처리된다는 것 입니다.



---

### 배열의 구성형태 변경하기

배열은 **프로퍼티**와 **메소드**형태의 내용으로 구성형태를 파악 및 처리 할 수 있습니다.

해당하는 구성형태로 다루는 기능들은 다음과 같습니다.

- 배열내의 원소(요소)갯수파악

- 원소(요소) 추가하기

- 원소 삭제하기

- 결합하기

- 구분하기

- 테스트하기 ...

  ​

등 이외에도 많은 기능들을 다루고 있습니다. 
다음 내용들은 이러한 배열 요소 기능들을 만들어 처리한 부분들 보여주는 예시입니다.
아래 예시 외에도 꽤 많은 프로퍼티 및 메소드가 존재하므로 찾아보세요~

---

#### 프로퍼티로 다루기

##### 갯수파악하기

- **length** : 배열내의 원소의 개수를 파악할 때 사용

```javascript
var arr = [1,2,3,4,5,6,7,8,9,10,11];
arr.length;
```



---

#### 메소드로 다루기

##### 추가하기

- **push()** : 배열의 끝에 원소를 추가하는 방법

  ```js
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.push("Kiwi");
  console.log(fruits);

  var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
  fruits2.push("Kiwi", "Lemon", "Pineapple");
  console.log(fruits2);
  ```

  - <참고> 함수 메서드, apply 를 활용한 push 사용법: **배열에 배열을 더할 수 있다**. <br />
    그냥 push를 하면, 인자로 넘긴 배열이 **nested array** 로 삽입됨

  ```js
  var vegetables = ['당근', '감자'];
  var moreVegs = ['셀러리', '홍당무'];
  // 동일한 문법: vegetables.push('샐러리', '홍당무');
  Array.prototype.push.apply(vegetables, moreVegs);
  console.log(vegetables); // ['당근', '감자', '셀러리', '홍당무']

  // 주의해야할 문법: nested array
  var languages = ['javascript', 'Ruby'];
  var studying = ['Python', 'Swift'];
  languages.push(studying);
  console.log(languages); // ['javascript', 'Ruby', ['Python', 'Swift']]
  ```

  - 보면 **call은 보통 함수와 똑같이** 인자를 넣고, **apply는 인자를 하나로 묶어 배열**로 만들어 처리 <br />그렇다면 **call**과 **apply**가 공통적으로 가진 **null 인자의 역할**은 **this를 대체**하는 것

    ```js
    var example = function (a, b, c) {
      return a + b + c;
    };
    example(1, 2, 3);
    example.call(null, 1, 2, 3);
    example.apply(null, [1, 2, 3]);
    ```

    ​

- **unshift()** : 배열의 시작부분에 원소를 추가하는 방법

  ```js
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.unshift("Lemon","Pineapple");
  console.log(fruits);
  ```

  ​


---

##### 제거하기

- **pop()** : 배열의 마지막 원소를 제거하는 방법

  ```js
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.pop();
  ```


- **shift()**  : 배열의 첫번째 원소를 제거하거나 반환하는 방법

  ```js
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.shift();
  ```

  ​

---

##### 결합하기

- **concat()** : 배열 두개를 결합해서 하나의 배열로 만들기

  ```js
  var hege = ["Cecilie", "Lone"];
  var stale = ["Emil", "Tobias", "Linus"];
  var children = hege.concat(stale);

  console.log(children);
  ```

  ```js
  var hege = ["Cecilie", "Lone"];
  var stale = ["Emil", "Tobias", "Linus"];
  var kai = ["Robin"];
  var children = hege.concat(stale, kai);
  console.log(children);
  ```

  ```js
  var people = [{name: 'Sally'}, {name: 'Shane'}];
  var people2 = [{name: 'Simon'}, {name: 'Ben'}];
  // 1번 방식
  people.forEach(function(person) {
    console.log(person.name);
  });
  people2.forEach(function(person) {
    console.log(person.name);
  });
  // 2번 방식
  people.concat(people2).forEach(function(person) {
    console.log(person.name);
  });
  ```

  ```js
  var items = [1, 2];
  var newItems = items.concat(3, 4, 5, 'str', undefined);
  console.log(newItems); // [1, 2, 3, 4, 5, 'str', undefined]

  var newItems2 = items.concat([3, 4], [5, 6, 7]);
  console.log(newItems2); // [1, 2, 3, 4, 5, 6, 7]

  var newItems3 = items.concat([3, 4], [5, 6, [7]]);
  console.log(newItems3); // [1, 2, 3, 4, 5, 6, [7]]
  ```

  ​

---

##### 배열원소 색인찾기

- **indexOf()** : 배열원소가 위치하는 값을 찾아 낼때 사용

  ```js
  var str = "Hello world, welcome to the universe.";
  var n = str.indexOf("welcome");
  console.log(n);
  ```

  ```js
  var str = "Hello world, welcome to the universe.";
  var n = str.indexOf("e");
  console.log(n);
  ```

  ```js
  var str = "Hello world, welcome to the universe.";
  var n = str.indexOf("e", 5);
  console.log(n);			// 5의 위치에서 검색해서 e의 위치를 파악
  ```

  ```js
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var a = fruits.indexOf("Apple");
  console.log(a);
  ```

  ```js
  var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
  var a = fruits.indexOf("Apple", 4);
  console.log(a);
  ```

  - 배열에서 지정된 요소를 찾을 수있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환(return 값을 검사해서 Boolean 형태로 활용 가능)

  ```js
  var family = ['Shane', 'Sally', 'Isaac'];
  console.log(family.indexOf('Isaac'); // 2
  console.log(family.indexOf('Kittie'); // -1

  var kittieExists = family.indexOf('Kittie') > -1; // false
  if (!kittieExists) {
    family.push('Kittie');
  }

  console.log(family); // 'Shane', 'Sally', 'Isaac', 'Kittie'];
  console.log(family.indexOf('Sally', 2)); // -1
  console.log(family.indexOf('Sally', 1)); // 1
  ```

  - ===(Strict Equality Comparison Algorithm: 자료형 일치여부까지 비교)

  ```js
  // strict 비교
  var numberExample = [1, 2, 3];
  console.log(numberExample.indexOf("2")); // -1
  console.log(numberExample.indexOf(2)); // 1
  ```

  - 두 번째 인자로는 검색을 시작할 인덱스를 넣어줄 수 있음(Default 값은 0: 전체 검색). <br />
    만약 값이 음수이면, 배열의 끝부터 offset 값으로 적용됨
  - Object 검사도 가능

  ```js
  var shane = { name: 'Shane' };
  var sally = { name: 'Sally' };
  var kittie = { name: 'kittie' };
  var family = [shane, sally, kittie];
  console.log(family.indexOf(kittie)); // 2
  ```

  - 요소의 모든 항목 찾기: 방법2

  ```js
  var indices = [];
  var array = ['a', 'b', 'a', 'c', 'a', 'd'];
  var element = 'a';

  // 방법 1
  var idx = array.indexOf(element);
  while(idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }

  // 방법 2
  array.forEach(function(v, i) {
    if (v === element) {
      indices.push(i);
    }
  }
  console.log(indices); // [0, 2, 4]
  ```

- **find()** :  제공된 테스트 함수를 만족하는 배열의 첫 번째 요소를 반환

  ```js
  var array1 = [5, 12, 8, 130, 44];
  var found = array1.find(function(element) {
    return element > 10;
  });

  console.log(found);  // 함수에 만족하는 배열의 첫번째 요소: 12
  ```

- **findIndex()** : 제공된 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환

  ```js
  var array1 = [5, 12, 8, 130, 44];
  var found = array1.findIndex(function(el){
      return el > 3;
  });
  console.log(found);  // 함수에 만족하는 배열의 인덱스값: 0
  ```

  ​

---

##### 배열을 문자열로

- **toString()** : 배열원소를 문자열로 변환하여 사용

  ```js
  var num = 15;
  var n = num.toString();
  ```

  ```js
  var num = 15;
  var a = num.toString();   // 10진수 형태의 문자로변환
  var b = num.toString(2);  // 2진수 형태의 문자로변환
  var c = num.toString(8);  // 8진수 형태의 문자로변환
  var d = num.toString(16); // 16진수 형태의 문자로변환
  ```

  ```js
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.toString();
  ```




- **split()** : 문자열을 배열로 변환하여 사용

  ```js
  var str = "서울, 대전, 대구, 부산";
  var arr = str.split(",");  // ','을 기준으로 구분하여 배열처리
  console.log(arr);  // ["서울", "대전", "대구", "부산"] 
  ```

  - 구분자를 삽입하지 않으면 하나의 배열로 처리

  ```js
  var str = "서울, 대전, 대구, 부산";
  var arr = str.split();
  console.log(arr);  // ["서울, 대전, 대구, 부산"] 
  ```

  - 공백없이 처리시 각각의글자를 배열로 처리함 <br />

  ```js
  var str = "서울, 대전, 대구, 부산";
  var arr = str.split("");
  console.log(arr); // ["서","울",","," ","대","전",","," ","대","구",","," ","부","산"]

  console.log(arr[0]); // 서
  ```

  ​

- **join()** : 배열 원소를 문자열로 변환하여 사용

  - join 은 배열의 모든 요소를 연결해 하나의 문자열로 만듬
  - 인자로 특정문자열을 전달하면, 특정 문자열로 구분자로 요소들을 연결
  - 배열 요소 값이 null 이거나 undefined 일 경우, 빈 문자열을 return

  ```js
  var names = ['Shane', 'Alan', 'Osbourne'];

  // 보통의 방식
  console.log(names[0] + ', ' + names[1] + ', ' + names[2]);
  // join() 방식, 메소드 내부에 값을 입력하지 않으면 comma(,)로 처리됨
  console.log(names.join()); // Shane,Alan,Osbourne
  ```

  - 배열원소를 **구분자**(-, / …)로 사용

  ```js
  // join 방식
  console.log(names.join('')); // 빈칸없이 연결
  console.log(names.join(' ')); // 빈칸으로 구분
  console.log(names.join('-')); // '-' 표기로 구분
  console.log(names.join('/')); // '/'표기로 구분
  ```

  ```js
  // 다른 메서드와 함께 사용한 예제
  var name = 'shane osbourne';
  // var u = name.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');

  var sl = name.split(' ');
  var upper = sl.map( function(x){
  	var a = x.charAt(0).toUpperCase();
      var b = x.slice(1);
      return a + b;
  });
  var result = upper.join(' ');
  console.log(upper); // Shane Osbourne
  ```

  ​


---

##### 테스트

- **forEach()** : 

  ```js
  var list = [1,2,3,4,5];
  list.forEach(function(v,i,a) {
  	console.log(v,i,a);
  });
  ```

  ​


- **some()** : 배열 내 일부 요소가 제공된 함수에 의해 구현된 테스트를 통과하는지 테스트

  - 기본적으로는 forEach와 유사한기능

  ```js
  var list = [1,2,3,4,5];
  list.some(function(v,i,a) {
  	console.log(v,i,a);
  });
  ```

  ​

  - some은 컬렉션의 요소 중 최소 1개라도 조건을 만족시키는지 검사하는 메서드

  ```js
  var list = [1,2,3,4,5];
  list.some(function(v) {
     if(v == 2){ console.log(v); }
     return (v ==2);
  });
  ```

  - forEach 문으로 처리한다면

  ```js
  var Break = new Error('Break');

  try {
    [1,2,3,4,5].forEach(function(v) {
      if (v==2) {
        console.log('v: ', v)
        throw Break;
      }
    });
  } catch (e) {
    if (e!= Break) throw Break; 
  }
  ```

  위 결과를 통해 forEach는 Break기능이 처리되지 않는 것을 확인할 수 있다.

  ```js
  function isNegative(x) {  return x < 0; }

  var a = [-10, 0, 10].some(isNegative) === true;
  var b = [1, 2, 3, 4].some(isNegative) === false;
  ```

  ​

  ​


- **every()** : 배열의 모든 요소가 제공한 함수로 구현된 테스트를 통과하는지를 테스트

  ```js
  var c = [-10, 0, 10].every(x => x < 0) === false;
  var d = [-10, 0, 10].every(x => x >= 0) === false;
  ```

  ```js
  var isN = function(x){ return x < 0; };
  var isN2 = function(x){ return x >= 0; };
  var e = [-10, 0, 10].every(isN)===false;
  var f = [-10, 0, 10].every(isN2)===false;
  ```

  ​

---

정렬

- **sort()** : 배열의 요소를 적절한 위치에 정렬하고 배열을 반환

  - sort()  내부에는 함수를 사용함, 생략하면 오름차순, ASCII 문자 순서로 정렬된다.
  - 문자정렬은 알파벳 순으로 배열

  ```js
  var items = ['Shane', 'Sally', 'Isaac','Apple', 'Pineapple'];
  console.log(items); // ['Shane', 'Sally', 'Isaac','Apple', 'Pineapple']
  items.sort();
  console.log(items); // ['Isaac', 'Sally', 'Shane']
  ```

  ​

  - 문자정렬은 대/소 문자를 가리기 때문에(ASCII문자는 대소문자에도 순서가 존재) 정확하게 표기해야함

  ```js
  var items = ['Shane', 'Sally', 'Isaac','apple', 'pineapple'];
  console.log(items); // ['Shane', 'Sally', 'Isaac','Apple', 'Pineapple']
  items.sort();
  console.log(items); // ['Apple', 'Isaac', 'Pineapple', 'Sally', 'Shane']
  ```

  ```js
  var items = ['Shane', 'Sally', 'Isaac','apple', 'pineapple'];
  items.forEach(function(v,i){ return items[i] = items[i].toLowerCase(); });
  items.sort();
  console.log(items);
  ```

  ​

  - 숫자(Numerically) 정렬은 의도하지 않은 정렬이 일어날 수 있기 때문

  ```js
  var items = [10, 30, 2, 20];
  items.sort();
  console.log(items); // [10, 2, 20, 30]
  ```

  ​

  - compareFunction이 제공되지 않으면 요소를 문자열로 변환하고 <br />
    유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬됩니다. <br />
    따라서 아래와 같이 sort 메서드의 첫번째 인자로 비교함수를 전달

  ```js
  var items = [10, 30, 2, 20];
  // 오름차순
  // items.sort((a, b) => a - b);
  items.sort(function(a,b){ return a - b; });
  console.log(items); // [2, 10, 20, 30]

  // 내림차순
  // items.sort((a, b) => b - a);
  items.sort(function(a,b){ return b - a; });
  console.log(items); // [30, 20, 10, 2]

  // 이름의 길이순(긴글부터)으로 정렬하기
  var names = ['Kittie', 'John', 'Sally', 'Einstein'];
  //names.sort((a, b) => b.length - a.length);
  names.sort(function(a,b){ return b.length - a.length; });
  console.log(names); // ['Einstein', 'Kittie', 'Sally', 'John']
  ```

  ```js
  var student = [
      { name : "재석", age : 21},
      { name : "광희", age : 25},
      { name : "형돈", age : 13},
      { name : "명수", age : 44}
  ]

  /* 이름순으로 정렬 */
  student.sort(function(a, b) { // 오름차순
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      // 광희, 명수, 재석, 형돈
  });

  student.sort(function(a, b) { // 내림차순
      return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
      // 형돈, 재석, 명수, 광희
  });

  /* 나이순으로 정렬 */
  var sortingField = "age";

  student.sort(function(a, b) { // 오름차순
      return a[sortingField] - b[sortingField];
      // 13, 21, 25, 44
  });

  student.sort(function(a, b) { // 내림차순
      return b[sortingField] - a[sortingField];
      // 44, 25, 21, 13
  });
  ```

  ​

---

##### 기타

- **splice()**

  - 기존 요소를 제거하거나 새 요소를 추가하여 배열의 내용을 변경
  - start: 배열의 변경을 시작하는 인덱스
  - deleteCount: 배열에서 제거를 할 요소의 수
  - itemN: 배열에 추가될 요소, 리턴 값: 삭제된 요소들의 배열이 리턴

  ```js
  array.splice(start, deleteCount[, item1[, item2[, ...]]])
  ```

  ```js
  var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
  // 배열의 인덱스 2부터 1개를 제거
  var remvoed = myFish.splice(2, 1); // removed is ['mandarin']
  console.log(myFish); //  ['angel', 'clown', 'surgeon']

  // 배열의 인덱스 부터 1개를 제거, 그리고 그 자리에 'trumpet' 을 삽입
  removed = myFish.splice(1, 1, 'trumpet');  // ['clown']
  console.log(myFish);  // ['angel', 'trumpet', 'surgeon']

  // 배열의 인덱스 0부터 2개를 제거, 그리고 그 자리에 'parrot', 'anemone' 를 삽입
  removed = myFish.splice(0, 2, 'parrot', 'anemone');  // ['angel', 'trumpet']
  console.log(myFish);  // ['parrot', 'anemone', 'surgeon']

  // 배열의 인덱스 2부터 뒤에 있는 모든 요소를 제거
  removed = myFish.splice(2, Number.MAX_VALUE);  // ['surgeon']
  console.log(myFish);  // ['parrot', 'anemone']
  ```

  ​


- **slice()** : 배열 복제 또는 값의 일부를 잘라낼때 사용

  - 배열을 전체 혹은 부분 복제(clone)할 때

  ```js
  // 참조변수 형태
  var list = [1,2,3,4,5];
  var listCopy = list;
  list[0] = 100;
  console.log(list);
  console.log(listCopy);

  // clone
  var items = [1, 2, 3, 4, 5];
  var copy = items.slice();
  copy[0] = 100;
  console.log(items); // [1, 2, 3, 4, 5]
  console.log(copy); // [100, 2, 3, 4, 5]
  ```

  - 인자를 두개 받는다. 시작 index(포함) 와 끝 index(비포함)

  ```js
  var items = [1, 2, 3, 4, 5];

  var copy2 = items.slice(2, 3); // [3]
  console.log(copy2);
  var copy3 = items.slice(2); // [3, 4, 5]
  console.log(copy3);
  var copy4 = items.slice(-2); // [4, 5]
  console.log(copy4);
  var copy5 = items.slice(1, -1); // [2, 3, 4]
  console.log(copy5);
  ```

  - shallow (얕은) copy vs. deep (깊은) copy
    - **shallow copy** : 문자열, 숫자와 같이 primitive type(원시/기본형)이 아닌 배열을 포함하는 Object는, <br />
      **값을 복사**하게 되면, **참조 값만을 복사**하게 되어 **같은 참조를 가진 두 개의 변수가 생성됨** <br />
      (한 변수의 데이터를 수정하면, 다른 하나도 같이 수정이 됨) 
    - **deep copy** : 따라서 **모든 값을 복사하는 것을 clone** 이라고 하고, deep copy 라고 함 <br />
      (배열의 경우, slice 를 활용해서 구현이 가능) <br />
      물론, 배열 안에 있는 요소가 또 **참조 타입의 객체라면 동일한 현상은 발생**.

  ```js
  var person = { name: 'Shane' };
  var items = [1, person];
  var copy = items.slice();
  copy[1].name = 'Sally';
  console.log(items); // [1, { name: 'Sally' }]
  console.log(copy); // [1, { name: 'Sally' }]
  ```

  - 추가 예시(call, reduce: 함수의 메서드) **화살표함수 포함되어있음**

  ```js
  var person = {  name: 'shane-osbourne' };
  var filters = {
    'deslugify': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
  };
  var input = 'name | deslugify | uppercase';
  var sections = input.split('|').map(x => x.trim());
  var ref = person[sections[0]];
  var output = sections
    .slice(1)
    .reduce((prev, next) => {
      if (filters[next]) {
        return filters[next].call(null, prev);
      }
    }, ref);
  console.log(output);
  ```

  ​

---

