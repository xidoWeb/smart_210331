// js/src/layout_011_jq_accordion_menu_result.js

(function($){
  // jQuery

  // dt를 클릭시 dd를 나타나거나 사라지게 만들기

  // dt를 클릭 - dt바로 뒤에 있는 dd나타나게하기
  // 다른 dt클릭 - 바로뒤 dd나타나게, 다른 dd는 사라지게
  // dt를 클릭시 이미 dd가 나타나 있다면 -> 사라지게

  // 변수 지정
  var accordion = $('.accordion');
  var accDl = accordion.find('dl');
  var accDt = accDl.children('dt');
  var accDd = accDl.children('dd');

  // 기능구현 1
  accDt.on('click', function(){
    var thisI = $(this);
    var viewDd = thisI.next(accDd);
    viewDd.siblings('dd').slideUp();
    viewDd.slideDown();
  });



})(jQuery);