// jq_010_plug_in_002.js

$.fn.makePlugIn_01 = function(setColor){ 
  var one = this;
  var btn = one.find('button');
  var set = setColor || '#ff0';
  // (setColor) ? set = setColor : set = '#ff0';
  // if(setColor){ set = setColor }else{  set = '#ff0' }
  btn.on('click', function(e){
    e.preventDefault();
    one.find('p').css({
      color:set,
      textShadow:'0.1rem 0.1rem 0 #333'
    });
  });
  return one;
}


$.fn.makePlugIn_02 = function(){
  
}