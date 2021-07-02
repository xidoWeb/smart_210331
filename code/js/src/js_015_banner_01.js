// js_015_banner_01.js
(function($){
// jQuery

// 해야할 일을 작성  
// 1. 다음버튼을 클릭하면
// 2. list_01 -> list_02로 나타나게 - ul을 움직여서 처리
// 2-1 조건 -> .product의 가로값만큼 이동할것 - 가로값 파악하는것?

var banner_01 = $('.banner_01');
var ban_01_btn = banner_01.children('.btn');
var b01Next = ban_01_btn.children('button');
var b01Product = banner_01.children('.product');
var b01Ul = b01Product.children('ul');

// 2-1
var pWidth = b01Product.width();
// console.log(pWidth);

// 1. ----------------------
b01Next.on('click', function(e){
  // 클릭한 요소가 기본 이벤트가 있으므로 이를 무효처리
  e.preventDefault();

  // 2. ----------------------------
  var mvWidth = (pWidth * -1) + 'px';
  b01Ul.css({marginLeft: mvWidth });

});


})(jQuery);