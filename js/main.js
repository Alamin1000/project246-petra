(function ($) {
  "use strict";

  // offcanvas-js
  $('.sidebar-menu-open').click(function() {
    $('.main-sidebar').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.main-sidebar a').click(function() {
    $('.main-sidebar').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.main-sidebar').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.main-sidebar').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });

        

})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // nice-select
  $('.nice-select').niceSelect();

  // preloader
  $("#preloader").fadeOut(500);

})











