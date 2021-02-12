
<!-- smooth scroll -->

$(function(){
   $('a[href^=#]').click(function() {
      // verosity of scroll
      var speed = 800; // m sec

      var href= $(this).attr("href");
      //get anchor
      var target = $(href == "#" || href == "" ? 'html' : href);
      //get the anchor as a numerical value
      var position = target.offset().top;
      // smooth scroll
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
