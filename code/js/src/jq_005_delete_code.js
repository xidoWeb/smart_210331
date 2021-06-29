// jQuery
// jq_005_delete_code.js

(function($){

  var h2 = $('h2');
  var p = $('p');

  var hText = '내용상의 요소 및 내용을 삭제하는 방법';
  h2.text(hText);

  var set = $('.set');
  set.children('a').attr({
    'href':'http://naver.com',
    'target':'_blank'
  });

  set.children('button').remove();
  var linkGoogle = '<a href="http://google.com">구글</a>';
  set.append(linkGoogle);

  set.children('a').eq(0).removeAttr('target');
  p.eq(0).empty();


})(jQuery);