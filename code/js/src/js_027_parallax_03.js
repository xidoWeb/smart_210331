// js_027_parallax_03.js
(function($){
// jQuery
// 정리
// 1. 마우스 스크롤시, 건물이미지를 아래로 이동
// 2. 비행기 이미지 상단으로 이동(현재가지고있는 top값에서변경);
// 3. 비행기 이미지가 상단에 닿으면, .logo가 나타나게 만들기( opacity );
// 3-1. 브라우저의 높이를 기준으로 이동한값을 %로 계산 ( 이동값 / 기준 * 1 ) => 1을 100%
// 4. logo가 완전히 나타나면 #headBox를 나타나게 만들자!
// 5. #viewBox의 높이값을 수정(기존값은 너무 임의값이기에 조금 더 보기좋은 높이로 조정)
// 5-1 logo가 opacity값이 1이되었을때! 현재의  headBox의 offset().top + 화면의 높이값*2

// 변수 ---------------------
var win = $(window);
var headBox = $('#headBox');
var viewBox = $('#viewBox');
var logo = $('.logo');
var coverImg_01 = $('.cover_image_01');
var coverImg_02 = $('.cover_image_02');

// 기능 ---------------------
var img_01Top = parseInt(coverImg_01.css('top'));
var img_02Top = parseInt(coverImg_02.css('top'));
var img_02Left = parseInt(coverImg_02.css('left'));
var winH = win.outerHeight();

// 함수 ---------------------
var scrollFn = function(){
  var winScroll = win.scrollTop() / 2;
  var coverImg_01_Top = img_01Top + winScroll;
  var coverImg_02_Left = img_02Left+ (winScroll/10);
  var coverImg_02_Top = img_02Top - winScroll;
  var op, setOffsetHead;
  coverImg_01.css({top: coverImg_01_Top +'px'});
  coverImg_02.css({left: coverImg_02_Left +'px', top: coverImg_02_Top + 'px'});


  if(coverImg_02_Top < 0){
    op = -coverImg_02_Top / winH;
    logo.css({opacity: op });
    (op > 0.5) ? logo.addClass('act') : logo.removeClass('act');
    if(op >= 1){ 
      headBox.show( function(){
        headBox.stop().animate({top:0});
        setOffsetHead = headBox.offset().top;
        viewBox.css({height: setOffsetHead + (winH*2) });
      });  
    }else{
      headBox.removeAttr('style');
    }
  }
};

// 이벤트 ---------------------
win.on('scroll', scrollFn);

})(jQuery);