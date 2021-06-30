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
var bigUrl = '../img/gallery_02/original/';
var thumnailLi, listSource, listText;

// [v] 1. 반복문을 이용하여 big_image에 li를 생성
// [v] 2. 이미지를 담는 객체를 생성하여 담기
// [v] 3. 큰 영역에 첫번째 이미지를 담기

// for(최초;조건;증감){}
var i=0;

big_image.css({backgroundImage:'url('+ bigUrl + galleryData[i].bigImg +')'});

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
// ------------------------------------------------------
// [v] 1. 작은 이미지를 마우스 올릴경우 다음과 같은 기능을 수행
// [v] 2. 작은이미지에 들어있는 이미지와 같은형태의 큰이미지의 주소를 찾아서
         // bigUrl + galleryData[i].gigImg
// [v] 3. 큰 영역에 배경이미지로 배치
// [v] 4. 이때, 작은이미지가 어떤 것이 선택되었는지 **주목성**이 있도록 처리
// [v] 5. 주목성처리: class="act" 삽입
// [v] 추가기능1 : 작은이미지를 선택할때, 다른영역에있는 형태는 act해제
// [] 추가기능2 : 마우스가 아닌 키보드 focus 처리 
// [] 추가기능3 : 클릭시 처리되는부분도 일부 해결

// 전체 thumnail 내부의 li를 재선정
thumnailLi = thumnail.children('li');

thumnailLi.on('mouseenter', function(e){
  // 선택된 요소의 순번파악
  var _thisI = $(this).index();
  var bigImgSet = bigUrl + galleryData[_thisI].bigImg;
  // console.log( bigImgSet );

  big_image.css({backgroundImage:'url('+ bigImgSet +')'});

  //해당 요소에 class처리
  // thumnailLi.eq(_thisI).attr('class','act');
  thumnailLi.eq(_thisI).siblings('li').removeClass('act');
  thumnailLi.eq(_thisI).addClass('act');
});

//--------------------------------------------------------------------------
})(jQuery);