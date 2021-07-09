// jq_006_mouseck_xy.js
(function($){
// jQuery

  var area = $('.area');
  var chType = $('.check_type');

  // mousedown - 마우스를 누른 키를 찾아내기
  // 이벤트.button 
  //  0 -> 왼버튼, 1 -> 휠, 2 -> 오른버튼

  // mousemove
  var option = false; 
  area.on('mousedown mousemove mouseup', function(e){
    // console.log(e.originalEvent);
    // console.log(e.type);
    var type = e.type;
    chType.text(type);

    // console.log( e.button );
    if(type === 'mousedown'){ option = true; }
    if(type === 'mouseup'){option = false;}

    if(option && type === 'mousemove'){
      console.log( '마우스 누른상태에서 움직이는 중');
    }

  });

})(jQuery);