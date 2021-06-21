// js/src/jq_003_event_and_display.js

(function($){
  // jQuery

  // .box
  var box = $('.box');
  var ul = $('ul');
  var li = ul.children('li');

  // addEventListener(e){}
  li.eq(0).on('click', function(e){
    e.preventDefault();
    box.css({'display':'block'});
  });
  li.eq(1).on('click', function(e){
    e.preventDefault();
    box.css({'display':'none'});
  });

  li.eq(2).on('click', function(e){
    e.preventDefault();
    box.stop().show(500);
  });
  li.eq(3).on('click', function(e){
    e.preventDefault();
    box.stop().hide(500);
  });

  li.eq(4).on('click', function(e){
    e.preventDefault();
    box.stop().fadeIn(1000);
  });
  li.eq(5).on('click', function(e){
    e.preventDefault();
    box.stop().fadeOut(1000);
  });

  li.eq(6).on('click', function(e){
    e.preventDefault();
    box.stop().slideDown(1000);
  });
  li.eq(7).on('click', function(e){
    e.preventDefault();
    box.stop().slideUp(1000);
  });

  li.eq(8).on('click', function(e){
    e.preventDefault();
    box.addClass('act');
  });
  li.eq(9).on('click', function(e){
    e.preventDefault();
    box.removeClass('act');
  });

  
})(jQuery);