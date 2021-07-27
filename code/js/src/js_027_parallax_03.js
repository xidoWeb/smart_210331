// js_027_parallax_03.js
(function($){
// jQuery
// 정리
// 1. 마우스 스크롤시, 건물이미지를 아래로 이동
// 2. 비행기 이미지 상단으로 이동(현재가지고있는 top값에서변경);

// 변수 ---------------------
var win = $(window);
var coverImg_01 = $('.cover_image_01');
var coverImg_02 = $('.cover_image_02');

// 기능 ---------------------
var img_02Top = parseInt(coverImg_02.css('top'));

// 함수 ---------------------
var scrollFn = function(){
  var winScroll = win.scrollTop() / 2;
  coverImg_01.css({backgroundPositionY:winScroll+'px'});
  coverImg_02.css({left:winScroll/2 +'px', top: img_02Top - winScroll});
}

// 이벤트 ---------------------
win.on('scroll', scrollFn);

})(jQuery);