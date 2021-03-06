// header.js
(function($){
  var data = [
    {page:'회사소개', link:"/html/about.html"},
    {page:'제품소개', link:"/html/product.html"},
    {page:'게시판', link:"/html/notice.html"},
    {page:'이벤트', link:"/html/event/event.html"}
  ];
  var h1 = $('h1');
  var h1Link = h1.find('a');
  h1Link.attr({'href':'/html/main.html'});

  // 1. gnb내부에 list를 생성하여, 4개정도의 요소링크 생성
  var gnb = $('#gnb');
  gnb.append('<ul class="clearfix"></ul>');
  var gnbUl = gnb.find('ul');
  var linkText = '<li><a href="#"></a></li>';
  var li;
  var i=0;
  for( ; i<data.length ; i+=1 ){
    gnbUl.append(linkText);
    li = gnbUl.find('li').eq(i).find('a');
    li.attr({href: data[i].link});
    li.text(data[i].page);
  }
  li = gnbUl.find('li');

  console.log(gnb);


})(jQuery);