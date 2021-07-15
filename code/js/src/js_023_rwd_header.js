// js_023_rwd_header.js
(function($){
// jQuery

// 변수
var gnb = $('#gnb');
var gnbBtn = gnb.find('.gnb_btn').children('button');
var gnbList = gnb.find('.gnb_list');
var navTitle = gnbList.find('.nav_title');
var navContent = gnbList.find('.nav_content'); 
var timed = 500;

  // 1. 스마트폰 기반에서 동작하게 하자
  // 100. gnbBtn을 클릭시 gnbList가 나타나게/사라지게 
  /* 
  gnbBtn.on('click', function(e){
    e.preventDefault();
    // gnb요소에 act클래스이름의 유무 판단
    var hasAct = gnb.hasClass('act');
    if(hasAct){
      gnbList.stop().fadeOut(timed/2);
      gnb.removeClass('act');
    }else{
      gnbList.stop().fadeIn(timed/2);
      gnb.addClass('act');
    }
  });
  */

  // 2. 노트북에서 기능 구현
  // 201. gnb_list내부의 li에 마우스 올리면 하위 ul을 나타나게
  // 202. gnb_list내부 '.nav_title'에 focus처리시 기능수행 ('.nav_content' 나타나게)
  navTitle.on('mouseenter', function(){
    $(this).parent().siblings().find(navContent).stop().slideUp(timed/2);
    $(this).next(navContent).stop().slideDown(timed/2);
  });
  gnb.on('mouseleave', function(){
    navContent.stop().delay(timed/3).slideUp();
  });

  navTitle.find('a').on('focus', function(e){
    var _this = $(this).parents('li'); 
    console.log( _this );
    _this.siblings().find(navContent).stop().slideUp(timed/2);
    _this.find(navContent).stop().slideDown(timed/2);
  });
  gnb.find('a').on('keyup', function(e){
    var evtKey = e.key.toLowerCase();
    var isEsc = evtKey === 'escape';
    if( isEsc ){
      $(this).blur();
      navContent.stop().slideUp(timed/2);
    }
  });



})(jQuery);