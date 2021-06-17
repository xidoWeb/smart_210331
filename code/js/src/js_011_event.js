// js_011_event.js

var evtUl = document.getElementsByClassName('event_list')[0];
var evtLi = evtUl.getElementsByTagName('li');

// 선택자.addEventListener('이벤트종류', 수행할기능);


// li: 첫번째에 '1:클릭시' '2:배경색상을 변경'
evtLi[0].addEventListener('click', function(){
  evtLi[0].style.backgroundColor = '#5a3';
});

evtLi[1].addEventListener('mouseenter', function(){
  evtLi[1].style.backgroundColor = '#a47';
});
evtLi[1].addEventListener('mouseleave', function(){
  // evtLi[1].style.backgroundColor = 'transparent';
  evtLi[1].removeAttribute('style');
});

// focus/blur는 a,button,input,textarea,select...form
// '1: focus가 처리되었을때', '2: 글씨를 굵게'
// 이벤트가 js에서 수행되기전에 선행되는 이벤트들(a, button, ...)은
// 필요시 동작하지 못하도록 막아야한다. : preventDefault()


var liAnker = evtLi[2].getElementsByTagName('a')[0];
var liAnkerStyle = liAnker.style;

liAnker.addEventListener('click', function(event){
  event.preventDefault();
});

liAnker.addEventListener('focus', function(){
  liAnkerStyle.fontWeight = 700;
  liAnkerStyle.color = '#fff';
});

liAnker.addEventListener('blur', function(){
  liAnkerStyle.fontWeight = 'inherit';
  liAnkerStyle.color = 'inherit';
});