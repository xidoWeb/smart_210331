// js_026_parallax_02.js
(function($){
// jQuery

// 목적: 스크롤이 움직일때, 각 이미지 (.par_01~.par_07)의 위치가 변동
// 1. 스크롤 이벤트, 스크롤이 움직인 값이 얼만큼?
// 2. 내용에 들어가는 여러장의 이미지는 총 몇장이 되는가?


// 변수 ---------------------------------------
var win = $(window);
var parallax = $('.parallax');
var parList = parallax.children('div');


// 기능 ---------------------------------------
var parLen = parList.length; 
console.log(parLen);

// test 
var setParallaxFn = function(move){
  var i=0; 
  var moveResult = move/(parLen*2);
  var result;
  for(;i < parLen; i++){
    result = -moveResult*(parLen-i-1);
    parList.eq(i).css({transform:'translateY('+ result +'px)'});
    // parList.eq(i).css({bottom:-moveResult*(parLen-i) +'px'})
  }
}
  
// 함수 ---------------------------------------
var moveImageFn = function(){
  var winScroll = win.scrollTop(); 
   setParallaxFn(winScroll);
}

//===============================================
// 이벤트 ---------------------------------------
win.on( 'scroll', moveImageFn );



})(jQuery);