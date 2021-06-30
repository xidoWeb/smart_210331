// js_014_gallery_02.js
(function($){
// jQuery

var makeLi = '<li><a href="#"><span>이미지_01</span></a></li>';
var gallery = $('.gallery');
var thumnail = gallery.find('.thumnail');
var big_image = gallery.find('.big_image');

// [v] 1. 반복문을 이용하여 big_image에 li를 생성
// 2. 이미지를 담는 객체를 생성하여 담기
// 3. 큰 영역에 첫번째 이미지를 담기

// for(최초;조건;증감){}
var i=0;
for( ; i < 5 ; i += 1 ){
  // thumnail내부에 makeLi를 채우기(append : 내부에 뒤에 채우기)
  thumnail.append(makeLi);
}




})(jQuery);