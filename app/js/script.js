$(document).ready(function($) {
  window.onscroll = function() {scrollFunction()};
  scrollFunction = function() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("return-to-top").style.display = "block";
    } else {
        document.getElementById("return-to-top").style.display = "none";
    }
  };

  $('a[href^=""]').bind('click.menu-navbar', function(e) {

      // Get the current target hash
      var target = this.hash;

      var topOffset = 0; //#top should default to 0 so no need to calculate the difference between top and top
      if (target != "#top") { //If the
      var topOffset = $(target).offset().top;
      }

      // Animate the scroll bar action so its smooth instead of a hard jump
      $('html, body').stop().animate({
          'scrollTop' : $(target).offset().top
      }, 600, 'swing', function() {
          window.location.hash = target;
      });
  });
});
