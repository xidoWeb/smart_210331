// js_014_gallery_02-1.js
(function($){
// jQuery

var modalData = [
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
// [v] 5. 리스트 클릭시 닫기버튼에 자동 포커스처리 및 닫기 클릭시 이전요소의 순번에 포커스

var modal = $('.modal');
var modalListArea = modal.children('.modal_list');
var modalLi = modalListArea.find('li');

var miniUrl = '../img/gallery_02/mini/';
var bigUrl = '../img/gallery_02/original/';

var modalView = modal.find('.modal_view');
var modalContent = modal.find('.modal_content');
var closeBtn = modalView.find('.close_btn').children('button');
var backBoard = modalView.find('.back_board');

var miniImgInsertFn = function(i){
  var modalLink, imgData; 
  modalLink = modalLi.eq(i).children('a');
  imgData = miniUrl + modalData[i].miniImg;
  modalLink.css({backgroundImage:'url(' + imgData + ')'});
  modalLink.text(modalData[i].miniText);
};

var i=0;
var modalDataLen = modalData.length;

for(; i<modalDataLen; i+=1){  miniImgInsertFn(i); }


var timed = 500;
var idx = 0;

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
  modalView.stop().fadeOut(timed, function(){
    modalLi.eq(idx).children('a').focus();
  });
};

closeBtn.on('click', function(e){
  e.preventDefault();
  // jQuery에서는 animation기법이 있는 메소드는 모두 콜백기능이 가능
  modalViewHideFn();
});
backBoard.on('click', function(){
  modalViewHideFn();
})

})(jQuery);

