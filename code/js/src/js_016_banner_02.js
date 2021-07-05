// js_016_banner_02.js

(function($){
// jQuery
// data 작성

// $.ajax({}).done(function(data){});
$.ajax({
  url:"../data/banner_02.json",
  context: document.body
}).done(function(data){
    var baseUrl = "../img/gallery/";
    var viewData = data;

  // 1. 다음버튼 클릭시 슬라이드 넘어가기
  // 2. 이전버튼 클릭시 슬라이드 이전내용 넘어가기
  
  // 변수
  var slideBtn = $('.slide_btn');
  var nextBtn = slideBtn.children('.next');
  var prevBtn = slideBtn.children('.prev');
  
  var viewArea = $('.view_area');
  var viewUl = viewArea.children('ul');
  var viewLi = viewUl.children('li');
  var viewLiLen = viewLi.length;

  var n = 0;
  var permission = true;

  // -----------------------------------
  // 1000. li요소에 각각 내용 삽입

  var viewInnerTextFn = function(i){
    var li        = viewLi.eq(i);
    var viewDiv   = li.children('div');
    var viewTitle = viewDiv.children('h4');
    var viewCon   = viewDiv.children('p');
    var viewLink  = viewDiv.find('a');
    
    li.css({'backgroundImage':'url('+ baseUrl + viewData[i].bgImg +')'});
    viewTitle.text( viewData[i].title );
    viewCon.text( viewData[i].content );
    viewLink.attr( 'href', viewData[i].link );
  };

  var i = 0; 
  for(; i< viewLiLen; i+=1){
    viewInnerTextFn(i);
  }

  // --------------------------------------

  // 100. 1칸씩 이동
  // 200. 이동 제한(최대값)
  // 300. 무한으로 돌아가게 만들기

  var cloneLi = viewLi.eq(-1).clone();
  viewUl.prepend(cloneLi);
  var newViewLi = viewUl.children('li');
  var newLiLen = newViewLi.length;

  // ul의 길이를 변경
  viewUl.css({width: newLiLen * 100 + '%', position:'relative', left: -100 + '%'});
  newViewLi.css({width:100 / newLiLen + '%'});

  nextBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      n += 1;

      if( n > viewLiLen-1 ){
        // n = viewLiLen-1;
        n = 0;
        viewUl.css({marginLeft:100+'%'});
      }

      viewUl.stop().animate({marginLeft:(-100 * n) + '%'}, function(){
        permission = true;
      });
    }
  });

  // 200. 이전버튼 클릭시 1칸 이동
  prevBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      n -= 1;
      viewUl.stop().animate({marginLeft:(-100 * n) + '%'}, function(){
        if(n < 0){
          n = viewLiLen-1;
          var lastMv = -100 * n + '%';
          viewUl.css({marginLeft: lastMv });
        }// if(n<0){}
        permission = true;
      }); //  viewUl.stop().animate()
    } // if(permission){
  }); //  prevBtn.on('click' ...)
  
  }); // $.ajax().done()
})(jQuery);


/*
(function($){
  $.ajax({
    url:'불러올 파일',
    context:document.body
  }).done(function(data){
    var data = data;
    // jQuery
  });
})(jQuery);
*/