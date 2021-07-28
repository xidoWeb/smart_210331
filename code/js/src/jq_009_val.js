// jq_009_val.js
(function($){
// jQuery

// 1. input(#inputResult)의 값을 확인
// 2. 문제발생시 처리
// 3. 작성된 값이 숫자인지 아닌지를 구분: $.isNumeric('값');

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
  var typeNumCheck = $.isNumeric(inputValue);

  if(inputValue.length < 2){
    innerP('error', '두글자 이상 작성해주세요');
  }else{
    innerP('success', '두글자 이상 작성되었습니다.');

    if(!typeNumCheck){
      rowResult.append('<p></p>');
      rowResult.find('p').eq(1).addClass('success');
      rowResult.find('p').eq(1).text('감사합니다.');
    }
  }

  if(typeNumCheck){
    rowResult.append('<p></p>');
    rowResult.find('p').eq(1).addClass('error');
    rowResult.find('p').eq(1).text('작성된 내용이 숫자입니다. 내용을 확인하고 다시 작성해주세요.');
  }

   // $.each([배열], function(i,d){})
   // $.ajax({url:주소, context:document.body}).done(function(){})
});

sendBtn.on('click', function(e){
  e.preventDefault();
  var inputValue = inputR.val();
  console.log( inputValue );
});


})(jQuery);