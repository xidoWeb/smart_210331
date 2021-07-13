// device_temp.js
(function($){
// jQuery
// 1. 접속 브라우저 환경
// 2. 브라우저의 크기값을 파악

  // 변수
 
  var win = $(window);

  // 2. 접속 브라우저 환경
  var browserSetFn = function(){
    var browser = ['chrome', 'safari', 'opr', 'firefox'];
    var checkDevice = navigator.userAgent.toLowerCase();
    // console.log(checkDevice);
    var n = 0
    var ckIndex;
    // '반응형웹이 불가능한 브라우저'; 
    var useRwd = false;

    for(; n < browser.length ; n++){
      // indexOf() 존재유무 판단 -> -1 값을 나타나면 없다, 이외의 수치가 나오면 해당하는 위치에 있다
      ckIndex = checkDevice.indexOf(browser[n]);
      // console.log(ckIndex);
      if(ckIndex !== -1){
        //'반응형 웹 가능한 브라우저';
        useRwd = true;
        break;
      }
    }
  console.log( useRwd );
  return useRwd;
  }// browserSetFn();
  var rwdCheck = browserSetFn();

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
  console.log('before: ', beforeWidth);

  // 브라우저의 크기가 변경되면 해당 수치를 파악
  win.on('resize', function(){
    var afterWidth = deviceWidth();
    console.log('after: ', afterWidth);

    // 디바이스 환경이 변경되면(같지 않으면)
    if(beforeWidth !== afterWidth){
      //  새로고침
      location.reload();
    }
  });
  

})(jQuery);