// js_024_parallax_02.js
(function($){
// jQuery
  // 스크롤시 가져오는 위치의 %값확인
  // li.eq(0)번째 위치값을 파악( offset().top );
  // 브라우저의 높이 계산
  // li.eq(0) 내부에 존재하는 .position_img의 위치값을 변경




  // 변수 --------------------------------------------------
  var win = $(window);
  var part = $('.part2');
  var li = part.find('li');

  // 임시 체크 --------------------------------------------------
  // var liOffset = li.eq(0).offset().top;
  // var winH = win.outerHeight();
  // var liPImg = li.eq(0).find('.position_img');
  

  // 함수 --------------------------------------------------


  // 이벤트 --------------------------------------------------
  win.on('scroll', function(e){
    var winScroll = win.scrollTop();
    // ---------------------------------------------
    var liOffset;// = li.eq(0).offset().top;
    var winH = win.outerHeight();
    var liPImg; // = li.eq(0).find('.position_img');    
    var i=0;
    for(; i < li.length; i++){
      liOffset = li.eq(i).offset().top;
      liPImg = li.eq(i).find('.position_img'); 
      // ---------------------------------------------
      // 선택된형태가 브라우저 하단에서 0부터 값나오도록 
      var findScroll = winScroll - liOffset + winH; 
      // %계산법 : 스크롤값 / 기준치 * 100
      var percentScroll = parseInt(findScroll / winH * 100);
      var per;
      if(percentScroll < 0) {
        per = 0;
      }else if(percentScroll > 100){
        per = 100;
      }else{
        per = percentScroll;
      }  // console.log( per/4 );

      // liPImg.stop().animate({marginTop: -per/3 + 'px'}, 300 );
      var intN = -per;
      liPImg.css({transform:'translateY(' + intN  + '%)', 
                  transition:'all 300ms ease'});
      } // for
  });


})(jQuery);