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

  // 배너가 이동할 위치를 파악 체크
var mvFn = function(){
  var mv = -(100 * count) +'%';
  return mv;
};

// 기능수행 =============================

  // animation기능 수행을 위해 마지막 요소를 복제( clone() ) 앞에다 붙이기
  // 1. css에서는 js에서순서를바꿔도 그냥 바뀐대로의 순서로 배치
  // 2. js에서는 먼저 존재하는 내용을 선택하면 그걸로 끝, 새로추가하면 다시 선택해야 함

  var cloneLi = productLi.eq(-1).clone();
  productUl.prepend(cloneLi);
   


  // li갯수 파악 및, total에 삽입
  var liLen = productLi.length;
  countTotal.text(liLen);

  // 현재 배너 위치 체크
  nowCFn();

// 광고 영역의 크기 파악(새로 생성형태를 파악)
var newProductLi = productUl.children('li');
var newLiLen = newProductLi.length;
console.log(newLiLen);

// 1. 범위 파악
// var productWidth = productArea.width();
// 2. 전체 넓이 파악후 재배치(변경된 li개수를 파악후 처리)
// productUl.css({'width': (productWidth * newLiLen) + 'px' });
productUl.css({'width': (100 * newLiLen) + '%' });
// 3. 각각의 넓이 재배치(변경된 li요소들의 갯수와 크기수정)
newProductLi.css({'width': (100 / newLiLen) + '%'});
// 4. 처음 보이는 내용을 첫li요소로 변경
productUl.css({'position':'relative', 'left': -100+'%'});


// 이벤트 ===================================
var permission = true;

slideBtn.on('click', function(e){
  e.preventDefault();

  if(permission){
    permission = false;

    // 다음 버튼클릭했으니 이제 이동
    count += 1; 
    // var mv = -(100 * count) +'%';

    /*
      productUl.animate({marginLeft: mv},function(){
        // 애니메이션 기능 처리 후 수행
        if(count >= liLen) { count = 0; }
        mv = -(100 * count) +'%';
        productUl.css({marginLeft: mv});
        console.log( count );
        nowCFn();
      });
    */

    if(count >= liLen){
      productUl.css({marginLeft: 100+ '%'});
      count = 0;
      // productUl.animate({marginLeft: 0});
    }
    // else{
      // productUl.animate({marginLeft: mv});
    // }

    productUl.stop().animate({marginLeft: mvFn()}, function(){
      permission = true;
    });

    nowCFn();

  } // permission 조건

});// slideBtn.on('click' ...)



})(jQuery);