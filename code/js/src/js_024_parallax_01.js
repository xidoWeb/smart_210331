// js_024_parallax_01.js
(function($){
// jQuery
/*
1. event - scroll  -> 스크롤된 갚을 파악(scrollTop())
2. 화면의 영역을 0~100%로 구분하는 방법
3. background-position: 0~100%
4. 화면의 하단(시작부분) 상단에있는 영역(끝부분)
*/


// 변수
var win = $(window);
var winH = win.outerHeight();
var part = $('.part');
var partLi = part.find('li');

// 201. partLi의 첫번째( eq(0) )의 시작위치가(브라우저화면의 아래부분에서 나타나는 시점) 0에서부터 시작
// 스크롤값에서 partLi.eq(0)의 offet().top 만큼 빼면 나타나는 시점이 0부터 시작하지 않을까 
// 화면상에서 위의 시점이아닌 아래의 시점이기에 브라우저의 높이값 만큼은 추가로 더해야 한다~~!!!!!!!!!!
// 스크롤의 시작점 체크 -> 스크롤값 - 선택지점의 offet().top + 화면의 높이
// %의 공식 -> 수치 / 기준 * 100  -> vw공식과 같으며, 
// (이동하는 수치) / 브라우저의높이 * 100 
// 기준치가 li의 시장점이 아닌 중간지점으로 교체
// 실제 이동하는 이미지의 background-position-y의 값이 반영

var partLi_0_H = partLi.eq(0).outerHeight() / 2;
var partLi_0_offset = partLi.eq(0).offset().top + partLi_0_H;
var partLi_0_img = partLi.eq(0).find('.img_box');

// 함수
var setScrollFn = function(){
  var scrollGage = win.scrollTop();
  // console.log( scrollGage - partLi_0_offset + winH);
  var moveCheck = scrollGage - partLi_0_offset + winH;

  var movePercent =  parseInt(moveCheck / winH * 100);
  if(movePercent < 0 ){ 
    movePercent = 0;
  }else if(movePercent > 100){
    movePercent = 100;
  }
  // console.log(movePercent);
  return movePercent;
};
var st;
setScrollFn();

// 이벤트
win.on('scroll', function(e){
  st = setScrollFn() / 2;
  partLi_0_img.css({backgroundPositionY:st+'%'});
});


})(jQuery);