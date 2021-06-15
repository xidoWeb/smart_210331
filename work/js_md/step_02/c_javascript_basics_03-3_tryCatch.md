# javascript 기초_3-3 - 예외처리

지난시간엔 반복문에 관한 내용에 대해 알아보았습니다.
이번시간에는 예외 처리라는 부분과 기타 내용들에 대한 부분을 이해해 보도록 하겠습니다.

---

애플리케이션을 실행하다보면, **숫자를 취할 것 이라고 생각했던 함수(`function`)에 문자열(`string`)이 건네지거나**,
**변수를 참조하려고 했으나 미정의(`undefined`)**가 되거나 하는 등 
생각지 못한 여러가지 **에러**(이를 **예외**라고 합니다.)를 발생하고는 합니다.

---

[TOC]

---

### 예외처리

- try ~ catch~finally

---

```javascrit
try{
  예외가 발생할지 모를 명령
}catch(예외 정보를 취할 변수){
  예외가 발생했을시 명령
}finally{
  예외의 유무에 관계 없이 최종적으로 실행되는 명령
}
```



```js
try { 
    console.log('try 구문 실행'); 
    console.log(test);
    console.log('try 구문 끝-문제가 없다면 바로 실행됨'); // 예외로 인해 실행 되지 않음
} catch (exception) { 
    console.log('예외 발생시 실행 되는 catch 구문'); 
    console.log(exception);
} finally { 
	console.log('예외 발생 여부 상관없이 실행 되는 finaylly 구문'); 
}
```



```javascript
var i = 1;
try{
  i *= j; 		//예외발생
  console.log(i);
} catch(e){
  console.log(e.message);
} finally{
  console.log('처리 완료 되었습니다.');	
}
```

위의 경우는 `j`에 대한 정의가 되지 않은 상태 입니다.
그렇기에 실제로 구현하고자 하는 내용이 실행되지 않습니다.



- 상황에 따라서는 에러 메시지가 다르게 나올수도 있습니다. <br />
  이러한 경우에는 에러가 발생한것을 **catch()** 로 보내버릴 수 있는데 이러한 표현형태를  **`throw`** 

```js
var x=prompt("Enter a number between 5 and 10:","");

try { 
  if( x > 10 )       {  throw "Err1";   } 
  else if( x < 5 )   {  throw "Err2";   } 
  else if( isNaN(x) ){  throw "Err3";   }
} catch(err) {
  if(err=="Err1") { console.log("Error! The value is too high.");     }
  if(err=="Err2") { console.log("Error! The value is too low.");      }
  if(err=="Err3") { console.log("Error! The value is not a number."); }
}
```

- 때로는 다음과 같은형식으로 처리되기도..

```javascript
var x = 1, y = 0;
try{
  if(y==0){throw new Error('0으로 나누려고 하였습니다.');}
  var z = x /y;
}catch(e){
  console.log(e.message);
}
```

---

[참고 mozilla/docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

