// js/src/layout_012_jq_tab_menu_result.js


// 탭메뉴 
// li 클릭 - 해당하는 순서에 맞는 .content 요소가 나타나기

// li 클릭시 기존에 보이는 .content는 사라지고,
// 내가 클릭한 순서에 맞는  .content 요소가 나타나게 만들기

// li 클릭이 아니라, 내부의 버튼을 클릭 버튼의 부모인 li 몇번째인가?
// click(선택된상태)/focus/hover 각각의 상황에 맞게 표현처리방법?
// 선택으로인해 내용이 나타나면, 먼저 읽어주어야 하는 표현은 무엇인가?

// ----------------------------------------------------------------

(function($){

  // 변수 선택자
  var tabList = $('.tab_list');
  var tabUl = tabList.children('ul');
  var tabLi = tabUl.children('li');
  var tabContent = $('.content');

  tabLi.on('click', function(){
    // 순서를 지정 : eq(순서), 순서를 파악 : index()
    var thisI = $(this).index();
    // console.log( thisI );

    var contentEq = tabContent.eq( thisI );
    contentEq.slideDown();
    contentEq.siblings().slideUp();
  });

})(jQuery);
