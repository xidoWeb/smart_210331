// all_contents.js
(function($){
// jQuery
  var h2 = $('h2');
  var h2Con;
  var nth = function(n){
    var num = '000' + (n+1);
    var str = num.substr(num.length -2, 2);
    return str;
  };
  var k;

  for(var i=0; i<h2.length; i++){
    h2Con = h2.eq(i).contents();
    h2.eq(i).html('<button type="button"></button>');
    k = nth(i) + '. ' + h2Con[0].data;
    h2.eq(i).find('button').text( k );
  }



})(jQuery);