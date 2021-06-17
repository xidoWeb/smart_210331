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
// -------------------------------------------------------------------
// sample data 형식
var dataCheck = {
  link   : 'http://naver.com',
  imgSrc : '../img/undraw/undraw_001.png',
  imgNarr : '카드에들어갈 이미지 설명_001',
  cardTitle : '카드 제목 _ 001'
};
// ========================================================================
// 틀 제작 ----------------------------------------------------------------
// makeLiFn 함수로 카드를 반복으로 생성하기 위해 해당하는 내용을 담는 틀 제작
// 내용을 담을 내용들이 여러개로 복합적으로 담기기 때문에 listData로 매개변수 제작
// dataCheck변수는 차후에 makeLiFn으로 호출하였을때 listData로서 인수/인자로 변경
// 차후 dataCheck변수 대신 다른 내용이 들어갈 수 있도록 설정 -> dataCheck는 임시로 만든 형식

var makeLiFn = function (listData){
  var makeLi     = document.createElement('li');

  var insertCode = '<a href="#"><div class="img_set"><span class="blind"></span></div><p></p></a>';
  makeLi.innerHTML = insertCode;
  // li내부에 코드로 인식되는 시점에서 내용을 추가
  // ---------------------------
  var a        = makeLi.getElementsByTagName('a')[0];
  var imgSet   = a.getElementsByClassName('img_set')[0];
  var imgBlind = imgSet.getElementsByTagName('span')[0];
  var p        = a.getElementsByTagName('p')[0];
  // ---------------------------
    a.setAttribute('href', listData.link );
    imgSet.style.backgroundImage = 'url(' + listData.imgSrc  + ')';
    imgBlind.innerText           = listData.imgNarr ;
    p.innerText                  = listData.cardTitle ;
  // ---------------------------
  product.appendChild(makeLi);
} // makeLiFn();

// ---------------------------------------------------
// data 형식 생성
var imgUrl = '../img/undraw/';

var cardDataAll = [
  {
    link   : 'http://naver.com',
    imgSrc : 'undraw_001.png',
    imgNarr : '카드에들어갈 이미지 설명_001',
    cardTitle : '카드 제목 _ 001'
  },
  {
    link   : 'http://daum.net',
    imgSrc : 'undraw_002.png',
    imgNarr : '카드에들어갈 이미지 설명_002',
    cardTitle : '카드 제목 _ 002'
  },
  {
    link   : 'http://daum.net',
    imgSrc : 'undraw_003.png',
    imgNarr : '카드에들어갈 이미지 설명_003',
    cardTitle : '카드 제목 _ 003',
    cardPar : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    link   : 'http://daum.net',
    imgSrc : 'undraw_004.png',
    imgNarr : '카드에들어갈 이미지 설명_004',
    cardTitle : '카드 제목 _ 004',
    cardPar : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ratione inventore excepturi exercitationem illo ullam nihil hic sit fugit veritatis?'
  },
];

// console.log( imgUrl + cardDataAll[1].imgSrc );

// 실제로 사용하기 위해 위 복합으로 만들어진 data를 개별로 분리해서 쓸수 있게
// 불필요한 data는 불러오지 않게 처리
// 생성자함수를 제작

function MakeCard(url, data){
  this.link  = data.link;
  this.imgSrc = url + data.imgSrc;
  this.imgNarr = data.imgNarr;
  this.cardTitle = data.cardTitle;
}

// var setCard = new MakeCard( imgUrl, cardDataAll[0] );
// console.log( setCard.imgSrc );

// --------------------------------------------------
// 최종 동작
var i = 0;
var setCard;
var cardLen = cardDataAll.length;

for( ; i < cardLen; i += 1 ){
  setCard = new MakeCard( imgUrl, cardDataAll[i] );
  makeLiFn(setCard);
}
