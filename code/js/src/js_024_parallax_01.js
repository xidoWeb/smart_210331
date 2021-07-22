// js_024_parallax_01.js
(function($){
// jQuery
/*
1. event - scroll  -> 스크롤된 갚을 파악(scrollTop())
2. background-position: 0~100%
3. 화면의 하단(시작부분) 상단에있는 영역(끝부분)
4. 화면의 영역을 0~100%로 구분하는 방법
*/


// 변수
var win = $(window);


// 함수
var setScrollFn = function(){
  var scrollGage = win.scrollTop();
  console.log( scrollGage );
  return scrollGage;
};
var st;
setScrollFn();

// 이벤트
win.on('scroll', function(e){
  st = setScrollFn();

});


})(jQuery);