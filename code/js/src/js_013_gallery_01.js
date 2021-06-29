// js_013_gallery_01.js
(function($){
// jQuery


// 1. li클릭시(사실은 내부의 a를 클릭)
// 2. 내부의 a에 들어있는 data-text속성값을 
// 3. .big_image내부p에 전달


var gallery_01 = $('.gallery_01');
var galUl = gallery_01.children('ul');
var galLi = galUl.children('li');

var gal_01_Box = $('.gallery_box_01');
var galP = gal_01_Box.children('p');

var liConvertText = function(){
  return function(event){
    event.preventDefault();
    var thisLink = $(this).children('a');
    var thisData = thisLink.attr('data-text');
    // console.log( thisData );
    galP.text(thisData);
  }
};

galLi.on('click', liConvertText() );
// ---------------------------------------------

// 1. .gallery_02 li클릭시(사실은 내부의 a를 클릭)
// 2. 내부의 a에 들어있는 data-image속성값을 
// 3. .big_image내부에 전달

var gal_02 = $('.gallery_02');
var gal_02_box = gal_02.find('.big_image');
var gal_02_p = gal_02_box.find('p');

var gal_02_list = gal_02.find('li');
var galUrl = '../img/gallery/u_big/';

// list 첫번째 내용에 있는 글자(a요소의 속성data-text)를 우선 담기
var gal02_firstText = gal_02_list.eq(0).find('a').attr('data-text');
gal_02_p.text(gal02_firstText);
// -------------------------------------------------------------

gal_02_list.children('a').on('focus click', function(e){
  e.preventDefault();
  // 해당요소의 속성 (data-image) 값을 찾아 배경이미지로 적용
  var select = $(this);
  var selectImg = select.attr('data-image');
  // console.log( selectImg );
  var useImg = galUrl + selectImg;
  gal_02_box.css({'backgroundImage':'url(' + useImg + ')'});

  // 해당요소의 속성 (data-text)값을 p요소에 적용
  var selectText = select.attr('data-text');
  gal_02_p.text(selectText);
});

// -------------------------------------------------------------


// 1. .gallery_03 내부의 li요를 생성
// 2. 생성되는  li를 내가 만들고자 하는 갯수만큼
// 3. 적용할 data속성을 생성해서 담기 - 차후: 삭제
// 4. 나머지 기능은 위와 동일


var gallery_03 = $('.gallery_03');
var gallery_03_Ul = gallery_03.find('ul');
/*
var n = 1;
var set_03_Li = '<li><a href="#"><span>이미지 '+ n +'</span></a></li>';

gallery_03_Ul.append(set_03_Li);

n = 2;
set_03_Li = '<li><a href="#"><span>이미지 '+ n +'</span></a></li>';
gallery_03_Ul.append(set_03_Li);

n = 3;
set_03_Li = '<li><a href="#"><span>이미지 '+ n +'</span></a></li>';
gallery_03_Ul.append(set_03_Li);
*/


// var n = 0;
var set_03_Li = function(n){
  var setText = '<li><a href="#"><span>이미지 '+ n +'</span></a></li>';
  return setText;  
};

// js는 실 사용하는 html문서를 기준
var listUrl = '../img/gallery/u_thumnail/';
var galleryImgList = [
  'image_001.jpg',
  'image_002.jpg',
  'image_003.jpg',
  'image_004.jpg',
  'image_005.jpg',
];

// for(최초;비교;증감){}
for( var i = 0 ; i < 5 ; i++){
  gallery_03_Ul.append( set_03_Li( i + 1 ) );
  gallery_03_Ul.children('li').eq(i).children('a').css({'backgroundImage':'url('+ listUrl + galleryImgList[i] +')'});
}




})(jQuery);