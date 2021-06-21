// jq_001_import_jQuery.js

(function($){

  // var h1 = document.getElementsByTagName('h1')[0];
  // var h1Link = h1.getElementsByTagName('a')[0];
  // h1Link.style.fontSize = '16px';
  // h1Link.style.color = "#07f";

  var h1 = $('h1');
  var h1Link = h1.children('a');
  h1Link.css({ 'fontSize': '16px', 'color': '#07f' });

  var btn = $('button');
  btn.on('click', function(){
    var p = $('p');
    p.show();
  });
})(jQuery);