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
// 9. li요소 전부 동작

// =====================================================
// 변수 ------------------------------------------------
var win = $(window);
var part = $('.part');
var li = part.find('li');

// 기능수행체크 
var winH = win.outerHeight();

var setLiFn = function(scroll){
  // li.각각 수행 
  var liSelect, liOffset, setOffset, resultN;

  var i=0; 
  var liLen = li.length;
  for(; i<liLen; i += 1){
    liSelect = li.eq(i);
    liOffset = liSelect.offset().top;
    setOffset = liOffset - (winH / 3 * 2);

    resultN = scroll - setOffset;
    (resultN >= 0) ? liSelect.addClass('act') : liSelect.removeClass('act');
  }
}


// 이벤트 ===============================================

win.on('scroll', function(){
  var winScroll = win.scrollTop();
  setLiFn(winScroll);
});

})(jQuery);