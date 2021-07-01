// js_014_gallery_02-1.js
(function($){
// jQuery

var modalData = [
  {
    "miniImg":"agenlaku.jpg",
    "miniText":"thumnail_01",
    "bigImg":"agenlaku-indonesia-FoUETBpb6mY-unsplash.jpg",
    "bigText":"001 - 상세 설명 첨부"
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
  },
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
  },
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
  },
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
  },
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


// [v] 1. 클릭해야하는 이미지 삽입
// [v] 1-1. 각각의 이미지는?, 삽입할 이미지는?, 추가 내용은? - 객체로...
// [v] 2. 클릭시 .modal_view 나타나게
// [v] 3. .modal_view내부의 .modal_content 에 이미지 나타나게
// [v] 4. .modal_view내부의 닫기버튼 클릭시 .modal_view사라지게
// [] 4-1. .modal_view 뒤에있는 .back_board를 클릭시 .modal_view사라지게
// [v] 5. 리스트 클릭시 닫기버튼에 자동 포커스처리 및 닫기 
//        클릭시 이전요소의 순번에 포커스
// -------------------------------------------------------------
// [] 6. li요소 생성
// [] 7. 다음/이전버튼 html로 생성
// [] 8. 클릭시 이동
//-----------------------------------------------------------

var miniUrl = '../img/gallery_02/mini/';
var bigUrl = '../img/gallery_02/original/';

var modal = $('.modal');
var modalListArea = modal.children('.modal_list');
var modalListUl = modalListArea.children('ul');

var modalView = modal.find('.modal_view');
var modalContent = modal.find('.modal_content');
var closeBtn = modalView.find('.close_btn').children('button');
var backBoard = modalView.find('.back_board');

var i=0, n=0, idx = 0;
var timed = 500;

var modalDataLen = modalData.length;
// ------------------
// li 생성기능
var makeLi = '<li><a href="#"></a></li>';

for( ; n<modalDataLen; n+=1 ){
  modalListUl.append(makeLi);
}

// -----------------------------------------
var modalLi = modalListArea.find('li');


// li 첫번째의 가로값(마진포함) 파악
// width() -> 가로값을 파악
// innerWidth() -> padding값 포함 가로값 파악
// outerWidth() -> border값 포함 가로값 파악
// outerWidth(true) -> margin값 포함 가로값 파악

var getLiWidth = modalLi.eq(0).outerWidth(true);
// console.log( getLiWidth );
var setModalUlWidth = (getLiWidth*modalDataLen)+'px';
modalListUl.css({width:  setModalUlWidth });
modalListArea.css({overflow:'hidden'});

// -----------------------------------------------------
var miniImgInsertFn = function(i){
  var modalLink, imgData; 
  modalLink = modalLi.eq(i).children('a');
  imgData = miniUrl + modalData[i].miniImg;
  modalLink.css({backgroundImage:'url(' + imgData + ')'});
  modalLink.text(modalData[i].miniText);
};

for(; i<modalDataLen; i+=1){  miniImgInsertFn(i); }
// --------------------------------------------------

modalLi.children('a').on('click', function(e){
  e.preventDefault();
  // 선택한 요소의 부모요소의 순번파악( index )
  var _thisI = $(this).parent().index();
  idx = _thisI;
  // var bigImgArea = 큰이미지 경로 + modalData[클릭한 순번의].bigImg;
  var bigImgArea = bigUrl + modalData[_thisI].bigImg;
  modalContent.css({backgroundImage:'url('+ bigImgArea +')'});
  
  modalView.stop().fadeIn(100, function(){
    closeBtn.focus();
  });
});

var modalViewHideFn = function(){
  return function(e){
    e.preventDefault();
    modalView.stop().fadeOut(timed, function(){
        modalLi.eq(idx).children('a').focus();
      });
  }
};

closeBtn.on('click', modalViewHideFn() );
backBoard.on('click', modalViewHideFn() );


// forEach와 유사하지만 다른 jQuery each
// [배열].forEach(function(배열의각 값, 순서){ 기능수행 })
// $.each([배열], function( 순서, 배열의각값 ){ 기능수행 })

// $.each([closeBtn, backBoard], function(i, data){
//   data.on('click', modalViewHideFn());
// });


})(jQuery);

