$(document).ready(function() {
    $('.image-wrapper').hover(function() {
    $(this).children('.shiny-effect').stop().fadeTo(500, 1);
    }, function() {
    $(this).children('.shiny-effect').stop().fadeTo(500, 0);
    });
   });