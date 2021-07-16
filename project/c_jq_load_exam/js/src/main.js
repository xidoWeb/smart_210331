// main.js
(function($){
// 현재 위치에서 주업무는 외부파일을 불러와서 정리/배치

// 1. #headBox내부에 외부파일 header.html을 불러와서 처리
// 2. .page_content내부에 외부파일 page_content.html불러오기
// 3. #footBox내부에 외부파일 footer.html불러오기

var body = $('body');
var headBox = $('#headBox');
var pageCon = $('.page_content');
var footBox = $('#footBox');

headBox.load("./common/header.html");
pageCon.load("./main/page_content.html");
footBox.load("./common/footer.html");

setTimeout(function(){
  body.append('<script src="../js/src/main_all_effect.js"></script>');
}, 300);

// 콜백기능이 매우 많아질 수 있다. - 단점: 느리다.


})(jQuery);