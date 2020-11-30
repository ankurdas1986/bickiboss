jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();


  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('.logo_and_contact_secion').append($mobile_nav);
    $('.logo_and_contact_secion').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('.logo_and_contact_secion').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  
});
//************fixed_header****************//
 $(window).scroll(function() {
	if ($(this).scrollTop() > 115){  
		$('.logo_and_contact_secion').addClass("sticky");
	}
	else{
		$('.logo_and_contact_secion').removeClass("sticky");
	}
});


//*************number_counter*******************//
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

$(document).ready(function(){  
  if(localStorage.getItem('popState') != 'shown'){
	$("#myModal").delay(2000).fadeIn();
	localStorage.setItem('popState','shown')
}
$('#myModal').modal('show');
}); 

/***********smooth_scroll************/

function scrollNav() {
  $('.subpage_body_nav_area a').click(function(){  
    //Toggle Class
    $(".active2").removeClass("active2");      
    $(this).closest('li').addClass("active2");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active2');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 800);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

/***********side_menu************/

$(".intercom").click(function(){
  $(".intercomCloseBtn").addClass("active4");
  $(".intercom").removeClass("active4");
  $(".navPanel").addClass("active3");
});

$(".intercomCloseBtn").click(function(){
  $(".intercom").addClass("active4");
  $(".intercomCloseBtn").removeClass("active4");
    $(".navPanel").removeClass("active3");
});


