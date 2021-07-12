// js_021-2_scroll_move.js
(function($){
// jQuery
// 1. .top_move버튼 클릭시 상단으로 이동
// 2. 기존의 임시링크는 x

// 변수
var win = $(window);
var doc = $('html,body');
var topMove = $('.top_move');


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


})(jQuery);