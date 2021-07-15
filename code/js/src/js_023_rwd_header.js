// js_023_rwd_header.js
(function($){
// jQuery
  $.ajax({
    url:'../data/device_type.json',
    context:document.body
  }).done(function(data){
    var dataType = data;
    var jsurl = '../js/rwd_header';
    var scriptCode = '<script class="device"></script>';
    var dataUseJS ={
      smartphone:'heder_smartphone.js',
      tablet:'heder_smartphone.js',
      laptop:'heder_laptop.js',
      desktop:'heder_laptop.js'
    };

    // 디바이스 규격을 확인 해당하는 크기가 어느 부분인지 체크

    var winW = $(window).outerWidth();
    var i=dataType.length - 1;
    var ckType, deviceType;

    for(; i >= 0 ; i-=1){
      ckType = parseInt(dataType[i].size);
      if(winW >= ckType){
       deviceType = dataType[i].type;
       break;
      }else{
        deviceType = dataType[0].type;
      }
    }

    // devictType = 'laptop'
    console.log('deviceType: ', deviceType,  dataUseJS[deviceType] );

    // $('body').append('<script src="'+jsurl + dataUseJS[deviceType] +'"></script>');
    $('body').append(scriptCode);
    $('.device').attr({src: jsurl + dataUseJS[deviceType] });

  }); // $.ajax
})(jQuery);