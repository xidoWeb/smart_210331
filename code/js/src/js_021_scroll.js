// js_021_scroll.js
(function($){
// jQuery

// 1. #headBox의 위치가 상단에서 얼만큼 떨어졌는지 체크 -> offset().top
// 2. 스크롤시 스크롤값을 체크 -> scrollTop()
// 3. 스크롤의 값이 offset().top의 값보다 커지면 headBox의 위치를 position:fixed
// 4. offset().top의 값은 수시로 확인할 필요가 없다.
// =================================
// 5. #sideBox의 위치를  top:#viewBox 의 50px 아래 배치
// 6. #sideBox의 위치를 스크롤시 상황에따라 #headBox의 아래에 fixed처리
// 601. #headBox의 높이값 + 필요한 #headBox에서 떨어져있는 공간(30px)
//------------------------------------
// 선택자.height() -> 내부의 높이확인
// 선택자.innerHeight() -> 내부의 padding포함한 높이확인
// 선택자.outerHeight() -> 내부의 padding + border 포함한 높이확인
// 선택자.outerHeight(true) -> 내부의 padding + border + margin 포함한 높이확인
// 선택자.offset().top -> 선택요소의 상단부터 떨어져있는 위치파악
// 선택자.scrollTop()  -> 스크롤바의 위치가 어디에 배치되어있는가?(눈에보이는 스크롤바는 비율)
// 선택자.removeAttr()  -> 선택요소의 속성을 삭제


// 변수 ----------------------------
var win = $(window);
var headBox = $('#headBox');
var viewBox = $('#viewBox');
var sideBox = $('#sideBox');

// #headBox의 떨어진 위치 체크
var offHeadBox = headBox.offset().top;

// #viewBox의 위치/높이값 체크
var offViewBox = viewBox.offset().top;
var viewBoxHeight = viewBox.outerHeight();
var checkViewBoxH = offViewBox + viewBoxHeight;

// sideBox 위치 설정
sideBox.css({'top': checkViewBoxH + 'px'});


// 함수 ----------------------------
// 스크롤 고정에따른 함수
var scrollFixFn = function(){
  var st = win.scrollTop();
  if(offHeadBox < st){
    headBox.css({'position':'fixed'});
  }else{
    headBox.removeAttr('style');
  }
};
scrollFixFn();

// #headBox의 높이값체크 함수
var headBoxSetFn = function(){
  var headBoxH = headBox.outerHeight();
  var mySetHeadOffset = headBoxH + 30;
  return mySetHeadOffset;
};

var scrollFix2Fn = function(){
  var st = win.scrollTop();
  console.log(checkViewBoxH,  st);
  // scrollTop()의 값과, 이미 설정된 headBox및 간격설정된 값(headBoxSetFn)으로 체크
  var myScrollTop = st + headBoxSetFn();

  if(checkViewBoxH < myScrollTop){
    // 위치값 고정으로이하여, 기존 top의 값을 변경
    sideBox.css({'position':'fixed', top: headBoxSetFn() });
  }else{
    // fixed를 해제하고 기존 position으로 재설정, 기존의 top의 값으로 변경
    sideBox.css({'position':'absolute', top:checkViewBoxH + 'px'});
  }
};

// 이벤트 ===============================

// 스크롤시 움직이는 값 확인
win.on('scroll', function(){
  scrollFixFn();
  scrollFix2Fn();
});


})(jQuery);