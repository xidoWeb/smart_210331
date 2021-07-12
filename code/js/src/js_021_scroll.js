// js_021_scroll.js
(function($){
// jQuery

// 1. #headBox의 위치가 상단에서 얼만큼 떨어졌는지 체크 -> offset().top
// 2. 스크롤시 스크롤값을 체크 -> scrollTop()
// 3. 스크롤의 값이 offset().top의 값보다 커지면 headBox의 위치를 position:fixed
// 4. offset().top의 값은 수시로 확인할 필요가 없다.

// 변수
var win = $(window);
var headBox = $('#headBox');

// #headBox의 떨어진 위치 체크
var offHeadBox = headBox.offset().top;

// 스크롤시 움직이는 값 확인
win.on('scroll', function(){
  var st = win.scrollTop();
  // console.log('st:' + st, 'offset: '+ offHeadBox);

  if(offHeadBox < st){
    // console.log(" 스크롤값이 더 커졌습니다. ");
    headBox.css({'position':'fixed'});
  }else{
    // console.log('스크롤값이 더 작습니다.');
    // headBox.css({'position':'relative'});
    headBox.removeAttr('style');
  }

});


})(jQuery);