// js_019_banner_05_fade.js
(function($){
// jQuery
  var nextBtn = $('.next');
  var li = $('.view_area li');
  var n = 0;

  nextBtn.on('click', function(e){
    e.preventDefault();

    li.eq(n).fadeOut(function(){
      $(this).removeClass('act');
      n += 1;
      li.eq(n).addClass('act');
      li.eq(n+1).show();
    });
    
   

  });


})(jQuery);