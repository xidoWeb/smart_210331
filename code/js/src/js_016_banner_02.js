// js_016_banner_02.js

(function($){
// jQuery

  // 1. 다음버튼 클릭시 슬라이드 넘어가기
  // 2. 이전버튼 클릭시 슬라이드 이전내용 넘어가기

  
  
  // 변수
  var slideBtn = $('.slide_btn');
  var nextBtn = slideBtn.children('.next');
  
  var viewArea = $('.view_area');
  var viewUl = viewArea.children('ul');
  var n = 0;
  var permission = true;
  
  // 100. 1칸씩 이동
  // 200. 이동 제한(최대값)

  nextBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      n += 1;
      viewUl.stop().animate({marginLeft:(-100 * n) + '%'},function(){
        permission = true;
      });
    }
  });

  

})(jQuery);