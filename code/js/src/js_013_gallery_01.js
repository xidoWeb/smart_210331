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
var gal_02_list = gal_02.find('li');
var galUrl = '../img/gallery/u_big/';

gal_02_list.children('a').on('focus click', function(e){
  e.preventDefault();
  // 해당요소의 속성 (data-image) 값을 찾아라
  var select = $(this);
  var selectImg = select.attr('data-image');
  // console.log( selectImg );
  var useImg = galUrl + selectImg;
  gal_02_box.css({'backgroundImage':'url(' + useImg + ')'});
});




})(jQuery);