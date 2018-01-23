$(document).ready(function(){
    var scroll = new SmoothScroll('a[href*="#"]');
    $(window).load(function () {
        setTimeout(function(){
            $('#preloader').fadeOut(function () {
            });
        },1200);
    });

    $('.owl-carousel').owlCarousel({

        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet : [768,1],
        itemsMobile : [479,1],
        autoplay:100, //10sec to read the item
        autoplayHoverPause:true,
        autoplay:true,
        loop: true,

        // CSS Styles
        baseClass : "owl-carousel",
        theme : "owl-theme",
    });


    // Animate loader off screen
    // PRE loader
    $(window).load(function(){
        $('.preloader').fadeOut(1000); // set duration in brackets
    });



});

