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

