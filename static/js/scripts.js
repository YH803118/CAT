/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */

    (function($) {
    "use strict"; // Start of use strict
$(document).ready(function(){
  $('form[name=frmResult]').submit();
  var inp=$('input[type=hidden]').length;
  for(let i=0; i<inp; i++)
  {
    if($('input[type=hidden]').eq(i).val()=='')
    {
      $('input[type=hidden]').eq(i).val('0');
    }
  }

  for(let i=0; i<inp; i++)
  {
    if($('input[type=hidden]').eq(i).val()!='0')
    {
      $('input[type=hidden]').eq(i).parents('div.portfolio-item-caption').css({"opacity":"1"});
      $('input[type=hidden]').eq(i).parents('a.nav-link').removeClass('nav-link');
      $('input[type=hidden]').eq(i).parents('a.nav-link').addClass('check');
    }
  }
});

	$('.nav-link').click(function(){
	var taget=$(this).parents('div.portfolio-item-caption');
  $('.nav-link').parents('div.portfolio-item-caption').css({"opacity":"0"});
  $('.nav-link').removeClass('check');
  var inp=$('input[type=hidden]').length;
  for(let i=0; i<inp; i++)
  {
    if($('input[type=hidden]').eq(i).val()=='1')
    {
      $('input[type=hidden]').eq(i).val('0')
    }

  }
	
	taget.css({ "opacity":"1"})
  var id=$(this).attr('name')
  var frmLink='/emotion/'+id+'/#down';
  var frmInput='input[name='+id+']';
  $(frmInput).val('1')
  var frmForm=$('form[name=frm]');
  frmForm.attr('action',frmLink);
  taget.addClass('check');
  $(this).addClass('check');

  if(frmForm.attr('action')==null||frmForm.attr('action')=='/emotion/undefined/#down')
  {alert('감정을 선택해 주세요.');}
  else{
  frmForm.submit();
  }

	}
	);

  $('.nav-link2').click(function(){
    var taget=$(this).parents('div.portfolio-item-caption');
    if(taget.hasClass('check'))
    {
    taget.removeClass('check');
    $(this).addClass('check');
    taget.css({ "opacity":"0"})
    }
    else{
    taget.addClass('check');
    $(this).addClass('check');
    taget.css({ "opacity":"1"})
    }
    });

  

$('#select').click(function(){
  var frmForm=$('form[name=frm]');
  // if(frmForm.attr('action')==null||frmForm.attr('action')=='/emotion/undefined/#down')
  // {alert('감정을 선택해 주세요.');}
  // else{
  // frmForm.submit();
  // }
});


$('.emotionUp').click(function(){

  var id=$(this).attr('id')
  let value=$('input[name='+id+']').val();
  if(value=='6')
  {
    value=$('input[name='+id+']').val('7');
  }
  else if(value=='1')
  {
    value=$('input[name='+id+']').val('2');
  }
  else if(value=='2')
  {
    value=$('input[name='+id+']').val('3');
  }
  else if(value=='3')
  {
    value=$('input[name='+id+']').val('4');
  }
  else if(value=='4')
  {
    value=$('input[name='+id+']').val('5');
  }
  else if(value=='5')
  {
    value=$('input[name='+id+']').val('6');
  }

});


$('#submit').click(function(){
  var frmForm=$('form[name=frm]');
  var inp=$('input[type=hidden]').length;
  for(let i=0; i<inp; i++)
  {
    if($('input[type=hidden]').eq(i).val()=='1')
    {
      alert('하위감정을 선택해주세요.')
      return;
    }

  }
  frmForm.attr('action','/#portfolio');
  frmForm.submit();
});

$('#result').click(function(){

  var frmForm=$('form[name=frm]');
  var inp=$('input[type=hidden]').length;
  for(let i=0; i<inp; i++)
  {
  
    
    if($('input[type=hidden]').eq(i).val()=='1')
    {
      alert('하위감정을 선택해주세요.')
      return;
    }

  }

  for(let i=0; i<inp; i++)
  {
  if($('input[type=hidden]').eq(i).val()!='0')
  {
    if($('input[type=hidden]').eq(i).val()=='2')
    {
      $('input[type=hidden]').eq(i).val('1');
    }
    else if($('input[type=hidden]').eq(i).val()=='3')
    {
      $('input[type=hidden]').eq(i).val('2');
    }
    else if($('input[type=hidden]').eq(i).val()=='4')
    {
      $('input[type=hidden]').eq(i).val('3');
    }
    else if($('input[type=hidden]').eq(i).val()=='5')
    {
      $('input[type=hidden]').eq(i).val('4');
    }
    else if($('input[type=hidden]').eq(i).val()=='6')
    {
      $('input[type=hidden]').eq(i).val('5');
    }
    else if($('input[type=hidden]').eq(i).val()=='7')
    {
      $('input[type=hidden]').eq(i).val('6');
    }
  }
  }
  
  frmForm.attr('action','/emotion/result');
  frmForm.submit();

});

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  