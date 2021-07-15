// js_023_rwd_header.js
(function($){
// jQuery

  // 1. 스마트폰 기반에서 동작하게 하자


  var gnb = $('#gnb');
  var gnbBtn = gnb.find('.gnb_btn').children('button');
  var gnbList = gnb.find('.gnb_list');

  // 100. gnbBtn을 클릭시 gnbList가 나타나게/사라지게 
  gnbBtn.on('click', function(e){
    e.preventDefault();
    gnbList.toggle();
    gnb.toggleClass('act');
  });


})(jQuery);