// js_019_banner_05_fade.js
(function($){
// jQuery
  var nextBtn = $('.next');
  var prevBtn = $('.prev');
  var li = $('.view_area li');
  var liLen = li.length;
  var n = 0;
  var n2 = n;

  // 함수
  var slideFadeFn = function(n){
    li.eq(n).show();
    li.eq(n2).fadeOut(function(){
      li.eq(n2).removeClass('act');
      li.eq(n).addClass('act');
      n2 = n;
    });
  }

  // 이벤트 
  nextBtn.on('click', function(e){
    e.preventDefault();
    n += 1;
    if(n > liLen-1){ n = 0 }
    slideFadeFn(n);
  }); //  nextBtn.on('click')
  
  prevBtn.on('click', function(e){
    e.preventDefault();
    n -= 1;
    if(n < 0){ n = liLen-1 }
    slideFadeFn(n);
  }); //  prevBtn.on('click');



})(jQuery);