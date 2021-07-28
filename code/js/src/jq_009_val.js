// jq_009_val.js
(function($){
// jQuery

// 1. input(#inputResult)의 값을 확인
// 2. 문제발생시 처리

var inputR = $('#inputResult');
var sendBtn = $('#send');
var rowResult = $('.row_result');

// 함수
var innerP = function(data, text){
  rowResult.html('<p></p>');
  rowResult.find('p').addClass(data);
  rowResult.find('p').text(text);
}


inputR.on('keyup', function(){
  var inputValue = inputR.val();

  if(inputValue.length < 2){
    innerP('error', '두글자 이상 작성해주세요');
  }else{
    innerP('success', '두글자 이상 작성되었습니다.')
  }
});

sendBtn.on('click', function(e){
  e.preventDefault();
  var inputValue = inputR.val();
  console.log( inputValue );
});


})(jQuery);