// jq_001_import_jQuery.js

(function($){

/* // javascript 
  var h1 = document.getElementsByTagName('h1')[0];
  var h1Link = h1.getElementsByTagName('a')[0];
  var p = document.getElementsByTagName('p')[0];
  var btn = document.getElementsByTagName('button')[0];

  h1Link.style = 'font-size:16px; color:#07f';
  p.style.display = 'none';

  btn.addEventListener('click', function(e){
    e.preventDefault();
    p.style = 'display:block; opacity:0; transition:all 1000ms ease';

    setTimeout(function(){  
      p.style.opacity = 1;  
    },10);
  });
*/
  

/* //jQuery */

  var h1 = $('h1');
  var h1Link = h1.children('a');
  var p = $('p');
  var btn = $('button');
  
  p.hide();
  h1Link.css({ 'fontSize': '16px', 'color': '#07f' });

  btn.on('click', function(e){
    e.preventDefault();
    p.fadeIn(1000);
  });



})(jQuery);