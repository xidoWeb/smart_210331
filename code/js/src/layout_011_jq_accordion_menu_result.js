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
  /*
  accDt.on('click', function(){
    var thisI = $(this);
    var viewDd = thisI.next(accDd);
    // var vidwDdCheck = viewDd.css('display'); // block ||  none

    viewDd.siblings('dd').slideUp();    
    // if(vidwDdCheck === 'none'){ viewDd.slideDown(); }else{ viewDd.slideUp(); }
    // (vidwDdCheck === 'none') ?  viewDd.slideDown() : viewDd.slideUp();
    viewDd.slideToggle();
  });
*/

var addBtn = accDt.children('button');
addBtn.on('click',function(e){
  e.preventDefault();
  var thisI = $(this).parent();
  var viewDd = thisI.next(accDd);
  var viewDdCheck = viewDd.css('display') === 'none'; // true || false

  var siblingDd = viewDd.siblings('dd');
  siblingDd.stop().slideUp();
  thisI.siblings('dt').removeClass('act');

  // viewDd.stop().slideToggle();
  if(viewDdCheck){
    $(this).attr('tabindex', 0);
    viewDd.slideDown(function(){
      $(this).focus();
      siblingDd.attr('tabindex', -1);
    });
    thisI.addClass('act');
  }else{
    viewDd.slideUp();
    thisI.removeClass('act');
  }

});



})(jQuery);