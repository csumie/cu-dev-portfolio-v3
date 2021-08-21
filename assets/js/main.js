
"use strict";


/*===== LOADER =====*/

 function prealoader () {
   if ($('#preloader_1').length) {
     $('#preloader_1').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });

        });
  }
}


/*===== SCROLL TO TOP =====*/

function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}


/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

// HOME
gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})

// ABOUT
gsap.from('.about', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.title', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.aboutMe', {opacity: 0, duration: 1, delay:2.1, y: 30})

// SKILLS
gsap.from('.skills-section', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.row', {opacity: 0, duration: 1, delay:1.8, y: 30})
// gsap.from('.', {opacity: 0, duration: 1, delay:2.1, y: 30})

// PROJECTS
gsap.from('.projects-section', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.container-project', {opacity: 0, duration: 1, delay:1.8, y: 30})

// CONTACT CONTAINER AND FORM
gsap.from('.contact-container', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.cognito', {opacity: 0, duration: 1, delay:1.8, y: 30})

// FOOTER
gsap.from('.trade', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.container', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.scroll-top', {opacity: 0, duration: 1, delay:1.8, y: 30})

//Scroll-top function setup

function stickyHeader () {
  if ($('.l-main').length) {
    var sticky = $('.l-main'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

  };
}

// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     scrollToTop ();
     // closeSuccessAlert ();
     // subMenuExpend ()
  })(jQuery);
});


/*===== WINDOW SCROLL FUNCTION =====*/
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ()
  })(jQuery);
});

/*===== LOADER FUNCTION =====*/
jQuery(window).on('load', function () {
   (function ($) {
      prealoader ()
  })(jQuery);
 });
