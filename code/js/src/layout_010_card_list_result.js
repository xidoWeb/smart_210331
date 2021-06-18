// js/src/layout_010_card_list_result.js
/* ======================================================================
// 1. [] ul을 선택
// 2. [] li를 생성
// 3. [] ul내부에 li를 넣는다.
// 4. [] 위 2~3과정을 여러개 만든다.
// 5. [] li 내부에 여러 코드를 넣는다.
// 6. [] 양이 많아지므로 반복처리되는 기능을 함수하나로 표현
// 7. [] 여러코드의 형태를 객체를 하나 만들어서 내용을 넣어본다.
// 8. [] 객체의 여러값을 내용을 만들어, 각각 하나씩 반영시킨다.
// 9. [] 생성자 함수를 만들어 양식을 정리

//-----------------------------------------------------------------------------
// 팁. li요소 및 하위 요소는 변수를 따로 지정해서 사용,
//     CSS를 굳이 js로 모두 작성하실 필요는 없다!

// 10. [] 이벤트기능을 위해 li하나에 마우스 올릴경우 처리되는 기능을 만든다.
// 11. [] 이벤트기능을 위해 li하나에 마우스 벗어날경우 처리되는 기능을 만든다.
// 12. [] 이벤트기능을 위해 li하나에 focus 처리되는 기능을 만든다.
// 13. [] 이벤트기능을 위해 li하나에 blur 처리되는 기능을 만든다.
// 14. [] 10,11번의 기능이 동일하기 때문에 함수로 처리하여 기능을 동작하게 만든다.
// 15. [] 12,13번의 기능이 동일하기 때문에 함수로 처리하여 기능을 동작하게 만든다.
// 16. [] 기능들을 정리해본다.
========================================================================= */


// 1. [v] ul을 선택
var product = document.getElementsByClassName('product')[0];

// 2. [v] li를 생성
    // var makeLi = document.createElement('li');

// 3. [v] ul내부에 li를 넣는다. - 내부에 요소를 삽입(이후도 고려)
    // product.appendChild(makeLi);

// 4. [v] 위 2~3과정을 여러개 만든다.
    // var makeLi2 = document.createElement('li');
    // product.appendChild(makeLi2);

// 5. [v] li 내부에 여러 코드를 넣는다.
    // var makeLi3 = document.createElement('li');
    // product.appendChild(makeLi3);
    // var makeLi4 = document.createElement('li');
    // product.appendChild(makeLi4);
    // var makeLi5 = document.createElement('li');
    // product.appendChild(makeLi5);


// 6. [v] 양이 많아지므로 반복처리되는 기능을 함수하나로 표현
var makeLiFn = function(data){
  var makeLi = document.createElement('li');
  product.appendChild(makeLi);
  // 6-1. 빠진 li내부 요소를 첨부
  var liContent = '<div class="base"><span class="blind"></span></div>\
                  <div class="other">\
                  <dl><dt></dt><dd></dd><dd class="btn"><button type="button"><span class="blind"></span></button></dd><dd class="btn"><a href="#"><span class="blind"></span></a></dd></dl></div>\
                  <div class="line_focus"><div class="line1"></div><div class="line2"></div></div>';
  
  makeLi.innerHTML = liContent;
  // 7. [v] 여러코드의 형태를 객체를 하나 만들어서 내용을 넣어본다.
      // baseBg        : .base - 배경이미지
      // basePar       : .base > span - 상품 이름 - 이미지
      // cardTitle     : .other > dt - 상품 종류
      // cardNarr      : .other > dd중 첫번째 - 상품 이름 - 정확한 상품 안내
      // cardDetailBtn : .other button > span - 상품이미지 상세정보 (기본설정)
      // cardLink      : .other a - 상세내용에따른 주소 첨부
      // cardLinkNarr  : .other a > span - 상품명 + 상세내용 바로가기 (기본설정)
// ------------------------------------------------------------------------
var base = makeLi.getElementsByClassName('base')[0];
// background-image:url();  -> backgroundImage = 'url('+ 소스 +')';
    base.style.backgroundImage = 'url('+ data.baseBg +')';

var baseSpan = base.getElementsByTagName('span')[0];
    baseSpan.innerText = data.basePar;

var otherArea = makeLi.getElementsByClassName('other')[0];
var cardTitle = otherArea.getElementsByTagName('dt')[0];
    cardTitle.innerText = data.cardTitle;

var cardNarr = otherArea.getElementsByTagName('dd');
cardNarr[0].innerText = data.cardNarr;
// cardNarr[1] : 차후 버튼클릭시 나타나야하는 내용 연결부분 체크
var cardBtnSpan = cardNarr[1].getElementsByTagName('span')[0];
cardBtnSpan.innerText = data.cardDetailBtn;

var cardLink = cardNarr[2].getElementsByTagName('a')[0];
cardLink.setAttribute( 'href', data.cardLink );

var cardLinkSpan = cardLink.getElementsByTagName('span')[0];
cardLink.setAttribute( 'title', data.cardLinkNarr );
cardLinkSpan.innerText = data.cardLinkNarr;
// ------------------------------------------------------------------------      
};

var testCard = {
  baseBg        : '../img/card_list/002--1.svg' ,
  basePar       : '카드 이미지 샘플 _001' ,
  cardTitle     : 'animal' ,
  cardNarr      : '상품 디테일 설명' ,
  cardDetailBtn : '상세보기' ,
  cardLink      : 'http://naver.com' ,
  cardLinkNarr  : '새관련 내용 상세 보기' ,
};

// 8. [v] 객체의 여러값을 내용을 만들어, 각각 하나씩 반영시킨다.
// 8-1 객체의 내용이 들어가는 것을 확인했으니,추가 객체내용을 작성하거나, 속성의 이름을 변경해서 처리하도록 하자!
var cardListData = [
  {
    baseBg        : '../img/card_list/002--1.svg' ,
    basePar       : '카드 이미지 샘플 _001' ,
    cardTitle     : 'animal' ,
    cardNarr      : '상품 디테일 설명' ,
    cardDetailBtn : '상세보기' ,
    cardLink      : 'http://naver.com' ,
    cardLinkNarr  : '새관련 내용 상세 보기' ,
  },
  {
    baseBg        : '../img/card_list/003--2.svg' ,
    basePar       : '카드 이미지 샘플 _002' ,
    cardTitle     : 'fish' ,
    cardNarr      : '상품 디테일 디테일 디테일 설명' ,
    cardDetailBtn : '상세보기' ,
    cardLink      : 'http://daum.net' ,
    cardLinkNarr  : '물고기 내용 상세 보기' ,
  }
];




// ---------------------------------------------------
var i = 0;
var cardLen = cardListData.length;
for( ; i < cardLen; i++){
  makeLiFn(cardListData[i]);
}


// 9. [] 생성자 함수를 만들어 양식을 정리

//-----------------------------------------------------------------------------
// 팁. li요소 및 하위 요소는 변수를 따로 지정해서 사용,
//     CSS를 굳이 js로 모두 작성하실 필요는 없다!

// 10. [] 이벤트기능을 위해 li하나에 마우스 올릴경우 처리되는 기능을 만든다.
// 11. [] 이벤트기능을 위해 li하나에 마우스 벗어날경우 처리되는 기능을 만든다.
// 12. [] 이벤트기능을 위해 li하나에 focus 처리되는 기능을 만든다.
// 13. [] 이벤트기능을 위해 li하나에 blur 처리되는 기능을 만든다.
// 14. [] 10,11번의 기능이 동일하기 때문에 함수로 처리하여 기능을 동작하게 만든다.
// 15. [] 12,13번의 기능이 동일하기 때문에 함수로 처리하여 기능을 동작하게 만든다.
// 16. [] 기능들을 정리해본다.