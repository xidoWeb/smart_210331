// jq_001_import_jQuery.js

(function($){

// javascript 
/*
  var h1 = document.getElementsByTagName('h1')[0];
  var h1Link = h1.getElementsByTagName('a')[0];
  h1Link.style.fontSize = '16px';
  h1Link.style.color = "#07f";
  var p = document.getElementsByTagName('p')[0];
  p.style.display = 'none';

  var btn = document.getElementsByTagName('button')[0];
  btn.addEventListener('click', function(e){
    e.preventDefault();
    p.style.display = 'block';
    p.style.opacity = 0;
    p.style.transition = 'all 1000ms ease';

    setTimeout(function(){
      p.style.opacity = 1;
    },10);

  });
*/
  

/* jQuery */
  var h1 = $('h1');
  var h1Link = h1.children('a');
  var p = $('p');
  p.hide();
  h1Link.css({ 'fontSize': '16px', 'color': '#07f' });

  var btn = $('button');
  btn.on('click', function(e){
    e.preventDefault();
    p.fadeIn(600);
  });
})(jQuery);