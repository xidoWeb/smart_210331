// js/src/jq_003_event_and_display.js

(function($){
  // jQuery

  // .box
  var box = $('.box');
  var ul = $('ul');
  var li = ul.children('li');
  var timed = 1000;

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
    box.stop().show( timed / 2 );
  });
  li.eq(3).on('click', function(e){
    e.preventDefault();
    box.stop().hide( timed / 2 );
  });

  li.eq(4).on('click', function(e){
    e.preventDefault();
    box.stop().fadeIn( timed );
  });
  li.eq(5).on('click', function(e){
    e.preventDefault();
    box.stop().fadeOut( timed );
  });

  li.eq(6).on('click', function(e){
    e.preventDefault();
    box.stop().slideDown( timed );
  });
  li.eq(7).on('click', function(e){
    e.preventDefault();
    box.stop().slideUp( timed );
  });

  li.eq(8).on('click', function(e){
    e.preventDefault();
    box.addClass('act');
  });
  li.eq(9).on('click', function(e){
    e.preventDefault();
    box.removeClass('act');
  });

  li.eq(10).on('click', function(e){
    e.preventDefault();
    var cssState = box.css('display');
    
    if(cssState === 'block'){
      box.css({display:'none'});
    }else{
      box.css({display:'block'});
    }    
  });

  li.eq(11).on('click', function(e){
    e.preventDefault();
    box.stop().toggle( timed / 2 );
  });

  li.eq(12).on('click', function(e){
    e.preventDefault();
    box.stop().fadeToggle();
  });

  li.eq(13).on('click', function(e){
    e.preventDefault();
    box.stop().slideToggle();
  });

  li.eq(14).on('click', function(e){
    e.preventDefault();
    box.toggleClass('act');
  });

  li.on('click', function(e){
    e.preventDefault();
    var thisI = $(this).index();
    console.log( '클릭한 요소는 ', (thisI + 1), '번째 입니다.'  );
  });

  // eq()  -> 순서를 지정
  // index() -> 순서를 파악
  // $(this) -> 이벤트발생 주체
  
})(jQuery);