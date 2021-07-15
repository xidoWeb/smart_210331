// device_temp.js
(function($){  
  $.ajax({
    url: '../data/device_type.json',
    context: document.body
  }).done(function(data){
    var importDevice = data;
    var win = $(window);
    var browserSetFn = function(){
      var browser = [
        {type:'Opera', check:'opr'},
        {type:'Edge', check:'edg'},
        {type:'Chrome', check:'chrome'},
        {type:'Safari', check:'safari'},
        {type:'Fire fox', check:'firefox'}
      ];
      var checkDevice = navigator.userAgent.toLowerCase();
      var n = 0
      var ckIndex;
      var useRwd = false;
      if(navigator.userAgent.search('Trident') !== -1){
        useRwd = false;
        console.log('사용브라우저:', 'ie');
      }
      else{
          for(; n < browser.length ; n++){
            ckIndex = checkDevice.indexOf(browser[n].check);
            if(ckIndex !== -1){
              useRwd = true;
              break; 
            }
          }
      }
      return useRwd;
    }
    var rwdCheck = browserSetFn();
    if(!rwdCheck){
      console.log('접속 브라우저가 반응형구현 또는 flex 구조가 아니기 때문에 사용하기 불편할 수 있습니다.');
    }else{
    
    var deviceWidth = function(){
      var deviceType = importDevice; 
      var checkType;   
      var winWidth = win.outerWidth(true);
      var intSize;
      var i= deviceType.length-1;    
      for(; i >= 0 ; i-=1){ 
        intSize = parseInt(deviceType[i].size);     
        if(winWidth >= intSize){
          checkType = deviceType[i].type;  
          break;
        }else{
          checkType = deviceType[i].type;
        }
      }
      return checkType;
    };

    var beforeWidth = deviceWidth();
    win.on('resize', function(){
      var afterWidth = deviceWidth();
      if(beforeWidth !== afterWidth){        location.reload();      }
    });
  }    
  }); // $.ajax()
})(jQuery);