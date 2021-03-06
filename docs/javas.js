/***NAVIGATION - RWD***/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/***NAV ARROW SCROLL***/
$(document).ready(function(){
  $(".home__button").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});
/***NAV MENU CROLL***/
$(document).ready(function(){
  $(".scroll").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        window.location.hash = hash;
      });
    }
  });
});

  /***ABOUT ANIMATION***/
if ( $(window).width() > 1024) {
  if (navigator.userAgent.search("Firefox") >= 1) {
    $('.about__description').css({'display':'inline-block','position':'relative','margin':'30px 40px',});
    $('.about__avatar').css({'display':'inline-block','position':'relative','margin':'30px 40px',});
    $('.about').css({'text-align':'center', 'height':'auto'})
  }
  else {
$(document).ready(function() {
  $('.about__avatar').mouseenter(function(){
    $('.about__description').css({'display':'block'});
    $('.about__description').animate({right:'50%'}, "slow");
    $('.about__avatar').animate({left:'50%'}, "slow");
  });
});
}
}

/***GALLERY***/
if ( $(window).width() > 1024) {
$(document).ready(function() {
  $('.project__text__container').mouseenter(function() {
    $(this).find('h5').css({'display':'inline'});
    $(this).find('.project__thumbnail').css({'opacity':'0.2'});
  });
  $('.project__text__container').mouseleave(function() {
    $(this).find('h5').css({'display':'none'});
    $(this).find('.project__thumbnail').css({'opacity':'1.0'});
  });
});
}
/***FANCYBOX***/
$(document).ready(function() {
  $(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });
  });

  $(".fancybox")
      .attr('rel', 'gallery')
      .fancybox({
          beforeShow: function () {
              $.fancybox.wrap.bind("contextmenu", function (e) {
                      return false;
              });
          }
      });

$(document).ready(function() {
  $("[data-fancybox]").fancybox({
    buttons : [
  		'slideShow',
  		'fullScreen',
  		'close'
  	],
    animationEffect : "zoom",
    transitionEffect : "fade",
    transitionDuration : 500,
  });

});

/***SLIDER***/
$(document).ready(function() {

  $(".owl-carousel").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      items: 1,
      singleItem:true,
      autoPlay : true,
      navigation : false
      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});

/***SCROLL TO THE TOP***/
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll-arrow').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('.scroll-arrow').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
