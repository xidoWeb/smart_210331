// js_015_banner_01-3.js
(function($){
// jQuery
// ---------------------------------------------
// 역할 수행목록

// ---------------------------------------------
// 선택자 선언 =============================
var banner = $('.banner_03');
var countArea = banner.find('.count');
var countTotal = countArea.find('.total'); // 추후 전체갯수
var countNow = countArea.find('.now'); // 현재 보이는 배너

var slideBtnArea = banner.find('.slide_btn');
var slideBtn = slideBtnArea.find('button');

var productArea = banner.children('.product');
var productUl = productArea.children('ul');
var productLi = productUl.children('li');

// 임의 변수/변수초기화 =============================
var count = 0;


// 함수영역 =============================
  //현재 배너위치 체크
var nowCFn = function(){
  var nowMvCount = count + 1;
  countNow.text(nowMvCount);
};

// 기능수행 =============================

  // li갯수 파악 및, total에 삽입
  var liLen = productLi.length;
  countTotal.text(liLen);
  // 현재 배너 위치 체크
  nowCFn();

// 광고 영역의 크기 파악
// 1. 범위 파악
var productWidth = productArea.width();
// 2. 전체 넓이 파악후 재배치
// productUl.css({'width': (productWidth * liLen) + 'px' });
productUl.css({'width': (100 * liLen) + '%' });
// 3. 각각의 넓이 재배치
productLi.css({'width': (100 / liLen) + '%'});

// 이벤트 ===================================
slideBtn.on('click', function(e){
  e.preventDefault();
  // 다음 버튼클릭했으니 이제 이동
  count += 1; 
  if(count >= liLen) { count = 0; }
  var mv = -(100 * count) +'%';
  productUl.css({marginLeft: mv});
  console.log( count );
  nowCFn();
});



})(jQuery);