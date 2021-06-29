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
var thum;

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
var bigUrl = '../img/gallery/u_big/';
var galleryImgList = [
  {
    'thumnail':'image_001.jpg',
    'contents':'001_thumnail_설명',
    'big':'image_001.jpg',
    'bigNarr':'001_디테일 설명을 작성하시면 됩니다.'
  },
  {
    'thumnail':'image_002.jpg',
    'contents':'002_thumnail_설명',
    'big':'image_001.jpg',
    'bigNarr':'002_디테일 설명을 작성하시면 됩니다.'
  },
  {
    'thumnail':'image_003.jpg',
    'contents':'003_thumnail_설명',
    'big':'image_001.jpg',
    'bigNarr':'003_디테일 설명을 작성하시면 됩니다.'
  },
  {
    'thumnail':'image_004.jpg',
    'contents':'004_thumnail_설명',
    'big':'image_001.jpg',
    'bigNarr':'004_디테일 설명을 작성하시면 됩니다.'
  },
  {
    'thumnail':'image_005.jpg',
    'contents':'005_thumnail_설명',
    'big':'image_001.jpg',
    'bigNarr':'005_디테일 설명을 작성하시면 됩니다.'
  }
];

// var test = ['a',['b','b-1','b-2',['bbb','34','1'] ],'c'];
// var t2 = test[1];
// // console.log( t2[2] );
// console.log(  test[1][3][2] )

// 아래 append를 적용후 추가 기능을 삽입하기위한 함수설정 : 내용이 많기에...
var listContentFn = function(){
  thum = listUrl + galleryImgList[i].thumnail;
  galLink = gallery_03_Ul.children('li').eq(i).children('a');
  galLink.css({'backgroundImage':'url('+ thum +')', color:'#fff'});
  galLink.find('span').text( galleryImgList[i].contents );
};



// for(최초;비교;증감){}
var galLink;
var galListLen = galleryImgList.length;
for( var i = 0 ; i < galListLen ; i++){
  gallery_03_Ul.append( set_03_Li( i + 1 ) );
  // thum = listUrl + galleryImgList[i].thumnail;
  // galLink = gallery_03_Ul.children('li').eq(i).children('a');
  // galLink.css({'backgroundImage':'url('+ thum +')', color:'#fff'});
  // galLink.find('span').text( galleryImgList[i].contents );
  listContentFn();
}

// .big_image에 첫 배경 이미지 적용
var gal_03_big = gallery_03.find('.big_image');
gal_03_big.css({'backgroundImage':'url('+ bigUrl + galleryImgList[0].big +')'});



// .big_image p에 첫 내용 적용
var gal_03_p = gal_03_big.find('p');
gal_03_p.text(galleryImgList[0].bigNarr);





})(jQuery);