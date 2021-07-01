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


// 1. 클릭해야하는 이미지 삽입
// 1-1. 각각의 이미지는?, 삽입할 이미지는?, 추가 내용은? - 객체로...
// 2. 클릭시 .modal_view 나타나게
// 3. .modal_view내부의 .modal_content 에 이미지 나타나게
// 4. .modal_view내부의 닫기버튼 클릭시 .modal_view사라지게
// 4-1. .modal_view 뒤에있는 .back_board를 클릭시 .modal_view사라지게

var modal = $('.modal');
var modalListArea = modal.children('.modal_list');
var modalLi = modalListArea.find('li');

var miniUrl = '../img/gallery_02/mini/';
var modalView = modal.find('.modal_view');

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



})(jQuery);

