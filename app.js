$(function() {
  $.scrollify({
    section : 'section'
  });

  $('li a').on('click', function(e) {
    e.preventDefault();
    var targetSec = $(this).text();
    $('html, body').animate({
       scrollTop: $('#' + targetSec).offset().top
    }, 1000);
  });

});