// js_017_banner_03_indicator_02.js
(function($){

  // 1. 인디케이트 클릭시 해당하는 광고내용이 움직이게
  // 101. [v] 인디케이터를 어느것을 클릭했는지?
  // 102. [v] 클릭한 인디케이터의 위치에따른 광고의 위치?
  // 103. [v] 선택한 순서에 맞는 인디케이터에 act를 담기
  // ------------------------------------------------
  // 104. [v] 일정시간마다 광고배너영역이 움직이도록 처리 -> setInterval
  // 105. 마우스 올리면 정지 -> clearInterval
  // 106. 일정시간마다 움직이다 마우스올리면 정지, 벗어나면 다시 동작
  // 107. 마지막 내용이 보일때 처음으로 이동하는 형태를 수정
  // ------------------------------------------------

  // 변수
  var banner = $('.banner_02');
  var indicator = banner.find('.indicator');
  var indiUl = indicator.find('ul');
  var indiLi = indiUl.find('li');
  var indiLink = indiLi.find('a');

  var viewArea = banner.find('.view_area');
  var viewUl = viewArea.find('ul');

  var indiLiLen = indiLi.length;
  var n = 0;
  var timed = 500;

  // 함수 생성
  var slideMoveFn = function(n){
    // 광고이동
    viewUl.stop().animate({marginLeft: ( -100 * n ) + '%'}, timed);
    // .act 처리    
    indiLi.eq(n).addClass('act');
    indiLi.eq(n).siblings().removeClass('act');
  };

  // 이벤트
  indiLink.on('click', function(e){
    e.preventDefault();
    n = $(this).parent().index();
    slideMoveFn(n);
  });

  // 반복기능 -> clearInterval에서 제어하기위해 변수로 지정
  // 변수로 지정하더라도, 함수자체는 동작을 한다.
 var autoMoveFn = setInterval(function(){
    // n의 수치가 일정범위 내에서 처리되는것을 파악
    n += 1;
    if(n >= indiLiLen){ n = 0; }
    // console.log( n );
    slideMoveFn(n);
  }, timed*4);

  // 마우스 올리면 setInterval을 삭제
  banner.on('mouseenter', function(){
    clearInterval( autoMoveFn );
  });

  // setInverval 함수를 넣었다, 뺏다 가능하도록 제작 -> 함수처리




  // setInterval(기능수행, 시간); -> 일정 시간 마다 기능을 수행
  // setTimeout(기능수행, 시간); ->  일정 시간 후에 기능을 수행
  // clearInterval( 반복수행기능이름 ); -> setInterval기능을 강제로 정지


})(jQuery);