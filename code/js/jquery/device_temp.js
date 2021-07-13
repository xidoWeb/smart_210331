// device_temp.js
(function($){
// jQuery
  // 1. 브라우저의 크기값을 파악
  // 2. 접속 브라우저 환경

  // 변수
 
  var win = $(window);


  // 1. 브라우저의 크기값 파악(실시간으로 사이즈 체크)
  /*
  var deviceWidth = function(){
    var winWidth = win.outerWidth(true);
   return winWidth;
  };
  var beforeWidth = deviceWidth();
  console.log('before: ', beforeWidth);

  // 브라우저의 크기가 변경되면 해당 수치를 파악
  win.on('resize', function(){
    var afterWidth = deviceWidth();
    console.log('after: ', afterWidth);
  });
  */

  // 2. 접속 브라우저 환경
  var browserSetFn = function(){
    var browser = ['chrome', 'safari', 'opr', 'firefox'];
    var checkDevice = navigator.userAgent.toLowerCase();
    // console.log(checkDevice);
    var n = 0
    var ckIndex;
    var useRwd = '반응형웹이 불가능한 브라우저'; 

    for(; n < browser.length ; n++){
      // indexOf() 존재유무 판단 -> -1 값을 나타나면 없다, 이외의 수치가 나오면 해당하는 위치에 있다
      ckIndex = checkDevice.indexOf(browser[n]);
      // console.log(ckIndex);
      if(ckIndex !== -1){
        useRwd = '반응형 웹 가능한 브라우저';
        break;
      }
    }
  console.log( useRwd );
  return useRwd;
  }// browserSetFn();
  browserSetFn();

})(jQuery);