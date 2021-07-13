// device_temp.js
(function($){
// jQuery
// 1. 접속 브라우저 환경
// 2. 브라우저의 크기값을 파악
  // 변수 

  var win = $(window);

  // 2. 접속 브라우저 환경
  var browserSetFn = function(){

    // var browser = ['opr', 'edg', 'chrome', 'safari', 'firefox'];
    // 접속 브라우저를 파악하기 위해 표기된 용어와, 실제 확인용어 구분, 순서를 명확하게 파악
    var browser = [
      {type:'Opera', check:'opr'},
      {type:'Edge', check:'edg'},
      {type:'Chrome', check:'chrome'},
      {type:'Safari', check:'safari'},
      {type:'Fire fox', check:'firefox'}
    ];

    // 접속브라우저 체크(대소문자 구분없이 파악하기 위해 소문자로 설정)
    var checkDevice = navigator.userAgent.toLowerCase();
    var n = 0
    var ckIndex;
    var useRwd = false;
    // IE브라우저 체크(ms엔진인 Trident엔진이 있을경우 IE브라우저) : navigator.userAgent.search('Trident') 
    if(navigator.userAgent.search('Trident') !== -1){
      // '반응형웹이 불가능한 브라우저'; 
      useRwd = false;
      console.log('사용브라우저:', 'ie');
    }else{
      // IE외에 다른브라우저 기반체크 (위 변수 browser변수의 순서를 잘 작성해야 해당브라우저를 파악이 가능)
        for(; n < browser.length ; n++){
          // indexOf() 존재유무 판단 -> -1 값을 나타나면 없다, 이외의 수치가 나오면 해당하는 위치에 있다
          ckIndex = checkDevice.indexOf(browser[n].check);
          // console.log(ckIndex);
          if(ckIndex !== -1){
            //'반응형 웹 가능한 브라우저';
            useRwd = true;
            console.log('사용브라우저:', browser[n].type);
            // 체크된 상황에서 반복수행하지 않도록 처리
            break; 
          }
        }// for
    }// if:IE체크

    // 반응형웹 '제작가능여부(true or false)'를 반환
    return useRwd;
  }// browserSetFn();
  var rwdCheck = browserSetFn();
  
  // 반응형웹구현이 불가능할경우
  if(!rwdCheck){
    alert('접속 브라우저가 반응형구현 또는 flex 구조가 아니기 때문에 사용하기 불편할 수 있습니다.');
  } 
  
  // 1. 브라우저의 크기값 파악(실시간으로 사이즈 체크)
  // 101. 브라우저의 가로값의 변경만 파악하여 처리
  // 102. 모든 가로값을 파악해서 그때마다 수정 X, 지정된 디바이스 환경을 고려하여 환경자체가 변경되면 처리 -> 새로고침

  
  var deviceWidth = function(){
    var deviceType = 1280;
    var ck = ['small','big'];
    var winWidth = win.outerWidth(true);
    if(winWidth < deviceType){
      return ck[0];
    }else{
      return ck[1];
    }
  //  return winWidth;
  };

  var beforeWidth = deviceWidth();
  console.log('브라우저 변경 전 가로 크기 : ', beforeWidth);

  // 브라우저의 크기가 변경되면 해당 수치를 파악
  win.on('resize', function(){
    var afterWidth = deviceWidth();
    console.log('브라우저 변경 후 가로 크기 : ', afterWidth);

    // 디바이스 환경이 변경되면(같지 않으면)
    if(beforeWidth !== afterWidth){
      //  새로고침
      location.reload();
    }
  });
  

})(jQuery);