// js_026_parallax_02.js
(function($){
// jQuery

// 목적: 스크롤이 움직일때, 각 이미지 (.par_01~.par_07)의 위치가 변동
// 1. 스크롤 이벤트, 스크롤이 움직인 값이 얼만큼?

// 변수 ---------------------------------------
var win = $(window);

// 함수 ---------------------------------------
var moveImageFn = function(){
   var winScroll = win.scrollTop(); 
   console.log( winScroll );
}

//===============================================
// 이벤트 ---------------------------------------
win.on( 'scroll', moveImageFn );
// win.on( 'scroll', function(e){
//   var winScroll = win.scrollTop(); 
//   console.log( winScroll );
// });

})(jQuery);