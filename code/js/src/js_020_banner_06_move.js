// js_020_banner_06_move.js
(function($){
// jQuery

  // 1. 마우스로 누른위치와 띄는 위치의 값을 확인 후 배너의 요소를 교체

  var banner = $('.banner_touch');
  var viewArea = banner.find('.view_area');
  var viewLi = viewArea.find('li');
  
  var startPoint;
  var endPoint;
  var resultPoint;

  var newN = 0;
  var beforeN = newN;

  // 함수
  var evtPositionFn = function(e){
    var evt = e.originalEvent;
    var checkPoint = evt.pageX;
    return checkPoint;
  };

  // 이벤트
  viewArea.on('mousedown', function(e){
    // 이벤트 발생기준으로 위치값을 파악
    //var evt = e.originalEvent;
    //startPoint = evt.pageX;
    startPoint = evtPositionFn(e);
  });
  viewArea.on('mouseup', function(e){
    // var evt = e.originalEvent;
    // endPoint = evt.pageX;
    endPoint = evtPositionFn(e);
    resultPoint = startPoint - endPoint;
    // 시작점,끝점의 위치값이 음/양수에 대해 판단하여 내용을 다음버튼/이전버튼수행
    if(resultPoint > 0){
      console.log('양수');
    }else if(resultPoint < 0){
      console.log('음수');
    }else{
      console.log('값 0');
    }
  });


})(jQuery);