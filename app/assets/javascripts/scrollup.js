var headline_count;
var headline_interval;
var old_headline = 0;
var current_headline = 0;

$(document).ready(function(){
  headline_count = $("div.headline").size();
  $("div.headline:eq("+current_headline+")").css('top','5px');

  headline_interval = setInterval(headline_rotate,15000); //time in milliseconds
  $('#scrollup').hover(function() {
    clearInterval(headline_interval);
  }, function() {
    headline_interval = setInterval(headline_rotate,15000); //time in milliseconds
    headline_rotate();
  });
});

function headline_rotate() {
  current_headline = (old_headline + 1) % headline_count; 
  $("div.headline:eq(" + old_headline + ")").animate({top: -155},"slow", function() {
    $(this).css('top','210px');
  });
  $("div.headline:eq(" + current_headline + ")").show().animate({top: 5},"slow");  
  old_headline = current_headline;
}
 