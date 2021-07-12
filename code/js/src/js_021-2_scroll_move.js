// js_021-2_scroll_move.js
(function($){
// jQuery
// 1. .top_move버튼 클릭시 상단으로 이동
// 2. 기존의 임시링크는 x
// 3. #navBox내부의 a요소를 클릭시 해당 내용의 위치로 스크롤
// 4. #headBox의 높이값 만큼 덜 움직이게

// 변수
// var win = $(window);
var doc = $('html,body');
var headBox = $('#headBox');
var navBox = $('#navBox');
var navLink = navBox.find('a');

var topMove = $('.top_move');

// headBox높이값 파악
var headH = headBox.outerHeight();

// 함수
var scrollMoveFn = function(it){
  var linkTarget = it.attr('href');
  var target = $(linkTarget);
  var targetOffset = target.offset().top;
  var move;
  var wrapOffset = $('#wrap').offset().top; 
  (targetOffset === wrapOffset) ? move = wrapOffset : move = targetOffset - headH;

  doc.animate({scrollTop: move + 'px'});
};

// 이벤트
topMove.find('a').on('click', function(e){
  e.preventDefault();
  // win.scrollTop(0);
  var _this = $(this);
  scrollMoveFn(_this);
});

navLink.on('click', function(e){
  e.preventDefault();
  var _this = $(this);
  scrollMoveFn(_this);
});

})(jQuery);