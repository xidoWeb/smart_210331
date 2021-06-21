// jq_002_selector_jQuery.js

(function($){
  // jQuery

  // document.getElementsByTagName('h1')[0];
  // document.querySelector('h1');

  var h1 = $('h1');
  // var h1Link = h1.children('a');
  var h1Link = h1.find('a');
  h1.css({ 'marginBottom' : '2rem' });
  h1Link.css({
    "color":"#171717", "fontWeight":"100", padding:'1rem',
    'background-color':'#acf'
  });

  var box = $('#box');
  var boxUl = box.children('ul');
  var boxLi = boxUl.children('li');
  boxLi.css({
    'width':'70%', 'height':'3rem','margin':'auto','marginBottom':'10px', 'borderBottom':'1px solid #111',
    'backgroundColor':'#cca'
  });

  // box.wrap('<div class="box_wrapper"></div>');
  // var box_wrapper =  $('.box_wrapper');
  // box_wrapper.css({'padding':'1rem', 'backgroundColor':'#dfdfdf'});

  box.parent().css({
    border:'1px solid #333', padding:'1rem',
    backgroundColor:'#dfdfdf', 'margin':'auto'
  });

  // jQuery에서는 선택자가

  // css의 선택자는 동일하게 선택이 가능하다
  // 단, $(' ') 내부에 작성해야 한다.

  // var boxLink = box.children('ul').children('li').children('a');
  // var boxLink2 = box.children('ul > li > a');
  var boxUl2 = box.children('ul');
  var boxLi2 = boxUl2.children('li');
  var boxLink = boxLi2.children('a');

  // 작업을 하다보면, 중간에 건너뛴 요소를 선택하여 추가 작업을 하게 되는 경우가 대부분이므로, 
  // 가급적 모든 요소를 변수로 처리하여, 필요시 사용할 수 있도록 처리하는 것이 좋다.

  var li = document.getElementsByTagName('li');
  var li_001 = li[0];
  var li_002 = li[1];

  var liSel_001 = boxLi2.eq(0);
  var liSel_002 = boxLi2.eq(1);
  // var liSel_01 = boxLi2.nth(0);

  var liSel2 = $('li:eq(2)');
  liSel2.css({fontSize:'2rem', fontWeight:'bold'});

  // ---------------------------------------
  
  // #box    -> $('#box')    
  // .box    -> $('.box')
  // h1      -> $('h1');
  // h1 > a  -> $('h1>a')     ->  $('h1').children('a')
  // h2 span -> $('h1 span')  ->  $('h1').find('span')

  // li:nth-child(2)  -> $('li:nth-child(2)')  -> $('li:nth(1)')  -> $('li:eq(1)')  -> $('li').eq(1)   ==> 2번째 li





})(jQuery);