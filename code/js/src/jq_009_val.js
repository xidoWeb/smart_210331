// jq_009_val.js
(function($){
// jQuery

// 1. input(#inputResult)의 값을 확인
var inputR = $('#inputResult');
var sendBtn = $('#send');

sendBtn.on('click', function(e){
  e.preventDefault();

  var inputValue = inputR.val();
  console.log( inputValue );
});


})(jQuery);