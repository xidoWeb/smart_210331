// js_020_banner_06_move.js
(function($){
// jQuery

  // 1. 마우스로 누른위치와 띄는 위치의 값을 확인 후 배너의 요소를 교체
  // 101. 마우스 누른위치와 띄는 위치값으로 1씩 더하거나 빼기
  // 102. 값이 + 이면 다음요소를 나타나게
  // 104. 값이 + 일경우 마지막요소가 나타나면 첫요소로 다시 이동
  // 106. 다음요소가 나타나면 이전에 있던요소의 .act를 빼고, 새로나타난 요소에 재할당

  // 103. 값이 - 이면 이전요소를 나타나게
  // 105. 깂이 - 일경우 첫요소가 나타나면 마지막 요소로 다시 이동

  var banner = $('.banner_touch');
  var viewArea = banner.find('.view_area');
  var viewLi = viewArea.find('li');
  
  var viewLiLen = viewLi.length;

  var startPoint;
  var endPoint;
  var resultPoint;

  var newN = 0;
  var beforeN = newN;

  // 함수
  var evtPositionFn = function(e){
    var evt = e.originalEvent;
    var eType = e.type.slice(0,5); // touchstart, touchend
    // 글.slice(시작위치, 갯수);

    var checkPoint;
  /*
    if(eType === 'touch'){
      checkPoint = evt.changedTouches[0].pageX;
    }else{
      checkPoint = evt.pageX;
    }
  */
    (eType === 'touch') ? 
      checkPoint = evt.changedTouches[0].pageX : 
      checkPoint = evt.pageX;

    return checkPoint; 
  };

  // 이벤트
  viewArea.on('mousedown touchstart', function(e){
    // 이벤트 발생기준으로 위치값을 파악
    startPoint = evtPositionFn(e);
  });
  viewArea.on('mouseup touchend', function(e){
    endPoint = evtPositionFn(e);
    resultPoint = startPoint - endPoint;
    // 시작점,끝점의 위치값이 음/양수에 대해 판단하여 내용을 다음버튼/이전버튼수행
    if(resultPoint > 50){
      newN += 1;
    }else if(resultPoint < -50){
      newN -= 1;
    }

    if(newN > viewLiLen-1){
      newN = 0;
    }else if(newN < 0){
      newN = viewLiLen-1;
    }

    if(beforeN !== newN){
      viewLi.eq(newN).show();
      viewLi.eq(beforeN).fadeOut(function(){
        viewLi.eq(beforeN).removeClass('act');
        viewLi.eq(newN).addClass('act');
        beforeN = newN;
      });
    }

  });


})(jQuery);