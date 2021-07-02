// js_015_banner_01-2.js
(function($){
// jQuery

var banner_02 = $('.banner_02');
var ban_02_btn = banner_02.children('.btn');
var ban_02_p = ban_02_btn.children('p');
var ban_02_now = ban_02_p.children('.now');
var ban_02_total = ban_02_p.children('.total');

var b02Next = ban_02_btn.children('button').eq(0);
var b02Prev = ban_02_btn.children('button').eq(1);
var b02Product = banner_02.children('.product');
var b02Ul = b02Product.children('ul');
var b02Li = b02Ul.children('li');

// 200번대로 추가
// 201. 현재 보이는 배너의 위치를 now에 적용
// 202. 전체 배너의 갯수를 total에 적용
// 203. 이전의 기능이었던 다음버튼 클릭시 이동하는 기능을 이전버튼 클릭도
// 204. 

// 4-1 
var b02LiLen = b02Li.length;
  // 202
ban_02_total.text( b02LiLen );

// 2-1
var pWidth = b02Product.width();
// console.log(pWidth);

var countUp = 0;
  // 201
ban_02_now.text( countUp + 1);

// 1. ----------------------
b02Next.on('click', function(e){
  // 클릭한 요소가 기본 이벤트가 있으므로 이를 무효처리
  e.preventDefault();

// 3. ---------------------------- 
  countUp += 1;

  // 4.----------------------
  if(countUp >= b02LiLen){
    // countUp = b02LiLen-1; //  멈춤
    countUp = 0; // 처음
  }
 
// 2. ----------------------------
  var mvWidth = -(pWidth * countUp) + 'px';
  b02Ul.css({marginLeft: mvWidth }); // 2번기능 테스트
  console.log( countUp );
   // 201 (클릭시마다 변하게 처리/ 작성위치 파악)
   ban_02_now.text( countUp + 1);

}); // b02Next.on('click' ...);


// 203

b02Prev.on('click', function(e){
  e.preventDefault();

  countUp -= 1;
  if(countUp < 0){
    // 멈춤
    // countUp = 0;
    // 마지막
    countUp = b02LiLen - 1;
  }
  
  var mvWidth = -(pWidth * countUp) + 'px';
  b02Ul.css({marginLeft: mvWidth });
   // 201 (클릭시마다 변하게 처리/ 작성위치 파악)
   ban_02_now.text( countUp + 1);
}); // b02Prev.on('click', ...)


})(jQuery);


