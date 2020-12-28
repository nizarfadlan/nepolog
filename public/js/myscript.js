$(window).scroll(function() {
   var sticky = $('nav'),
      scroll = $(window).scrollTop();
      
   if (scroll > 0) { 
      sticky.addClass('sticky');
   }else { 
      sticky.removeClass('sticky');
   }
});

$('.navbar-toggler').click(function () {
   $('.animated-icon').toggleClass('open');

   if ($('.navbar-collapse').hasClass('show')){
      $('body').addClass('snone');
   } else {
      $('body').removeClass('snone');
   }
});