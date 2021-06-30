// js_014_gallery_02.js
(function($){
// jQuery


var galleryData = [
  {
    miniImg:'agenlaku.jpg',
    miniText:'thumnail_01',
    bigImg:'agenlaku-indonesia-FoUETBpb6mY-unsplash.jpg',
    bigText:'001 - 상세 설명 첨부'
  },
  {
    miniImg:'alexander.jpg',
    miniText:'thumnail_02',
    bigImg:'alexander-andrews-BX4Q0gojWAs-unsplash.jpg',
    bigText:'002 - 상세 설명 첨부'
  },
  {
    miniImg:'annie.jpg',
    miniText:'thumnail_03',
    bigImg:'annie-spratt-cxAZxTuL7Sk-unsplash.jpg',
    bigText:'003 - 상세 설명 첨부'
  },
  {
    miniImg:'bench.jpg',
    miniText:'thumnail_04',
    bigImg:'bench-accounting-nvzvOPQW0gc-unsplash.jpg',
    bigText:'004 - 상세 설명 첨부'
  },  
  {
    miniImg:'c.jpg',
    miniText:'thumnail_05',
    bigImg:'c-d-x-PDX_a_82obo-unsplash.jpg',
    bigText:'005 - 상세 설명 첨부'
  }
];


var makeLi = '<li><a href="#"><span>이미지_01</span></a></li>';
var gallery = $('.gallery');
var thumnail = gallery.find('.thumnail');
var big_image = gallery.find('.big_image');

var thumUrl = '../img/gallery_02/mini/';
var bigUrl = '../img/gallery_02/origin/';

var thumnailLi, listSource, listText;


// [v] 1. 반복문을 이용하여 big_image에 li를 생성
// 2. 이미지를 담는 객체를 생성하여 담기
// 3. 큰 영역에 첫번째 이미지를 담기

// for(최초;조건;증감){}
var i=0;
var thumLength = galleryData.length;
for( ; i < thumLength ; i += 1 ){
  // thumnail내부에 makeLi를 채우기(append : 내부에 뒤에 채우기)
  thumnail.append(makeLi);
  thumnailLi = thumnail.children('li').eq(i);
  listSource = 'url(' + thumUrl + galleryData[i].miniImg + ')';
  listText = galleryData[i].miniText;

  thumnailLi.children('a').css({backgroundImage:listSource});
  thumnailLi.find('span').text(listText);
}

// 전체 thumnail 내부의 li를 재선정
thumnailLi = thumnail.children('li');




})(jQuery);