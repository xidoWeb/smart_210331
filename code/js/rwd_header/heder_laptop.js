// heder_laptop.js
(function($){
// jQuery
// 변수
var gnb = $('#gnb');
var gnbBtn = gnb.find('.gnb_btn').children('button');
var gnbList = gnb.find('.gnb_list');
var navTitle = gnbList.find('.nav_title');
var navContent = gnbList.find('.nav_content'); 
var timed = 500;

  // 2. 노트북에서 기능 구현
  // 201. gnb_list내부의 li에 마우스 올리면 하위 ul을 나타나게
  // 202. gnb_list내부 '.nav_title'에 focus처리시 기능수행 ('.nav_content' 나타나게)
  // 203. gnbBtn은 1280이상의 기기는 동작하지 않으므로, 코드 삭제

  // 201
  navTitle.on('mouseenter', function(){
    $(this).parent().siblings().find(navContent).stop().slideUp(timed/2);
    $(this).next(navContent).stop().slideDown(timed/2);
  });
  gnb.on('mouseleave', function(){
    navContent.stop().delay(timed/3).slideUp();
  });

  // 202
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

  // 203 
  gnbBtn.parent().remove();


})(jQuery);