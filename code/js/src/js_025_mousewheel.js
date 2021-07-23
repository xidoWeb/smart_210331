// js_025_mousewheel.js
(function($){
// jQuery
// 1.  .info의 높이를 브라우저화면의 높이만큼 재설정
// 2. 실시간(win.resize())으로 브라우저크기가변경되면 같이 높이 변경(함수 setWinFn() )
// 3. 마우스 휠을 움직였을때 움직였음을 파악 (이벤트 : mousewheel, 범위 : $('html,body') )

// ==========================================
// 변수
var win = $(window);
var viewDoc = $('html,body');
var info = $('.info');
var recommend = true;
var countScroll = 0;
var winH;
// 기능 
// 함수
var setWinHFn = function(){
  winH = win.outerHeight();
  info.css({height:winH + 'px'});
};

var setScrollFn = function(n){
  viewDoc.animate({scrollTop:n +'px'}, function(){
    recommend = true;
  });
};

// ==========================================
setWinHFn();
setScrollFn(0);

// 이벤트
win.on('resize', function(){ setWinHFn();  });

viewDoc.on('mousewheel DOMMouseScroll', function(e){
  var winScrollTop = win.scrollTop();

  if(recommend){
    recommend = false;
    var evt = e.originalEvent;
    // console.log(e.type);
    // mousewheel: evt.wheelDelta -> -120 | 120
    // mousewheel: evt.detail -> 0
    // DOMMouseScroll: evt.detail -> 3 | -3
    var delta = 0;
    (e.type === 'DOMMouseScroll') ? delta = evt.detail * -40 :  delta = evt.wheelDelta;
    console.log( delta );  
    
    if(delta < 0 && countScroll <= 1){
      countScroll += 1;
      setScrollFn(winH);
    }else if(winScrollTop < winH){
      // countScroll = 0;
      setScrollFn(0);
    }

  }
});

})(jQuery);