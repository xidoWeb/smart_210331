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
var img_01Top = parseInt(coverImg_01.css('top'));
var img_02Top = parseInt(coverImg_02.css('top'));
var img_02Left = parseInt(coverImg_02.css('left'));

// 함수 ---------------------
var scrollFn = function(){
  var winScroll = win.scrollTop() / 2;
  // coverImg_01.css({backgroundPositionY:winScroll+'px'});
  // coverImg_01.css({transform:'translateY('+winScroll+'px)'});
  coverImg_01.css({top: img_01Top + winScroll +'px'});
  coverImg_02.css({left:img_02Left+ (winScroll/10) +'px', 
                   top: img_02Top - winScroll});
}

// 이벤트 ---------------------
win.on('scroll', scrollFn);

})(jQuery);