// jq_006_mouseck_xy.js
(function($){
// jQuery


  // click은 마우스눌렀다 띄는 행위전체, 왼버튼으로 인식되어있으며 button값은 0

  // mousedown - 마우스를 누른 키를 찾아내기
  // 이벤트.button 
  //  0 -> 왼버튼, 1 -> 휠, 2 -> 오른버튼

  // mouseup  마우스 누른버튼 띌때
  // mousemove 마우스가 움직임을 가질때, 
  // 마우스누른상태로 움직임을 체크하려면 여러 옵션을 설정해서 사용해야한다.

  // touchstart 터치가능한 기기를 누를때
  // touchend 터치가능한 기기를띌때
  // touchmove 터치중 손가락을 움직일때

  // client : 브라우저에서 보이는부분만큼을 왼쪽을 0, 상단을0로 무조건본다.
  // offset : 이벤트 발생영역 -> 터치기반에는 offsetX, offsetY 존재하지 않는다.
  // page : 문서전체의 크기를 기준으로 본다.
  // screen : 모니터 좌표기준

  // hint : pageX, pageY값에서 무언가 처리!!!
  // hint : offset().top, offset().left
// ---------------------------------------------------
  var area = $('.area');
  // var area = $('#wrap');
  var chType = $('.check_type');
  var chX    = $('.check_x');
  var chY    = $('.check_y');

  // 체크 및 좌표함수
  var checkTypeFn = function(e){    
    var eType = e.type;
    var evt = e.originalEvent;

    var x = 0;
    var y = 0;   
    chType.text(eType);

    if(e.type === 'touchmove'){
      x = evt.changedTouches[0].offsetX ;
      y = evt.changedTouches[0].offsetY ;
      console.log( evt.changedTouches[0] );
    }else if(e.type === 'mousemove'){
      x = evt.offsetX;
      y = evt.offsetY;
    }
    
    chX.text(x);
    chY.text(y);
  };



  // mousemove
  var option = false; 
  // area.on('click', function(e){
  //   console.log( e.type, e );
  // });

  area.on('mousedown', function(e){
    if(e.button === 0) {
      option = true;
      // console.log('마우스 왼버튼 클릭으로 move기능 승인');
    }else{
      // console.log('마우스 왼버튼만 승인가능합니다.');
    }
  });

  area.on('mouseup', function(e){
    option = false;
    // console.log('마우스 move기능 해제');
    chType.text('none');
    // setTimeout(function(){
    //   console.clear();
    // }, 3000);
  });

  area.on('mousemove', function(e){
    if(option){
      checkTypeFn(e)
      // console.log('마우스 움직이는 중');
    }
  });

  area.on('touchstart', function(e){
    checkTypeFn(e);
    // console.log('이곳이 터치의 시작점!!!');
  });

  area.on('touchend', function(e){
    checkTypeFn(e);
    // console.log('이곳이 터치의 끝점!!!');
    // setTimeout(function(){
    //   console.clear();
    // }, 3000);
  });

  area.on('touchmove', function(e){
    checkTypeFn(e);
    // console.log('터치로 움직이는 중');
  });



})(jQuery);