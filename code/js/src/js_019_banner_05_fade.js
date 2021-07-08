// js_019_banner_05_fade.js
(function($){
// jQuery
  var banner = $('.banner_01');  
 
  var indicatorArea = banner.find('.indicator');
  var viewCount = banner.find('p');
  var totalNum = viewCount.find('.total');
  var nowNum = viewCount.find('.now');

  var playArea = banner.find('.play');
  var playBtn = playArea.children('button');

  var btnSelect = banner.find('.button_select');
  var nextBtn = btnSelect.find('.next');
  var prevBtn = btnSelect.find('.prev');
  
  var viewArea = banner.find('.view_area');
  var li = viewArea.find('li');
  var liLen = li.length;
  var newCount = 0;
  var beforeCount = newCount;

// 인디케이터(ul) 생성 ----------------------
indicatorArea.prepend('<ul class="indi_ul"></ul>');
var indiUl = indicatorArea.find('.indi_ul');
// console.log( indiUl );
var i=0;
var setNum = function(i){
  var num = '0000000' + (i+1);
  // 숫자 정수를 사용시 앞의 0은 사라지게되므로,
  // 문자로 변경하여 마지막 숫자 2자리만 가져오게 하는 기법
  var setN = num.slice(-2); 
  return setN;
};

// var t;
// if(i < 10){
//   t = '00' + (i+1);
// }else if(i < 100){
//   t = '0' + (i+1);
// }

for( ; i < liLen ; i+=1 ){
  indiUl.append('<li><a href="#">'+ setNum(i) +'</a></li>');
}

// --------------------------------------

  var indicator = banner.find('.indicator');
  var indiLi = indicator.find('li');
  var indiLiLink = indiLi.children('a');  

  // 함수는 각 기능별로 별도로 만들어서
  // 필요시에 각각 불러와라.
  // 그 양이 많을경우에는 함수를 묶은 별도의 함수를 만들어서 사용

  // 함수
  var slideFadeFn = function(n){
    li.eq(n).show();
    li.eq(beforeCount).fadeOut(function(){
      li.eq(beforeCount).removeClass('act');
      li.eq(n).addClass('act');
      beforeCount = n;
    });
  };
  var countFn = function(n){
    nowNum.text(n+1);
    // nowNum.text( setNum(n) );
    totalNum.text(liLen);
  };
  var indiActionFn = function(n){
    indiLi.eq(n).addClass('act');
    indiLi.eq(n).siblings().removeClass('act');
  };

  var slideAct = function(n){
    slideFadeFn(n);
    countFn(n);
    indiActionFn(n);
  };

 countFn(newCount);
 indiActionFn(newCount);

  // 이벤트 
  // 다음버튼 클릭
  nextBtn.on('click', function(e){
    e.preventDefault();
    newCount += 1;
    if(newCount > liLen-1){ newCount = 0 }
    slideAct(newCount);
  }); //  nextBtn.on('click')
  
  // 이전버튼 클릭
  prevBtn.on('click', function(e){
    e.preventDefault();
    newCount -= 1;
    if(newCount < 0){ newCount = liLen-1 }
    slideAct(newCount);
  }); //  prevBtn.on('click');

  // 인디케이터 클릭
  indiLiLink.on('click', function(event){
    event.preventDefault();
    newCount = $(this).parent().index();
    slideAct(newCount);
  });

  var timed = 1000;
  // 트리거 수행
  var slideClick;
  var slideGoFn = function(){
    slideClick = setInterval(function(){
      nextBtn.trigger('click');
    }, timed);
  };
  var slidePauseFn = function(){ clearInterval(slideClick); };
  slideGoFn();

  // 마우스 올릴경우 수행
  // banner.on('mouseenter', function(){ slidePauseFn();  });
  // banner.on('mouseleave', function(){ slideGoFn();     });

  // 재생/일시정지버튼 수행
  var nowT = playBtn.text();
  var pauseT = '정지';
  var playState = [nowT, pauseT];
  // console.log( playState[1] );
  //일부러 재생중에는 .act를 삽입
  playBtn.addClass('act'); 
  
  playBtn.on('click', function(e){
    e.preventDefault();
    // hasClass('이름') -> 클래스명이 있으면 true, 없으면 false
    var isAct = $(this).hasClass('act');

    if(isAct){
      // act가 있으면 -> 재생중이니 정지
      slidePauseFn();
      playBtn.removeClass('act');
      playBtn.text(playState[1]);
    }else{
      // act가 없으면 -> 멈춰있으니 재생
      slideGoFn(); 
      playBtn.addClass('act');
      playBtn.text(playState[0]);
    }
  }); // playBtn.on('click')



//---------------------------------------
  // 1. 다음 버튼을 누르면 뒤에나올 요소를 나오게 해라
  // 2. 현재 보이는 요소를 fadeOut() 사라지게하고, 뒤에요소는 미리 배치
  // 3. 마지막에 위치했을 경우 -> 처음 요소가 나타나게 만들어라
  // 2-1. 앞에 있던(보이던) 요소는 사라지면서(display:none) - z-index가 뒤로
  // 2-2. 뒤에 나올 요소는 앞의 요소가 사라지고 이후에 상황을 고려하여 z-index를 앞으로
  // 4. 전체 갯수와 현재 보이는 요소의 순서 표기
  // 5. 인디케이터를 클릭시 해당 위치에 맞는 요소가 나타나게
  // 6. 인디케이터기능 시각효과 처리
  // 7. 중복수행중인 기능을 함수처리
  // 8. 인디케이터를 광고의 갯수에따라 생성되네 만들기
  // 9. 자동으로 화면이 이동되게 만들기
  // 10. 일시정지, 재생버튼을 클릭하여 동작처리





})(jQuery);