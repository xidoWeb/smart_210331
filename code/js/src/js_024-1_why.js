// js_024-1_why.js
(function($){
// jQuery

// .part가 위에서 얼만큼 떨어져있는가?
var part = $('.part');
var partOffset = part.offset().top;
console.log('offset part:', partOffset);

// 화면 스크롤시 스크롤값이 얼만큼 움직였는가?
var win = $(window);
var winH = win.outerHeight(); // 브라우저의 document 보이는 화면 높이 만큼

win.on('scroll', function(){
  var winScroll = win.scrollTop();
  console.log('window scroll: ', winScroll);

  // 스크롤값이 이동한만큼이 브라우저의 화면기준 높이에서 이동한 %비율
  var perScroll = parseInt( winScroll / winH * 100 );

  // .part의 위치가 %비율로 이동한 값을 체크 -> scroll값을 체크
  // %계산방법 : 움직인값(winScroll) / 기준(브라우저높이: winH) * 100
  // 소수점을 강제로 정수처리 ( 내림: parseInt(수치)  )
  var move = winScroll - partOffset + winH;
  var perPart = parseInt( move / winH * 100 );

  console.log( perScroll,  perPart );
  // console.log(move);


  // if(move >= 0){}

});



/*
  나타나고자 하는 위치의 시작점이 화면상의 하단에 위치하면 0
  나타난 요소의 위치가 브라우저의 상단에 위치하면 100
  으로 계산을하려면, 

  선택한 요소에서 화면하나의 높이기준 아래이기에 브라우저 높이만큼( $(window).height() )을 추가
  내가 선택한 요소는 얼만큼 떨어져 있는가? offset().top
  스크롤이 이동한 만큼 scrollTop()

  스크롤시동한 만큼에서 떨어져있는 만큼을 뺐을때 실제로 기준이 상단이 아니기에 추가로 높이만큼을 추가  
  이동한 식 = (브라우저.scrollTop() - 선택자.offset().top + $(window).height())

  위 이동한 식에서  기준을 나누고 100을 곱하면 하단에서부터 이동한 만큼을 %로 확인
  이동식 / 브라우저높이 * 100

  
*/



})(jQuery);