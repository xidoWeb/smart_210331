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

// 1. li클릭시(사실은 내부의 a를 클릭)
// 2. 내부의 a에 들어있는 data-text속성값을 
// 3. .big_image내부p에 전달





})(jQuery);