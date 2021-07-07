// js_017_banner_03_indicator_02.js
(function($){

  // 1. 인디케이트 클릭시 해당하는 광고내용이 움직이게
  // 101. [v] 인디케이터를 어느것을 클릭했는지?
  // 102. [v] 클릭한 인디케이터의 위치에따른 광고의 위치?
  // 103. [v] 선택한 순서에 맞는 인디케이터에 act를 담기
  // ------------------------------------------------
  // 104. [v] 일정시간마다 광고배너영역이 움직이도록 처리 -> setInterval
  // 105. [v] 마우스 올리면 정지 -> clearInterval
  // 106. [v] 일정시간마다 움직이다 마우스올리면 정지, 벗어나면 다시 동작
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
  var viewLi = viewUl.find('li');

  var indiLiLen = indiLi.length;
  var n = 0;
  var timed = 500;

  // 마지막요소를 앞에 붙여넣기, ul의 가로길이/li의 가로길이 조정
  var cloneLi = viewLi.eq(-1).clone();
  viewUl.prepend(cloneLi);
  var newViewLi = viewUl.find('li');
  var newLen = newViewLi.length;
  // console.log(indiLiLen, newLen);
  viewUl.css({width:( 100 * newLen )+ '%', left: -100 + '%', position:'relative'});
  newViewLi.css({width: (100 / newLen) + '%'});

  // 함수 생성
  var slideMoveFn = function(n, interval){
    // setInterval기능과 마지막 위치에서 처음으로 이동시
    if(n <= 0 && interval){ viewUl.css({marginLeft:100+'%'});  }
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
    slideMoveFn(n, false);
  });

  // 반복기능 -> clearInterval에서 제어하기위해 변수로 지정
  var autoMoveFn;
  var slideGoFn = function(){
    autoMoveFn = setInterval(function(){
      n += 1;
      if(n >= indiLiLen){ n = 0; }
      slideMoveFn(n, true);
    }, timed*4);
    return autoMoveFn;
  };

  var slideStopFn = function(){
    clearInterval(autoMoveFn);
  };
  slideGoFn();

  banner.on({ 'mouseenter': slideStopFn, 'mouseleave': slideGoFn });

  // setInterval(기능수행, 시간); -> 일정 시간 마다 기능을 수행
  // setTimeout(기능수행, 시간); ->  일정 시간 후에 기능을 수행
  // clearInterval( 반복수행기능이름 ); -> setInterval기능을 강제로 정지

  // 선택자.trigger('이벤트') -> button.trigger('click') -> 버튼을 대신 클릭하겠다!

})(jQuery);