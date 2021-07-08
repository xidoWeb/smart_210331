// js_019_banner_05_fade.js
(function($){
// jQuery
  var banner = $('.banner_01');
  
  var indicator = banner.find('.indicator');
  var indiLi = indicator.find('li');
  var indiLiLink = indiLi.children('a');  
  
  var viewCount = banner.find('p');
  var totalNum = viewCount.find('.total');
  var nowNum = viewCount.find('.now');

  var btnSelect = banner.find('.button_select');
  var nextBtn = btnSelect.find('.next');
  var prevBtn = btnSelect.find('.prev');
  
  var viewArea = banner.find('.view_area');
  var li = viewArea.find('li');
  var liLen = li.length;
  var n = 0;
  var n2 = n;

  // 함수는 각 기능별로 별도로 만들어서
  // 필요시에 각각 불러와라.
  // 그 양이 많을경우에는 함수를 묶은 별도의 함수를 만들어서 사용

  // 함수
  var slideFadeFn = function(n){
    li.eq(n).show();
    li.eq(n2).fadeOut(function(){
      li.eq(n2).removeClass('act');
      li.eq(n).addClass('act');
      n2 = n;
    });
  };
  var countFn = function(n){
    nowNum.text(n+1);
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

 countFn(n);
 indiActionFn(n);

  // 이벤트 
  // 다음버튼 클릭
  nextBtn.on('click', function(e){
    e.preventDefault();
    n += 1;
    if(n > liLen-1){ n = 0 }
    slideAct(n);
  }); //  nextBtn.on('click')
  
  // 이전버튼 클릭
  prevBtn.on('click', function(e){
    e.preventDefault();
    n -= 1;
    if(n < 0){ n = liLen-1 }
    slideAct(n);
  }); //  prevBtn.on('click');

  // 인디케이터 클릭
  indiLiLink.on('click', function(event){
    event.preventDefault();
    n = $(this).parent().index();
    slideAct(n);
  });

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





})(jQuery);