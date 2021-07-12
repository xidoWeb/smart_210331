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

// 이벤트
topMove.find('a').on('click', function(e){
  e.preventDefault();
  // win.scrollTop(0);
  var linkTarget = $(this).attr('href'); // '#wrap'
  var targetOffset = $(linkTarget).offset().top;
  console.log(targetOffset);

  // doc.animate({scrollTop:0});
  doc.animate({scrollTop: targetOffset + 'px'});
});

navLink.on('click', function(e){
  e.preventDefault();

  var linkTarget = $(this).attr('href');
  var target = $(linkTarget);
  var targetOffset = target.offset().top;
  // console.log(linkTarget, targetOffset);

  doc.animate({scrollTop:(targetOffset - headH) + 'px'});

});

})(jQuery);