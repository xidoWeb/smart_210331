// js_018_banner_04.js
(function($){
// jQuery

// 1. 인디케이터 클릭시 배너이동
// 2. 다음/이전버튼 클릭시 배너이동
// 3. 배너바뀌면 숫자 변하게
// 4. ul/li 갯수/위치조정
// 5. 일정시간 지나면 자동으로 이동
// 6. 마우스 올리면 자동으로 이동하는 기능이 일시정지
// 7. 마우스 벗어나면 다시 자동으로 이동
// 8. 인디케이서 선택된 형태 체크 (addClass-> act)
// ------------------------------------------------
// 9. 광고내용갯수에 맞게 인디케이터 생성
// 10. 필요에따라, 인디케이터/버튼/전체갯수및현재갯수 표현여부를 체크
// -------------------------------------------------------------


// 변수
var banner = $('.banner_01');

var indicator = banner.find('.indicator');
var indiLi = indicator.find('li');
var indiLiLink = indiLi.find('a');

var indiP = indicator.find('p');
var totalNumber = indiP.find('.total');
var nowNumber = indiP.find('.now');

var buttonSelect = banner.find('.button_select');
var nextBtn = buttonSelect.find('.next');
var prevBtn = buttonSelect.find('.prev');

var viewArea = banner.find('.view_area');
var viewUl = viewArea.find('ul');
var viewLi = viewUl.find('li');

var n = 0; 
var permission = true;
var viewLiLen = viewLi.length;

// 100. 인디케이터 클릭시 배너 이동

// 이벤트
// 101. 인디케이터 클릭
indiLiLink.on('click', function(e){
  e.preventDefault();
  // 순서파악
  n = $(this).parent().index();
  // 배너이동
  viewUl.animate({marginLeft: -100 * n +'%'});
  // .act적용
  indiLi.eq(n).addClass('act');
  indiLi.eq(n).siblings().removeClass('act');
});


// 200. 다음버튼/ 이전버튼 클릭시 배너 이동
nextBtn.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission = false;
    n += 1;
    viewUl.stop().animate({marginLeft: -100 * n +'%'}, function(){
      permission = true;
      if(n >= viewLiLen-1){
        n = 0;
      }
    });
  }
});


prevBtn.on('click', function(e){
  e.preventDefault();
});


})(jQuery);