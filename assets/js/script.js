// scroll navbar
// $(window).scroll(function() {
//     if ($(document).scrollTop() > 400) {
//         $('nav').addClass('affix');
//         console.log("OK");
//     } 
//     else {
//         $('nav').removeClass('affix');
//     }
// });



// ===== Loading =====
  var preloader = document.getElementById('loading');
  function myFunction(){
    preloader.style.display = 'none';
  }






// ===== owlCarousel ====
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[4000])
});
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});




// ===== portfolio =====
$(window).on("load", function() {
  /*========Portfolio Isotope Setup========*/
  if ($(".portfolio-section").length) {
    var $elements = $(".portfolio-section");
    $elements.isotope();
    $(".port-filter ul li").on("click", function() {
        $(".port-filter ul li").removeClass("filter-item");
        $(this).addClass("filter-item");
        var selector = $(this).attr("data-filter");
        $(".portfolio-section").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false,
            },
        });
    });
  }
});



// ===== typed js =====
// var typed = new Typed(".type", {
//   strings: [
//   "Kerri Deo.",
//   "A Photographer.",
//   "A Graphic Designer.",
//   ],
//   typeSpeed: 100,
//   backSpeed: 0,
//   smartBackspace: true,
//   loop: true
// });




// scroll navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.background = "#fff"
    document.getElementById("navbar").style.transition = ".6s";

    $(".nav-link a").css('color','#000');
    $(".brand").css('color','#000');
  }

  else {
    document.getElementById("navbar").style.background = "transparent";
    $(".nav-link a").css('color','#fff');
    $(".brand").css('color','#fff');
  }

};

 




// ===== particles =====
particlesJS("particles-js", {"particles":{"number":{"value":120,"density":{"enable":true,"value_area":800}},"color":{"value":"#d7b3b3"},"shape":{"type":"circle","stroke":{"width":5,"color":"#f5e6e6"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":10,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;




// onePageNav start
$('.navber-menu').onePageNav({
  currentClass: 'active',
  changeHash: false,
  scrollSpeed: 1000,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing',
});












