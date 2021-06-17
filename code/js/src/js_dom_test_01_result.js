// js/src/js_dom_test_01_result.js

// var procuctArea = document.querySelector('.product_area');
//.product_area .product {}
var procuctArea = document.getElementsByClassName('product_area')[0];
var product = procuctArea.getElementsByClassName('product')[0];


// 1차 목표 : li요소를 생성하여, product내부에 삽입 (여러개) 및 추가 가능요소 처리
// 생성 - createElement()
// 삽입 - appendChild()

// 2차 목표 : 각 요소내부에 들어갈 링크주소, 이미지주소/이미지설명, 내용요소삽입
// 하나만 세팅해보자!
// 통으로 넣을것인지, 통으로 짜여진 데이터를 분류해서 다시 배치 인지 차후 고르자

// var listData = [
//   'http://naver.com',
//   '../img/undraw/undraw_001.png',
//   '카드에들어갈 이미지 설명1',
//   '카드 이미지'
// ];

var dataCheck = {
  link   : 'http://naver.com',
  imgSrc : '../img/undraw/undraw_001.png',
  imgNarr : '카드에들어갈 이미지 설명_001',
  cardTitle : '카드 제목 _ 001'
};

var makeLiFn = function (listData){
  var makeLi = document.createElement('li');

  var insertCode = '<a href="#"><div class="img_set"><span class="blind"></span></div><p></p></a>';
  makeLi.innerHTML = insertCode;
  // li내부에 코드로 인식되는 시점에서 내용을 추가
  // ---------------------------
  var a = makeLi.getElementsByTagName('a')[0];
  var imgSet = a.getElementsByClassName('img_set')[0];
  var imgBlind = imgSet.getElementsByTagName('span')[0];
  var p = a.getElementsByTagName('p')[0];
  // ---------------------------
    a.setAttribute('href', listData.link );
    imgSet.style.backgroundImage = 'url(' + listData.imgSrc  + ')';
    imgBlind.innerText = listData.imgNarr ;
    p.innerText = listData.cardTitle ;
  // ---------------------------
  product.appendChild(makeLi);
}

var i = 0;
for( ; i < 10; i += 1 ){
  makeLiFn(dataCheck);
}