// js_014_gallery_02-1.js
(function($){
// jQuery

var modal = $('.modal');
var mldalLi = modal.find('li');

var modalView = $('.modal_view');
var closeBtn = $('.close_btn');

modalView.css({width:'700px', height:'500px', border:'1px solid #333'});
closeBtn.css({width:'60px', height:'60px', background:'#d7a'});
modalView.hide();

mldalLi.on('click', function(e){
  e.preventDefault();
  var getColor = $(this).children('a').attr('data-color');

  modalView.css({'backgroundColor':getColor});
  modalView.show();

});

closeBtn.on('click', function(e){
  e.preventDefault();
  modalView.hide();
});

// 순서는 어떻게 진행해야 하는지


})(jQuery);

