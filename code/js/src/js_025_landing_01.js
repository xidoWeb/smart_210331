// js_025_landing_01.js
(function($){
// jQuery

// 1. 스크롤 탐지(브라우저)
// 2. 스크롤 이동의 양 체크 ( scrollTop() )
// 3. 화면의 높이값 계산 ( 브라우저.outerHeight() )
// 4. li 위에서부터 떨어진 값 파악 ( 선택자.offset().top );
// 5. 기준이 화면의 하단 이기에 : li의 위치값 - 브라우저의 높이값 
// 5-1. 화면의 하단에서 1/3지점위치에서 나타나게 하기위해 수정  (브라우저 높이/3)
// 6. 스크롤을 이동시 지정한 offset값 ( setOffset )과 비교하여 이보다 커지면 체크
// 7. 체크되는 곳에서 li에 act 클래스이름 부여 
// 8. 옵션: 반대의 경우에는 act빼기

// =====================================================
// 변수 ------------------------------------------------
var win = $(window);
var part = $('.part');
var li = part.find('li');

// 기능수행체크 
var winH = win.outerHeight();
// li.첫번째의 위치
var liSelect = li.eq(0);
var liOffset = liSelect.offset().top;
var setOffset = liOffset - (winH / 3 * 2);  // liOffset + winH - (winH/3);


// 이벤트 ===============================================

win.on('scroll', function(){
  var winScroll = win.scrollTop();
  // console.log( winScroll );
  var resultN = winScroll - setOffset;
  if(resultN >= 0){
    // console.log( '수치체크: ', resultN );    
    liSelect.addClass('act');
  }else{
    liSelect.removeClass('act');
  }

});

})(jQuery);